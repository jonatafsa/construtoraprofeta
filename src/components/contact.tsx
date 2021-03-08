
import styles from '../styles/components/Contact.module.css'
import { Spliter } from './spliter'

export const Contact = () => {
    return (

        <div className={styles.content} >
            <h1>Entre em contato</h1>
            <Spliter />
            <form action="">

                <label htmlFor="email">Nome:</label>
                <input type="text" name="email" id="email" />

                <div className={styles.sectionForm}>
                    
                    <div>
                        <label htmlFor="name">Email:</label>
                        <input type="email" name="name" id="name" />
                    </div>

                    <div>
                        <label htmlFor="phone">Telefone:</label>
                        <input type="text" name="phone" id="name" />
                    </div>

                </div>

                <label htmlFor="message">Mensagem:</label>
                <textarea name="message" id="" ></textarea>
            </form>

            <div className={styles.contentButton}>
                <button>Enviar Mensagem</button>
            </div>

        </div>

    )
}