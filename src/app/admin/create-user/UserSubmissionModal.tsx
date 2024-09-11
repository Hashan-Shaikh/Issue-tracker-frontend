import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

export default function UserSubmissionModal({cancelDialog, submitForm}: any) {
  const [isOpen, setIsOpen] = useState(true);

  // Function to close the modal
  const closeModal = () => {
    cancelDialog();
    };

    const onSubmit = () => {
        submitForm();
    }


  return (
    <>
      <Modal className="bg-black"
        backdrop="opaque"
        isOpen={isOpen}
        onClose={closeModal} // Set the onClose handler
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">User Registration</ModalHeader>
          <ModalBody>
            <p>
              Are you sure you want to submit the form?
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={closeModal}>
              Close
            </Button>
            <Button color="primary" onPress={() => {
              // Handle form submission or other actions here
              onSubmit(); // Close modal after action
            }}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
