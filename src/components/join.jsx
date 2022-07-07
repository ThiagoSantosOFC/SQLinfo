import React from "react";
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
                Um JOIN é um meio de combinar colunas de uma (auto-junção) ou
                <br />
                mais tabelas, usando valores comuns a cada uma delas.
                <br />
                O SQL padrão ANSI especifica cinco tipos de JOIN: INNER
                <br />
                JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN e CROSS JOIN. <br />
                <br />O primeiro tipo, <strong>INNER JOIN</strong>, é o mais
                comumente usado. <br />A cláusula <strong>INNER JOIN</strong>{" "}
                cria uma junção entre as tabelas que compartilham pelo menos um
                valor comum.
                <br />A cláusula <strong>JOIN</strong> é usada para combinar
                linhas de duas ou mais tabelas relacionadas.
                <br />A cláusula <strong>INNER JOIN</strong> é a forma mais
                comum de usar JOIN.
                <br />A cláusula <strong>INNER JOIN</strong> combina linhas de
                duas tabelas onde os valores de uma determinada coluna de uma
                tabela são iguais aos valores de uma determinada coluna da outra
                tabela. <br />A cláusula <strong>INNER JOIN</strong> cria uma
                junção entre as tabelas que compartilham pelo menos um valor
                comum.
                <br />
              </Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default join;
