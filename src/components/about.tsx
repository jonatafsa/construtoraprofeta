import styles from '../styles/components/About.module.css'
import { Spliter } from './spliter'

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineBuild } from 'react-icons/ai'
import { AiOutlineSetting } from 'react-icons/ai'

export const About = () => {
    return (
      <>
      
      <div className={styles.content} >
      <h1>Conheça a construtora</h1>
      <Spliter />
      <h4> Trabalhamos com cuidadoso estudo do projeto, até os acabamentos 
        finais, Valorizando a otimização dos custos, pontualidade e alto 
        padrão em nossas obras sempre com a missão de obter elevada qualidade, 
        eficiência e eficácia nos nossos trabalhos.</h4>
    </div>

        <div className={styles.about}>
        <div className={styles.flags}>

          <div className={styles.flagInformation}>
            <AiOutlineHome size={90} />
            <span>Construção</span>
            <p>
            Somos responsáveis por fazer o 
            sonho da sua casa ou propriedade comercial se tornar realidade.
            </p>
          </div>

          <div className={styles.flagInformation}>
            <AiOutlineBuild size={90} />
            <span>Reforma</span>
            <p>
            Reformar residências, escritórios, estabelecimentos comerciais ou quaisquer 
            outros é uma atividade que requer tempo.
            </p>
          </div>

          <div className={styles.flagInformation}>
            <AiOutlineSetting size={90} />
            <span>Gerenciamento de Obras</span>
            <p>
            Nossa abordagem abrange uma interface de conhecimento e experiência entre os 
            lientes, engenheiros, arquitetos e empreiteiros. 
            </p>
          </div>

        </div>
      </div>
      </>
    )
}