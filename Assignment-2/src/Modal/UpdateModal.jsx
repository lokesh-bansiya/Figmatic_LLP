import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Tag,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardById, getDashboardData, updateDashboardData } from "../Redux/action";
import {CloseIcon} from "@chakra-ui/icons";


const UpdateModal = ({ id, onOff, page }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const dispatch = useDispatch();
    const toast = useToast();
    let data = useSelector(store => store.singleItem);

    const initialState = {
        img: data.img,
        status: data.status,
        title: data.title,
        lesson: data.lesson,
        minute: data.minute,
        last_update: data.last_update,
        tag: data.tag,
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
                    minute: Number(action.payload),
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

    const [text, setText] = useState("");

    const [dashboardState, setDashboardState] = useReducer(
        dashboardReducer,
        initialState
    );

    const addTagHandler = (text) => {
        if (text !== "") {
            dashboardState.tag.push(text);
            // console.log(dashboardState.tag);
            dispatch(getDashboardById(id));
            setText("");
        }
    }

    const removeTagHandler = (item,i) => {
        dashboardState.tag.splice(i,1);
        // console.log("removed:", dashboardState.tag);
        dispatch(getDashboardById(id));
    }

    const updateHandler = () => {
        onOff();
        if (dashboardState.img !== "" &&
            dashboardState.title !== "" &&
            dashboardState.status !== "" &&
            dashboardState.minute !== 0 &&
            dashboardState.lesson !== 0 &&
            dashboardState.last_update !== "") {

            dispatch(updateDashboardData(id, dashboardState))
                .then(() => dispatch(getDashboardData(page, "")))
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
                                {`Lecture Successfully Updated!`}
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

    useEffect(() => {
        dispatch(getDashboardById(id));
    }, [id, dispatch, isOpen]);

    return (
        <>
            <Button fontSize="80%" colorScheme='green' onClick={onOpen} size={'sm'} mr={3}>
                Update
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
                                type="text"
                                onChange={(e) => setDashboardState({ type: "lesson", payload: Number(e.target.value) })}
                            />
                        </FormControl>

                        <FormControl mt={7}>
                            <Input
                                variant="flushed"
                                value={dashboardState.minute}
                                placeholder="Course Duration"
                                type="text"
                                onChange={(e) => setDashboardState({ type: "minute", payload: Number(e.target.value) })}
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

                        <Box mt={7} display="flex" justifyContent="space-between" width="100%" alignItems="flex-end">
                            <Box width="90%">
                            <FormControl mt={2} width="100%">
                                <Input
                                    variant="flushed"
                                    width="100%"
                                    value={text}
                                    placeholder="Add Tag"
                                    type="text"
                                    onChange={(e) => setText(e.target.value)}
                                />
                                
                            </FormControl>
                            </Box>
                            <Button onClick={() => addTagHandler(text)} colorScheme="orange">Add Tag</Button>
                        </Box>

                        <Box mt={7} display="flex" justifyContent="space-between" width="100%" alignItems="flex-end">
                            <Box width="90%">
                            <FormLabel>Remove Tag</FormLabel>
                            <Box>
                                {
                                    dashboardState.tag ? (dashboardState.tag.length > 0 && dashboardState.tag.map((item,i) => {
                                        return (
                                            <Tag margin="1%">{item}<CloseIcon onClick={(item,i) => removeTagHandler(item,i)} marginLeft="8px" color="red" fontSize="70%" /></Tag>
                                        )
                                    })
                                    ) : (
                                       <Box><Tag>Empty tag</Tag></Box>
                                    )
                                }
                            </Box>
                            </Box>
                        </Box>

                    </ModalBody>

                    <ModalFooter>
                        <Button size={'sm'} colorScheme="blue" mr={3} onClick={() => updateHandler()}>
                            Update
                        </Button>
                        <Button size={'sm'} onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export { UpdateModal };