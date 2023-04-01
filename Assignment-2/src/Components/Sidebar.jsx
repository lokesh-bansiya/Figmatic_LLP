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
    <Box className="SidebarMainContainer">
      <Box height="100%">
        <Box
          padding={{ base: "2%" }}
          width="90%"
          margin="auto"
          mt={{ base: "5%" }}
          mb={{ base: "5%" }}
        >
          <Image width="100%" src={logo1} alt="logo" />
        </Box>
        <Box
          height={{ base: "25%", sm: "30%", md: "35%", lg: "35%", xl: "35%" }}
          display="flex"
          flexDirection="column"
        >
          <Box className="listItems" _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }}>
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
          <Box className="listItems" _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }}>
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
          <Box className="listItems" _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }} >
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
          <Box className="listItems" _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }}>
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
          <Box className="listItems" _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }} >
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
          <Box className="listItems" _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }}>
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
          <Box className="listItems" _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }} >
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
          <Box className="listItems" _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }}>
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
          <Box className="listItems" _hover={{ backgroundColor: "#5d5b63", cursor: "pointer" }}>
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
              alignItems="center"
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
          }}
          >Powered By Team</Text>
        </Box>
      </Box>
    </Box>
  );
};

export { Sidebar };
