import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButtom from '../layout/LinkButtom'

function Home(){
    return(
       <section className={styles.home_container}>
        <h1 className={styles.home_container.h1}>Bem-vindo ao <span>Vetra</span></h1>
        <p>Comece a Gerenciar Seus Projetos Agora Mesmo!</p>
        <LinkButtom to="/newproject" text="Criar Projeto"/>
        <img src={savings} alt="porquinho" />
       </section>
    )
}

export default Home 