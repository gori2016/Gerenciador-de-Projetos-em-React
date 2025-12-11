import styles from './newproject.module.css'
import ProjectForm from '../../components/projects/ProjectForm'
function NewProject(){
    return(
        <div className={styles.newProject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm/>
        </div>
    )
}

export default NewProject