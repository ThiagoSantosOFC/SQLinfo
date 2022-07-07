import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from 'next/image';
import NavLogo from "../public/assets/msql_logo.png"
import Link from "next/link";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Link href='/'>
      <Image src={NavLogo}/>
      </Link>
    </Box>
  );
}