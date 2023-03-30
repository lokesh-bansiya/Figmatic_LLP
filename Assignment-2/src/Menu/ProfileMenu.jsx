import { Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const ProfileMenu = () => {
    return (
        <Menu>
            <MenuButton
                aria-label='Options'
                variant='outline'
            >
                <Image borderRadius="50%" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU" alt="user"/>
            </MenuButton>
            <MenuList>
                <MenuItem>
                    User name
                </MenuItem>
                <MenuItem>
                    User email
                </MenuItem>
                <MenuItem>
                    User company
                </MenuItem>
                <MenuItem>
                    Open File...
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export { ProfileMenu };

