import { Box, Text } from "@chakra-ui/react";
import { Cards } from "./Cards";
import { Navbar } from "./Navbar";

const Mainbox = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ base: "65%", sm: "70%", md: "75%", lg: "85%", xl: "85%" }}
      minHeight="100vh"
    >
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
          width={{ base: "30%" }}
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
        >
          <Text _hover={{textDecoration: "underline", cursor: "pointer"}}>ALL</Text>
          <Text _hover={{textDecoration: "underline", cursor: "pointer"}}>LIVE</Text>
          <Text _hover={{textDecoration: "underline", cursor: "pointer"}}>DRAFT</Text>
          <Text _hover={{textDecoration: "underline", cursor: "pointer"}}>ARCHIVED</Text>
        </Box>
        <Box width={{ base: "20%" }}>
          <select style={{ cursor: "pointer", border: "0.5px solid gray", fontSize: "80%", width: "110px", padding: "1%"}}>
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
      <Box border="1px solid red">
          <Cards/>
      </Box>
    </Box>
  );
};

export { Mainbox };
