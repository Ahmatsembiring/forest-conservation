import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowRight } from 'react-icons/fa'
import './Hero.css'

import berries from "../assets/images/komodo.webp";
import orangutan from "../assets/images/kakaktua.jpg";
import squirrel from "../assets/images/tapir.jpeg";
import forest from "../assets/images/orangutan.webp";

const Hero = () => {
  // Foto satwa dan alam untuk gallery strip
  const galleryPhotos = [
    { id: 1, src: berries, alt: 'Red Berries' },
    { id: 2, src: orangutan, alt: 'Orangutan' },
    { id: 3, src: squirrel, alt: 'Squirrel' },
    { id: 4, src: forest, alt: 'Forest' },
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
            href="https://www.facebook.com/karantinalampung" 
            className="social-icon"
            whileHover={{ scale: 1.2, x: 5 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </motion.a>
          <motion.a 
            href="https://twitter.com/karantinalampung" 
            className="social-icon"
            whileHover={{ scale: 1.2, x: 5 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/karantinalampung/?__pwa=1" 
            className="social-icon"
            whileHover={{ scale: 1.2, x: 5 }}
            target="_blank"
            rel="noopener noreferrer"
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
              Indonesia is home to rare wildlife like the Sumatran Tiger, Elephant, 
              Rhino, and Orangutan. Protecting them means protecting our future.
            </motion.p>

           
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

        </div>
      </div>
    </section>
  )
}

export default Hero