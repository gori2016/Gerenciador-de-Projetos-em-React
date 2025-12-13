import Message from "../layout/Message"
import { useLocation, useNavigate } from "react-router-dom"
import styles from "./Projects.module.css"
import Container from "../layout/Container"
import LinkButtom from "../layout/LinkButtom"
import ProjectCard from "../projects/ProjectCard"
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"

function Projects() {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [projectMessage, setProjectMessage] = useState("")

  const location = useLocation()
  const navigate = useNavigate()

  let message = ""

  if (location.state?.message) {
    message = location.state.message
  }

  // 🔹 Limpa a mensagem da rota (corrige bug do reload)
  useEffect(() => {
    if (location.state) {
      navigate(location.pathname, { replace: true })
    }
  }, [])

  // 🔹 Busca os projetos (com loading)
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data)
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setIsLoading(false)
        })
    }, 1000)
  }, [])

  // 🔹 Remove projeto
  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage("Projeto removido com sucesso!")
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButtom to="/newproject" text="Criar Projeto" />
      </div>

      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}

      <Container customClass="start">
        {!isLoading &&
          projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category?.name}
              handleRemove={removeProject}
            />
          ))}

        {isLoading && <Loading />}

        {!isLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  )
}

export default Projects
