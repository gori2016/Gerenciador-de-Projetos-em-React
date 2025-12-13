import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import styles from "./Projects.module.css"
import Container from "../layout/Container"
import LinkButtom from "../layout/LinkButtom"
import ProjectCard from "../projects/ProjectCard"
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"

function Projects() {
  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)

  const location = useLocation()
  let mensage = ""

  if (location.state) {
    mensage = location.state.message
  }

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
        setRemoveLoading(true)
      })
      .catch((err) => {
        console.log(err)
        setRemoveLoading(true)
      })
  }, 1000)
}, [])

function removeProject(id) {
  fetch(`http://localhost:5000/projects/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then(() => {
      setProjects(projects.filter((project) => project.id !== id))
      //messagem
    })
    .catch((err) => console.log(err))
}
    

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButtom to="/newproject" text="Criar Projeto" />
      </div>

      {mensage && <Message type="success" msg={mensage} />}

      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard name={project.name}
              budget={project.budget}
              category={project.category?.name}
              id={project.id}
              key={project.id}
              handleRemove={removeProject}

            />
              ))}

              {!removeLoading && <Loading />}
              {removeLoading && projects.length === 0 && (
                <p>Não há projetos cadastrados!</p>
              )}
      </Container>
    </div>
  )
}

export default Projects
