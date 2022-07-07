import React from 'react'
//Components chakra
import { Heading, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";


const join = () => {
  return (
    <div> 
    {/* Join */}
    <Box pt={400} p={50} pb={400} id="join">
      <Box>
        <Stack align={"start"}>
          <Box>
            <Heading as="h1" size="xl" color={"white"}>
              JOINS
            </Heading>
          </Box>
        </Stack>
        <Stack direction={"row"} pt={10} spacing={40}>
          <Box>
            <Image src="/images/sql/join.jpg" alt="logo" />
          </Box>
          <Box>
            <Text color={"white"} maxWidth={700}>
              Uma cláusula JOIN em SQL, correspondente a uma operação de
              junção em álgebra relacional, combina colunas de uma ou mais
              tabelas em um banco de dados relacional.
              <br />
              Ela cria um conjunto que pode ser salvo como uma tabela ou usado
              da forma como está.
              <br />
              Um JOIN é um meio de combinar colunas de uma (auto-junção) ou
              mais tabelas, usando valores comuns a cada uma delas.
              <br />O SQL padrão ANSI especifica cinco tipos de JOIN: INNER
              JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN e CROSS JOIN.
            </Text>
          </Box>
        </Stack>
      </Box>
    </Box>
</div>
  )
}

export default join