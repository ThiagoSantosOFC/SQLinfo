import React from "react";
//Components chakra
import { Heading, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const pesquisas = () => {
  return (
    <div>
     
      {/* Pesquisas */}
      <Box pt={400} p={50} pb={400} id="pesquisas">
        <Box>
          <Stack align={"start"}>
            <Box>
              <Heading as="h1" size="xl" color={"white"}>
                Pesquisas (queries)
              </Heading>
            </Box>
          </Stack>
          <Stack direction={"row"} pt={10} spacing={40}>
            <Box>
              <Image src="/images/sql/queries.png" alt="queries" />
            </Box>
            <Box>
              <Text color={"white"} maxWidth={700}>
                O gerenciamento de banco de dados permite excluir, adicionar ou
                modificar os dados do seu projeto online.
                <br />
                <br />
                Para realizar essas operações, uma consulta deve ser feita. Mas
                para fazer isso, é importante que o banco de dados entenda a
                solicitação.
                <br /> <br />
                Assim, quando o comando correto é executado, o desenvolvedor
                obtém o resultado desejado a partir das informações armazenadas.
              </Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default pesquisas;
