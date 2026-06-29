import Navbar from '../components/Navbar'
import AboutSection from '../components/About'
import Footer from '../components/Footer'

function About() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="page-content">
        <AboutSection />
      </div>
      <Footer />
    </div>
  )
}

export default About