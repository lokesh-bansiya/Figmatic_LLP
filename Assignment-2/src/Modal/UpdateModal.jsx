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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardById, getDashboardData, updateDashboardData } from "../Redux/action";
import { CloseIcon } from "@chakra-ui/icons";


const UpdateModal = ({ id, page }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [img, setImg] = useState("");
    const [status, setStatus] = useState("");
    const [title, setTitle] = useState("");
    const [lesson, setLesson] = useState(0);
    const [minute, setMinute] = useState(0);
    const [last_update, setLastUpdate] = useState("");
    const [tag, setTag] = useState([]);

    const dispatch = useDispatch();
    const toast = useToast();
    const data = useSelector(store => store.singleItem);
    const [text, setText] = useState("");


    console.log("id", id);
    console.log("singleItem", data);

    const newDashboardData = {
        img,
        status,
        title,
        lesson,
        minute,
        last_update,
        tag,
    };

    // const addTagHandler = (text) => {
    //     if (text !== "") {
    //         setTag([...data[0].tag, text]);
    //         console.log("", data[0].tag);
    //         dispatch(getDashboardData(page, ""))
    //             .then(() => dispatch(getDashboardById(id)))
    //     }
    // }

    // const removeTagHandler = (item, i) => {
    //     tag.splice(i, 1);
    //     console.log("removed:", tag);
    //     dispatch(getDashboardData(page, ""))
    //     .then(() => dispatch(getDashboardById(id)))
    // }

    const updateHandler = () => {

        if (newDashboardData.img !== "" &&
            newDashboardData.title !== "" &&
            newDashboardData.status !== "" &&
            newDashboardData.minute !== 0 &&
            newDashboardData.lesson !== 0 &&
            newDashboardData.last_update !== "") {

            dispatch(updateDashboardData(id, newDashboardData))
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
        onClose();
    }

    useEffect(() => {
        if (data.length === 0) {
            dispatch(getDashboardById(id));
        }
        if (data) {
            setImg(data[0].img);
            setStatus(data[0].status);
            setTitle(data[0].title);
            setLesson(data[0].status);
            setMinute(data[0].minute);
            setLastUpdate(data[0].last_update);
            setTag(data[0].tag && [...data[0].tag]);
        }
    }, [id, dispatch, data.length, data]);

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
                                value={img}
                                type="url"
                                variant="flushed"
                                placeholder="Poster URL"
                                onChange={(e) =>
                                    setImg(e.target.value)
                                }
                            />
                        </FormControl>

                        <FormControl mt={7}>
                            <Select
                                placeholder="Select status"
                                value={status}
                                type="text"
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="DRAFT">DRAFT</option>
                                <option value="ARCHIVED">ARCHIVED</option>
                                <option value="LIVE">LIVE</option>
                            </Select>
                        </FormControl>

                        <FormControl mt={7}>
                            <Input
                                variant="flushed"
                                value={title}
                                placeholder="Course title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormControl>

                        <FormControl mt={7}>
                            <Input
                                variant="flushed"
                                value={lesson}
                                placeholder="Course lesson"
                                type="text"
                                onChange={(e) => setLesson(Number(e.target.value))}
                            />
                        </FormControl>

                        <FormControl mt={7}>
                            <Input
                                variant="flushed"
                                value={minute}
                                placeholder="Course Duration"
                                type="text"
                                onChange={(e) => setMinute(Number(e.target.value))}
                            />
                        </FormControl>

                        <FormControl mt={7}>
                            <Input
                                variant="flushed"
                                value={last_update}
                                placeholder="Day"
                                type="date"
                                onChange={(e) => setLastUpdate(e.target.value)}
                            />
                        </FormControl>

                        {/* <Box mt={7} display="flex" justifyContent="space-between" width="100%" alignItems="flex-end">
                            <Box width="90%">
                                <FormControl mt={2} width="100%">
                                    <Select
                                        placeholder="Add Tag"
                                        value={text}
                                        type="text"
                                        onChange={(e) => setText(e.target.value)}
                                    >
                                        <option value="Sales">Sales</option>
                                        <option value="Marketing">Marketing</option>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Button onClick={() => addTagHandler(text)} colorScheme="orange">Add Tag</Button>
                        </Box> */}

                        {/* <Box mt={7} display="flex" justifyContent="space-between" width="100%" alignItems="flex-end">
                            <Box width="90%">
                                <FormLabel>Remove Tag</FormLabel>
                                <Box>
                                    {
                                        tag && tag.length > 0 ? (tag.map((item, i) => {
                                            return (
                                                <Tag key={i} margin="1%">{item}<CloseIcon onClick={(item, i) => removeTagHandler(item, i)} marginLeft="8px" color="red" fontSize="70%" /></Tag>
                                            )
                                        })
                                        ) : (
                                            <Box><Tag>Empty tag</Tag></Box>
                                        )
                                    }
                                </Box>
                            </Box>
                        </Box> */}

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