import React, { useContext } from 'react';

import {
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Center,
  Skeleton,
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
      <Modal isCentered isOpen={!!selectedLaureateId} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Skeleton isLoaded={!isLoading}>
              <Center>
                <Text>{data?.fullName()}</Text>
              </Center>
            </Skeleton>
            {/* <Skeleton isLoaded={!isLoading}>
              <Center>
                <Text>{data?.motivation}</Text>
              </Center>
            </Skeleton> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
