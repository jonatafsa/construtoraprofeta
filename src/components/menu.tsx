import Link from 'next/link'
import styles from '../styles/components/Menu.module.css'

export const Menu = () => {
  return (
    <>

      <header className={styles.header}>
        <a href="" className={styles.logo}>Construtora Profeta</a>
        <input className={styles.menuBtn} type="checkbox" id={styles.menuBtn} />
        <label className={styles.menuIcon} for={styles.menuBtn}><span className={styles.navicon}></span></label>
        <ul className={styles.menu}>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/about">Sobre</Link></li>
          <li><Link href="/portfolio">Porfólio</Link></li>
          <li><Link href="/contact">Contato</Link></li>
        </ul>
      </header>
    </>

  )
}