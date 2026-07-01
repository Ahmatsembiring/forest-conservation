import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WildlifeCard, { WildlifeModal } from '../components/WildlifeCard'
import { motion } from 'framer-motion'
import './WildlifeProtection.css'

const WildlifeProtection = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null)

  // Data satwa liar Indonesia
  const wildlifeData = [
    {
      id: 1,
      name: 'Gajah Sumatera',
      scientificName: 'Elephas maximus sumatranus',
      image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80',
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Critically Endangered (CR)',
      citesStatus: 'Appendix I',
      description: 'Gajah Sumatera adalah subspesies gajah Asia yang endemik Pulau Sumatera. Populasi liar diperkirakan kurang dari 1.500 individu, tersebar dalam fragmented populations di seluruh Sumatera. Ancaman utama meliputi hilangnya habitat akibat konversi hutan, konflik manusia-gajah, dan perburuan untuk gading (pada gajah jantan).',
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
      description: 'Harimau Sumatera adalah subspesies harimau terakhir yang masih bertahan di Indonesia, setelah punahnya Harimau Jawa dan Harimau Bali pada abad ke-20. Populasi liar diperkirakan kurang dari 600 individu, menjadikannya salah satu kucing besar paling terancam di dunia.',
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
      description: 'Orangutan Sumatera adalah salah satu dari tiga spesies orangutan yang ada di Indonesia. Populasi tersisa sekitar 14.000 individu. Ancaman utama adalah deforestasi untuk perkebunan kelapa sawit dan pertambangan.',
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
      id: 6,
      name: 'Komodo',
      scientificName: 'Varanus komodoensis',
      image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=800&q=80',
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Endangered (EN)',
      citesStatus: 'Appendix I',
      description: 'Komodo adalah reptil purba terbesar di dunia yang hanya ditemukan di Indonesia (Pulau Komodo, Rinca, dan sekitarnya). Populasi sekitar 1.500 individu dewasa. Status dilindungi penuh karena populasi yang sangat terbatas secara geografis.',
      reference: 'https://www.iucnredlist.org/species/17823/119164893'
    },
    {
      id: 7,
      name: 'Penyu Hijau',
      scientificName: 'Chelonia mydas',
      image: 'https://images.unsplash.com/photo-1437622368342-7a3d73180219?w=800&q=80',
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Endangered (EN)',
      citesStatus: 'Appendix I',
      description: 'Penyu Hijau adalah spesies penyu yang banyak ditemukan di perairan Indonesia. Ancaman utama meliputi perburuan untuk daging dan telur, kerusakan habitat peneluran, dan tangkapan sampingan (bycatch) dari aktivitas perikanan.',
      reference: 'https://www.iucnredlist.org/species/4615/11037468'
    },
    {
      id: 8,
      name: 'Beruang Madu',
      scientificName: 'Helarctos malayanus',
      image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=800&q=80',
      legalStatus: 'Dilindungi penuh',
      iucnStatus: 'Vulnerable (VU)',
      citesStatus: 'Appendix I',
      description: 'Beruang Madu adalah spesies beruang terkecil di dunia dan satu-satunya beruang asli Indonesia. Ancaman utama adalah perburuan untuk empedu (dipercaya berkhasiat obat) serta perdagangan ilegal sebagai satwa peliharaan eksotis.',
      reference: 'https://www.iucnredlist.org/species/9757/161234979'
    }
  ]

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
              Status Perlindungan Satwa Kunci Indonesia
            </motion.h1>
            <motion.p 
              className="subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Gajah • Harimau • Badak • Orangutan • Aves • Herpetofauna
            </motion.p>
          </div>
        </section>

        {/* Wildlife Cards Grid */}
        <section className="wp-cards section-padding">
          <div className="container">
            <h2 className="section-title">Klik Gambar untuk Melihat Detail</h2>
            
            <div className="wildlife-grid">
              {wildlifeData.map((animal) => (
                <WildlifeCard 
                  key={animal.id} 
                  animal={animal} 
                  onClick={setSelectedAnimal}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Modal Popup */}
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

export default WildlifeProtection