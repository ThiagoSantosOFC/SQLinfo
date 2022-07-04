import { chakra } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import * as React from 'react'

export default function Logo(props){
  return(
    <Image
      boxSize='100px'
      src='assets/msql_logo.png'
      alt='logo'
    />
  )
}