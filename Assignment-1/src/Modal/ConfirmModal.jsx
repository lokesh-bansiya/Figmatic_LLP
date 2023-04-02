import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteData, getData } from "../Redux/action";
import { DeleteIcon } from "@chakra-ui/icons";

const Confirm = ({ id, page }) => {

    const dispatch = useDispatch();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const deleteHandler = (_id) => {
        dispatch(deleteData(_id))
            .then(() => dispatch(getData()))
            .then(() => toast({
                status: "success",
                duration: 2000,
                position: "top",
                isClosable: true,
                render: () => (
                    <Box
                        border="1px solid red"
                        textAlign="center"
                        borderRadius="6px"
                        fontWeight="500"
                        color="red"
                        fontSize="90%"
                        p={3}
                        bg="#c3e6cd"
                        boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                    >
                        {`${page} page successfully deleted !`}
                    </Box>
                ),
            })
            )
    }

    return (
        <>
            <Box onClick={onOpen} >
                <DeleteIcon
                    color="gray"
                    _hover={{ cursor: "pointer", transform: "scale(1.3)", transition: "0.4s ease-in", color: "red" }}
                    fontSize={{ base: "70%", sm: "80%", md: "90%", lg: "150%", xl: "150%" }}
                />
            </Box>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent backgroundColor="#02ccb8">
                    <ModalHeader color="red.700">Warning!!!</ModalHeader>
                    <ModalCloseButton  outline={'none'} />
                    <ModalBody pb={6}>
                        <Text fontSize={{ base: "70%", sm: "80%", md: "80%", lg: "90%", xl: "90%" }} fontWeight="bold">{`Would you like to delete ${page} page!`} </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button fontSize="80%" colorScheme='red' size={'sm'} mr={3} onClick={() => deleteHandler(id)}>
                            Delete
                        </Button>
                        <Button onClick={onClose} fontSize="80%" size={'sm'}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export { Confirm };