import Message from "../layout/Message"
import { useLocation } from "react-router-dom"

function Projects(){
    const location = useLocation()
    let mensage = ""
    if(location.state){
        mensage = location.state.message
    }
    return(
        <div>
            <h1>Meus Projetos</h1>
            {mensage && <Message type="success" msg={mensage} />}
        </div>
    )
}

export default Projects 