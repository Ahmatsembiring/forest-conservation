import { motion } from 'framer-motion'
import { FaTree, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <FaTree className="logo-icon" />
              <h2>GREENALE</h2>
            </div>
            <p>
              Dedicated to preserving our forests for future generations. 
              Join us in making a difference for our planet.
            </p>
            <div className="social-links">
              <motion.a href="#" whileHover={{ scale: 1.2 }}><FaFacebook /></motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }}><FaTwitter /></motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }}><FaInstagram /></motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }}><FaLinkedin /></motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/projects">Our Projects</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="#">Get Involved</a></li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt />
                <span>123 Forest Avenue, Green City, GC 12345</span>
              </li>
              <li>
                <FaPhone />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@greenale.org</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3>Newsletter</h3>
            <p>Subscribe to get updates on our conservation efforts</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2026 Greenale - Forest Conservation. All rights reserved.</p>
          <p>Made with ❤️ for our planet</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer