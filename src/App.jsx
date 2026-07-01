import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import WildlifeProtection from './pages/WildlifeProtection'  // ← Path ini harus sesuai
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/wildlife-protection" element={<WildlifeProtection />} />  // ← Tambah ini
      </Routes>
    </Router>
  )
}

export default App