# 🌲 Greenale - Forest Conservation Website

Website edukasi dan konservasi hutan yang dibangun dengan React.js, menampilkan informasi tentang pentingnya pelestarian hutan, program konservasi, galeri foto, dan artikel terkini.

![Greenale Forest Conservation](https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80)

## ✨ Fitur Utama

### 🏠 Halaman Home
- Hero section dengan background hutan fullscreen
- Animasi smooth saat halaman dimuat
- Statistik penting tentang hutan (50% Species Habitat, 1.6B People Depend, 30% Land Coverage)
- Call-to-action button "Join Us Now"
- Navbar transparan yang muncul saat scroll

### ℹ️ Halaman About
- Informasi tentang pentingnya kehutanan
- 6 fitur utama: Ecological Balance, Water Conservation, Climate Regulation, Human Health, Biodiversity, Global Impact
- Penjelasan detail tentang konservasi hutan
- Layout responsif dengan card design

### 🌱 Halaman Projects
- Program konservasi aktif (Reforestation, Community Engagement, Wildlife Protection)
- Progress bar untuk setiap program
- Card design dengan hover effects
- Informasi detail tentang setiap project

### 🖼️ Halaman Gallery
- Koleksi foto hutan, satwa liar, dan flora
- Lightbox untuk melihat foto dalam ukuran penuh
- Kategori foto (Forest, Wildlife, Flora, Landscape)
- Grid layout responsif

### 📰 Halaman Blog
- Artikel terkini tentang konservasi hutan
- Kategori artikel (Climate, Sustainability, Wildlife)
- Informasi penulis dan tanggal publikasi
- Newsletter subscription

### 🎨 Fitur Tambahan
- **Multi-page routing** dengan React Router
- **Animasi smooth** menggunakan Framer Motion
- **Fully responsive** (Desktop, Tablet, Mobile)
- **Navbar adaptif** (transparan di home, solid di halaman lain)
- **Smooth scrolling** antar halaman
- **Modern UI/UX** dengan color palette hijau alam

## 🛠️ Teknologi yang Digunakan

- **React 18** - Library JavaScript untuk UI
- **Vite** - Build tool dan development server
- **React Router DOM** - Routing untuk multi-page
- **Framer Motion** - Animasi dan transisi
- **React Icons** - Icon library
- **CSS3** - Styling dengan CSS Variables
- **JavaScript (ES6+)** - Logic dan interaktivitas

## 📦 Instalasi

### Prasyarat
- Node.js (versi 16 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone [repository-url]
   cd forest-conservation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   ```
   http://localhost:5173
   ```

## 📁 Struktur Project

```
forest-conservation/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Gallery.jsx
│   │   └── Blog.jsx
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Scripts

```bash
# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview build production
npm run preview
```
