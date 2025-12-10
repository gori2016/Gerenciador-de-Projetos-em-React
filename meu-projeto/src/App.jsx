import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects'

function App() {
  return (
    <Router> 
    <NavBar/>

      <Container customClass="min-height">
        
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/newProject" element={<NewProject />} />
          <Route path="/company" element={<Company />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

      </Container>
      <Footer />
    </Router>
  )
}

export default App
