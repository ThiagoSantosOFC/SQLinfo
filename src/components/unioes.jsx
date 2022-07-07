import React from 'react'
//Components chakra
import { Heading, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";


const unioes = () => {
  return (
    <div>
    {/* Unioes */}
    <Box pt={400} p={50} pb={400} id="unioes">
      <Box>
        <Stack align={"start"}>
          <Box>
            <Heading as="h1" size="xl" color={"white"}>
              Uniões
            </Heading>
          </Box>
        </Stack>
        <Stack direction={"row"} pt={10} spacing={40}>
          <Box>
            <Image src="/images/sql/image-sql.png" alt="logo" />
          </Box>
          <Box>
            <Text color={"white"} maxWidth={700}>
              Structured Query Language, ou Linguagem de Consulta Estruturada
              ou SQL, é a linguagem de pesquisa declarativa padrão para banco
              de dados relacional. Muitas das características originais do SQL
              foram inspiradas na álgebra relacional.
              <br /> <br />A Linguagem SQL surgiu no início dos anos 70, como
              fruto de um projeto da IBM no laboratório de San José. Eles
              trabalhavam num projeto de uma linguagem que se adequasse ao
              modelo relacional. Este projeto trabalhava em paralelo com um
              outro projeto que visava desenvolver um sistema gerência de
              Banco de Dados relacional, chamado "System R".
            </Text>
          </Box>
        </Stack>
      </Box>
    </Box></div>
  )
}

export default unioes