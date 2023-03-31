import {Box} from"@chakra-ui/react";
import { Sidebar } from "../Components/Sidebar";
import { Mainbox } from "../Components/Mainbox";

const MainPage = () => {
    return (
        <Box w="100%" display="flex">
            <Sidebar/>
            <Mainbox/>
        </Box>
    );
};

export {MainPage};