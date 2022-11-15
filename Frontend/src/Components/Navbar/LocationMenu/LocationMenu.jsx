import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";

function LocationMenu() {
  return (
    < >
      <Menu isLazy>
        <MenuButton color={'teal'} fontWeight={600}>
          226021
          <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          {/* MenuItems are not rendered unless Menu is open */}
          {/* <MenuItem>New Window</MenuItem>
          <MenuItem>Open Closed Tab</MenuItem>
          <MenuItem>Open File</MenuItem> */}
        </MenuList>
      </Menu>
    </>
  );
}

export default LocationMenu;
