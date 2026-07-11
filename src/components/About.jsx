import { motion } from 'framer-motion'
import { 
  FaGavel, FaShieldAlt, FaMapMarkerAlt, 
  FaShip, FaPlane, FaTruck, FaBuilding, FaHistory,
  FaBalanceScale, FaClipboardCheck, FaSearch
} from 'react-icons/fa'
import './About.css'
import strukturOrg from '../assets/images/struktur.jpeg'

const About = () => {
  // Timeline Sejarah
  const timelineEvents = [
    {
      year: '1877',
      title: 'Awal Mula Karantina',
      description: 'Pemerintah Hindia Belanda menerbitkan ordonansi larangan masuk tanaman dan biji kopi dari Sri Lanka untuk melindungi perkebunan kopi dari penyakit karat daun.'
    },
    {
      year: '1914',
      title: 'Cikal Bakal Kelembagaan',
      description: 'Dibentuk Balai Penyelidikan Penyakit Tanaman dan Budi Daya — dianggap sebagai cikal bakal kelembagaan karantina modern di Indonesia.'
    },
    {
      year: '1992',
      title: 'Landasan Hukum Komprehensif',
      description: 'Pengesahan UU No. 16 Tahun 1992 tentang Karantina Hewan, Ikan, dan Tumbuhan sebagai dasar hukum pertama yang menyeluruh.'
    },
    {
      year: '2019',
      title: 'Era Baru Karantina',
      description: 'UU No. 21 Tahun 2019 memperluas cakupan kewenangan karantina, mencakup pengawasan keamanan pangan, produk rekayasa genetik, hingga satwa liar.'
    },
    {
      year: '2023',
      title: 'Lahirnya Barantin',
      description: 'Perpres No. 45 Tahun 2023 menggabungkan Badan Karantina Pertanian dan BKIPM menjadi Badan Karantina Indonesia (Barantin).'
    }
  ]

  // Dasar Hukum
  const legalBases = [
    {
      icon: <FaBalanceScale />,
      title: 'UU No. 21 Tahun 2019',
      description: 'Karantina Hewan, Ikan, dan Tumbuhan — dasar hukum utama seluruh kegiatan perkarantinaan nasional.'
    },
    {
      icon: <FaBuilding />,
      title: 'Perpres No. 45 Tahun 2023',
      description: 'Pembentukan Badan Karantina Indonesia beserta unit pelaksana teknisnya di daerah.'
    },
    {
      icon: <FaGavel />,
      title: 'UU No. 32 Tahun 2024',
      description: 'Konservasi Sumber Daya Alam Hayati — relevan dalam pengawasan lalu lintas tumbuhan dan satwa liar/dilindungi.'
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Perban No. 2 Tahun 2024',
      description: 'Rencana Strategis Badan Karantina Indonesia 2024 sebagai acuan penyusunan Renstra tiap UPT.'
    }
  ]

  // Tugas dan Fungsi
  const functions = [
    {
      icon: <FaSearch />,
      title: 'Pemeriksaan',
      description: 'Pemeriksaan dokumen dan fisik terhadap media pembawa yang masuk, keluar, atau lintas wilayah.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Pengendalian',
      description: 'Pencegahan masuk, keluar, dan tersebarnya HPHK, HPIK, dan OPTK di wilayah kerja.'
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Sertifikasi',
      description: 'Penerbitan sertifikat kesehatan/karantina bagi media pembawa yang telah memenuhi persyaratan.'
    },
    {
      icon: <FaGavel />,
      title: 'Penindakan',
      description: 'Perlakuan, penahanan, penolakan, hingga pemusnahan media pembawa yang berisiko tinggi.'
    }
  ]

  // Wilayah Kerja
  const workAreas = [
    {
      icon: <FaShip />,
      name: 'Pelabuhan Panjang',
      role: 'Pelabuhan laut utama untuk ekspor-impor komoditas pertanian dan perikanan'
    },
    {
      icon: <FaTruck />,
      name: 'Pelabuhan Bakauheni',
      role: 'Jalur penyeberangan Sumatra–Jawa dengan volume tertinggi — garda terdepan pengawasan'
    },
    {
      icon: <FaPlane />,
      name: 'Bandara Radin Inten II',
      role: 'Jalur lalu lintas udara yang menghubungkan Lampung dengan wilayah lain di Indonesia'
    },
    {
      icon: <FaMapMarkerAlt />,
      name: 'Kantor Pos Pahoman',
      role: 'Jalur distribusi paket dan kiriman pos yang melintasi wilayah Provinsi Lampung'
    }
  ]

  return (
    <section className="about section-padding">
      <div className="container">
        
        {/* Hero Title */}
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Tentang BKHIT Lampung</h2>
          <p>Sejarah, kedudukan, tugas, dan wilayah kerja Balai Karantina Hewan, Ikan, dan Tumbuhan Lampung</p>
        </motion.div>

        {/* ===== SECTION 1: SEJARAH (TIMELINE) ===== */}
        <motion.div 
          className="about-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <FaHistory className="section-header-icon" />
            <h3>Perjalanan Sejarah Kelembagaan</h3>
            <p className="section-subtitle">Dari masa kolonial hingga lahirnya Badan Karantina Indonesia</p>
          </div>

          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{event.year}</div>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== SECTION 2: DASAR HUKUM ===== */}
        <motion.div 
          className="about-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <FaGavel className="section-header-icon" />
            <h3>Dasar Hukum</h3>
            <p className="section-subtitle">Regulasi yang menjadi landasan penyelenggaraan tugas BKHIT Lampung</p>
          </div>

          <div className="legal-grid">
            {legalBases.map((legal, index) => (
              <motion.div 
                key={index}
                className="legal-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, boxShadow: '0 15px 40px rgba(0,0,0,0.12)' }}
              >
                <div className="legal-icon">{legal.icon}</div>
                <h4>{legal.title}</h4>
                <p>{legal.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== SECTION 3: TUGAS DAN FUNGSI ===== */}
        <motion.div 
          className="about-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <FaShieldAlt className="section-header-icon" />
            <h3>Tugas dan Fungsi</h3>
            <p className="section-subtitle">
              Mencegah masuk, keluar, dan tersebarnya HPHK, HPIK, dan OPTK serta melakukan pengawasan 
              keamanan pangan, produk rekayasa genetik, hingga satwa liar di Provinsi Lampung
            </p>
          </div>

          <div className="functions-grid">
            {functions.map((func, index) => (
              <motion.div 
                key={index}
                className="function-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="function-icon">{func.icon}</div>
                <h4>{func.title}</h4>
                <p>{func.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== SECTION 4: WILAYAH KERJA ===== */}
        <motion.div 
          className="about-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <FaMapMarkerAlt className="section-header-icon" />
            <h3>Wilayah Kerja</h3>
            <p className="section-subtitle">
              Titik-titik strategis di Provinsi Lampung yang menjadi garda terdepan pengawasan karantina
            </p>
          </div>

          <div className="work-areas">
            {workAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="work-area-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ x: 10, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              >
                <div className="work-area-icon">{area.icon}</div>
                <div className="work-area-content">
                  <h4>{area.name}</h4>
                  <p>{area.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlight Bakauheni */}
          <motion.div 
            className="highlight-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="highlight-icon">
              <FaTruck />
            </div>
            <div className="highlight-content">
              <h4>Satpel Bakauheni — Garda Terdepan</h4>
              <p>
                Sebagai jalur penyeberangan tersibuk Sumatra–Jawa, Satpel Bakauheni menjadi titik paling strategis 
                dalam struktur wilayah kerja BKHIT Lampung. Tingginya volume kendaraan pribadi, bus antar provinsi, 
                dan truk ekspedisi menjadikannya garda terdepan pengawasan lalu lintas hewan, ikan, dan tumbuhan.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ===== SECTION 5: STRUKTUR ORGANISASI ===== */}
        <motion.div 
          className="about-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="struktur-container">
            <motion.img 
              src={strukturOrg} 
              alt="Struktur Organisasi BKHIT Lampung"
              className="struktur-image"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.01 }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About