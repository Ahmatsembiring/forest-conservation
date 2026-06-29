import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, src: '/images/forest1.jpg', alt: 'Tropical Forest', category: 'Forest' },
    { id: 2, src: '/images/wildlife1.jpg', alt: 'Wildlife', category: 'Fauna' },
    { id: 3, src: '/images/plants1.jpg', alt: 'Flora', category: 'Flora' },
    { id: 4, src: '/images/conservation1.jpg', alt: 'Conservation', category: 'Conservation' },
    { id: 5, src: '/images/forest2.jpg', alt: 'Rainforest', category: 'Forest' },
    { id: 6, src: '/images/wildlife2.jpg', alt: 'Orangutan', category: 'Fauna' },
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Gallery</h2>
          <p>Explore the beauty of our forests</p>
        </motion.div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <motion.div 
              key={image.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <span>{image.category}</span>
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
            <button className="close-btn"><FaTimes /></button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery