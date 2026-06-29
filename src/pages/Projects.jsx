import Navbar from '../components/Navbar'
import ProjectsSection from '../components/Projects'
import Footer from '../components/Footer'

function Projects() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="page-content">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  )
}

export default Projects