import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import WildlifeCard, { WildlifeModal } from '../components/WildlifeCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Aves.css'

const Aves = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null)

  const avesData = [
    {
      id: 1,
      name: 'Elang Jawa',
      scientificName: 'Nisaetus bartelsi',
      image: 'https://images.unsplash.com/photo-1611004218472-1632f54cb68e?w=800&q=80',
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Endangered (EN)',
      citesStatus: 'Appendix II',
      description: 'Elang Jawa adalah burung endemik Indonesia yang menjadi simbol negara (Garuda). Populasi diperkirakan kurang dari 1.000 individu dewasa. Ancaman utama adalah hilangnya habitat dan perdagangan ilegal.',
      reference: 'https://www.iucnredlist.org/species/22696052/131796079'
    },
    {
      id: 2,
      name: 'Jalak Bali',
      scientificName: 'Leucopsar rothschildi',
      image: 'https://images.unsplash.com/photo-1552728427-864c919c51f3?w=800&q=80',
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Critically Endangered (CR)',
      citesStatus: 'Appendix I',
      description: 'Jalak Bali adalah burung endemik Bali yang menjadi maskot provinsi. Populasi liar kurang dari 50 individu. Perdagangan ilegal untuk burung kicau menjadi ancaman utama.',
      reference: 'https://www.iucnredlist.org/species/22710688/131796079'
    },
    {
      id: 3,
      name: 'Kakatua Jambul Kuning',
      scientificName: 'Cacatua sulphurea',
      image: 'https://images.unsplash.com/photo-1550853024-feef1f4f6a7c?w=800&q=80',
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Critically Endangered (CR)',
      citesStatus: 'Appendix I',
      description: 'Kakatua Jambul Kuning adalah burung endemik Indonesia. Populasi menurun drastis akibat perdagangan ilegal untuk burung peliharaan. Diperkirakan tersisa kurang dari 7.000 individu.',
      reference: 'https://www.iucnredlist.org/species/22684656/131796079'
    },
    {
      id: 4,
      name: 'Cendrawasih',
      scientificName: 'Paradisaeidae',
      image: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?w=800&q=80',
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Near Threatened - Vulnerable',
      citesStatus: 'Appendix II',
      description: 'Cendrawasih adalah burung endemik Papua yang terkenal dengan keindahan bulunya. Berbagai spesies cendrawasih dilindungi karena perburuan untuk bulu dan perdagangan.',
      reference: 'https://www.iucnredlist.org'
    },
    {
      id: 5,
      name: 'Kakatua Putih',
      scientificName: 'Cacatua alba',
      image: 'https://images.unsplash.com/photo-1552728427-864c919c51f3?w=800&q=80',
      legalStatus: 'Tidak dilindungi (diatur)',
      iucnStatus: 'Vulnerable (VU)',
      citesStatus: 'Appendix II',
      description: 'Kakatua Putih tidak dilindungi secara nasional namun diatur dalam CITES Appendix II. Ekspor diperbolehkan dengan kuota dan izin PE-TASL sesuai Permendag 122/2018.',
      reference: 'https://www.iucnredlist.org/species/22684637/131796079'
    },
    {
      id: 6,
      name: 'Nuri-nuri',
      scientificName: 'Loriinae',
      image: 'https://images.unsplash.com/photo-1552728427-864c919c51f3?w=800&q=80',
      legalStatus: 'Tidak dilindungi (diatur)',
      iucnStatus: 'Least Concern - Near Threatened',
      citesStatus: 'Appendix II',
      description: 'Berbagai jenis nuri dan parkit Indonesia tidak dilindungi namun masuk CITES Appendix II. Perdagangan diatur dengan sistem kuota dan izin PE-TASL.',
      reference: 'https://www.iucnredlist.org'
    }
  ]

  return (
    <>
      <Navbar />
      <div className="aves-page">
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
              Aves (Burung) Indonesia
            </motion.h1>
            <p>Elang Jawa • Jalak Bali • Cendrawasih • Kakatua • Nuri</p>
          </div>
        </section>

        <section className="category-content section-padding">
          <div className="container">
            <div className="info-box">
              <p>
                <strong>Catatan:</strong> Status burung Indonesia jauh lebih beragam dibanding mamalia. 
                Sebagian besar burung dengan daya tarik tinggi sebagai hewan peliharaan eksotis 
                (kakatua, nuri, betet) berstatus "tidak dilindungi" secara hukum nasional namun tetap 
                masuk Appendix CITES.
              </p>
            </div>
            
            <div className="wildlife-grid">
              {avesData.map((animal) => (
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

export default Aves