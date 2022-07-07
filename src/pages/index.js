import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

//Default theme
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../components/theme";

//Components chakra
import { Heading, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

//Self components
import ContentDawer from "../components/contentDawer";
import Tip from "../components/toolTip";

let lorenPlaceholder =
  "Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | SLQInfo</title>
        <meta
          name="description"
          content="SQL | Everything that you should know "
        />
        <link rel="icon" href="/mysql.png" />
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navbar />

      {/* Website header content */}
      <Box p={10} pb={400}>
        <Stack direction={"column"} align={"center"} spacing={10}>
          <Box>
            <Image
              src="/images/src/gifdb1.gif"
              alt="logo"
              borderRadius="20%"
            />
          </Box>
        </Stack>
      </Box>

      {/* Sql content */}
      <Box pt={400} p={50} pb={400} id="sql">
        <Box>
          <Stack align={"start"}>
            <Box>
              <Heading as="h1" size="xl" color={"white"}>
                SQL
              </Heading>
            </Box>
          </Stack>
          <Stack direction={"row"} pt={10} spacing={40}>
            {/*  */}
            <Box>
              <Text color={"white"} maxWidth={700}>
                Structured Query Language, ou Linguagem de Consulta Estruturada
                ou SQL, é a linguagem de pesquisa declarativa padrão para banco
                de dados relacional. Muitas das características originais do SQL
                foram inspiradas na álgebra relacional. A Linguagem SQL surgiu
                no início dos anos 70, como fruto de um projeto da IBM no
                laboratório de San José. <br />
                Eles trabalhavam num projeto de uma linguagem que
                se adequasse ao modelo relacional. Este projeto trabalhava em
                paralelo com um outro projeto que visava desenvolver um sistema
                gerência de Banco de Dados relacional, chamado "System R".
              </Text>
            </Box>

            {/*  */}
            <Box>
              <Image src="/images/src/db3.png" alt="logo" />
            </Box>
          </Stack>
        </Box>
      </Box>

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
              <Image src="/images/src/db2.png" alt="logo" />
            </Box>
            <Box>
              <Text color={"white"} maxWidth={700} pb={50}>
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
                    usuários do banco de dados. Ela é composta pelos comandos
                    que manipulam as permissões de usuários dentro do banco de dados.

                    <br /> <br />
                    <strong>GRANT</strong> - Atribui privilégios a um usuário.
                    <br />
                    <strong>REVOKE</strong> - Remove privilégios de um usuário.
                    
                  </ContentDawer>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>

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
      </Box>
      <div className="flex justify-center py-12">
        <Link href="/">
          <a>
            <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
