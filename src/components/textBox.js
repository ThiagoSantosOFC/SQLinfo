import { Button, ButtonGroup } from '@chakra-ui/react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Text,
  Image,
} from '@chakra-ui/react'

import { Flex, Spacer } from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import { useState, useEffect, useRef } from "react";
import React from 'react';

export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <Box>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          size={'full'}
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Box >
                <Text pb={100}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec eget ex euismod, egestas nunc eu, consectetur
                  nisi.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec eget ex euismod, egestas nunc eu, consectetur
                  nisi.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec eget ex euismod, egestas nunc eu, consectetur
                  nisi.
                </Text>

                <Flex>
                <Spacer />
                  <Box aling>
                    <Image src='https://via.placeholder.com/500' />
                  </Box>
                </Flex>
              </Box>

            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }