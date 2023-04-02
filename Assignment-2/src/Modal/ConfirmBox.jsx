import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteDashboardData, getDashboardData } from "../Redux/action";
import "../Styles/Card.css";
import { UpdateModal } from "./UpdateModal";

const ConfirmBox = ({ id, page }) => {

    const dispatch = useDispatch();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const deleteHandler = (id) => {
        onClose();
        dispatch(deleteDashboardData(id))
            .then(() => dispatch(getDashboardData(page,"")))
            .then(() =>
                toast({
                    title: "Data !",
                    description: "New Page Added!",
                    status: "warning",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                    render: () => (
                        <Box
                            border="1px solid green"
                            textAlign="center"
                            borderRadius="10px"
                            fontWeight="bold"
                            color="white"
                            fontSize="100%"
                            p={3}
                            bg="red"
                            boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                        >
                            {`Dasboard data deleted!`}
                        </Box>
                    ),
                })
            )
            .catch((err) =>
                toast({
                    title: "Error!",
                    description: "Something went wrong!",
                    status: "success",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                })
            );
    };

    return (
        <>
            <Box onClick={onOpen} >
                <button className="removeBtn">Remove</button>
            </Box>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color="red.700">Warning!!!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Text fontSize={{ base: "70%", sm: "80%", md: "80%", lg: "90%", xl: "90%" }} fontWeight="bold">Would you like to delete dashboard item?</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button fontSize="80%" colorScheme='red' size={'sm'} mr={3} onClick={() => deleteHandler(id)}>
                            Delete
                        </Button>
                        <UpdateModal id={id} onOff={onClose} page={page}/>
                        <Button onClick={onClose} fontSize="80%" size={'sm'}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export { ConfirmBox };