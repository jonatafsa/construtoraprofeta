
import styles from '../styles/components/Portfolio.module.css'
import { Spliter } from './spliter'

interface portfolioProps {
    title: string
    description: string
    image: string
    position: string
}

export const Portfolio: React.FC<portfolioProps> = (props) => {

    if (props.position == 'left') {
        return (
            <div className={styles.portfolio}>      
            <div className={styles.contentPortfolio}>
              <div className={styles.imagePortfolio}>
                <img src={props.image} alt="Portfolio 1" />
              </div>
              <div className={styles.left}>
                <h2>{props.title}</h2>
                <p>
                    {props.description}
                </p>
              </div>
    
            </div>
    
            </div>
        )
    } else {
        return (
            <div className={styles.portfolio}>      
            <div className={styles.contentPortfolio}>

            <div className={styles.right}>
                <h2>{props.title}</h2>
                <p>
                    {props.description}
                </p>
              </div>

              <div className={styles.imagePortfolio}>
                <img src={props.image} alt="Portfolio 1" />
              </div>

    
            </div>
    
            </div>
        )
    }


}