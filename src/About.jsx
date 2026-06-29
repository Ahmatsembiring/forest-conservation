import { motion } from 'framer-motion'
import { FaLeaf, FaWater, FaWind, FaHeartbeat } from 'react-icons/fa'
import './About.css'

const About = () => {
  const features = [
    {
      icon: <FaLeaf />,
      title: 'Ecological Balance',
      description: 'Forests maintain the balance of ecosystems and support biodiversity.'
    },
    {
      icon: <FaWater />,
      title: 'Water Conservation',
      description: 'Forests regulate water cycles and protect watersheds.'
    },
    {
      icon: <FaWind />,
      title: 'Climate Regulation',
      description: 'Trees absorb CO2 and produce oxygen for a healthier planet.'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Human Health',
      description: 'Clean air and natural environments improve quality of life.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>About Forestry</h2>
          <p>Understanding the vital role of forests in our world</p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About