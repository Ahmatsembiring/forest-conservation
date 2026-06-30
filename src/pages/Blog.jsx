import Navbar from '../components/Navbar'
import BlogSection from '../components/Blog'
import Footer from '../components/Footer'

function Blog() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <BlogSection />
      </div>
      <Footer />
    </>
  )
}

export default Blog