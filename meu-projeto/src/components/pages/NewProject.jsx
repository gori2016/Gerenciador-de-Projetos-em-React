import styles from './newproject.module.css'
import ProjectForm from '../../components/projects/ProjectForm'
import { useNavigate } from "react-router-dom";

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {

        // inicializa valores
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {

                console.log("Projeto criado:", data)

                // redireciona depois de criar
                navigate('/projects', {
                    state: { message: "Projeto criado com sucesso" }
                })

            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newProject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} />
        </div>
    )
}

export default NewProject
