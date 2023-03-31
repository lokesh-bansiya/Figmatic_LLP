import { Box, Image, Text } from "@chakra-ui/react";
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


const Sidebar = () => {
  return (
    <Box  className="SidebarMainContainer">
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
  );
};

export { Sidebar };
