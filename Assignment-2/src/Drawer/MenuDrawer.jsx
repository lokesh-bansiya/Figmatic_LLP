import { Button, Drawer, Box, Image, Text, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import logo1 from "../Assests/logo1.png";
import { FaHome } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdPeopleAlt } from "react-icons/md";
import {
    BsMicrosoftTeams,
    BsChatSquareTextFill,
    BsPersonCircle,
} from "react-icons/bs";
import { CiVault } from "react-icons/ci";
import { TbSettings } from "react-icons/tb";
import { RiBuildingLine } from "react-icons/ri";
import "../Styles/Sidebar.css";
import { HiMenu } from "react-icons/hi";
import React from "react";


const MenuDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Box ref={btnRef} colorScheme='teal' onClick={onOpen}>
                <HiMenu />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                backgroundColor="black"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton position="absolute" zIndex={5} color="white"/>

                    <DrawerBody>
                        <Box className="SidebarMainContainer" margin="auto" marginLeft="-25px" marginTop="-15px" display="flex" width="full">
                            <Box height="100%">
                                <Box
                                    padding={{ base: "2%" }}
                                    width="70%"
                                    margin="auto"
                                    mt={{ base: "15%" }}
                                    mb={{ base: "15%" }}
                                >
                                    <Image width="100%" src={logo1} alt="logo" />
                                </Box>
                                <Box
                                    height={{ base: "25%", sm: "30%", md: "35%", lg: "35%", xl: "35%" }}
                                    display="flex"
                                    flexDirection="column"
                                >
                                    <Box
                                        width="80%"
                                        _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }}
                                        display="flex"
                                        fontWeight="bold"
                                        padding="3%"
                                        justifyContent="left"
                                        marginLeft="auto"
                                        marginRight="auto"
                                        marginBottom="2%"
                                    >
                                        <FaHome fontSize="100%" />
                                        <Text
                                            marginLeft={{ base: "10%" }}
                                            fontSize={{
                                                base: "0.6em",
                                                sm: "0.7em",
                                                md: "0.7em%",
                                                lg: "0.7em",
                                                xl: "1em",
                                            }}
                                            onClick={onClose}
                                        >
                                            DASHBOARD
                                        </Text>
                                    </Box>
                                    <Box
                                        display="flex"
                                        fontWeight="bold"
                                        justifyContent="left"
                                        width="80%"
                                        padding="3%"
                                        _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }}
                                        marginLeft="auto"
                                        marginRight="auto"
                                        marginBottom="2%"
                                    >
                                        <HiOutlineAcademicCap fontSize="100%" />
                                        <Text
                                            marginLeft={{ base: "10%" }}
                                            fontSize={{
                                                base: "0.6em",
                                                sm: "0.7em",
                                                md: "0.7em%",
                                                lg: "0.7em",
                                                xl: "1em",
                                            }}
                                            onClick={onClose}
                                        >
                                            KNOWLEDGE
                                        </Text>
                                    </Box>
                                    <Box
                                        display="flex"
                                        fontWeight="bold"
                                        justifyContent="left"
                                        width="80%"
                                        padding="3%"
                                        _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }}
                                        marginLeft="auto"
                                        marginRight="auto"
                                        marginBottom="2%"
                                    >
                                        <MdPeopleAlt fontSize="100%" />
                                        <Text
                                            marginLeft={{ base: "10%" }}
                                            fontSize={{
                                                base: "0.6em",
                                                sm: "0.7em",
                                                md: "0.7em%",
                                                lg: "0.7em",
                                                xl: "1em",
                                            }}
                                            onClick={onClose}
                                        >
                                            MEMEBERS
                                        </Text>
                                    </Box>
                                    <Box
                                        display="flex"
                                        fontWeight="bold"
                                        justifyContent="left"
                                        width="80%"
                                        padding="3%"
                                        _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }}
                                        marginLeft="auto"
                                        marginRight="auto"
                                        marginBottom="2%"
                                    >
                                        <BsMicrosoftTeams fontSize="100%" />
                                        <Text
                                            marginLeft={{ base: "10%" }}
                                            fontSize={{
                                                base: "0.6em",
                                                sm: "0.7em",
                                                md: "0.7em%",
                                                lg: "0.7em",
                                                xl: "1em",
                                            }}
                                            onClick={onClose}
                                        >
                                            TEAMS
                                        </Text>
                                    </Box>
                                    <Box
                                        display="flex"
                                        fontWeight="bold"
                                        justifyContent="left"
                                        width="80%"
                                        padding="3%"
                                        _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }}
                                        marginLeft="auto"
                                        marginRight="auto"
                                        marginBottom="2%"
                                    >
                                        <CiVault fontSize="100%" />
                                        <Text
                                            marginLeft={{ base: "10%" }}
                                            fontSize={{
                                                base: "0.6em",
                                                sm: "0.7em",
                                                md: "0.7em%",
                                                lg: "0.7em",
                                                xl: "1em",
                                            }}
                                            onClick={onClose}
                                        >
                                            VAULT
                                        </Text>
                                    </Box>
                                    <Box
                                        display="flex"
                                        fontWeight="bold"
                                        justifyContent="left"
                                        width="80%"
                                        padding="3%"
                                        _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }}
                                        marginLeft="auto"
                                        marginRight="auto"
                                        marginBottom="2%"
                                    >
                                        <BsChatSquareTextFill fontSize="100%" />
                                        <Text
                                            marginLeft={{ base: "10%" }}
                                            fontSize={{
                                                base: "0.6em",
                                                sm: "0.7em",
                                                md: "0.7em%",
                                                lg: "0.7em",
                                                xl: "1em",
                                            }}
                                            onClick={onClose}
                                        >
                                            CHAT
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box padding={{ base: "6%" }} borderBottom="1px solid gray">
                                    <Box
                                        margin={{ base: "5%" }}
                                        fontWeight="bold"
                                        display="flex"
                                        justifyContent="left"
                                        width="80%"
                                        padding="3%"
                                        _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }}
                                        marginLeft="auto"
                                        marginRight="auto"
                                        marginBottom="2%"
                                        paddingLeft="5%"
                                    >
                                        <TbSettings fontSize="100%" />
                                        <Text
                                            marginLeft={{ base: "10%" }}
                                            fontSize={{
                                                base: "0.6em",
                                                sm: "0.7em",
                                                md: "0.7em%",
                                                lg: "0.7em",
                                                xl: "1em",
                                            }}
                                            onClick={onClose}
                                        >
                                            SETTINGS
                                            
                                        </Text>
                                    </Box>
                                    <Box
                                        margin={{ base: "5%" }}
                                        fontWeight="bold"
                                        display="flex"
                                        justifyContent="left"
                                        width="80%"
                                        padding="3%"
                                        _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }}
                                        marginLeft="auto"
                                        marginRight="auto"
                                        marginBottom="2%"
                                        paddingLeft="5%"
                                    >
                                        <RiBuildingLine fontSize="100%" />
                                        <Text
                                            marginLeft={{ base: "10%" }}
                                            fontSize={{
                                                base: "0.6em",
                                                sm: "0.7em",
                                                md: "0.7em%",
                                                lg: "0.7em",
                                                xl: "1em",
                                            }}
                                            onClick={onClose}
                                        >
                                            COMPANY
                                        </Text>
                                    </Box>
                                    <Box
                                        margin={{ base: "5%" }}
                                        fontWeight="bold"
                                        display="flex"
                                        justifyContent="left"
                                        width="80%"
                                        padding="3%"
                                        _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }}
                                        marginLeft="auto"
                                        marginRight="auto"
                                        marginBottom="2%"
                                        paddingLeft="5%"
                                    >
                                        <BsPersonCircle fontSize="100%" />
                                        <Text
                                            marginLeft={{ base: "10%" }}
                                            fontSize={{
                                                base: "0.6em",
                                                sm: "0.7em",
                                                md: "0.7em%",
                                                lg: "0.7em",
                                                xl: "1em",
                                            }}
                                            onClick={onClose}
                                        >
                                            MY PROFILE
                                        </Text>
                                    </Box>
                                </Box>
                                <Box>
                                    <Text margin="3%" fontSize={{
                                        base: "0.5em",
                                        sm: "0.5em",
                                        md: "0.5em%",
                                        lg: "0.5em",
                                        xl: "0.6em",
                                    }}>Powered By Team</Text>
                                </Box>
                            </Box>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export { MenuDrawer };