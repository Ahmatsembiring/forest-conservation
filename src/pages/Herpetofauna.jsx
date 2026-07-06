import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import WildlifeCard, { WildlifeModal } from '../components/WildlifeCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Herpetofauna.css'
import komodo from '../assets/images/komodo.webp'
import Penyu from '../assets/images/Penyu.jpg'
import penyusisik from '../assets/images/penyu-sisik.jpg'



const Herpetofauna = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null)

  const herpetofaunaData = [
    {
      id: 1,
      name: 'Komodo',
      scientificName: 'Varanus komodoensis',
      image: komodo,
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Endangered (EN)',
      citesStatus: 'Appendix I',
      description: 'Komodo adalah reptil purba terbesar di dunia yang hanya ditemukan di Indonesia (Pulau Komodo, Rinca, dan sekitarnya). Populasi sekitar 1.500 individu dewasa. Status dilindungi penuh dan Appendix I CITES karena populasi yang sangat terbatas secara geografis.',
      reference: 'https://www.indonesia.travel/id/id/travel-ideas/culture/komodo-dragons-the-majestic-giants-of-indonesia'
    },
    {
      id: 2,
      name: 'Penyu Hijau',
      scientificName: 'Chelonia mydas',
      image: Penyu,
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Endangered (EN)',
      citesStatus: 'Appendix I',
      description: 'Penyu Hijau adalah spesies penyu yang banyak ditemukan di perairan Indonesia. Ancaman utama meliputi perburuan untuk daging dan telur, kerusakan habitat peneluran, dan tangkapan sampingan dari aktivitas perikanan.',
      reference: ' https://1001indonesia.net/penyu-hijau-terancam-punah-akibat-perburuan-liar-dan-kerusakan-habitat/'
    },
    {
      id: 3,
      name: 'Penyu Sisik',
      scientificName: 'Eretmochelys imbricata',
      image: penyusisik,
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Critically Endangered (CR)',
      citesStatus: 'Appendix I',
      description: 'Penyu Sisik adalah spesies penyu yang paling terancam di antara semua penyu laut. Diperdagangkan secara ilegal untuk cangkangnya yang digunakan sebagai perhiasan dan kerajinan.',
      reference: 'https://www.temanaotemoana.org/en/did-you-know-2/'
    },
    {
      id: 4,
      name: 'Buaya Muara',
      scientificName: 'Crocodylus porosus',
      image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=800&q=80',
      legalStatus: 'Tidak dilindungi (kuota diatur)',
      iucnStatus: 'Least Concern (LC)',
      citesStatus: 'Appendix II',
      description: 'Buaya Muara tidak dilindungi secara nasional namun populasinya diatur kuota. Masuk CITES Appendix II untuk populasi Indonesia. Diperdagangkan untuk kulit dan daging.',
      reference: 'https://www.iucnredlist.org/species/5668/100776776'
    },
    {
      id: 5,
      name: 'Ular Sanca',
      scientificName: 'Pythonidae',
      image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=800&q=80',
      legalStatus: 'Tidak dilindungi (diatur)',
      iucnStatus: 'Least Concern',
      citesStatus: 'Appendix II',
      description: 'Berbagai jenis ular sanca (phyton) tidak dilindungi namun masuk CITES Appendix II. Diperdagangkan secara massal untuk industri kulit dan fashion. Volume perdagangan sangat tinggi.',
      reference: 'https://www.iucnredlist.org'
    },
    {
      id: 6,
      name: 'Biawak Air',
      scientificName: 'Varanus salvator',
      image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=800&q=80',
      legalStatus: 'Tidak dilindungi (diatur)',
      iucnStatus: 'Least Concern (LC)',
      citesStatus: 'Appendix II',
      description: 'Biawak Air tidak dilindungi namun masuk CITES Appendix II. Diperdagangkan untuk kulit dan daging. Indonesia adalah salah satu eksportir terbesar biawak dunia.',
      reference: 'https://www.iucnredlist.org/species/21473/199704532'
    }
  ]

  return (
    <>
      <Navbar />
      <div className="herpetofauna-page">
        <section className="category-hero">
          <div className="container">
            <Link to="/wildlife-protection" className="back-link">
              <FaArrowLeft /> Kembali
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Herpetofauna Indonesia
            </motion.h1>
            <p>Komodo • Penyu • Buaya • Ular Sanca • Biawak</p>
          </div>
        </section>

        <section className="category-content section-padding">
          <div className="container">
            <div className="info-box warning">
              <p>
                <strong>Catatan penting:</strong> Komodo tetap berstatus dilindungi penuh dan Appendix I CITES 
                karena populasinya yang sangat terbatas. Sebaliknya, Tuntong Sumatra justru menjadi contoh ironis: 
                berstatus IUCN paling kritis (Critically Endangered) namun belum berstatus dilindungi penuh secara 
                hukum nasional.
              </p>
            </div>
            
            <div className="wildlife-grid">
              {herpetofaunaData.map((animal) => (
                <WildlifeCard 
                  key={animal.id} 
                  animal={animal} 
                  onClick={setSelectedAnimal}
                />
              ))}
            </div>
          </div>
        </section>

        {selectedAnimal && (
          <WildlifeModal 
            animal={selectedAnimal} 
            onClose={() => setSelectedAnimal(null)} 
          />
        )}

        <Footer />
      </div>
    </>
  )
}

export default Herpetofauna