import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import WildlifeCard, { WildlifeModal } from '../components/WildlifeCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Mamalia.css'
import gajah from '../assets/images/gajah.jpg' // Import gambar gajah
import harimau from '../assets/images/Harimau.jpg' // Import gambar harimau
import badaak from '../assets/images/badak.jpg' // Import gambar badak
import orangutan from '../assets/images/orangutan.webp' 
import Tringgiling from '../assets/images/Tringgiling.jpg'
import tapir from '../assets/images/tapir.jpeg'
import beruang from '../assets/images/Beruang.jpg'

// Import gambar orangutan

const Mamalia = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null)

  const mamaliaData = [
    {
      id: 1,
      name: 'Gajah Sumatera',
      scientificName: 'Elephas maximus sumatranus',
      image: gajah,
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Critically Endangered (CR)',
      citesStatus: 'Appendix I',
      description: 'Gajah Sumatera adalah subspesies gajah Asia yang endemik Pulau Sumatera. Populasi liar diperkirakan kurang dari 1.500 individu. Ancaman utama meliputi hilangnya habitat akibat konversi hutan, konflik manusia-gajah, dan perburuan untuk gading.',
      reference: ' https://www.betahita.id/berita/11850/punah-gajah-sumatera-karena-michelin-geopix'
    },
    {
      id: 2,
      name: 'Harimau Sumatera',
      scientificName: 'Panthera tigris sumatrae',
      image: harimau,
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Critically Endangered (CR)',
      citesStatus: 'Appendix I',
      description: 'Harimau Sumatera adalah subspesies harimau terakhir yang masih bertahan di Indonesia. Populasi liar diperkirakan kurang dari 600 individu. Perdagangan kulit, taring, dan bagian tubuh harimau di pasar gelap masih menjadi ancaman serius.',
      reference: ' https://bskdn.kemendagri.go.id/website/wp-content/uploads/2018/03/Harimau-800x400.jpg'
    },
    {
      id: 3,
      name: 'Orangutan Sumatera',
      scientificName: 'Pongo abelii',
      image: orangutan,
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Critically Endangered (CR)',
      citesStatus: 'Appendix I',
      description: 'Orangutan Sumatera adalah kera besar yang hanya ditemukan di Indonesia. Populasi tersisa sekitar 14.000 individu. Ancaman utama adalah deforestasi untuk perkebunan kelapa sawit dan pertambangan.',
      reference: 'https://www.indonesia.travel/id/id/destination/sumatra/north-sumatra/orangutan-sumatera'
    },
    {
      id: 4,
      name: 'Badak Sumatera',
      scientificName: 'Dicerorhinus sumatrensis',
      image: badaak,
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Critically Endangered (CR)',
      citesStatus: 'Appendix I',
      description: 'Badak Sumatera adalah badak berambut terkecil di dunia. Diperkirakan tersisa kurang dari 80 individu. Permintaan cula badak di pasar gelap Asia tetap menjadi pendorong utama perburuan liar.',
      reference: 'https://badak.or.id/sumatran-rhino/'
    },
     {
      id: 5,
      name: 'Trenggiling Sunda ',
      scientificName: 'Manis javanica',
      image:Tringgiling,
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Critically Endangered (CR)',
      citesStatus: 'Appendix I',
      description: 'Trenggiling Sunda adalah hewan yang hampir punah. Diperkirakan tersisa kurang dari 500 individu. Ancaman utama adalah habitat yang hilang dan perburuan liar.',
      reference: 'https://animalium.id/2022/12/08/si-manis-dari-jawa-yang-rawan-diburu/'
    },
    {
      id: 6,
      name: 'Tapir Asia ',
      scientificName: 'Tapirus indicus',
      image:tapir,
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Critically Endangered (CR)',
      citesStatus: 'Appendix I',
      description: 'Tapir Asia adalah satu-satunya spesies tapir yang hidup di luar benua Amerika, dan merupakan mamalia berkuku ganjil terbesar di Sumatera setelah badak. Tapir berperan penting sebagai penyebar biji (seed disperser) bagi regenerasi hutan tropis. Ancaman utamanya adalah hilangnya hutan dataran rendah akibat konversi lahan, di samping perburuan untuk daging dan bagian tubuh tertentu.',
      reference: ' https://www.edgeofexistence.org/blog/its-world-tapir-day-wait-whats-a-tapir/'
    },
    {
      id: 7,
      name: 'Beruang Madu ',
      scientificName: 'Helarctos malayanus',
      image:beruang,
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Critically Endangered (CR)',
      citesStatus: 'Appendix I',
      description: 'Beruang Madu adalah spesies beruang terkecil di dunia dan satu-satunya beruang asli Indonesia, tersebar di hutan Sumatera dan Kalimantan',
      reference: ' https://animalium.id/2023/02/23/beruang-madu-sebar-biji-regenerasi-hutan/'
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