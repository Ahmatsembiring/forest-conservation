import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import './Footer.css'
import logo from '../assets/images/logo.jpeg' // Import logo

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
              <img src={logo} alt="BKHIT Logo" className="footer-logo-img" />
              <h2>BKHIT</h2>
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
              <li><a href="/wildlife-protection">Wildlife Protection</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </motion.div>

         <motion.div 
  className="footer-section"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
>
  <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Info</h3>
  <ul className="contact-info space-y-3">
    {/* Address with Google Maps Link */}
    <li className="flex items-start gap-3 group">
      <div className="mt-1 p-2 bg-green-100 rounded-lg text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
        <FaMapMarkerAlt className="w-5 h-5" />
      </div>
      <a 
        href="https://maps.app.goo.gl/NUPi9dZYbyR4TnSf7" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex-1"
      >
        <span className="block font-medium">Balai Karantina </span>
        <span className="block text-sm">Pertanian Kelas I Bandar Lampung</span>
        <span className="text-xs text-green-600 mt-1 inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        </span>
      </a>
    </li>
    
    {/* Phone */}
    <li className="flex items-center gap-3 group">
      <div className="p-2 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        <FaPhone className="w-5 h-5" />
      </div>
      <a 
        href="tel:+15551234567" 
        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
      >
        +1 (555) 123-4567
      </a>
    </li>
    
    {/* Email */}
    <li className="flex items-center gap-3 group">
      <div className="p-2 bg-purple-100 rounded-lg text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
        <FaEnvelope className="w-5 h-5" />
      </div>
      <a 
        href="mailto:info@greenale.org" 
        className="text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium break-all"
      >
        info@greenale.org
      </a>
    </li>
  </ul>
</motion.div>
          
        </div>

        <motion.div
  className="footer-bottom"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <p>
    © 2026 <strong>Greenale – Forest Conservation</strong>. All rights reserved.
  </p>

  <p className="footer-credit">
    Developed by <strong>Tim PKL ITERA – Rekayasa Kehutanan 2026</strong>
  </p>

  <p className="footer-tagline">
    🌿 Protecting Nature Through Technology • Made with ❤️ for Our Planet
  </p>
</motion.div>
      </div>
    </footer>
  )
}

export default Footer