import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa'
import './WildlifeCard.css'

const WildlifeCard = ({ animal, onClick }) => {
  return (
    <motion.div 
      className="wildlife-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: '0 15px 40px rgba(0,0,0,0.2)' }}
      onClick={() => onClick(animal)}
    >
      <div className="card-image">
        <img src={animal.image} alt={animal.name} />
        <div className="card-overlay">
          <span className="view-detail">Lihat Detail</span>
        </div>
      </div>
      <div className="card-content">
        <h3>{animal.name}</h3>
        <p className="card-scientific">{animal.scientificName}</p>
        <div className="card-status">
          <span className={`status-badge ${animal.iucnStatus.toLowerCase().replace(' ', '-')}`}>
            {animal.iucnStatus}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// Modal Component
export const WildlifeModal = ({ animal, onClose }) => {
  if (!animal) return null

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>

          <div className="modal-header">
            <h2>{animal.name}</h2>
            <p className="modal-scientific">{animal.scientificName}</p>
          </div>

          <div className="modal-body">
            <div className="modal-image">
              <img src={animal.image} alt={animal.name} />
            </div>

            <div className="modal-info">
              <h3>Status Perlindungan</h3>
              <table className="status-table">
                <tbody>
                  <tr>
                    <td><strong>Status Hukum RI</strong></td>
                    <td>{animal.legalStatus}</td>
                  </tr>
                  <tr>
                    <td><strong>Status IUCN Red List</strong></td>
                    <td>{animal.iucnStatus}</td>
                  </tr>
                  <tr>
                    <td><strong>Status CITES</strong></td>
                    <td>{animal.citesStatus}</td>
                  </tr>
                </tbody>
              </table>

              <div className="modal-description">
                <h3>Informasi</h3>
                <p>{animal.description}</p>
              </div>

              {animal.reference && (
                <div className="modal-reference">
                  <h3>Referensi</h3>
                  <a 
                    href={animal.reference} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-link"
                  >
                    <FaExternalLinkAlt /> Lihat Sumber Informasi
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default WildlifeCard