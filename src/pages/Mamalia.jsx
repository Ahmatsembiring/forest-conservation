import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import WildlifeCard, { WildlifeModal } from '../components/WildlifeCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Mamalia.css'

const Mamalia = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null)

  const mamaliaData = [
    {
      id: 1,
      name: 'Gajah Sumatera',
      scientificName: 'Elephas maximus sumatranus',
      image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80',
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Critically Endangered (CR)',
      citesStatus: 'Appendix I',
      description: 'Gajah Sumatera adalah subspesies gajah Asia yang endemik Pulau Sumatera. Populasi liar diperkirakan kurang dari 1.500 individu. Ancaman utama meliputi hilangnya habitat akibat konversi hutan, konflik manusia-gajah, dan perburuan untuk gading.',
      reference: 'https://www.iucnredlist.org/species/7140/199704532'
    },
    {
      id: 2,
      name: 'Harimau Sumatera',
      scientificName: 'Panthera tigris sumatrae',
      image: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&q=80',
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Critically Endangered (CR)',
      citesStatus: 'Appendix I',
      description: 'Harimau Sumatera adalah subspesies harimau terakhir yang masih bertahan di Indonesia. Populasi liar diperkirakan kurang dari 600 individu. Perdagangan kulit, taring, dan bagian tubuh harimau di pasar gelap masih menjadi ancaman serius.',
      reference: 'https://www.iucnredlist.org/species/15966/163777889'
    },
    {
      id: 3,
      name: 'Orangutan Sumatera',
      scientificName: 'Pongo abelii',
      image: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&q=80',
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Critically Endangered (CR)',
      citesStatus: 'Appendix I',
      description: 'Orangutan Sumatera adalah kera besar yang hanya ditemukan di Indonesia. Populasi tersisa sekitar 14.000 individu. Ancaman utama adalah deforestasi untuk perkebunan kelapa sawit dan pertambangan.',
      reference: 'https://www.iucnredlist.org/species/17975/17966313'
    },
    {
      id: 4,
      name: 'Badak Sumatera',
      scientificName: 'Dicerorhinus sumatrensis',
      image: 'https://images.unsplash.com/photo-1535591279841-b9a0e2f6f5b5?w=800&q=80',
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Critically Endangered (CR)',
      citesStatus: 'Appendix I',
      description: 'Badak Sumatera adalah badak berambut terkecil di dunia. Diperkirakan tersisa kurang dari 80 individu. Permintaan cula badak di pasar gelap Asia tetap menjadi pendorong utama perburuan liar.',
      reference: 'https://www.iucnredlist.org/species/6557/199704532'
    },
    {
      id: 5,
      name: 'Beruang Madu',
      scientificName: 'Helarctos malayanus',
      image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=800&q=80',
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Vulnerable (VU)',
      citesStatus: 'Appendix I',
      description: 'Beruang Madu adalah spesies beruang terkecil di dunia dan satu-satunya beruang asli Indonesia. Ancaman utama adalah perburuan untuk empedu dan perdagangan ilegal sebagai satwa peliharaan.',
      reference: 'https://www.iucnredlist.org/species/9757/161234979'
    },
    {
      id: 6,
      name: 'Tapir Asia',
      scientificName: 'Tapirus indicus',
      image: 'https://images.unsplash.com/photo-1535944328698-7be51d540653?w=800&q=80',
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Endangered (EN)',
      citesStatus: 'Appendix I',
      description: 'Tapir Asia adalah satu-satunya spesies tapir yang hidup di luar benua Amerika. Berperan penting sebagai penyebar biji bagi regenerasi hutan tropis. Ancaman utama adalah hilangnya hutan dataran rendah.',
      reference: 'https://www.iucnredlist.org/species/21473/199704532'
    }
  ]

  return (
    <>
      <Navbar />
      <div className="mamalia-page">
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
              Mamalia Kunci Indonesia
            </motion.h1>
            <p>Gajah • Harimau • Badak • Orangutan • Beruang • Tapir</p>
          </div>
        </section>

        <section className="category-content section-padding">
          <div className="container">
            <div className="wildlife-grid">
              {mamaliaData.map((animal) => (
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

export default Mamalia