import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";


//Default theme
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../components/theme";

const creditos = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Créditos | SLQInfo</title>
        <meta
          name="description"
          content="SQL | Everything that you should know "
        />
        <link rel="icon" href="/mysql.png" />
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navbar />

      <div id="about" className="w-full md:h-screen p-2 flex items-center py-24">

      <div className="max-w-[1240px] m-auto">
        <div className="col-span-2 pb-[90px]">
          <h1 className="py-4 text-white align text-center uppercase text-xl tracking-widest ">Créditos | Credits</h1>

          <p className="py-5 text-white">
            Este site foi criado para propositos escolares.
            <br />
            Correspondentes ao módulo 14 da disciplina de Programação de
            sistemas informáticos.
            <br />
            Feito por Thiago Santos nº20 e Pedro Kaleb nº17.
            Professor Marco Neves.
            <br />
            TGPSI Agrupamento de escolas da Batalha.
          </p>
          <br />
          <p className="py-5 text-white">
          This site was created for school purposes.
          Corresponding to module 14 of the Computer Systems Programming subject
          <br />
          Made by Thiago Santos nº20 and Pedro Kaleb nº17.
          Teacher Marco Neves.
          <br />
          TGPSI Agrupamento de escolas da Batalha.
          </p>

          <br />
        </div>
        </div>
      </div>
    </div>
  );
};

export default creditos;
