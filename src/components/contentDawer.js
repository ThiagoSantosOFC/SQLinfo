//Chakra components
import { Heading } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Box, Text, Image, Stack } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";

//Chakra Hookers
import { useDisclosure } from "@chakra-ui/react";

//React components
import React from "react";

//Componentes
import Tip from "./Tooltip";

export default function ContentDawer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  let lorenPlaceholder =
    "Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <Box 
    paddingTop={ props.paddingTop == undefined ? "auto" : props.paddingTop }
    PaddingBottom={ props.PaddingBottom == undefined ? "auto" : props.PaddingBottom }
    >
      <Tip label={props.tip}>
        <Button ref={btnRef} onClick={onOpen} mr={3} shadow={'dark-lg'} >
          {props.button_text == undefined ? "Button text" : props.button_text}
        </Button>
      </Tip>
      <Drawer
        size={"full"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading size={"xl"}>
              {props.title == undefined ? "Title" : props.title}
            </Heading>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing={20} direction={"row"}>
              <Image
                src={
                  props.image == undefined
                    ? "https://via.placeholder.com/700x400"
                    : props.image
                }
                height={400}
                width={700}
                alt="Placeholder"
              />
              <Box>
                <Text maxWidth={700} >
                  {props.children == undefined
                    ? lorenPlaceholder
                    : props.children}
                </Text>
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter pt={10}>
            <Button variant="outline" mr={3} onClick={onClose}>
              Back
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
