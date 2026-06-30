import Navbar from '../components/Navbar'
import GallerySection from '../components/Gallery'
import Footer from '../components/Footer'

function Gallery() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <GallerySection />
      </div>
      <Footer />
    </>
  )
}

export default Gallery