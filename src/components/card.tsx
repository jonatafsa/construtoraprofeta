import styles from '../styles/components/Card.module.css'


interface cardsProps {
    image: string
    title: string
    description: string
}

export const Card: React.FC<cardsProps> = (props) => {
    return (

        <div className={styles.card} >
            <img src={props.image} alt="" />
            <div className={styles.text}>
                <div className={styles.textContent}>
                    <h1 className={styles.title}>{props.title}</h1>
                    <div className={styles.bodyText}>{props.description}</div>
                </div>
            </div>
        </div>

    )
}