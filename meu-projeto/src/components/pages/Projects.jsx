import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import styles from "./Projects.module.css"
import Container from "../layout/Container"
import LinkButtom from "../layout/LinkButtom"
import ProjectCard from "../projects/ProjectCard"
import { useState, useEffect } from "react"

function Projects() {
  const [projects, setProjects] = useState([])

  const location = useLocation()
  let mensage = ""

  if (location.state) {
    mensage = location.state.message
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setProjects(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButtom to="/newproject" text="Criar Projeto" />
      </div>

      {mensage && <Message type="success" msg={mensage} />}

      <Container customClass="start">
        <p>Projetos...</p>
      </Container>
    </div>
  )
}

export default Projects
