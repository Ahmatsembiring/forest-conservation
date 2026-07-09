import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaSearchPlus } from 'react-icons/fa'
import './Gallery.css'

// Import semua foto dari folder gallery
import foto1 from '../assets/images/gallery/foto1.jpeg'
import foto2 from '../assets/images/gallery/foto2.jpeg'
import foto3 from '../assets/images/gallery/foto3.jpeg'
import foto4 from '../assets/images/gallery/foto4.jpeg'
import foto5 from '../assets/images/gallery/foto5.jpeg'
import foto6 from '../assets/images/gallery/foto6.jpeg'
import foto7 from '../assets/images/gallery/foto7.jpeg'
import foto8 from '../assets/images/gallery/foto8.jpeg'
import foto9 from '../assets/images/gallery/foto9.jpeg'
import foto10 from '../assets/images/gallery/foto10.jpeg'
import foto11 from '../assets/images/gallery/foto11.jpeg'
import foto12 from '../assets/images/gallery/foto12.jpeg'
import foto13 from '../assets/images/gallery/foto13.jpeg'
import foto14 from '../assets/images/gallery/foto14.jpeg'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, src: foto1, alt: 'Gajah Sumatera', caption: 'Satwa Dilindungi' },
    { id: 2, src: foto2, alt: 'Harimau Sumatera', caption: 'Satwa Dilindungi' },
    { id: 3, src: foto3, alt: 'Orangutan', caption: 'Satwa Dilindungi' },
    { id: 4, src: foto4, alt: 'Badak Sumatera', caption: 'Satwa Dilindungi' },
    { id: 5, src: foto5, alt: 'Elang Jawa', caption: 'Burung Endemik' },
    { id: 6, src: foto6, alt: 'Kakatua', caption: 'Burung Dilindungi' },
    { id: 7, src: foto7, alt: 'Penyu', caption: 'Satwa Laut' },
    { id: 8, src: foto8, alt: 'Komodo', caption: 'Satwa Endemik' },
    { id: 9, src: foto9, alt: 'Dr. Ahmad Santoso', caption: 'Kepala Balai' },
    { id: 10, src: foto10, alt: 'Dr. Siti Nurhaliza', caption: 'Kepala Subbagian Umum' },
    { id: 11, src: foto11, alt: 'Ir. Budi Wijaya', caption: 'Karantina Hewan' },
    { id: 12, src: foto12, alt: 'Drh. Rina Susanti', caption: 'Karantina Ikan' },
    { id: 13, src: foto13, alt: 'Ir. Hendro Prasetyo', caption: 'Karantina Tumbuhan' },
    { id: 14, src: foto14, alt: 'Tim Lapangan', caption: 'Petugas Karantina' },
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
          <h2>Galeri BKHIT Lampung</h2>
          <p>Dokumentasi satwa dilindungi dan tim karantina kami</p>
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
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="image-wrapper">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <motion.div 
                  className="gallery-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="overlay-content">
                    <FaSearchPlus className="overlay-icon" />
                    <span>{image.caption}</span>
                  </div>
                </motion.div>
              </div>
              <div className="image-info">
                <h4>{image.alt}</h4>
                <p>{image.caption}</p>
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
              alt={selectedImage.alt}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="lightbox-info">
              <h3>{selectedImage.alt}</h3>
              <p>{selectedImage.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery