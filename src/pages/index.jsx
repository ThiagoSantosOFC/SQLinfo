import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/NavBar";
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



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | SLQInfo</title>
        <meta
          name="description"
          content="SQL | Everything that you should know "
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7817685259056579"
     crossorigin="anonymous"></script>
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
