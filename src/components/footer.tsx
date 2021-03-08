import Link from 'next/link'

import styles from '../styles/components/Footer.module.css'


export const Footer = () => {
  return (

  
    <div className={styles.footer}>
      <div className={styles.innerFooter}>
    

        <div className={styles.footerLeft}>
          <h1>Construtora profeta</h1>
          <p>Somos referência para empresas exigentes que procuram os 
            melhores serviços aderentes as melhores práticas com competência, e
            xperiência, capacidade técnica e qualidade comprovada.</p>
        </div>

        <div className={styles.footerRight}>
          <h3>Links Rápidos</h3>
          <div className={styles.border1}></div>  

              <div className={styles.footerLink}>
              <Link href="/">Home</Link>
              <Link href="/about">Sobre</Link>
              <Link href="/portfolio">Portfólio</Link>
              <Link href="/contact">Contato</Link>
              </div>

        </div>
    
    
      </div>
      

      <div className={styles.footerBottom}>
        Copyright &copy; Construtora Profeta 2020.
      </div>
    </div>


    )
}