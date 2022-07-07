import React from 'react'
import ContentDawer from "../components/contentDawer";
import Tip from "../components/toolTip";
//Components chakra
import { Heading, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";


const logica_funcoes = () => {
  return (
    <div>{/* Lógica e funções */}
    <Box pt={400} p={50} pb={400} id="logica_funcoes">
      <Box>
        <Stack align={"end"}>
          <Box>
            <Heading as="h1" size="xl" color={"white"}>
              Lógica e funções de grupo
            </Heading>
          </Box>
        </Stack>
        <Stack direction={"row"} pt={10} spacing={40}>
          <Box>
            <Image src="/images/sql/image-sql.png" alt="logo" />
          </Box>
          <Box>
            <Box>
            <Text color={"white"} maxWidth={700}>

              <strong>Lógica</strong> - É feita por operadores aritméticos, lógicos e comparação são usados em consultas SQL para realizar tarefas como somar ou agrupar valores, comparar valores do banco de dados com constantes e variáveis, entre outras. 
              <br />
              Esses operadores nos auxiliam na construções de consultas a fim ajudar na comparação de valores e estabelecer diferenças entre um resultado e outro.
              <br />
              <br />
              <strong>Funções de agregação</strong> - Uma função de agregação processa um conjunto de valores contidos em uma única coluna de uma tabela e retorna um único valor como resultado. 
              <br />
              Sua sintaxe é semelhante aquela encontrada em muitas linguagens de programação. 
              <br />
              Contudo, o parâmetro informado é sempre a coluna cujos valores desejamos processar.


              <br />
              <br />
             </Text>


            </Box>
            <Stack direction={"row"} spacing={"10"}>
              <ContentDawer
                title={"Lógica"}
                button_text={"Lógica"}
                tip={"Lógica"}
              ></ContentDawer>

              <ContentDawer
                title={"Funções de agregação"}
                button_text={"Funções de agregação"}
                tip={"Funções de agregação"}
              ></ContentDawer>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
</div>
  )
}

export default logica_funcoes