import Navbar from '../components/Navbar'
import GallerySection from '../components/Gallery'
import Footer from '../components/Footer'

function Gallery() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="page-content">
        <GallerySection />
      </div>
      <Footer />
    </div>
  )
}

export default Gallery