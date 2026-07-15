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
    { 
      id: 1, 
      src: gam1,
      title: 'Penanaman Pohon',
      description: 'Kegiatan penanaman pohon di kawasan hutan'
    },
    { 
      id: 2, 
      src: gam2,
      title: 'Patroli Hutan',
      description: 'Patroli rutin untuk menjaga kelestarian hutan'
    },
    { 
      id: 3, 
      src: gam3,
      title: 'Monitoring Satwa',
      description: 'Pemantauan satwa liar di habitat aslinya'
    },
    { 
      id: 4, 
      src: gam4,
      title: 'Edukasi Masyarakat',
      description: 'Sosialisasi pentingnya konservasi hutan'
    },
    { 
      id: 5, 
      src: gam5,
      title: 'Tim PKL ITERA',
      description: 'Dokumentasi tim PKL Rekayasa Kehutanan 2026'
    },
    { 
      id: 6, 
      src: gam6,
      title: 'Kegiatan Lapangan',
      description: 'Praktik langsung di lapangan bersama BKHIT'
    },
    { 
      id: 7, 
      src: gam7,
      title: 'Konservasi Hutan',
      description: 'Upaya pelestarian hutan untuk generasi mendatang'
    },
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
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="image-wrapper">
                <img src={image.src} alt={image.title} loading="lazy" />
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
              {/* Image Info - Title & Description */}
              <div className="image-info">
                <h4 className="image-title">{image.title}</h4>
                <p className="image-description">{image.description}</p>
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
              alt={selectedImage.title}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Lightbox Info */}
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery