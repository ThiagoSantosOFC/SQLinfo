import React from 'react'
//Components chakra
import { Heading, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const sql = () => {
  return (
    <div>    {/* Sql content */}
    <Box pt={400} p={50} pb={400} id="sql">
      <Box>
        <Stack align={"start"}>
          <Box>
            <Heading as="h1" size="xl" color={"white"}>
              SQL
            </Heading>
          </Box>
        </Stack>
        <Stack direction={"row"} pt={10} spacing={40}>
          {/*  */}
          <Box>
            <Text color={"white"} maxWidth={700}>
              Structured Query Language, ou Linguagem de Consulta Estruturada
              ou SQL, é a linguagem de pesquisa declarativa padrão para banco
              de dados relacional. Muitas das características originais do SQL
              foram inspiradas na álgebra relacional. A Linguagem SQL surgiu
              no início dos anos 70, como fruto de um projeto da IBM no
              laboratório
              <br />
              de San José. Eles trabalhavam num projeto de uma linguagem que
              se adequasse ao modelo relacional. Este projeto trabalhava em
              paralelo com um outro projeto que visava desenvolver um sistema
              gerência de Banco de Dados relacional, chamado &quot;System R&quot;.
            </Text>
          </Box>

          {/*  */}
          <Box>
            <Image src="/images/sql/image-sql.png" alt="sql" />
          </Box>
        </Stack>
      </Box>
    </Box></div>
  )
}

export default sql