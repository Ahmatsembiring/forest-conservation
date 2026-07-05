import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPaw, FaCrow, FaDragon } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './WildlifeProtection.css'

const WildlifeProtection = () => {
  return (
    <>
      <Navbar />
      <div className="wildlife-protection-page">
        
        {/* Hero Section */}
        <section className="wp-hero">
          <div className="hero-overlay"></div>
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Status Perlindungan, Konservasi, dan Regulasi Perdagangan
            </motion.h1>
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Satwa Kunci Indonesia
            </motion.h2>
            <motion.p 
              className="hero-tags"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Gajah Sumatera • Harimau Sumatera • Badak • Orangutan • Aves • Herpetofauna
            </motion.p>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Kajian berdasarkan Undang-Undang Republik Indonesia, Status IUCN Red List, dan Appendix CITES
            </motion.p>
          </div>
        </section>

        {/* Introduction - Storytelling */}
        <section className="wp-intro section-padding">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="intro-content">
                <p className="intro-text">
                  Indonesia merupakan salah satu negara <strong>megabiodiversity</strong> dunia, menempati posisi strategis 
                  dalam peta keanekaragaman hayati global bersama Brasil dan Republik Demokratik Kongo.
                </p>
                <p className="intro-text">
                  Pulau Sumatera, sebagai salah satu pusat keanekaragaman hayati terpenting, menjadi habitat bagi 
                  sejumlah spesies ikonik yang berstatus terancam punah tingkat global: <strong>Gajah Sumatera</strong>, 
                  <strong> Harimau Sumatera</strong>, <strong>Badak Sumatera</strong>, dan <strong>Orangutan Sumatera/Tapanuli</strong>.
                </p>
                <p className="intro-text">
                  Di luar mamalia besar tersebut, kelompok burung (aves) dan herpetofauna (reptil dan amfibi) Indonesia 
                  juga menghadapi tekanan serupa akibat hilangnya habitat, perburuan, dan perdagangan ilegal.
                </p>
                
                <div className="intro-highlight">
                  <p>
                    Perlindungan terhadap satwa-satwa ini diatur melalui <strong>tiga kerangka kerja yang saling melengkapi</strong>: 
                    (1) hukum nasional Indonesia, (2) penilaian ilmiah status konservasi oleh IUCN, dan (3) regulasi 
                    perdagangan internasional melalui CITES.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Three Frameworks */}
        <section className="wp-frameworks section-padding bg-light">
          <div className="container">
            <h2 className="section-title">Tiga Lapis Status: Perbedaan Konseptual</h2>
            
            <div className="framework-table">
              <table>
                <thead>
                  <tr>
                    <th>Aspek</th>
                    <th>Sumber</th>
                    <th>Sifat</th>
                    <th>Fungsi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Status Hukum RI</strong></td>
                    <td>UU 5/1990, PP 7/1999</td>
                    <td>Mengikat secara hukum nasional</td>
                    <td>Menentukan boleh/tidaknya pemanfaatan & perdagangan di Indonesia</td>
                  </tr>
                  <tr>
                    <td><strong>Status IUCN Red List</strong></td>
                    <td>Penilaian ilmiah IUCN</td>
                    <td>Tidak mengikat hukum, bersifat indikatif</td>
                    <td>Mengukur risiko kepunahan global berdasarkan data populasi & tren</td>
                  </tr>
                  <tr>
                    <td><strong>Status CITES Appendix</strong></td>
                    <td>Konvensi internasional (175+ negara)</td>
                    <td>Mengikat lintas negara</td>
                    <td>Mengatur izin lintas batas (ekspor-impor-re-ekspor)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box">
              <p>
                <em>Ketiga status ini tidak selalu sejalan. Sebuah spesies bisa saja "tidak dilindungi" UU Indonesia 
                tapi masuk Appendix II CITES, atau sebaliknya — dilindungi penuh UU RI namun IUCN-nya hanya 
                "Vulnerable", bukan "Critically Endangered".</em>
              </p>
            </div>
          </div>
        </section>

        {/* Legal Basis */}
        <section className="wp-legal section-padding">
          <div className="container">
            <h2 className="section-title">Dasar Hukum Nasional</h2>
            <p className="section-description">
              Perlindungan satwa liar di Indonesia bersumber dari beberapa peraturan perundang-undangan berikut:
            </p>
            
            <div className="legal-list">
              <motion.div 
                className="legal-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="legal-number">1</div>
                <div className="legal-content">
                  <h3>Undang-Undang Nomor 5 Tahun 1990</h3>
                  <p>Tentang Konservasi Sumber Daya Alam Hayati dan Ekosistemnya — dasar hukum tertinggi yang membagi satwa menjadi dilindungi dan tidak dilindungi.</p>
                </div>
              </motion.div>

              <motion.div 
                className="legal-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="legal-number">2</div>
                <div className="legal-content">
                  <h3>Peraturan Pemerintah Nomor 7 Tahun 1999</h3>
                  <p>Tentang Pengawetan Jenis Tumbuhan dan Satwa — memuat daftar resmi spesies dilindungi, diperbarui melalui Peraturan Menteri LHK Nomor P.106 Tahun 2018.</p>
                </div>
              </motion.div>

              <motion.div 
                className="legal-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="legal-number">3</div>
                <div className="legal-content">
                  <h3>Peraturan Pemerintah Nomor 8 Tahun 1999</h3>
                  <p>Tentang Pemanfaatan Jenis Tumbuhan dan Satwa Liar — mengatur pemanfaatan spesies tidak dilindungi.</p>
                </div>
              </motion.div>

              <motion.div 
                className="legal-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="legal-number">4</div>
                <div className="legal-content">
                  <h3>Peraturan Menteri Perdagangan Nomor 122 Tahun 2018</h3>
                  <p>Secara spesifik mengatur ekspor tumbuhan dan satwa liar yang tidak dilindungi namun masuk daftar CITES.</p>
                </div>
              </motion.div>
            </div>

            <div className="critical-note">
              <p>
                <strong>Poin krusial:</strong> kelima kelompok satwa yang menjadi fokus — gajah, harimau, badak, orangutan, 
                serta sebagian besar jenis burung dan herpetofauna ikonik Indonesia — berstatus <strong>dilindungi penuh</strong> oleh undang-undang. 
                Konsekuensinya, satwa-satwa ini tidak termasuk dalam daftar Permendag 122/2018 dan sama sekali tidak boleh diperdagangkan.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Navigation */}
        <section className="wp-categories section-padding bg-light">
          <div className="container">
            <h2 className="section-title">Jelajahi Status Perlindungan Satwa</h2>
            <p className="section-description">
              Pilih kategori satwa untuk melihat informasi detail tentang status perlindungan, konservasi, dan regulasi
            </p>
            
            <div className="categories-grid">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/wildlife-protection/mamalia" className="category-card mamalia">
                  <div className="category-icon">
                    <FaPaw />
                  </div>
                  <h3>Mamalia</h3>
                  <p>Gajah Sumatera, Harimau, Badak, Orangutan dan mamalia besar lainnya</p>
                  <span className="category-link">Lihat Detail →</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link to="/wildlife-protection/aves" className="category-card aves">
                  <div className="category-icon">
                    <FaCrow />  {/* ← PERBAIKAN: Ganti FaBird dengan FaCrow */}
                  </div>
                  <h3>Aves (Burung)</h3>
                  <p>Elang Jawa, Jalak Bali, Cendrawasih, Kakatua, dan berbagai spesies burung endemik</p>
                  <span className="category-link">Lihat Detail →</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/wildlife-protection/herpetofauna" className="category-card herpetofauna">
                  <div className="category-icon">
                    <FaDragon />
                  </div>
                  <h3>Herpetofauna</h3>
                  <p>Komodo, Penyu, Buaya, Ular Sanca, Biawak, dan reptil serta amfibi Indonesia</p>
                  <span className="category-link">Lihat Detail →</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default WildlifeProtection 