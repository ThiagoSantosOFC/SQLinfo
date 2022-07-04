import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//Default theme
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../components/theme'

//Components chakra
import { Heading, Box } from '@chakra-ui/react'


export default function Home() {
  return (
    <div className={styles.container}>
    
      <Head>
        <title>Home | SLQInfo</title>
        <meta name="description" content="SQL | Everything that you should know " />
        <link rel="icon" href="/mysql.png" />
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <Box>
        
      </Box>
    </div>
  )
}
