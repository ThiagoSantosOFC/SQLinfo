import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'

//Default theme
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../components/theme'

//Components chakra
import { Heading, Box } from '@chakra-ui/react'

//Self components
import ContentDawer from '../components/contentDawer'
let lorenPlaceholder = "Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | SLQInfo</title>
        <meta name="description" content="SQL | Everything that you should know " />
        <link rel="icon" href="/mysql.png" />
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navbar /> 
      
      <Box>
        <ContentDawer
          title="SQL"
          button_text = "SQL"
        >  
          Loren 
        </ContentDawer>        
      </Box>
    </div>
  )
}