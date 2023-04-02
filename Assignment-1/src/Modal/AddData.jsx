import { Box, Button, FormControl, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { addNewData, getData } from "../Redux/action";
import "../Styles/AddData.css";

const initialState = {
    page: "",
    design: ["None", "Basic", "Advanced", "Complex"],
    interactions: ["None", "Basic", "Advanced", "Complex"],
    integration: ["None", "Basic", "Advanced", "Complex"],
    price: [0, 100, 200, 300],
    designCount: 0,
    interactionsCount: 0,
    integrationCount: 0
};

const dataReducer = (state, action) => {
    switch (action.type) {
        case "page":
            return {
                ...state,
                page: action.payload,
            };

        case "interactions":
            return {
                ...state,
                interactions: action.payload,
            };

        case "integration":
            return {
                ...state,
                integration: action.payload,
            };

        case "price":
            return {
                ...state,
                price: action.payload,
            };

        case "design":
            return {
                ...state,
                design: action.payload,
            };
        case "designCount":
            return {
                ...state,
                designCount: Number(action.payload),
            };
        case "interactionsCount":
            return {
                ...state,
                interactionsCount: Number(action.payload),
            };
        case "integrationCount":
            return {
                ...state,
                integrationCount: Number(action.payload),
            };
        case "reset":
            return initialState
        default:
            return state;
    }
};

const AddNewData = ({pageno}) => {

    const [dataState, setDataState] = useReducer(dataReducer, initialState);
    const dispatch = useDispatch();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);


    const addDataHandler = () => {
        if (dataState.page !== "") {
            dispatch(addNewData(dataState))
                .then(() => dispatch(getData(pageno)))
                .then(() =>
                    toast({
                        title: "Data !",
                        description: "New Page Added!",
                        status: "success",
                        duration: 2000,
                        position: "top",
                        isClosable: true,
                        render: () => (
                            <Box
                                border="1px solid green"
                                textAlign="center"
                                borderRadius="10px"
                                fontWeight="bold"
                                color="#018a83"
                                fontSize="90%"
                                p={3}
                                bg="#c3e6cd"
                                boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                            >
                                {`New Page Successfully Added!`}
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
        } else {
            toast({
                title: "Error!",
                description: "Empty field can't be added!",
                status: "warning",
                duration: 2000,
                position: "top",
                isClosable: true,
            });
        }
        setTimeout(() => setDataState({ type: "reset" }), 500);
        onClose();
    };

    return (
        <>
            <Button
                padding="-1px"
                fontSize={{ base: "50%", sm: "60%", md: "70%", lg: "80%", xl: "90%" }}
                onClick={onOpen}
                size="sm"
                backgroundColor="#c3e6cd"
                color="black"
                borderRadius="5px"
                border="0.5px solid black"
                _hover={{bg: "#c3e6cd", color: "red", border: "0.5px solid green"}}
            >
                Add More Item
            </Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent backgroundColor="#8f8145">
                    <ModalHeader>Create New Page</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <input className="inputbox" value={dataState.page} placeholder='Page Name' onChange={(e) => setDataState({ type: "page", payload: e.target.value })}/>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='green' border="1px solid black" size={'sm'} mr={3} onClick={() => addDataHandler()}>
                            Create
                        </Button>
                        <Button colorScheme="white" color="black" border="1px solid red" onClick={onClose} size={'sm'}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export { AddNewData };