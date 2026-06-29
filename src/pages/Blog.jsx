import Navbar from '../components/Navbar'
import BlogSection from '../components/Blog'
import Footer from '../components/Footer'

function Blog() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="page-content">
        <BlogSection />
      </div>
      <Footer />
    </div>
  )
}

export default Blog