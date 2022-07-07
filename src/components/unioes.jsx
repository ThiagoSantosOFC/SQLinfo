import React from "react";
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
              <Image src="/images/sql/union.png" alt="logo" />
            </Box>
            <Box>
              <Text color={"white"} maxWidth={700}>
                <strong>UNION</strong> é usado para combinar dois ou mais comandos separados para
                retornar uma única saída.
                <br />
                <br />
                O operador <strong>UNION</strong> é usado para combinar o conjunto de
                resultados de dois ou mais comandos <strong>SELECT</strong>. 
                <br />
                <br />
                <strong>UNION</strong> é útil porque
                temos algumas informações em várias tabelas e queremos pegar
                linhas de todas elas de uma só vez.
                <br />
                <br />
                Queremos selecionar vários
                conjuntos de linhas de uma mesma tabela, mas algumas condições
                que caracterizam cada conjunto não são fáceis de escrever como
                uma única cláusula WHERE. 
                <br />
                UNION permite a recuperação de cada
                conjunto com uma cláusula WHERE mais simples em sua própria
                declaração SELECT. 
                <br />
                As linhas recuperadas por cada uma são
                combinadas e produzidas como resultado final do comando.
                <br /> 
                <br />
                As uniões são úteis se você desejar juntar os resultados de mais de
                uma consulta, mas esteja ciente de que o número das colunas
                retornadas por cada consulta selecionada deve ser o mesmo.
              </Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default unioes;
