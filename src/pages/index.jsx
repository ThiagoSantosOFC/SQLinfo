import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";


//Import dos componentes
import Componentes from "../components/componentes.jsx";
import Unioes from "../components/unioes.jsx";
import Pesquisas from "../components/pesquisas.jsx";
import SQL from "../components/sql.jsx";
import Logica_funcoes from "../components/logica_funcoes.jsx";
import Join from "../components/join.jsx";
import Subpesquisas from "../components/subpesquisas.jsx";
import Header from "../components/Header.jsx";


//Default theme
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../components/theme";

//Components chakra

//Self components


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
      <Header />
      <SQL />
      <Componentes />
      <Pesquisas />
      <Logica_funcoes />
      <Join />
      <Subpesquisas />
      <Unioes />

      <div className="flex justify-center py-12">
        <Link href="/">
          <a>
            <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className=" shadow-lg shadow-[#4c5faa]-400 text-[#5651e5]" size={30} />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
