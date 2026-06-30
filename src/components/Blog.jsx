import { motion } from 'framer-motion'
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'
import './Blog.css'

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'The Impact of Deforestation on Climate Change',
      excerpt: 'Exploring how forest loss contributes to global warming and what we can do to stop it.',
      image: 'https://images.unsplash.com/photo-1621451537084-482c7113f9f2?w=600&q=80',
      author: 'Dr. Sarah Johnson',
      date: 'June 15, 2026',
      category: 'Climate'
    },
    {
      id: 2,
      title: 'Sustainable Forestry: A Path Forward',
      excerpt: 'Learn about sustainable practices that balance economic needs with environmental protection.',
      image: 'https://images.unsplash.com/photo-1584467115408-6a6f0a4f3c3c?w=600&q=80',
      author: 'Michael Chen',
      date: 'June 10, 2026',
      category: 'Sustainability'
    },
    {
      id: 3,
      title: 'Wildlife Conservation Success Stories',
      excerpt: 'Inspiring tales of species recovery thanks to dedicated conservation efforts.',
      image: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=600&q=80',
      author: 'Emma Williams',
      date: 'June 5, 2026',
      category: 'Wildlife'
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
          <h2>Latest Articles</h2>
          <p>Stay informed about forest conservation and environmental issues</p>
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
                <motion.button 
                  className="read-more"
                  whileHover={{ x: 10 }}
                >
                  Read More <FaArrowRight />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="blog-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Want to Learn More?</h3>
          <p>Subscribe to our newsletter for the latest updates on forest conservation</p>
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog