import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaSearchPlus } from 'react-icons/fa'
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', alt: 'Dense Forest', category: 'Forest' },
    { id: 2, src: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=600&q=80', alt: 'Orangutan', category: 'Wildlife' },
    { id: 3, src: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80', alt: 'Red Berries', category: 'Flora' },
    { id: 4, src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&q=80', alt: 'Forest Path', category: 'Forest' },
    { id: 5, src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80', alt: 'Mountain Forest', category: 'Landscape' },
    { id: 6, src: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=600&q=80', alt: 'Forest Canopy', category: 'Forest' },
    { id: 7, src: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=600&q=80', alt: 'Wildlife', category: 'Wildlife' },
    { id: 8, src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80', alt: 'Office Plants', category: 'Flora' },
  ]

  return (
    <section id="gallery" className="gallery section-padding">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Gallery</h2>
          <p>Explore the beauty and diversity of our forests</p>
        </motion.div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <motion.div 
              key={image.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <div className="overlay-content">
                  <FaSearchPlus className="overlay-icon" />
                  <span>{image.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="close-btn">
              <FaTimes />
            </button>
            <motion.img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="lightbox-info">
              <h3>{selectedImage.alt}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery