import React, { useContext } from 'react';

import {
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Center,
} from '../../../../libs/ui';
import { LaureateContext } from '../containers';

export const LaureateDetailModal: React.FC<{}> = () => {
  const { selectedLaureate, setSelectedLaureate } = useContext(LaureateContext);

  const handleClose = () => {
    if (setSelectedLaureate) {
      setSelectedLaureate(undefined);
    }
  };

  return (
    <>
      <Modal isCentered isOpen={!!selectedLaureate} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Text>{selectedLaureate?.fullName()}</Text>
            </Center>
            <Center>
              <Text>{selectedLaureate?.motivation}</Text>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
