import Navbar from '../components/Navbar'
import ProjectsSection from '../components/Projects'
import Footer from '../components/Footer'

function Projects() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <ProjectsSection />
      </div>
      <Footer />
    </>
  )
}

export default Projects