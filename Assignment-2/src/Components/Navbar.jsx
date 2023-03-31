import { Box, Text } from "@chakra-ui/react";
import { HiDotsVertical } from "react-icons/hi";
import { ProfileMenu } from "../Menu/ProfileMenu";
import { CreateCourse } from "../Modal/CreateCourse";

const Navbar = () => {
  return (
    <Box
      display="flex"
      height="fit-content"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      padding={{base: "4%", md:"1%"}}
      paddingLeft={{base: "3%"}}
      paddingRight={{base: "2%"}}
      position="fixed"
      top="0"
      backgroundColor="white"
      boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
      zIndex="20"
    >
      <Box>
        <Text
          fontSize={{
            base: "0.8em",
            sm: "1em",
            md: "1.2em%",
            lg: "1.5em",
            xl: "2em",
          }}
          fontWeight="700"
        >
          KNOWLEDGE
        </Text>
      </Box>
      <Box marginRight={{base: "0%", md:"20%", lg:"15%", xl:"16%"}} display="flex" justifyContent="right" alignItems="center">
        <Box marginRight={{base: "3%"}}>
            <CreateCourse/>
        </Box>
        <Box _hover={{cursor: "pointer"}} width={{base: "10%"}} marginRight={{base: "3%"}}>
            <ProfileMenu/>
        </Box>
        <Box marginRight={{base: "3%"}}>
          <HiDotsVertical cursor="pointer" fontSize="150%"/>
        </Box>
      </Box>
    </Box>
  );
};

export { Navbar };
