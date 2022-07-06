import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Link from 'next/link'

//Default theme
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../components/theme'

const creditos = () => {
  return (
    <div className={styles.container}>
    <Head>
      <title>Creditos | SLQInfo</title>
      <meta name="description" content="SQL | Everything that you should know " />
      <link rel="icon" href="/mysql.png" />
    </Head>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Navbar />

    <div className=''>

    </div>

    </div>
  )
}

export default creditos