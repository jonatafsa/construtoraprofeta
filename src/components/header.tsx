
import styles from '../styles/components/Header.module.css'

export const Header = () => {
    return (

        <header className={styles.header}>
            <div className={styles.mask}></div>
        <div className={styles.leftDiv}>
          <div className={styles.cardHeader}>
            <h1> Melhor escolha para sua construção.</h1>
            <h4>
              A Construtora Profeta vem se consolidando no mercado e se especializando
              nas mais modernas tecnologias na construção civil, sempre com a finalidade de atender
              os mais altos padrões de qualidade com um preço justo.
              </h4>

          </div>
          <button>Saiba mais</button>
        </div>

        <div className={styles.rightDiv}>
          
        </div>
      </header>

    )
}