import { Box, Select, Text } from "@chakra-ui/react";
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
        width="100%"
        border="1px solid gray"
        padding="1%"
      >
        <Box
          border="1px solid red"
          width={{ base: "40%" }}
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          fontWeight="500"
          fontSize={{
            base: "0.6em",
            sm: "0.7em",
            md: "0.7em%",
            lg: "0.7em",
            xl: "1em",
          }}
        >
          <Text>ALL</Text>
          <Text>LIVE</Text>
          <Text>DRAFT</Text>
          <Text>ARCHIVED</Text>
        </Box>
        <Box border="1px solid red" width={{ base: "20%" }}>
          <Select width={{ base: "170px" }} padding={{ base: "0.1%" }}>
            <option value="">Select</option>
            <option value="">Option-1</option>
            <option value="">Option-2</option>
            <option value="">Option-3</option>
            <option value="">Option-4</option>
            <option value="">Option-5</option>
            <option value="">Option-6</option>
            <option value="">Option-7</option>
            <option value="">Option-8</option>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export { Mainbox };
