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
      padding="1%"
      paddingLeft={{base: "3%"}}
      paddingRight={{base: "2%"}}
      boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
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
          fontWeight="500"
        >
          KNOWLEDGE
        </Text>
      </Box>
      <Box display="flex" border="1px solid red" justifyContent="right" alignItems="center">
        <Box marginRight={{base: "3%"}}>
            {/* <Button >Create course</Button> */}
            <CreateCourse/>
        </Box>
        <Box _hover={{cursor: "pointer"}} width={{base: "10%"}} marginRight={{base: "3%"}}>
            {/* <Image borderRadius="50%" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU" alt="user"/> */}
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
