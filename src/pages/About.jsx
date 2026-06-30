import Navbar from '../components/Navbar'
import AboutSection from '../components/About'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <AboutSection />
      </div>
      <Footer />
    </>
  )
}

export default About