import { Menu } from "../components/menu";import { About } from '../components/about'
import Head from "next/head";
import { Footer } from "../components/footer";
import { Portfolio } from "../components/portfolio";

import styles from '../styles/Home.module.css'
import { Spliter } from "../components/spliter";

export default function PagePortfolio() {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Portfólio - Construtora Profeta</title>
            </Head>
            <Menu />
            <div className={styles.content} >
        <h1>Portfólio</h1>
        <Spliter />
        <h4> "Atuando no mercado de Construção Civil desde 1996, a CONTRACTA ENGENHARIA é responsável
            pela execução de diversas obras públicas e privadas em todo o território nacional."</h4>


      </div>

      <Portfolio
        image="http://www.arquidioceseolindarecife.org/wp-content/uploads/2018/06/IMG_4054-Medium.jpg"
        title="Título da Obra"
        position="left"
        description="Uma boa descrição requer uma observação criteriosa e caracterizada
        pela exposição dos traços da obra....
        Também deverá apontar características: tempo, ponto positivo,
        modelos de projeto, conduta, modo de agir, etc."
      />

      <Portfolio
        image="https://construcaocivil.info/wp-content/uploads/2015/03/Elevacao-de-alvenaria-com-blocos-ceramicos.-Texto-e-foto-enviados-por-@rafaelratof-Masonry-elevation.jpg"
        title="Título da Obra"
        position="right"
        description="Uma boa descrição requer uma observação criteriosa e caracterizada
        pela exposição dos traços da obra....
        Também deverá apontar características: tempo, ponto positivo,
        modelos de projeto, conduta, modo de agir, etc."
      />

      <Portfolio
        image="http://www.arquidioceseolindarecife.org/wp-content/uploads/2018/06/IMG_4054-Medium.jpg"
        title="Título da Obra"
        position="left"
        description="Uma boa descrição requer uma observação criteriosa e caracterizada
        pela exposição dos traços da obra....
        Também deverá apontar características: tempo, ponto positivo,
        modelos de projeto, conduta, modo de agir, etc."
      />
            <Footer />
        </>
    )
}