import { Box, Text } from "@chakra-ui/react";
import { HiDotsVertical } from "react-icons/hi";

const Navbar = () => {
  return (
    <Box
      display="flex"
      height="fit-content"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      padding="1%"
      paddingLeft={{base: "3%"}}
      paddingRight={{base: "2%"}}
      boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
    >
      <Box>
        <Text
          fontSize={{
            base: "1em",
            sm: "1.2em",
            md: "1.5em%",
            lg: "2em",
            xl: "2.5em",
          }}
          fontWeight="500"
        >
          KNOWLEDGE
        </Text>
      </Box>
      <Box>
        <Box></Box>
        <Box></Box>
        <Box>
          <HiDotsVertical fontSize="250%"/>
        </Box>
      </Box>
    </Box>
  );
};

export { Navbar };
