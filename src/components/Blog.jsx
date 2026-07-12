import { motion } from 'framer-motion'
import { FaCalendar, FaUser } from 'react-icons/fa'
import './Blog.css'

// Import gambar
import blog from '../assets/images/Blog1.jpeg'
import img2 from '../assets/images/tapir.jpeg'
import img3 from '../assets/images/komodo.webp'

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'Perdagangan Satwa Liar Ilegal di Indonesia: Ancaman bagi Keanekaragaman Hayati',
      excerpt: 'Perdagangan satwa liar ilegal menjadi salah satu penyebab utama penurunan populasi berbagai spesies di Indonesia. Praktik ini mengancam keseimbangan ekosistem serta mendorong banyak satwa menuju kepunahan.',
      image: blog,
      author: 'Admin',
      date: '5 Juli 2026',
      category: 'ILLEGAL WILDLIFE TRADE'
    },
    {
      id: 2,
      title: 'Satwa yang Paling Sering Diperdagangkan Secara Ilegal di Indonesia',
      excerpt: 'Indonesia merupakan habitat berbagai satwa endemik yang memiliki nilai ekonomi tinggi di pasar gelap. Burung kicau, trenggiling, kukang, orangutan, dan reptil termasuk satwa yang paling sering menjadi target perdagangan ilegal.',
      image: img2,
      author: 'Admin',
      date: '1 Juli 2026',
      category: 'PROTECTED SPECIES'
    },
    {
      id: 3,
      title: 'Peran Masyarakat dalam Mencegah Perdagangan Satwa Liar',
      excerpt: 'Keberhasilan konservasi tidak hanya bergantung pada pemerintah, tetapi juga partisipasi masyarakat. Melalui edukasi, pelaporan aktivitas ilegal, dan penolakan membeli satwa dilindungi, masyarakat dapat membantu melindungi keanekaragaman hayati Indonesia.',
      image: img3,
      author: 'Admin',
      date: '28 Juni 2026',
      category: 'CONSERVATION'
    }
  ]

  return (
    <section className="blog section-padding">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2>STOP PERDAGANGAN SATWA LIAR</h2>
        </motion.div>

        <div className="blog-grid">
          {articles.map((article, index) => (
            <motion.article 
              key={article.id}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="blog-image">
                <img src={article.image} alt={article.title} loading="lazy" />
                <motion.div 
                  className="blog-category"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {article.category}
                </motion.div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><FaCalendar /> {article.date}</span>
                  <span><FaUser /> {article.author}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog