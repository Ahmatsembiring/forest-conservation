import { motion } from 'framer-motion'
import './ScrollIndicator.css'

const ScrollIndicator = ({ activeSection, onClick }) => {
  const sections = [
    { number: '01', label: 'Home' },
    { number: '02', label: 'About' },
    { number: '03', label: 'Projects' },
    { number: '04', label: 'Gallery' },
    { number: '05', label: 'Blog' }
  ]

  return (
    <div className="scroll-indicator">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className={`indicator-wrapper ${activeSection === index ? 'active' : ''}`}
          onClick={() => onClick(index)}
          whileHover={{ scale: 1.2 }}
        >
          <div className="indicator-dot">
            <span className="number">{section.number}</span>
          </div>
          <span className="indicator-label">{section.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default ScrollIndicator