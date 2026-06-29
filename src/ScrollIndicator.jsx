import { motion } from 'framer-motion'
import './ScrollIndicator.css'

const ScrollIndicator = ({ activeSection, onClick }) => {
  const sections = ['01', '02', '03', '04', '05']

  return (
    <div className="scroll-indicator">
      {sections.map((num, index) => (
        <motion.div
          key={index}
          className={`indicator-dot ${activeSection === index ? 'active' : ''}`}
          onClick={() => onClick(index)}
          whileHover={{ scale: 1.3 }}
        >
          {num}
        </motion.div>
      ))}
    </div>
  )
}

export default ScrollIndicator