import { Box, Text } from "@chakra-ui/react";
import { Cards } from "./Cards";
import { Navbar } from "./Navbar";
import "../Styles/MainBox.css";
import { MenuDrawer } from "../Drawer/MenuDrawer";

const Mainbox = () => {
  return (
    <Box className="MainBoxContainer" >
      <Navbar />
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
        width="100%"
        padding="1%"
      >
        <Box
          width={{ base: "65%", sm:"60%", md: "35%", lg: "30%", xl: "30%" }}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
          fontWeight="700"
          color="gray.700"
          fontSize={{
            base: "0.6em",
            sm: "0.7em",
            md: "0.7em%",
            lg: "0.7em",
            xl: "1em",
          }}
          paddingTop="2%"
        >
          <Text className="MenuBar"><MenuDrawer/></Text>
          <Text _hover={{textDecoration: "underline", cursor: "pointer"}}>ALL</Text>
          <Text _hover={{textDecoration: "underline", cursor: "pointer"}}>LIVE</Text>
          <Text _hover={{textDecoration: "underline", cursor: "pointer"}}>DRAFT</Text>
          <Text _hover={{textDecoration: "underline", cursor: "pointer"}}>ARCHIVED</Text>
        </Box>
        <Box width={{ base: "35%", sm:"30%", md: "25%", lg: "20%", xl: "20%" }} >
          <select className="selectBox" style={{ cursor: "pointer", border: "0.5px solid gray", fontSize: "80%", padding: "1%",}}>
            <option value="">Select team</option>
            <option value="">Option-1</option>
            <option value="">Option-2</option>
            <option value="">Option-3</option>
            <option value="">Option-4</option>
            <option value="">Option-5</option>
            <option value="">Option-6</option>
            <option value="">Option-7</option>
            <option value="">Option-8</option>
          </select>
        </Box>
      </Box>
      <Box>
          <Cards/>
      </Box>
    </Box>
  );
};

export { Mainbox };
