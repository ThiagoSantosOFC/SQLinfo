import React from "react";
//Components chakra
import { Heading, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import ContentDawer from "../components/contentDawer";


const componentes = () => {
  return (
    <div>
  
      {/* componentes do sql */}
      <Box pt={400} p={50} pb={400} id="componentes">
        <Box>
          <Stack align={"end"}>
            <Box>
              <Heading as="h1" size="xl" color={"white"}>
                Componentes
              </Heading>
            </Box>
          </Stack>
          <Stack direction={"row"} pt={10} spacing={40}>
            <Box>
              <Image src="/images/src/db3.png" alt="logo" />
            </Box>
            <Box>
              <Text color={"white"} maxWidth={700} pb={50} pt={40}>
                O MySQL é composto por 3 componentes Esses componentes são
                responsáveis por manipular os dados, controlar o acesso aos
                dados, e definir o modelo do banco de dados.
              </Text>
              <Stack direction={"row"} spacing={"10"}>
                {/*  */}
                <Box>
                  <ContentDawer
                    title={"Data Manipulation Language"}
                    button_text={"DML"}
                    tip={"Data Manipulation Language"}
                    image={"/images/snaps/snap_DML.png"}
                  >
                    A linguagem de manipulação de dados é usada para gerenciar
                    dados em bancos de dados relacionais. Inclui procedimentos
                    para recuperar, inserir, atualizar e excluir dados. Ela e
                    composta pelas operações basicas do sql que definem o CRUD
                    que é relacionado com as quatro operações basicas do sql.
                    <br /> <br />
                    <strong>Create Read Update Delete.</strong>
                    <br /> <br />
                    <strong>Create</strong> - Insere um novo registro no banco
                    de dados.
                    <br />
                    <strong>Read</strong> - Recupera um registro do banco de
                    dados.
                    <br />
                    <strong>Update</strong> - Atualiza um registro do banco de
                    dados.
                    <br />
                    <strong>Delete</strong> - Exclui um registro do banco de
                    dados
                  </ContentDawer>
                </Box>

                <Box>
                  <ContentDawer
                    title={"Data Definition Language"}
                    button_text={"DDL"}
                    tip={"Data Definition Language"}
                    image={"/images/snaps/snap_DDL.png"}
                  >
                    A linguagem de definição de dados é usada para definir a
                    estrutura de um banco de dados, incluindo as tabelas,
                    colunas e índices. Também inclui instruções para criar
                    alterando ou descartando objetos de banco de dados, como
                    tabelas, índices e visualizações. Ela é composta pelos
                    comandos basicos do sql que definem/criam/alteram/descartam
                    tabelas, colunas, índices, visualizações e a propria
                    estrutura do banco de dados.
                    <br /> <br />
                    <strong>Create</strong> - Cria uma nova tabela no banco de
                    dados.
                    <br />
                    <strong>Alter</strong> - Altera uma tabela existente no
                    banco de dados.
                    <br />
                    <strong>Drop</strong> - Exclui uma tabela do banco de dados.
                    <br />
                    <strong>Create View</strong> - Cria uma nova visualização no
                    banco de dados.
                    <br />
                    <strong>Alter View</strong> - Altera uma visualização
                    existente no banco de dados.
                    <br />
                    <strong>Drop View</strong> - Exclui uma visualização do
                    banco de dados.
                    
                     <ContentDawer
                      title={"Transação sql"}
                      button_text={"Transação sql"}
                      // tip={"Transação sql"}
                      image={"/images/snaps/snap_TRANSACTION.png"}
                      paddingTop={100}
                    >
                      Dentro do sql as transações são uma maneira segura de
                      fazer operações perigosas com a possibilidade de reverter.
                      <br /><br />
                      O sql já usa transações implicitamente se escrevermos um
                      comando select errado, o sql retornará um erro (ou se
                      escrevermos um comando de atualização errado, o sql
                      retornará um erro).
                      Se escrevermos um comando de inserção em uma tabela que já
                      existe o sql retornará um erro. Se escrevermos um comando
                      delete em uma tabela que não existe o sql retornará um
                      erro.
                      <br /><br /> 
                      Então, se precisarmos fazer uma operação que possa
                      ser perigosa para o banco de dados, a melhor maneira
                      (porque é a forma segura) é usar explicitamente a
                      transação. <br /><br />
                      Por exemplo, atualizar uma tabela e se ocorrer um erro, o
                      banco de dados pode estar corrompido. Neste caso usamos
                      transação porque se ocorrer um erro, podemos reverter as
                      alterações.
                    </ContentDawer>
                  </ContentDawer>
                </Box>

                <Box>
                  <ContentDawer
                    title={"Data Control Language"}
                    button_text={"DCL"}
                    tip={"Data Control Language"}
                    image={"/images/snaps/snap_DCL.png"}
                  >
                    A Linguagem de controle de dados inclui comandos para
                    gerenciar o acesso a objetos e permissões do banco de dados.
                    Também inclui instruções para criar e modificar funções, que
                    são grupos de privilégios que podem ser atribuídos aos
                    usuários. Ela e composta pelos comandos sql que definem
                    permissões, para os usuarios que podem acessar os objetos do
                    banco de dados.
                    <br /> <br />
                    <strong>Grant</strong> - Atribui privilégios a um usuário.
                    <br />
                    <strong>Revoke</strong> - Revoga privilégios de um usuário.
                  </ContentDawer>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default componentes;
