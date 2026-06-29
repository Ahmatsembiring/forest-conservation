import { motion } from 'framer-motion'
import { FaSeedling, FaHandsHelping, FaShieldAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      icon: <FaSeedling />,
      title: 'Reforestation Program',
      description: 'Planting millions of trees to restore degraded forests and create new green spaces for future generations.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
      progress: 75
    },
    {
      icon: <FaHandsHelping />,
      title: 'Community Engagement',
      description: 'Working with local communities to promote sustainable forestry practices and environmental education.',
      image: 'https://images.unsplash.com/photo-1584467115408-6a6f0a4f3c3c?w=600&q=80',
      progress: 60
    },
    {
      icon: <FaShieldAlt />,
      title: 'Wildlife Protection',
      description: 'Protecting endangered species and their habitats through conservation efforts and anti-poaching initiatives.',
      image: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=600&q=80',
      progress: 85
    }
  ]

  return (
    <section className="projects section-padding">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Conservation Programs</h2>
          <p>Our active projects making a real difference in forest conservation</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-icon">{project.icon}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-progress">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${project.progress}%` }}></div>
                  </div>
                  <span>{project.progress}% Complete</span>
                </div>
                <motion.button 
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects