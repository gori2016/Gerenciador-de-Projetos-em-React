import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'

function App() {
  return (
    <Router>
      <Container customClass="min-height">
        
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/contato">Contato</Link> |
          <Link to="/newProject">New Project</Link> |
          <Link to="/company">Company</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/newProject" element={<NewProject />} />
          <Route path="/company" element={<Company />} />
        </Routes>

      </Container>
      <footer><p>AOA</p></footer>
    </Router>
  )
}

export default App
