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
import buaya from '../assets/images/buaya.jpg'
import ular from '../assets/images/ular.png'
import biawak from '../assets/images/biawak.jpg'
import Tuntong from '../assets/images/Tuntong.jpg'




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
      image: buaya,
      legalStatus: 'Tidak dilindungi (kuota diatur)',
      iucnStatus: 'Least Concern (LC)',
      citesStatus: 'Appendix II',
      description: 'Buaya Muara tidak dilindungi secara nasional namun populasinya diatur kuota. Masuk CITES Appendix II untuk populasi Indonesia. Diperdagangkan untuk kulit dan daging.',
      reference: ' https://sumatra.bisnis.com/read/20191208/533/1179122/buaya-muara-muncul-di-sungai-lematang-warga-diminta-waspada'
    },
    {
      id: 5,
      name: 'Ular Sanca',
      scientificName: 'Pythonidae',
      image: ular,
      legalStatus: 'Tidak dilindungi (diatur)',
      iucnStatus: 'Least Concern',
      citesStatus: 'Appendix II',
      description: 'Berbagai jenis ular sanca (phyton) tidak dilindungi namun masuk CITES Appendix II. Diperdagangkan secara massal untuk industri kulit dan fashion. Volume perdagangan sangat tinggi.',
      reference: ' https://bobo.grid.id/read/08673983/inilah-7-fakta-ular-piton-yang-perlu-kamu-ketahui?page=all'
    },
    {
      id: 6,
      name: 'Biawak Air',
      scientificName: 'Varanus salvator',
      image:biawak,
      legalStatus: 'Tidak dilindungi (diatur)',
      iucnStatus: 'Least Concern (LC)',
      citesStatus: 'Appendix II',
      description: 'Biawak Air tidak dilindungi namun masuk CITES Appendix II. Diperdagangkan untuk kulit dan daging. Indonesia adalah salah satu eksportir terbesar biawak dunia.',
      reference: ' https://a-z-animals.com/animals/asian-water-monitor/'
    },
     {
      id: 7,
      name: 'Tuntong laut',
      scientificName: 'Batagur borneoensis',
      image:Tuntong,
      legalStatus: 'Tidak dilindungi (diatur)',
      iucnStatus: 'Least Concern (LC)',
      citesStatus: 'Appendix II',
      description: 'beluku adalah sejenis kura-kura yang ditemukan hidup di Thailand, Malaysia, Kalimantan dan Sumatra.Semula kura-kura ini dimasukkan ke dalam genus Callagur, tetapi kajian filogeni berdasarkan karakter DNA mitokondria yang dilakukan pada 2007 menunjukkan bahwa marga tersebut lebih tepat dilebur dalam genus Batagur.',
      reference: ' https://id.wikipedia.org/wiki/Tuntong_laut'
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