import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowRight } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  // Foto satwa dan alam untuk gallery strip
  const galleryPhotos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&q=80', alt: 'Red Berries' },
    { id: 2, src: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=400&q=80', alt: 'Orangutan' },
    { id: 3, src: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=400&q=80', alt: 'Squirrel' },
    { id: 4, src: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=400&q=80', alt: 'Forest' },
  ]

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-container">
        {/* Social Media Sidebar - Right Side */}
        <div className="social-sidebar">
          <motion.a 
            href="#" 
            className="social-icon"
            whileHover={{ scale: 1.2, x: 5 }}
          >
            <FaFacebookF />
          </motion.a>
          <motion.a 
            href="#" 
            className="social-icon"
            whileHover={{ scale: 1.2, x: 5 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a 
            href="#" 
            className="social-icon"
            whileHover={{ scale: 1.2, x: 5 }}
          >
            <FaInstagram />
          </motion.a>
        </div>

        {/* Main Content */}
        <div className="hero-content">
          <div className="hero-text-left">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              SAVE OUR <span className="highlight">FOREST</span>
            </motion.h1>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Forests are the lungs of the earth; essential for environmental stability 
              and human health and happiness. These magnificent and ancient ecosystems 
              are home to 50 percent of all terrestrial species on Earth.
            </motion.p>

            

            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="stat-item">
                <h3>50%</h3>
                <p>Species Habitat</p>
              </div>
              <div className="stat-item">
                <h3>1.6B</h3>
                <p>People Depend</p>
              </div>
              <div className="stat-item">
                <h3>30%</h3>
                <p>Land Coverage</p>
              </div>
            </motion.div>
          </div>

          {/* Photo Gallery Strip - Bottom Right */}
          <motion.div 
            className="gallery-strip"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {galleryPhotos.map((photo, index) => (
              <motion.div 
                key={photo.id}
                className="gallery-photo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + (index * 0.1) }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                <img src={photo.src} alt={photo.alt} />
                <div className="photo-overlay"></div>
              </motion.div>
            ))}
            <motion.div 
              className="gallery-nav"
              whileHover={{ scale: 1.1 }}
            >
              <FaArrowRight />
            </motion.div>
          </motion.div>

          {/* Slider Indicators */}
          <div className="slider-indicators">
            <span className="indicator active">01</span>
            <span className="line"></span>
            <span className="indicator">02</span>
            <span className="indicator">03</span>
            <span className="indicator">04</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero