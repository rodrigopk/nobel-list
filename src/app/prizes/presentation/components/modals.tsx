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
  Skeleton,
  Circle,
} from '../../../../libs/ui';
import { useFetchLaureate } from '../../application/use_fetch_laureate';
import { LaureateContext } from '../containers';

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
            <Center mb={3}>
              <Circle color="white" size="40px" bg={isLoading ? 'gray.600' : 'gold'} isLoaded={!isLoading}>
                <Text>{data?.initials()}</Text>
              </Circle>
            </Center>
            <Skeleton mb={6} isLoaded={!isLoading}>
              <Center>
                <Text variant="h3">{data?.fullName()}</Text>
              </Center>
            </Skeleton>
            <Center mb={3}>
              <Skeleton isLoaded={!isLoading}>
                {
                  data?.prizes.map((prize, index) => (
                    <Box key={index}>
                      <Text align="center">
                        {`Nobel prize of ${prize.capitalizedCategory()} ${prize.year}`}
                      </Text>
                      <Text align="center" variant="caption" color="gray.600">
                        {`Prize share: ${prize.share}`}
                      </Text>
                    </Box>
                  ))
                }
              </Skeleton>
            </Center>
            {data?.born && (
            <Skeleton mb={3} isLoaded={!isLoading}>
              <Center>
                <Text>{`Born: ${data?.born} at ${data?.birthPlace()}`}</Text>
              </Center>
            </Skeleton>
            )}
            {data?.died && (
              <Skeleton mb={3} isLoaded={!isLoading}>
                <Center>
                  <Text>{`Died: ${data?.died}`}</Text>
                </Center>
              </Skeleton>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
