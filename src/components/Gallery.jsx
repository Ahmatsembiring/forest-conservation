import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaTimes, FaSearchPlus, FaFilter, FaUsers, 
  FaPaw, FaSearch, FaImages 
} from 'react-icons/fa'
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
  const [activeTab, setActiveTab] = useState('all') // all, wildlife, team
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Data Wildlife (foto 1-8)
  const wildlifeImages = [
    { id: 1, src: foto1, alt: 'Gajah Sumatera', category: 'Mamalia', tags: ['Dilindungi', 'Endemik'] },
    { id: 2, src: foto2, alt: 'Harimau Sumatera', category: 'Mamalia', tags: ['Critically Endangered'] },
    { id: 3, src: foto3, alt: 'Orangutan', category: 'Mamalia', tags: ['Endangered', 'Primates'] },
    { id: 4, src: foto4, alt: 'Badak Sumatera', category: 'Mamalia', tags: ['Critically Endangered'] },
    { id: 5, src: foto5, alt: 'Elang Jawa', category: 'Aves', tags: ['Bird of Prey', 'Endemik'] },
    { id: 6, src: foto6, alt: 'Kakatua', category: 'Aves', tags: ['Protected'] },
    { id: 7, src: foto7, alt: 'Penyu', category: 'Herpetofauna', tags: ['Marine', 'Endangered'] },
    { id: 8, src: foto8, alt: 'Komodo', category: 'Herpetofauna', tags: ['Endemik', 'Protected'] },
  ]

  // Data Team (foto 9-14)
  const teamMembers = [
    { id: 9, src: foto9, alt: 'Dr. Ahmad Santoso', position: 'Kepala Balai', department: 'Leadership', bio: '20+ tahun pengalaman karantina' },
    { id: 10, src: foto10, alt: 'Dr. Siti Nurhaliza', position: 'Kepala Subbagian Umum', department: 'Administration', bio: 'Spesialis manajemen organisasi' },
    { id: 11, src: foto11, alt: 'Ir. Budi Wijaya', position: 'Karantina Hewan', department: 'Animal Quarantine', bio: 'Ahli kesehatan hewan' },
    { id: 12, src: foto12, alt: 'Drh. Rina Susanti', position: 'Karantina Ikan', department: 'Fish Quarantine', bio: 'Spesialis penyakit ikan' },
    { id: 13, src: foto13, alt: 'Ir. Hendro Prasetyo', position: 'Karantina Tumbuhan', department: 'Plant Quarantine', bio: 'Ahli OPTK' },
    { id: 14, src: foto14, alt: 'Tim Lapangan', position: 'Petugas Karantina', department: 'Field Team', bio: 'Garda terdepan BKHIT Lampung' },
  ]

  // Filter logic
  const filterImages = () => {
    let filtered = []
    
    if (activeTab === 'all' || activeTab === 'wildlife') {
      filtered = [...wildlifeImages]
    }
    
    if (activeTab === 'all' || activeTab === 'team') {
      filtered = [...filtered, ...teamMembers]
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.position?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return filtered
  }

  const filteredData = filterImages()
  const wildlifeCount = wildlifeImages.length
  const teamCount = teamMembers.length

  return (
    <section className="gallery section-padding">
      <div className="container">
        
        {/* Header Section */}
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Galeri BKHIT Lampung</h2>
          <p>Dokumentasi satwa dilindungi dan tim karantina kami</p>
          
          {/* Stats Counter */}
          <div className="gallery-stats">
            <motion.div 
              className="stat-item"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FaPaw className="stat-icon wildlife" />
              <div className="stat-number">{wildlifeCount}+</div>
              <div className="stat-label">Satwa Terekam</div>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <FaUsers className="stat-icon team" />
              <div className="stat-number">{teamCount}</div>
              <div className="stat-label">Anggota Tim</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div 
          className="gallery-controls"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Tab Filter */}
          <div className="filter-tabs">
            <button 
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              <FaImages /> Semua
            </button>
            <button 
              className={`tab-btn ${activeTab === 'wildlife' ? 'active' : ''}`}
              onClick={() => setActiveTab('wildlife')}
            >
              <FaPaw /> Satwa
            </button>
            <button 
              className={`tab-btn ${activeTab === 'team' ? 'active' : ''}`}
              onClick={() => setActiveTab('team')}
            >
              <FaUsers /> Tim Kami
            </button>
          </div>

          {/* Search Box */}
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Cari satwa atau anggota tim..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Gallery Grid */}
        {isLoading ? (
          <div className="skeleton-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="skeleton-card"></div>
            ))}
          </div>
        ) : (
          <div className={`gallery-grid ${activeTab === 'team' ? 'team-grid' : 'wildlife-grid'}`}>
            <AnimatePresence mode='wait'>
              {filteredData.map((item, index) => (
                <motion.div 
                  key={item.id}
                  className={`gallery-item ${item.position ? 'team-card' : 'wildlife-card'}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedImage(item)}
                  layout
                >
                  {/* Wildlife Card */}
                  {!item.position && (
                    <>
                      <div className="image-wrapper">
                        <img src={item.src} alt={item.alt} loading="lazy" />
                        <motion.div 
                          className="gallery-overlay"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <div className="overlay-content">
                            <FaSearchPlus className="overlay-icon" />
                            <span>{item.category}</span>
                          </div>
                        </motion.div>
                      </div>
                      <div className="wildlife-info">
                        <h4>{item.alt}</h4>
                        <div className="tags">
                          {item.tags?.map((tag, i) => (
                            <span key={i} className="tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Team Card */}
                  {item.position && (
                    <div className="team-content">
                      <div className="image-wrapper">
                        <img src={item.src} alt={item.alt} loading="lazy" />
                        <div className="team-badge">{item.department}</div>
                      </div>
                      <div className="team-info">
                        <h4>{item.alt}</h4>
                        <p className="position">{item.position}</p>
                        <p className="bio">{item.bio}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredData.length === 0 && (
          <motion.div 
            className="empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaSearch className="empty-icon" />
            <h3>Tidak ditemukan</h3>
            <p>Tidak ada hasil pencarian untuk "{searchTerm}"</p>
          </motion.div>
        )}

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
              {selectedImage.category && (
                <p className="category">{selectedImage.category}</p>
              )}
              {selectedImage.position && (
                <>
                  <p className="position">{selectedImage.position}</p>
                  <p className="department">{selectedImage.department}</p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery