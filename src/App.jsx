import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import WildlifeProtection from './pages/WildlifeProtection'
import Mamalia from './pages/Mamalia'
import Aves from './pages/Aves'
import Herpetofauna from './pages/Herpetofauna'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/wildlife-protection" element={<WildlifeProtection />} />
        <Route path="/wildlife-protection/mamalia" element={<Mamalia />} />
        <Route path="/wildlife-protection/aves" element={<Aves />} />
        <Route path="/wildlife-protection/herpetofauna" element={<Herpetofauna />} />
      </Routes>
    </Router>
  )
}

export default App