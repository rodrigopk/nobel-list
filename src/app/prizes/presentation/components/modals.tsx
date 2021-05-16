import React, { useContext } from 'react';

import {
  Box,
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Center,
  Circle,
  Spinner,
} from '../../../../libs/ui';
import { useFetchLaureate } from '../../application/use_fetch_laureate';
import { Laureate } from '../../domain';
import { LaureateContext } from '../containers';

const LaureateDetail: React.FC<{ laureate: Laureate }> = ({ laureate }: { laureate: Laureate }) => (
  <>
    <Center mb={3}>
      <Circle color="white" size="40px" bg="gold">
        <Text>{laureate?.initials()}</Text>
      </Circle>
    </Center>
    <Center mb={6}>
      <Text variant="h3">{laureate?.fullName()}</Text>
    </Center>
    <Center mb={3}>
      {
        laureate?.prizes.map((prize, index) => (
          <Box key={index}>
            <Text align="center">
              {`Nobel prize of ${prize.capitalizedCategory()} ${prize.year}`}
            </Text>
            <Text my={2} align="center" variant="caption" color="gray.600">
              {`Prize share: ${prize.share}`}
            </Text>
            <Text align="center">
              {prize.motivation}
            </Text>
          </Box>
        ))
      }
    </Center>
    {laureate?.born && (
    <Center mb={3}>
      <Text align="center">{`Born: ${laureate?.born} at ${laureate?.birthPlace()}`}</Text>
    </Center>
    )}
    {laureate?.died && (
    <Center mb={3}>
      <Text align="center">{`Died: ${laureate?.died}`}</Text>
    </Center>
    )}
  </>
);

export const LaureateDetailModal: React.FC<{}> = () => {
  const { selectedLaureateId, setSelectedLaureateId } = useContext(LaureateContext);
  const { getLaureateById } = useFetchLaureate();
  if (!selectedLaureateId) return null;

  const { data, isLoading } = getLaureateById(selectedLaureateId);

  const handleClose = () => {
    if (setSelectedLaureateId) {
      setSelectedLaureateId(undefined);
    }
  };

  return (
    <>
      <Modal size="md" isCentered isOpen={!!selectedLaureateId} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody padding={8}>
            {isLoading && <Center><Spinner size="xl" color="gold" /></Center> }
            {data && <LaureateDetail laureate={data as Laureate} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
