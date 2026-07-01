import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import './WildlifeProtection.css'

const WildlifeProtection = () => {
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
              Status Perlindungan, Konservasi, dan Regulasi Perdagangan
            </motion.h1>
            <motion.p 
              className="subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Satwa Kunci Indonesia: Gajah Sumatera • Harimau Sumatera • Badak • Orangutan • Aves • Herpetofauna
            </motion.p>
            <motion.p 
              className="description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Kajian berdasarkan Undang-Undang Republik Indonesia, Status IUCN Red List, dan Appendix CITES
            </motion.p>
          </div>
        </section>

        {/* Introduction */}
        <section className="wp-intro section-padding">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>
                Indonesia merupakan salah satu negara <strong>megabiodiversity</strong> dunia, menempati posisi strategis 
                dalam peta keanekaragaman hayati global bersama Brasil dan Republik Demokratik Kongo.
              </p>
              <p>
                Pulau Sumatera, sebagai salah satu pusat keanekaragaman hayati terpenting, menjadi habitat bagi 
                sejumlah spesies ikonik yang berstatus terancam punah tingkat global: <strong>Gajah Sumatera</strong>, 
                <strong> Harimau Sumatera</strong>, <strong>Badak Sumatera</strong>, dan <strong>Orangutan Sumatera/Tapanuli</strong>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Three Frameworks */}
        <section className="wp-frameworks section-padding bg-light">
          <div className="container">
            <h2 className="section-title">Tiga Lapis Status: Perbedaan Konseptual</h2>
            
            <div className="framework-table">
              <table>
                <thead>
                  <tr>
                    <th>Aspek</th>
                    <th>Sumber</th>
                    <th>Sifat</th>
                    <th>Fungsi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Status Hukum RI</strong></td>
                    <td>UU 5/1990, PP 7/1999</td>
                    <td>Mengikat secara hukum nasional</td>
                    <td>Menentukan boleh/tidaknya pemanfaatan & perdagangan di Indonesia</td>
                  </tr>
                  <tr>
                    <td><strong>Status IUCN Red List</strong></td>
                    <td>Penilaian ilmiah IUCN</td>
                    <td>Tidak mengikat hukum, bersifat indikatif</td>
                    <td>Mengukur risiko kepunahan global berdasarkan data populasi & tren</td>
                  </tr>
                  <tr>
                    <td><strong>Status CITES Appendix</strong></td>
                    <td>Konvensi internasional (175+ negara)</td>
                    <td>Mengikat lintas negara</td>
                    <td>Mengatur izin lintas batas (ekspor-impor-re-ekspor)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box">
              <p>
                <em>Ketiga status ini tidak selalu sejalan. Sebuah spesies bisa saja "tidak dilindungi" UU Indonesia 
                tapi masuk Appendix II CITES, atau sebaliknya — dilindungi penuh UU RI namun IUCN-nya hanya 
                "Vulnerable", bukan "Critically Endangered".</em>
              </p>
            </div>
          </div>
        </section>

        {/* Legal Basis */}
        <section className="wp-legal section-padding">
          <div className="container">
            <h2 className="section-title">Dasar Hukum Nasional</h2>
            
            <div className="legal-list">
              <motion.div 
                className="legal-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="legal-icon">📜</div>
                <div className="legal-content">
                  <h3>Undang-Undang Nomor 5 Tahun 1990</h3>
                  <p>Tentang Konservasi Sumber Daya Alam Hayati dan Ekosistemnya — dasar hukum tertinggi yang membagi satwa menjadi dilindungi dan tidak dilindungi.</p>
                </div>
              </motion.div>

              <motion.div 
                className="legal-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="legal-icon">📋</div>
                <div className="legal-content">
                  <h3>Peraturan Pemerintah Nomor 7 Tahun 1999</h3>
                  <p>Tentang Pengawetan Jenis Tumbuhan dan Satwa — memuat daftar resmi spesies dilindungi, diperbarui melalui Peraturan Menteri LHK Nomor P.106 Tahun 2018.</p>
                </div>
              </motion.div>

              <motion.div 
                className="legal-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="legal-icon">📄</div>
                <div className="legal-content">
                  <h3>Peraturan Pemerintah Nomor 8 Tahun 1999</h3>
                  <p>Tentang Pemanfaatan Jenis Tumbuhan dan Satwa Liar — mengatur pemanfaatan spesies tidak dilindungi.</p>
                </div>
              </motion.div>

              <motion.div 
                className="legal-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="legal-icon">🛡️</div>
                <div className="legal-content">
                  <h3>Peraturan Menteri Perdagangan Nomor 122 Tahun 2018</h3>
                  <p>Secara spesifik mengatur ekspor tumbuhan dan satwa liar yang tidak dilindungi namun masuk daftar CITES.</p>
                </div>
              </motion.div>
            </div>

            <div className="critical-note">
              <p>
                <strong>Poin krusial:</strong> kelima kelompok satwa yang menjadi fokus — gajah, harimau, badak, orangutan, 
                serta sebagian besar jenis burung dan herpetofauna ikonik Indonesia — berstatus <strong>dilindungi penuh</strong> oleh undang-undang. 
                Konsekuensinya, satwa-satwa ini tidak termasuk dalam daftar Permendag 122/2018 dan sama sekali tidak boleh diperdagangkan.
              </p>
            </div>
          </div>
        </section>

        {/* Sumatran Elephant */}
        <section className="wp-species section-padding bg-light">
          <div className="container">
            <h2 className="section-title">Gajah Sumatera (Elephas maximus sumatranus)</h2>
            
            <div className="species-table">
              <table>
                <tbody>
                  <tr>
                    <td><strong>Status Hukum RI</strong></td>
                    <td>Dilindungi penuh</td>
                  </tr>
                  <tr>
                    <td><strong>Status IUCN Red List</strong></td>
                    <td>Critically Endangered (CR)</td>
                  </tr>
                  <tr>
                    <td><strong>Status CITES</strong></td>
                    <td>Appendix I</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="species-content">
              <p>
                Gajah Sumatera adalah subspesies gajah Asia yang endemik Pulau Sumatera. Populasi liar diperkirakan 
                kurang dari 1.500 individu, tersebar dalam fragmented populations di seluruh Sumatera. Ancaman utama 
                meliputi hilangnya habitat akibat konversi hutan, konflik manusia-gajah, dan perburuan untuk gading 
                (pada gajah jantan).
              </p>
            </div>

            <div className="species-image">
              <img src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80" alt="Gajah Sumatera" />
            </div>
          </div>
        </section>

        {/* Sumatran Tiger */}
        <section className="wp-species section-padding">
          <div className="container">
            <h2 className="section-title">Harimau Sumatera (Panthera tigris sumatrae)</h2>
            
            <div className="species-table">
              <table>
                <tbody>
                  <tr>
                    <td><strong>Status Hukum RI</strong></td>
                    <td>Dilindungi penuh</td>
                  </tr>
                  <tr>
                    <td><strong>Status IUCN Red List</strong></td>
                    <td>Critically Endangered (CR)</td>
                  </tr>
                  <tr>
                    <td><strong>Status CITES</strong></td>
                    <td>Appendix I</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="species-content">
              <p>
                Harimau Sumatera adalah subspesies harimau terakhir yang masih bertahan di Indonesia, setelah punahnya 
                Harimau Jawa dan Harimau Bali pada abad ke-20. Populasi liar diperkirakan kurang dari 600 individu, 
                menjadikannya salah satu kucing besar paling terancam di dunia. Perdagangan kulit, taring, dan bagian 
                tubuh harimau di pasar gelap masih menjadi ancaman serius meski statusnya dilindungi penuh.
              </p>
            </div>

            <div className="species-image">
              <img src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&q=80" alt="Harimau Sumatera" />
            </div>
          </div>
        </section>

        {/* Rhinos */}
        <section className="wp-species section-padding bg-light">
          <div className="container">
            <h2 className="section-title">Badak Sumatera & Badak Jawa</h2>
            <p className="species-subtitle">(Dicerorhinus sumatrensis & Rhinoceros sondaicus)</p>
            
            <div className="species-table">
              <table>
                <tbody>
                  <tr>
                    <td><strong>Status Hukum RI</strong></td>
                    <td>Dilindungi penuh</td>
                  </tr>
                  <tr>
                    <td><strong>Status IUCN Red List</strong></td>
                    <td>Critically Endangered (CR), keduanya</td>
                  </tr>
                  <tr>
                    <td><strong>Status CITES</strong></td>
                    <td>Appendix I</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="species-content">
              <p>
                <strong>Badak Sumatera</strong> — badak berambut terkecil di dunia — diperkirakan tersisa kurang dari 80 individu. 
                <strong> Badak Jawa</strong> bahkan lebih genting: hanya bertahan di satu populasi tunggal di Taman Nasional Ujung Kulon 
                dengan kurang dari 80 individu. Permintaan cula badak di pasar gelap Asia tetap menjadi pendorong utama perburuan liar.
              </p>
            </div>
          </div>
        </section>

        {/* Orangutan */}
        <section className="wp-species section-padding">
          <div className="container">
            <h2 className="section-title">Orangutan Sumatera & Tapanuli</h2>
            
            <div className="species-table">
              <table>
                <tbody>
                  <tr>
                    <td><strong>Status Hukum RI</strong></td>
                    <td>Dilindungi penuh</td>
                  </tr>
                  <tr>
                    <td><strong>Status IUCN Red List</strong></td>
                    <td>Critically Endangered (CR)</td>
                  </tr>
                  <tr>
                    <td><strong>Status CITES</strong></td>
                    <td>Appendix I</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="species-content">
              <p>
                Orangutan Sumatera (Pongo abelii) dan Orangutan Tapanuli (Pongo tapanuliensis) adalah kera besar 
                yang hanya ditemukan di Indonesia. Orangutan Tapanuli, yang baru diidentifikasi pada 2017, adalah 
                spesies kera paling langka di dunia dengan populasi kurang dari 800 individu. Ancaman utama adalah 
                deforestasi untuk perkebunan kelapa sawit dan pertambangan.
              </p>
            </div>
          </div>
        </section>

        {/* Birds/Aves */}
        <section className="wp-species wp-aves section-padding bg-light">
          <div className="container">
            <h2 className="section-title">Aves (Burung)</h2>
            <p className="section-description">
              Status burung Indonesia jauh lebih beragam dibanding mamalia — sebagian dilindungi penuh, 
              sebagian lain (terutama jenis paruh bengkok/Psittaciformes dan burung pemangsa) masuk kategori 
              tidak dilindungi tapi diatur CITES sesuai Permendag 122/2018.
            </p>
            
            <div className="species-table wide-table">
              <table>
                <thead>
                  <tr>
                    <th>Spesies</th>
                    <th>Status Hukum RI</th>
                    <th>IUCN</th>
                    <th>CITES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Elang Jawa</strong> (Nisaetus bartelsi)</td>
                    <td>Dilindungi</td>
                    <td>Endangered (EN)</td>
                    <td>Appendix II</td>
                  </tr>
                  <tr>
                    <td><strong>Jalak Bali</strong> (Leucopsar rothschildi)</td>
                    <td>Dilindungi</td>
                    <td>Critically Endangered (CR)</td>
                    <td>Appendix I</td>
                  </tr>
                  <tr>
                    <td><strong>Cendrawasih</strong> (famili Paradisaeidae)</td>
                    <td>Dilindungi</td>
                    <td>Near Threatened–Vulnerable</td>
                    <td>Appendix II</td>
                  </tr>
                  <tr>
                    <td><strong>Kakatua Jambul Kuning</strong> (Cacatua sulphurea)</td>
                    <td>Dilindungi</td>
                    <td>Critically Endangered (CR)</td>
                    <td>Appendix I</td>
                  </tr>
                  <tr>
                    <td><strong>Kakatua Putih/Koki</strong> (Cacatua alba/galerita)</td>
                    <td>Tidak dilindungi</td>
                    <td>Vulnerable/Least Concern</td>
                    <td>Appendix II</td>
                  </tr>
                  <tr>
                    <td><strong>Nuri-nuri</strong> (Loriinae)</td>
                    <td>Tidak dilindungi</td>
                    <td>Least Concern–Near Threatened</td>
                    <td>Appendix II</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box">
              <p>
                Burung-burung dengan daya tarik tinggi sebagai hewan peliharaan eksotis (kakatua, nuri, betet) 
                banyak yang justru berstatus "tidak dilindungi" secara hukum nasional namun tetap masuk Appendix CITES.
              </p>
            </div>
          </div>
        </section>

        {/* Herpetofauna */}
        <section className="wp-species wp-herp section-padding">
          <div className="container">
            <h2 className="section-title">Herpetofauna (Reptil & Amfibi)</h2>
            
            <div className="species-table wide-table">
              <table>
                <thead>
                  <tr>
                    <th>Spesies</th>
                    <th>Status Hukum RI</th>
                    <th>IUCN</th>
                    <th>CITES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Komodo</strong> (Varanus komodoensis)</td>
                    <td>Dilindungi</td>
                    <td>Endangered (EN)</td>
                    <td>Appendix I</td>
                  </tr>
                  <tr>
                    <td><strong>Penyu Hijau</strong> (Chelonia mydas)</td>
                    <td>Dilindungi</td>
                    <td>Endangered (EN)</td>
                    <td>Appendix I</td>
                  </tr>
                  <tr>
                    <td><strong>Penyu Sisik</strong> (Eretmochelys imbricata)</td>
                    <td>Dilindungi</td>
                    <td>Critically Endangered (CR)</td>
                    <td>Appendix I</td>
                  </tr>
                  <tr>
                    <td><strong>Buaya Muara</strong> (Crocodylus porosus)</td>
                    <td>Tidak dilindungi (kuota diatur)</td>
                    <td>Least Concern (LC)</td>
                    <td>Appendix II</td>
                  </tr>
                  <tr>
                    <td><strong>Ular Sanca/Phyton</strong> (berbagai jenis)</td>
                    <td>Tidak dilindungi</td>
                    <td>Least Concern</td>
                    <td>Appendix II</td>
                  </tr>
                  <tr>
                    <td><strong>Biawak Air</strong> (Varanus salvator)</td>
                    <td>Tidak dilindungi</td>
                    <td>Least Concern</td>
                    <td>Appendix II</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <p>
                <strong>Catatan penting:</strong> Komodo tetap berstatus dilindungi penuh dan Appendix I CITES karena 
                populasinya yang sangat terbatas. Sebaliknya, Tuntong Sumatra justru menjadi contoh ironis: berstatus 
                IUCN paling kritis (Critically Endangered) namun belum berstatus dilindungi penuh secara hukum nasional.
              </p>
            </div>
          </div>
        </section>

        {/* Consistency Analysis */}
        <section className="wp-analysis section-padding bg-light">
          <div className="container">
            <h2 className="section-title">Konsistensi dan Kesenjangan Antar-Kerangka</h2>
            
            <div className="analysis-content">
              <p>
                Untuk <strong>mamalia besar berkharisma tinggi</strong> (gajah, harimau, badak, orangutan), ketiga kerangka hukum 
                — nasional, IUCN, dan CITES — relatif konsisten dan ketat: semuanya dilindungi penuh, berstatus 
                Critically Endangered, dan masuk Appendix I (larangan perdagangan komersial internasional).
              </p>
              <p>
                Namun untuk <strong>aves dan herpetofauna</strong>, kerangka hukumnya jauh lebih kompleks dan kadang tidak sinkron. 
                Banyak spesies dengan status IUCN mengkhawatirkan justru belum sepenuhnya dilindungi secara hukum nasional.
              </p>
            </div>
          </div>
        </section>

        {/* Implementation Challenges */}
        <section className="wp-challenges section-padding">
          <div className="container">
            <h2 className="section-title">Tantangan Implementasi</h2>
            
            <div className="challenges-grid">
              <motion.div 
                className="challenge-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="challenge-icon">🎯</div>
                <h3>Perburuan Liar</h3>
                <p>Terutama gading gajah dan cula badak yang masih menjadi target utama pemburu ilegal.</p>
              </motion.div>

              <motion.div 
                className="challenge-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="challenge-icon">💻</div>
                <h3>Perdagangan Daring Ilegal</h3>
                <p>Platform online memudahkan perdagangan satwa eksotis ilegal yang sulit dilacak.</p>
              </motion.div>

              <motion.div 
                className="challenge-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="challenge-icon">👁️</div>
                <h3>Kapasitas Pengawasan Terbatas</h3>
                <p>Kawasan hutan luas seperti Sumatera dan Kalimantan sulit diawasi secara optimal.</p>
              </motion.div>

              <motion.div 
                className="challenge-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="challenge-icon">🤝</div>
                <h3>Sinergi Lintas Instansi</h3>
                <p>Koordinasi antara Kementerian LHK, Perdagangan, Bea Cukai, dan otoritas CITES perlu ditingkatkan.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="wp-cta section-padding">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Mari Bersama Melindungi Satwa Indonesia</h2>
              <p>
                Setiap spesies memiliki peran penting dalam ekosistem. Dengan memahami status perlindungan dan regulasi, 
                kita dapat berkontribusi dalam upaya konservasi untuk generasi mendatang.
              </p>
              <button className="btn-primary">Pelajari Lebih Lanjut</button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default WildlifeProtection