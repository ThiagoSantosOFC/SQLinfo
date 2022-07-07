import React from "react";
//Components chakra
import { Heading, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <div>
      {" "}
      {/* Website header content */}
      <Box p={10} pb={400}>
        <Stack direction={"column"} align={"center"} spacing={10}>
          <Box>
            <Image src="/images/src/gifdb1.gif" alt="logo" borderRadius="20%" />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Header;
