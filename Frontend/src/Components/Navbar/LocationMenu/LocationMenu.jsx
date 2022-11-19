import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import React from "react";

function LocationMenu() {
  const [lat, setLat] = React.useState("");
  const [lon, setLon] = React.useState("");

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      // console.log(pos);
      setLat(pos.coords.latitude);
      setLon(pos.coords.longitude);
    });
  }, []);

  return (
    <>
      <Menu isLazy>
        <MenuButton color={"teal"} fontWeight={600}>
          226021
          <ChevronDownIcon />
        </MenuButton>
        <MenuList></MenuList>
      </Menu>
    </>
  );
}

export default LocationMenu;
