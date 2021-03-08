import Head from 'next/head'
import { Menu } from '../components/menu'
import { About } from '../components/about'
import { Card } from '../components/card'
import { Footer } from '../components/footer'
import { Portfolio } from '../components/portfolio'
import { Spliter } from '../components/spliter'

import styles from '../styles/Home.module.css'
import { Contact } from '../components/contact'
import { Header } from '../components/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <title>Início - Construtora Profeta</title>
      </Head>

      <Menu />
      <Header />
      <About />

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

      <div className={styles.challends}>
      <h1>Nossos Diferenciais</h1>
        <Spliter />

        <div className={styles.cards}>

          <Card
            image="/quality.svg"
            title="Qualidade"
            description="Buscamos oferecer um suporte mais personalizado, 
              levando em consideração seu conhecimento, expectativas e personalidade."
          />

          <Card
            image="/lovework.svg"
            title="Paixão"
            description="O que nos diferencia da concorrência é que somos apaixonados pelos 
              produtos/serviços que oferecemos, além da qualidade do nosso suporte."
          />

          <Card
            image="/diamond.svg"
            title="Experiência"
            description="Conquistamos a reputação de empresa confiável e séria, obtendo grande 
              parte dos nossos clientes provenientes de indicações."
          />

          <Card
            image="/price.svg"
            title="Custo Benefício"
            description="A contratação da Construtora Profeta apresenta, sem dúvidas, o melhor 
              custo-benefício que esse tipo de relação pode oferecer."
          />

        </div>

      </div>

      <div className={styles.messageSection}>
        <p>
        Falta pouco para você usufruir de todas as vantagens do nosso 
        plano de serviços! use o botão ao lado para entrar em contato
        com nosso atendimento.
        </p>
      <button>
        <img src="/icons/whatsapp.svg" alt="whatsapp icone"/>
        Enviar mensagem
      </button>
      </div>

    <Contact />

    <Footer />

    </div>

  )
}
