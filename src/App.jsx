import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Blog from './components/Blog'
import Footer from './components/Footer'
import ScrollIndicator from './components/ScrollIndicator'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'gallery', 'blog']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section, index) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (index) => {
    const sections = ['hero', 'about', 'projects', 'gallery', 'blog']
    const element = document.getElementById(sections[index])
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Blog />
      <Footer />
      <ScrollIndicator activeSection={activeSection} onClick={scrollToSection} />
    </div>
  )
}

export default App