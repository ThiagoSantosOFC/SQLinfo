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
  Stack
} from '@chakra-ui/react'

import { Flex, Spacer } from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import { useState, useEffect, useRef } from "react";
import React from 'react';

import { Heading } from '@chakra-ui/react'

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
            <DrawerHeader>
              <Heading size={'xl'}>
                Drawer Header
              </Heading>
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing={4} direction={'row'}>
                <Image src={props.image} alt='logo' />
                <Box>
                  <Text>
                    {props.children}
                  </Text>
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Back
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }