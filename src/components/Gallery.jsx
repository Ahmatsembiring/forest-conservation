import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaSearchPlus } from 'react-icons/fa'
import './Gallery.css'

// Import semua foto dari folder gallery
import gam1 from '../assets/images/gallery/gam1.jpg'
import gam2 from '../assets/images/gallery/gam2.jpg'
import gam3 from '../assets/images/gallery/gam3.jpg'
import gam4 from '../assets/images/gallery/gam4.jpg'
import gam5 from '../assets/images/gallery/gam5.jpg'
import gam6 from '../assets/images/gallery/gam6.jpg'
import gam7 from '../assets/images/gallery/gam7.jpg'


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, src: gam1 },
    { id: 2, src: gam2 },
    { id: 3, src: gam3 },
    { id: 4, src: gam4 },
    { id: 5, src: gam5 },
    { id: 6, src: gam6 },
    { id: 7, src: gam7 },
   
  ]

  return (
    <section className="gallery section-padding">
      <div className="container">
        
        {/* Header */}
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Galeri Tim PKL ITERA Rekayasa Kehutanan 2026 BKHIT Lampung</h2>
          
        </motion.div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {images.map((image, index) => (
            <motion.div 
              key={image.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="image-wrapper">
                <img src={image.src} alt={`Gallery ${image.id}`} loading="lazy" />
                <motion.div 
                  className="gallery-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="overlay-content">
                    <FaSearchPlus className="overlay-icon" />
                    <span>Lihat Foto</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              className="close-btn"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 90 }}
            >
              <FaTimes />
            </motion.button>
            
            <motion.img 
              src={selectedImage.src} 
              alt="Gallery Preview"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery