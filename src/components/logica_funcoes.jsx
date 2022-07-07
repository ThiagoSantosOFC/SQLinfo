import React from "react";
import ContentDawer from "../components/contentDawer";
import Tip from "../components/toolTip";
//Components chakra
import { Heading, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const logica_funcoes = () => {
  return (
    <div>
      {/* Lógica e funções */}
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
              <Image src="/images/src/db5.png" alt="logo" />
            </Box>
            <Box>
              <Box>
                <Text color={"white"} maxWidth={700}>
                  <strong>Lógica</strong> - É feita por operadores aritméticos,
                  lógicos e comparação são usados em consultas SQL para realizar
                  tarefas como somar ou agrupar valores, comparar valores do
                  banco de dados com constantes e variáveis, entre outras.
                  <br />
                  Esses operadores nos auxiliam na construções de consultas a
                  fim ajudar na comparação de valores e estabelecer diferenças
                  entre um resultado e outro.
                  <br />
                  <br />
                  <strong>Funções de agregação</strong> - Uma função de
                  agregação processa um conjunto de valores contidos em uma
                  única coluna de uma tabela e retorna um único valor como
                  resultado.
                  <br />
                  Sua sintaxe é semelhante aquela encontrada em muitas
                  linguagens de programação.
                  <br />
                  Contudo, o parâmetro informado é sempre a coluna cujos valores
                  desejamos processar.
                  <br />
                  <br />
                </Text>
              </Box>
              <Stack direction={"row"} spacing={"10"}>
                <ContentDawer
                  title={"Lógica"}
                  button_text={"Lógica"}
                  tip={"Lógica"}
                  image={"/images/snaps/snap_LOGIC.png"}
                >
                  A linguagem sql tem operadores lógicos que podem ser usados
                  ​​para fazer operaçõe lógicas e consultas. O sql possui os
                  seguintes operadores <br /><br />

                  <strong>AND</strong> - Representa o operador {'&&'}  <br />
                  <strong>OR</strong> - Representa o operador {'||'} <br />
                  <strong>NOT</strong> - Representa o operador {'!'} <br /><br />


                  Os operadores <strong>AND</strong> e <strong>OR</strong> são
                  usados ​​para fazer operações lógicas entre variáveis ou
                  valores. <br /> <br />
                  
                 O operador <strong>NOT</strong> é usado para negar um valor.
                </ContentDawer>

                <ContentDawer
                  title={"Funções de agregação"}
                  button_text={"Funções de agregação"}
                  tip={"Funções de agregação"}
                  image={"/images/snaps/snap_FUNCTIONS.png"}
                >
                  Em sql as funções de agregação são um grupo de funções
                  internas que realiza um conjunto de valores e retorna um valor
                  único. As funções agregadas são normalmente usadas em conjunto
                  com a cláusula GROUP BY da instrução SELECT. As mais usadas
                  são:
                  <br />
                  <br />
                  <strong>SUM</strong> - Soma todos os valores de uma coluna.
                  <br />
                  <strong>COUNT</strong> - Conta o número de valores de uma
                  coluna.
                  <br />
                  <strong>AVG</strong> - Calcula a média de uma coluna.
                  <br />
                  <strong>MIN</strong> - Calcula o menor valor de uma coluna.
                  <br />
                  <strong>MAX</strong> - Calcula o maior valor de uma coluna.
                </ContentDawer>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default logica_funcoes;
