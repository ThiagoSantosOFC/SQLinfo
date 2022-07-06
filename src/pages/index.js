import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'


//Default theme
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../components/theme'

//Components chakra
import { Heading, Text} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

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

      {/* Website header content */}
      <Box p={50} pb={400} rounded={'full'} bg={'white'}>
        <Stack direction={'column'} align={"center"} spacing={10}>
          <Box>
            <Image src="/images/sql/sql-header.png" alt="logo" />
          </Box>
        </Stack>
      </Box>


      {/* Sql content */}
      <Box pt={400} p={50}>
          <Box>
            <Stack align={'start'} direction={'row'}>
              <Box>
                <Heading as="h1" size="xl" color={'white'}>
                  SQL
                </Heading>
              </Box>
            </Stack>
            <Stack direction={'row'} pt={10} spacing={40}>
              <Box>
                <Text color={'white'} maxWidth={700}>
                  Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de 
                  pesquisa declarativa padrão para banco de dados relacional. 
                  Muitas das características originais do SQL foram inspiradas na álgebra relacional. 
                    <br /> <br />
                  A Linguagem SQL surgiu no início dos anos 70, como fruto de um projeto da IBM no laboratório
                  de San José. Eles trabalhavam num projeto de uma linguagem que se adequasse ao modelo relacional.
                  Este projeto trabalhava em paralelo com um outro projeto que visava desenvolver um 
                  sistema gerência de Banco de Dados relacional, chamado "System R".
                </Text>
              </Box>
              <Box>
                <Image src="/images/sql/image-sql.png" alt="logo"/>
              </Box>
            </Stack>
          </Box>       
      </Box>
    </div>
  )
}