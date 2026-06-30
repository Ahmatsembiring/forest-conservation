import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <motion.div 
          className="hero-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>
      
      <div className="hero-content container">
        <div className="hero-text-left">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            SAVE OUR <span className="highlight">FOREST</span>
          </motion.h1>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Forests are the lungs of the earth; essential for environmental stability 
            and human health and happiness. These magnificent and ancient ecosystems 
            are home to 50 percent of all terrestrial species on Earth.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(124, 179, 66, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN US NOW
            </motion.button>
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#2d5a27" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlay /> Watch Video
            </motion.button>
          </motion.div>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <h3>50%</h3>
              <p>Species Habitat</p>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <h3>1.6B</h3>
              <p>People Depend</p>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <h3>30%</h3>
              <p>Land Coverage</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero