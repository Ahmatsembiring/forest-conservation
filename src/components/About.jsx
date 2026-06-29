import { motion } from 'framer-motion'
import { FaLeaf, FaWater, FaWind, FaHeartbeat, FaTree, FaGlobe } from 'react-icons/fa'
import './About.css'

const About = () => {
  const features = [
    {
      icon: <FaLeaf />,
      title: 'Ecological Balance',
      description: 'Forests maintain the balance of ecosystems and support biodiversity across the planet.'
    },
    {
      icon: <FaWater />,
      title: 'Water Conservation',
      description: 'Forests regulate water cycles, protect watersheds, and ensure clean water supply.'
    },
    {
      icon: <FaWind />,
      title: 'Climate Regulation',
      description: 'Trees absorb CO2 and produce oxygen, playing a crucial role in climate stability.'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Human Health',
      description: 'Clean air and natural environments significantly improve quality of life and health.'
    },
    {
      icon: <FaTree />,
      title: 'Biodiversity',
      description: 'Home to 80% of terrestrial species, forests are essential for wildlife conservation.'
    },
    {
      icon: <FaGlobe />,
      title: 'Global Impact',
      description: 'Forests cover 30% of Earth land and are vital for planetary health.'
    }
  ]

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Forestry</h2>
          <p>Understanding the vital role of forests in our world and why conservation matters</p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: '0 15px 40px rgba(0,0,0,0.15)' }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-text">
            <h3>Why Forest Conservation Matters</h3>
            <p>
              Forests are more than just trees. They are complex ecosystems that support life on Earth. 
              From providing oxygen to regulating climate, from supporting biodiversity to sustaining 
              human livelihoods, forests play an irreplaceable role in maintaining the health of our planet.
            </p>
            <p>
              However, deforestation and forest degradation continue at alarming rates. Every year, 
              millions of hectares of forests are lost, threatening wildlife, disrupting water cycles, 
              and accelerating climate change. The time to act is now.
            </p>
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80" 
              alt="Forest Conservation"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About