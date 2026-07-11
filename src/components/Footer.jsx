import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import './Footer.css'
import logo from '../assets/images/logo.jpeg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* Section 1: About */}
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
              Balai Karantina Hewan, Ikan, dan Tumbuhan Lampung. 
              Berdedikasi untuk melindungi keanekaragaman hayati 
              dan mencegah masuknya HPHK, HPIK, dan OPTK di Provinsi Lampung.
            </p>
          </motion.div>

          {/* Section 2: Quick Links */}
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

          {/* Section 3: Contact Info */}
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
                <div className="contact-icon green">
                  <FaMapMarkerAlt />
                </div>
                <a 
                  href="https://maps.app.goo.gl/NUPi9dZYbyR4TnSf7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-text"
                >
                  <span className="contact-label">Balai Karantina</span>
                  <span className="contact-sublabel">Pertanian Kelas I Bandar Lampung</span>
                </a>
              </li>
              
              <li>
                <div className="contact-icon blue">
                  <FaPhone />
                </div>
                <a href="tel:+15551234567" className="contact-text">
                  +1 (555) 123-4567
                </a>
              </li>
              
              <li>
                <div className="contact-icon purple">
                  <FaEnvelope />
                </div>
                <a href="mailto:info@greenale.org" className="contact-text">
                  info@greenale.org
                </a>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Footer Bottom */}
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