import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SAVE OUR <span className="highlight">FOREST</span>
        </motion.h1>

        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Forests are the lungs of the earth; essential for environmental stability 
          and human health and happiness. These magnificent and ancient ecosystems 
          are home to 50 percent of all terrestrial species on Earth.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="btn-primary">JOIN US NOW</button>
          <button className="btn-secondary">
            <FaPlay /> Watch Video
          </button>
        </motion.div>
      </div>

      <motion.div 
        className="hero-stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="stat-item">
          <h3>50%</h3>
          <p>Species Habitat</p>
        </div>
        <div className="stat-item">
          <h3>1.6B</h3>
          <p>People Depend</p>
        </div>
        <div className="stat-item">
          <h3>30%</h3>
          <p>Land Coverage</p>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero