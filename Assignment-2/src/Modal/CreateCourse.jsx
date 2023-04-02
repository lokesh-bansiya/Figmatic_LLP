import {
    Box,
    Button,
    FormControl,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { addNewDashboardData, getDashboardData } from "../Redux/action";

const initialState = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuN8WGodi-PXK1jYi8uKZdJT2nfhm_mGYMOA&usqp=CAU",
    status: "",
    title: "",
    lesson: 0,
    minute: 0,
    last_update: "",
    tag: [],
};

const dashboardReducer = (state, action) => {
    switch (action.type) {
        case "img":
            return {
                ...state,
                img: action.payload,
            };

        case "status":
            return {
                ...state,
                status: action.payload,
            };

        case "title":
            return {
                ...state,
                title: action.payload,
            };

        case "lesson":
            return {
                ...state,
                lesson: Number(action.payload),
            };

        case "minute":
            return {
                ...state,
                minute: action.payload,
            };
        case "last_update":
            return {
                ...state,
                last_update: action.payload,
            };
        case "tag":
            return {
                ...state,
                tag: action.payload,
            };
        case "reset":
            return initialState;
        default:
            return state;
    }
};

const CreateCourse = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const [dashboardState, setDashboardState] = useReducer(
        dashboardReducer,
        initialState
    );
    const dispatch = useDispatch();
    const toast = useToast();


    const addHandler = () => {
        if (dashboardState.img !== "" &&
            dashboardState.title !== "" &&
            dashboardState.status !== "" &&
            dashboardState.minute !== 0 &&
            dashboardState.lesson !== 0 &&
            dashboardState.last_update !== "") {
            dispatch(addNewDashboardData(dashboardState))
                .then(() => dispatch(getDashboardData()))
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
                                color="white"
                                fontSize="100%"
                                p={3}
                                bg="green"
                                boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                            >
                                {`New Lecture Successfully Added!`}
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
        }
        else {
            toast({
                title: "Error!",
                description: "Empty field can't be added!",
                status: "warning",
                duration: 2000,
                position: "top",
                isClosable: true,
            });
        }
        setTimeout(() => setDashboardState({ type: "reset" }), 500);
        onClose();
    }

    return (
        <>
            <Button
                padding="-1px"
                fontSize="80%"
                onClick={onOpen}
                size="sm"
                backgroundColor="#027070"
                color="white"
                borderRadius="1px"
                border="1px solid black"
            >
                CREATE COURSE
            </Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent padding="1%">
                    <ModalHeader>Create course</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl mt={7}>
                            <Input
                                value={dashboardState.img}
                                type="url"
                                variant="flushed"
                                placeholder="Poster URL"
                                onChange={(e) =>
                                    setDashboardState({ type: "img", payload: e.target.value })
                                }
                            />
                        </FormControl>

                        <FormControl mt={7}>
                            <Select
                                placeholder="Select status"
                                value={dashboardState.status}
                                type="text"
                                onChange={(e) => setDashboardState({ type: "status", payload: e.target.value })}
                            >
                                <option value="DRAFT">DRAFT</option>
                                <option value="ARCHIVED">ARCHIVED</option>
                                <option value="LIVE">LIVE</option>
                            </Select>
                        </FormControl>

                        <FormControl mt={7}>
                            <Input
                                variant="flushed"
                                value={dashboardState.title}
                                placeholder="Course title"
                                onChange={(e) => setDashboardState({ type: "title", payload: e.target.value })}
                            />
                        </FormControl>

                        <FormControl mt={7}>
                            <Input
                                variant="flushed"
                                value={dashboardState.lesson}
                                placeholder="Course lesson"
                                type="number"
                                onChange={(e) => setDashboardState({ type: "lesson", payload: Number(e.target.value) })}
                            />
                        </FormControl>

                        <FormControl mt={7}>
                            <Input
                                variant="flushed"
                                value={dashboardState.minute}
                                placeholder="Course Duration"
                                type="number"
                                onChange={(e) => setDashboardState({ type: "minute", payload: e.target.value })}
                            />
                        </FormControl>

                        <FormControl mt={7}>
                            <Input
                                variant="flushed"
                                value={dashboardState.last_update}
                                placeholder="Day"
                                type="date"
                                onChange={(e) => setDashboardState({ type: "last_update", payload: e.target.value })}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button size={'sm'} colorScheme="blue" mr={3} onClick={() => addHandler()}>
                            Create
                        </Button>
                        <Button size={'sm'} onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export { CreateCourse };