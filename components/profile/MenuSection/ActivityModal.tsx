import React from 'react';
import { Text } from '@/components/ui/text';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@/components/ui/modal';
import { CloseIcon, Icon } from '@/components/ui/icon';
import { Button, ButtonText } from '@/components/ui/button';

type IActivityModalProps = {
  showModal: boolean;
  closeModal: () => void;
};

export const ActivityModal = ({ showModal, closeModal }: IActivityModalProps) => {
  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        closeModal();
      }}
      size="md">
      <ModalBackdrop />
      <ModalContent className="border-none">
        <ModalHeader>
          <Text className="text-lg font-semibold">Edit Activity Level</Text>
          <ModalCloseButton>
            <Icon as={CloseIcon} size="md" className="text-gray-400" />
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody>
          <Text size="sm" className="text-typography-500">
            Elevate user interactions with our versatile modals. Seamlessly integrate notifications,
            forms, and media displays. Make an impact effortlessly.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="outline"
            action="secondary"
            onPress={() => {
              closeModal();
            }}>
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            onPress={() => {
              closeModal();
            }}>
            <ButtonText>Save Changes</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
