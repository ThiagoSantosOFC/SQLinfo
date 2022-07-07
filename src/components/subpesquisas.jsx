import React from "react";
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
              <Text color={"white"} maxWidth={700} textAlign={'start'}>
                Uma subconsulta (geralmente chamada SUBQUERY ou SUBSELECT) é uma
                instrução SELECT dentro de outra instrução SQL.
                <br />
                Dessa forma, consultas que seriam extremamente complexas ou
                impossíveis de serem executadas podem ser executadas.
                <br /><br />
                No SQL, uma subconsulta também é chamada de consulta interna ou
                seleção interna, enquanto a instrução que contém uma subconsulta
                também é chamada de consulta externa ou seleção externa.<br /><br />
                
                Uma subconsulta geralmente é adicionada na cláusula WHERE da
                consulta externa. 
                No entanto, a subconsulta também pode ser adicionada nas
                cláusulas WHERE, GROUP BY, HAVING e ORDER BY da consulta
                externa.
              </Text>
            </Box>
            <Box>
              <Image src="/images/sql/image-sql.png" alt="logo" />
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default subpesquisas;
