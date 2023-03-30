import {Box} from"@chakra-ui/react";
import { Sidebar } from "../Components/Sidebar";
import { Mainbox } from "../Components/Mainbox";

const MainPage = () => {
    return (
        <Box w="100%" display="flex" boxSize="border-box" border="1px solid black">
            <Sidebar/>
            <Mainbox/>
        </Box>
    );
};

export {MainPage};