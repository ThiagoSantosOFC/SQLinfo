import React from 'react'
//Components chakra
import { Heading, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const subpesquisas = () => {
  return (
    <div>
    {/* Subqueries */}
    <Box pt={400} p={50} pb={400} id="subpesquisas">
      <Box>
        <Stack align={"end"}>
          <Box>
            <Heading as="h1" size="xl" color={"white"}>
              Subpesquisas (subqueries)
            </Heading>
          </Box>
        </Stack>
        <Stack direction={"row"} pt={10} spacing={40}>
          <Box>
            <Image src="/images/sql/image-sql.png" alt="logo" />
          </Box>
          <Box>
            <Text color={"white"} maxWidth={700}>
              Uma subconsulta (geralmente chamada SUBQUERY ou SUBSELECT) é uma
              instrução SELECT dentro de outra instrução SQL.
              <br />
              Dessa forma, consultas que seriam extremamente complexas ou
              impossíveis de executar podem ser executadas.
            </Text>
          </Box>
        </Stack>
      </Box>
    </Box>
</div>
  )
}

export default subpesquisas