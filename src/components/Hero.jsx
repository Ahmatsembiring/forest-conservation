import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowRight, FaSearch, FaTimes } from 'react-icons/fa'
import './Hero.css'

import berries from "../assets/images/komodo.webp";
import orangutan from "../assets/images/kakaktua.jpg";
import squirrel from "../assets/images/tapir.jpeg";
import forest from "../assets/images/orangutan.webp";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showResults, setShowResults] = useState(false)

  // DATABASE LENGKAP 732 SATWA DILINDUNGI INDONESIA
  const wildlifeDatabase = [
    { category: 'MAMALIA', scientific: 'Balaenoptera acutorostrata', indonesian: 'Paus tombak' },
    { category: 'MAMALIA', scientific: 'Balaenoptera bonaerensis', indonesian: 'Paus minke antartika' },
    { category: 'MAMALIA', scientific: 'Balaenoptera borealis', indonesian: 'Paus sei' },
    { category: 'MAMALIA', scientific: 'Balaenoptera edeni', indonesian: 'Paus edeni' },
    { category: 'MAMALIA', scientific: 'Balaenoptera musculus', indonesian: 'Paus biru' },
    { category: 'MAMALIA', scientific: 'Balaenoptera omurai', indonesian: 'Paus omura' },
    { category: 'MAMALIA', scientific: 'Megaptera novaeangliae', indonesian: 'Paus bongkok' },
    { category: 'MAMALIA', scientific: 'Bos javanicus', indonesian: 'Banteng' },
    { category: 'MAMALIA', scientific: 'Bubalus depressicornis', indonesian: 'Anoa dataran rendah' },
    { category: 'MAMALIA', scientific: 'Bubalus quarlesi', indonesian: 'Anoa gunung' },
    { category: 'MAMALIA', scientific: 'Capricornis sumatraensis', indonesian: 'Kambing hutan sumatera' },
    { category: 'MAMALIA', scientific: 'Cuon alpinus', indonesian: 'Anjing ajag' },
    { category: 'MAMALIA', scientific: 'Macaca maura', indonesian: 'Monyet darre' },
    { category: 'MAMALIA', scientific: 'Macaca nigra', indonesian: 'Monyet yaki' },
    { category: 'MAMALIA', scientific: 'Macaca ochreata', indonesian: 'Monyet digo' },
    { category: 'MAMALIA', scientific: 'Macaca pagensis', indonesian: 'Beruk mentawai' },
    { category: 'MAMALIA', scientific: 'Macaca tonkeana', indonesian: 'Monyet boti' },
    { category: 'MAMALIA', scientific: 'Nasalis larvatus', indonesian: 'Bekantan' },
    { category: 'MAMALIA', scientific: 'Presbytis comata', indonesian: 'Lutung surili' },
    { category: 'MAMALIA', scientific: 'Presbytis frontata', indonesian: 'Lutung jirangan' },
    { category: 'MAMALIA', scientific: 'Presbytis melalophos', indonesian: 'Lutung simpai' },
    { category: 'MAMALIA', scientific: 'Presbytis natunae', indonesian: 'Kekah' },
    { category: 'MAMALIA', scientific: 'Presbytis potenziani', indonesian: 'Lutung joja' },
    { category: 'MAMALIA', scientific: 'Presbytis rubicunda', indonesian: 'Lutung merah' },
    { category: 'MAMALIA', scientific: 'Presbytis thomasi', indonesian: 'Lutung kedih' },
    { category: 'MAMALIA', scientific: 'Simias concolor', indonesian: 'Lutung simakobu' },
    { category: 'MAMALIA', scientific: 'Trachypithecus auratus', indonesian: 'Lutung budeng' },
    { category: 'MAMALIA', scientific: 'Trachypithecus cristatus', indonesian: 'Lutung kelabu' },
    { category: 'MAMALIA', scientific: 'Axis kuhlii', indonesian: 'Rusa bawean' },
    { category: 'MAMALIA', scientific: 'Muntiacus muntjak', indonesian: 'Kijang muncak' },
    { category: 'MAMALIA', scientific: 'Muntiacus atherodes', indonesian: 'Kijang kuning' },
    { category: 'MAMALIA', scientific: 'Rusa timorensis', indonesian: 'Rusa timor' },
    { category: 'MAMALIA', scientific: 'Rusa unicolor', indonesian: 'Rusa sambar' },
    { category: 'MAMALIA', scientific: 'Delphinus capensis', indonesian: 'Lumba-lumba moncong panjang' },
    { category: 'MAMALIA', scientific: 'Feresa attenuata', indonesian: 'Paus pemangsa kerdil' },
    { category: 'MAMALIA', scientific: 'Globicephala macrorhynchus', indonesian: 'Paus pilot bersirip pendek' },
    { category: 'MAMALIA', scientific: 'Grampus griseus', indonesian: 'Lumba-lumba risso' },
    { category: 'MAMALIA', scientific: 'Lagenodelphis hosei', indonesian: 'Lumba-lumba fraser' },
    { category: 'MAMALIA', scientific: 'Orcaella brevirostris', indonesian: 'Pesut mahakam' },
    { category: 'MAMALIA', scientific: 'Orcinus orca', indonesian: 'Paus pembunuh, paus seguni' },
    { category: 'MAMALIA', scientific: 'Peponocephala electra', indonesian: 'Paus kepala melon' },
    { category: 'MAMALIA', scientific: 'Pseudorca crassidens', indonesian: 'Paus pemangsa palsu' },
    { category: 'MAMALIA', scientific: 'Sousa chinensis', indonesian: 'Lumba-lumba bongkok' },
    { category: 'MAMALIA', scientific: 'Stenella attenuata', indonesian: 'Lumba-lumba totol' },
    { category: 'MAMALIA', scientific: 'Stenella coeruleoalba', indonesian: 'Lumba-lumba garis' },
    { category: 'MAMALIA', scientific: 'Stenella longirostris', indonesian: 'Lumba-lumba moncong panjang' },
    { category: 'MAMALIA', scientific: 'Steno bredanensis', indonesian: 'Lumba-lumba gigi kasar' },
    { category: 'MAMALIA', scientific: 'Tursiops aduncus', indonesian: 'Lumba-lumba hidung botol indopasifik' },
    { category: 'MAMALIA', scientific: 'Tursiops truncatus', indonesian: 'Lumba-lumba hidung botol' },
    { category: 'MAMALIA', scientific: 'Dugong dugon', indonesian: 'Duyung' },
    { category: 'MAMALIA', scientific: 'Elephas maximus', indonesian: 'Gajah asia' },
    { category: 'MAMALIA', scientific: 'Catopuma badia', indonesian: 'Kucing merah' },
    { category: 'MAMALIA', scientific: 'Catopuma temminckii', indonesian: 'Kucing emas' },
    { category: 'MAMALIA', scientific: 'Neofelis diardi', indonesian: 'Macan dahan' },
    { category: 'MAMALIA', scientific: 'Panthera pardus melas', indonesian: 'Harimau tutul / macan tutul' },
    { category: 'MAMALIA', scientific: 'Panthera tigris sumatrae', indonesian: 'Harimau sumatera' },
    { category: 'MAMALIA', scientific: 'Pardofelis marmorata', indonesian: 'Kucing batu' },
    { category: 'MAMALIA', scientific: 'Prionailurus bengalensis', indonesian: 'Kucing kuwuk' },
    { category: 'MAMALIA', scientific: 'Prionailurus planiceps', indonesian: 'Kucing tandang' },
    { category: 'MAMALIA', scientific: 'Prionailurus viverrinus', indonesian: 'Kucing bakau' },
    { category: 'MAMALIA', scientific: 'Pongo abelii', indonesian: 'Mawas sumatera / orangutan sumatera' },
    { category: 'MAMALIA', scientific: 'Pongo pygmaeus', indonesian: 'Mawas kalimantan / orangutan kalimantan' },
    { category: 'MAMALIA', scientific: 'Pongo tapanuliensis', indonesian: 'Mawas tapanuli / orangutan tapanuli' },
    { category: 'MAMALIA', scientific: 'Hylobates agilis', indonesian: 'Owa ungko' },
    { category: 'MAMALIA', scientific: 'Hylobates albibarbis', indonesian: 'Owa jenggot putih' },
    { category: 'MAMALIA', scientific: 'Hylobates klosii', indonesian: 'Owa bilau' },
    { category: 'MAMALIA', scientific: 'Hylobates lar', indonesian: 'Owa serudung' },
    { category: 'MAMALIA', scientific: 'Hylobates moloch', indonesian: 'Owa jawa' },
    { category: 'MAMALIA', scientific: 'Hylobates muelleri', indonesian: 'Owa kalawat' },
    { category: 'MAMALIA', scientific: 'Symphalangus syndactylus', indonesian: 'Owa siamang' },
    { category: 'MAMALIA', scientific: 'Hystrix javanica', indonesian: 'Landak jawa' },
    { category: 'MAMALIA', scientific: 'Nesolagus netscheri', indonesian: 'Kelinci sumatera' },
    { category: 'MAMALIA', scientific: 'Nycticebus coucang', indonesian: 'Kukang' },
    { category: 'MAMALIA', scientific: 'Nycticebus javanicus', indonesian: 'Kukang jawa' },
    { category: 'MAMALIA', scientific: 'Nycticebus menagensis', indonesian: 'Kukang kalimantan' },
    { category: 'MAMALIA', scientific: 'Dendrolagus dorianus', indonesian: 'Kangguru pohon ndomea' },
    { category: 'MAMALIA', scientific: 'Dendrolagus goodfellowi', indonesian: 'Kangguru pohon hias' },
    { category: 'MAMALIA', scientific: 'Dendrolagus inustus', indonesian: 'Kangguru pohon wakera' },
    { category: 'MAMALIA', scientific: 'Dendrolagus mbaiso', indonesian: 'Kangguru pohon mbaiso' },
    { category: 'MAMALIA', scientific: 'Dendrolagus ursinus', indonesian: 'Kangguru pohon nemena' },
    { category: 'MAMALIA', scientific: 'Thylogale browni', indonesian: 'Pelandu nugini' },
    { category: 'MAMALIA', scientific: 'Thylogale brunii', indonesian: 'Pelandu aru' },
    { category: 'MAMALIA', scientific: 'Thylogale stigmatica', indonesian: 'Pelandu merah' },
    { category: 'MAMALIA', scientific: 'Manis javanica', indonesian: 'Trenggiling' },
    { category: 'MAMALIA', scientific: 'Arctonyx collaris', indonesian: 'Sigung sumatera' },
    { category: 'MAMALIA', scientific: 'Lutra lutra', indonesian: 'Berang-berang pantai' },
    { category: 'MAMALIA', scientific: 'Lutra sumatrana', indonesian: 'Berang-berang gunung' },
    { category: 'MAMALIA', scientific: 'Lutrogale perspicillata', indonesian: 'Berang-berang wregul' },
    { category: 'MAMALIA', scientific: 'Ailurops melanotis', indonesian: 'Kuskus talaud' },
    { category: 'MAMALIA', scientific: 'Phalanger alexandrae', indonesian: 'Kuskus gebe' },
    { category: 'MAMALIA', scientific: 'Phalanger carmelitae', indonesian: 'Kuskus gunung' },
    { category: 'MAMALIA', scientific: 'Phalanger gymnotis', indonesian: 'Kuskus guannal' },
    { category: 'MAMALIA', scientific: 'Phalanger intercastellanus', indonesian: 'Kuskus selatan' },
    { category: 'MAMALIA', scientific: 'Phalanger matabiru', indonesian: 'Kuskus matabiru' },
    { category: 'MAMALIA', scientific: 'Phalanger rothschildi', indonesian: 'Kuskus obi' },
    { category: 'MAMALIA', scientific: 'Phalanger sericeus', indonesian: 'Kuskus yaben' },
    { category: 'MAMALIA', scientific: 'Phalanger vestitus', indonesian: 'Kuskus siku putih' },
    { category: 'MAMALIA', scientific: 'Spilocuscus maculatus', indonesian: 'Kuskus pontai' },
    { category: 'MAMALIA', scientific: 'Spilocuscus papuensis', indonesian: 'Kuskus scham-scham' },
    { category: 'MAMALIA', scientific: 'Spilocuscus rufoniger', indonesian: 'Kuskus bohai' },
    { category: 'MAMALIA', scientific: 'Strigocuscus celebensis', indonesian: 'Kuskus tembung' },
    { category: 'MAMALIA', scientific: 'Strigocuscus pelengensis', indonesian: 'Kuskus peleng' },
    { category: 'MAMALIA', scientific: 'Neophocaena phocaenoides', indonesian: 'Lumba-lumba hitam tak bersirip' },
    { category: 'MAMALIA', scientific: 'Kogia breviceps', indonesian: 'Paus lodan kecil jauba' },
    { category: 'MAMALIA', scientific: 'Kogia sima', indonesian: 'Paus lodan kecil' },
    { category: 'MAMALIA', scientific: 'Physeter macrocephalus', indonesian: 'Paus sperma' },
    { category: 'MAMALIA', scientific: 'Prionodon linsang', indonesian: 'Musang lingsang' },
    { category: 'MAMALIA', scientific: 'Acerodon humilis', indonesian: 'Codot talaud' },
    { category: 'MAMALIA', scientific: 'Neopteryx frosti', indonesian: 'Codot gigi kecil' },
    { category: 'MAMALIA', scientific: 'Pteropus pumilus', indonesian: 'Kalong talaud' },
    { category: 'MAMALIA', scientific: 'Dicerorhinus sumatrensis', indonesian: 'Badak sumatera' },
    { category: 'MAMALIA', scientific: 'Rhinoceros sondaicus', indonesian: 'Badak jawa' },
    { category: 'MAMALIA', scientific: 'Iomys horsfieldi', indonesian: 'Cukbo ekor merah' },
    { category: 'MAMALIA', scientific: 'Lariscus hosei', indonesian: 'Bokol borneo' },
    { category: 'MAMALIA', scientific: 'Babyrousa babyrussa', indonesian: 'Babirusa tualangio' },
    { category: 'MAMALIA', scientific: 'Tachyglossus aculeatus', indonesian: 'Nokdiak moncong pendek' },
    { category: 'MAMALIA', scientific: 'Zaglossus bruijni', indonesian: 'Nokdiak moncong panjang' },
    { category: 'MAMALIA', scientific: 'Tapirus indicus', indonesian: 'Tapir tenuk' },
    { category: 'MAMALIA', scientific: 'Tarsius bancanus', indonesian: 'Krabuku ingkat' },
    { category: 'MAMALIA', scientific: 'Tarsius dentatus', indonesian: 'Krabuku diana' },
    { category: 'MAMALIA', scientific: 'Tarsius lariang', indonesian: 'Tarsius lariang' },
    { category: 'MAMALIA', scientific: 'Tarsius pelengensis', indonesian: 'Krabuku peleng' },
    { category: 'MAMALIA', scientific: 'Tarsius pumilus', indonesian: 'Krabuku kecil' },
    { category: 'MAMALIA', scientific: 'Tarsius sangirensis', indonesian: 'Krabuku sangihe' },
    { category: 'MAMALIA', scientific: 'Tarsius tarsier', indonesian: 'Krabuku tangkasi' },
    { category: 'MAMALIA', scientific: 'Tarsius tumpara', indonesian: 'Tarsius siau' },
    { category: 'MAMALIA', scientific: 'Tragulus javanicus', indonesian: 'Pelanduk kancil' },
    { category: 'MAMALIA', scientific: 'Tragulus kanchil', indonesian: 'Kancil kecil' },
    { category: 'MAMALIA', scientific: 'Tragulus napu', indonesian: 'Pelanduk napu' },
    { category: 'MAMALIA', scientific: 'Helarctos malayanus', indonesian: 'Beruang madu' },
    { category: 'MAMALIA', scientific: 'Arctictis binturong', indonesian: 'Binturong' },
    { category: 'MAMALIA', scientific: 'Cynogale bennettii', indonesian: 'Musang air' },
    { category: 'MAMALIA', scientific: 'Macrogalidia musschenbroekii', indonesian: 'Musang sulawesi' },
    { category: 'MAMALIA', scientific: 'Indopacetus pacificus', indonesian: 'Paus hidung botol' },
    { category: 'MAMALIA', scientific: 'Mesoplodon densirostris', indonesian: 'Paus paruh blainville' },
    { category: 'MAMALIA', scientific: 'Mesoplodon ginkgodens', indonesian: 'Paus paruh bergigi ginkgo' },
    { category: 'MAMALIA', scientific: 'Ziphius cavirostris', indonesian: 'Paus paruh angsa' },
    { category: 'BURUNG', scientific: 'Accipiter badius', indonesian: 'Elangalap shikra' },
    { category: 'BURUNG', scientific: 'Accipiter cirrocephalus', indonesian: 'Elangalap kalung' },
    { category: 'BURUNG', scientific: 'Accipiter erythrauchen', indonesian: 'Elangalap maluku' },
    { category: 'BURUNG', scientific: 'Accipiter fasciatus', indonesian: 'Elangalap coklat' },
    { category: 'BURUNG', scientific: 'Accipiter griseiceps', indonesian: 'Elangalap kepala-kelabu' },
    { category: 'BURUNG', scientific: 'Accipiter gularis', indonesian: 'Elangalap nipon' },
    { category: 'BURUNG', scientific: 'Accipiter henicogrammus', indonesian: 'Elangalap halmahera' },
    { category: 'BURUNG', scientific: 'Accipiter hiogaster', indonesian: 'Elangalap kelabu' },
    { category: 'BURUNG', scientific: 'Accipiter melanochlamys', indonesian: 'Elangalap mantel-hitam' },
    { category: 'BURUNG', scientific: 'Accipiter meyerianus', indonesian: 'Elangalap meyer' },
    { category: 'BURUNG', scientific: 'Accipiter nanus', indonesian: 'Elangalap kecil' },
    { category: 'BURUNG', scientific: 'Accipiter nisus', indonesian: 'Elangalap eurasia' },
    { category: 'BURUNG', scientific: 'Accipiter poliocephalus', indonesian: 'Elangalap pucat-sosonokan' },
    { category: 'BURUNG', scientific: 'Accipiter rhodogaster', indonesian: 'Elangalap dada-merah' },
    { category: 'BURUNG', scientific: 'Accipiter soloensis', indonesian: 'Elangalap p cina' },
    { category: 'BURUNG', scientific: 'Accipiter sylvestris', indonesian: 'Elangalap tenggara' },
    { category: 'BURUNG', scientific: 'Accipiter trinotatus', indonesian: 'Elangalap ekor-totol' },
    { category: 'BURUNG', scientific: 'Accipiter trivirgatus', indonesian: 'Elangalap jambul' },
    { category: 'BURUNG', scientific: 'Accipiter virgatus', indonesian: 'Elangalap besra' },
    { category: 'BURUNG', scientific: 'Aquila audax', indonesian: 'Rajawali ekor-baji' },
    { category: 'BURUNG', scientific: 'Aquila fasciata', indonesian: 'Elang bonelli' },
    { category: 'BURUNG', scientific: 'Aquila gurneyi', indonesian: 'Rajawali kuskus' },
    { category: 'BURUNG', scientific: 'Aviceda jerdoni', indonesian: 'Baza jerdon' },
    { category: 'BURUNG', scientific: 'Aviceda leuphotes', indonesian: 'Baza hitam' },
    { category: 'BURUNG', scientific: 'Aviceda subcristata', indonesian: 'Baza pasifik' },
    { category: 'BURUNG', scientific: 'Butastur indicus', indonesian: 'Elang kelabu' },
    { category: 'BURUNG', scientific: 'Butastur liventer', indonesian: 'Elang sayap-coklat' },
    { category: 'BURUNG', scientific: 'Butastur teesa', indonesian: 'Elang mata putih' },
    { category: 'BURUNG', scientific: 'Buteo japonicus', indonesian: 'Elang buteo' },
    { category: 'BURUNG', scientific: 'Circaetus gallicus', indonesian: 'Elangular jari-pendek' },
    { category: 'BURUNG', scientific: 'Circus aeruginosus', indonesian: 'Elangrawa katak' },
    { category: 'BURUNG', scientific: 'Circus approximans', indonesian: 'Elangrawa coklat' },
    { category: 'BURUNG', scientific: 'Circus assimilis', indonesian: 'Elangrawa tutul' },
    { category: 'BURUNG', scientific: 'Circus melanoleucos', indonesian: 'Elangrawa tangling' },
    { category: 'BURUNG', scientific: 'Circus spilonotus', indonesian: 'Elangrawa timur' },
    { category: 'BURUNG', scientific: 'Circus spilothorax', indonesian: 'Elangrawa papua' },
    { category: 'BURUNG', scientific: 'Clanga clanga', indonesian: 'Rajawali totol' },
    { category: 'BURUNG', scientific: 'Elanus caeruleus', indonesian: 'Elang tikus' },
    { category: 'BURUNG', scientific: 'Erythrotriorchis buergersi', indonesian: 'Elangalap bahu coklat' },
    { category: 'BURUNG', scientific: 'Gyps himalayensis', indonesian: 'Nasar himalaya' },
    { category: 'BURUNG', scientific: 'Haliaeetus leucogaster', indonesian: 'Elanglaut perut-putih' },
    { category: 'BURUNG', scientific: 'Haliastur indus', indonesian: 'Elang bondol' },
    { category: 'BURUNG', scientific: 'Haliastur sphenurus', indonesian: 'Elang siul' },
    { category: 'BURUNG', scientific: 'Harpyopsis novaeguineae', indonesian: 'Rajawali papua' },
    { category: 'BURUNG', scientific: 'Henicopernis longicauda', indonesian: 'Elang ekor-panjang' },
    { category: 'BURUNG', scientific: 'Hieraaetus pennatus', indonesian: 'Elang setiwel' },
    { category: 'BURUNG', scientific: 'Hieraaetus weiskei', indonesian: 'Elang kecil' },
    { category: 'BURUNG', scientific: 'Ichthyophaga humilis', indonesian: 'Elangikan kecil' },
    { category: 'BURUNG', scientific: 'Ichthyophaga ichthyaetus', indonesian: 'Elangikan kepala-kelabu' },
    { category: 'BURUNG', scientific: 'Ictinaetus malaiensis', indonesian: 'Elang hitam' },
    { category: 'BURUNG', scientific: 'Lophotriorchis kienerii', indonesian: 'Elang perut-karat' },
    { category: 'BURUNG', scientific: 'Macheiramphus alcinus', indonesian: 'Elang kelelawar' },
    { category: 'BURUNG', scientific: 'Megatriorchis doriae', indonesian: 'Elangalap doria' },
    { category: 'BURUNG', scientific: 'Milvus migrans', indonesian: 'Elang paria' },
    { category: 'BURUNG', scientific: 'Nisaetus alboniger', indonesian: 'Elang gunung' },
    { category: 'BURUNG', scientific: 'Nisaetus bartelsi', indonesian: 'Elang jawa' },
    { category: 'BURUNG', scientific: 'Nisaetus cirrhatus', indonesian: 'Elang brontok' },
    { category: 'BURUNG', scientific: 'Nisaetus floris', indonesian: 'Elang flores' },
    { category: 'BURUNG', scientific: 'Nisaetus lanceolatus', indonesian: 'Elang sulawesi' },
    { category: 'BURUNG', scientific: 'Nisaetus nanus', indonesian: 'Elang wallace' },
    { category: 'BURUNG', scientific: 'Pandion haliaetus', indonesian: 'Elang tiram' },
    { category: 'BURUNG', scientific: 'Pernis celebensis', indonesian: 'Sikepmadu sulawesi' },
    { category: 'BURUNG', scientific: 'Pernis ptilorhynchus', indonesian: 'Sikepmadu asia' },
    { category: 'BURUNG', scientific: 'Spilornis cheela', indonesian: 'Elangular bido' },
    { category: 'BURUNG', scientific: 'Spilornis kinabaluensis', indonesian: 'Elangular kinabalu' },
    { category: 'BURUNG', scientific: 'Spilornis rufipectus', indonesian: 'Elangular sulawesi' },
    { category: 'BURUNG', scientific: 'Psaltria exilis', indonesian: 'Cerecet jawa' },
    { category: 'BURUNG', scientific: 'Actenoides capucinus', indonesian: 'Cekakak hutan kepala-hitam' },
    { category: 'BURUNG', scientific: 'Actenoides concretus', indonesian: 'Cekakak hutan melayu' },
    { category: 'BURUNG', scientific: 'Actenoides monachus', indonesian: 'Cekakak hutan tunggir-hijau' },
    { category: 'BURUNG', scientific: 'Actenoides princeps', indonesian: 'Cekakak hutan dada-sisik' },
    { category: 'BURUNG', scientific: 'Alcedo euryzona', indonesian: 'Rajaudang kalung-biru jawa' },
    { category: 'BURUNG', scientific: 'Alcedo peninsulae', indonesian: 'Rajaudang kalung-biru sumatera' },
    { category: 'BURUNG', scientific: 'Caridonax fulgidus', indonesian: 'Cekakak tunggir-putih' },
    { category: 'BURUNG', scientific: 'Ceyx sangirensis', indonesian: 'Rajaudang sangihe' },
    { category: 'BURUNG', scientific: 'Dacelo tyro', indonesian: 'Kukabura aru' },
    { category: 'BURUNG', scientific: 'Tanysiptera carolinae', indonesian: 'Cekakakpita numfor' },
    { category: 'BURUNG', scientific: 'Tanysiptera ellioti', indonesian: 'Cekakakpita kofiau' },
    { category: 'BURUNG', scientific: 'Tanysiptera riedelii', indonesian: 'Cekakakpita biak' },
    { category: 'BURUNG', scientific: 'Todirhamphus australasia', indonesian: 'Cekakak kalung-coklat' },
    { category: 'BURUNG', scientific: 'Todirhamphus enigma', indonesian: 'Cekakak talaud' },
    { category: 'BURUNG', scientific: 'Todirhamphus funebris', indonesian: 'Cekakak murung' },
    { category: 'BURUNG', scientific: 'Todirhamphus lazuli', indonesian: 'Cekakak lazuli' },
    { category: 'BURUNG', scientific: 'Todirhamphus saurophagus', indonesian: 'Cekakak pantai' },
    { category: 'BURUNG', scientific: 'Anseranas semipalmata', indonesian: 'Boha wasur' },
    { category: 'BURUNG', scientific: 'Cairina scutulata', indonesian: 'Mentok rimba' },
    { category: 'BURUNG', scientific: 'Nettapus coromandelianus', indonesian: 'Trutu hijau' },
    { category: 'BURUNG', scientific: 'Salvadorina waigiuensis', indonesian: 'Itik gunung' },
    { category: 'BURUNG', scientific: 'Aerodramus vulcanorum', indonesian: 'Walet gunung' },
    { category: 'BURUNG', scientific: 'Hydrochous gigas', indonesian: 'Walet raksasa' },
    { category: 'BURUNG', scientific: 'Ardea alba', indonesian: 'Cangak besar' },
    { category: 'BURUNG', scientific: 'Ardea sumatrana', indonesian: 'Cangak laut' },
    { category: 'BURUNG', scientific: 'Ardeola bacchus', indonesian: 'Blekok cina' },
    { category: 'BURUNG', scientific: 'Egretta eulophotes', indonesian: 'Kuntul cina' },
    { category: 'BURUNG', scientific: 'Egretta novaehollandiae', indonesian: 'Kuntul australia' },
    { category: 'BURUNG', scientific: 'Egretta picata', indonesian: 'Kuntul belang' },
    { category: 'BURUNG', scientific: 'Gorsachius goisagi', indonesian: 'Kowak jepang' },
    { category: 'BURUNG', scientific: 'Gorsachius melanolophus', indonesian: 'Kowak melayu' },
    { category: 'BURUNG', scientific: 'Ixobrychus eurhythmus', indonesian: 'Bambangan coklat' },
    { category: 'BURUNG', scientific: 'Ixobrychus flavicollis', indonesian: 'Bambangan hitam' },
    { category: 'BURUNG', scientific: 'Nycticorax caledonicus', indonesian: 'Kowakmalam merah' },
    { category: 'BURUNG', scientific: 'Zonerodius heliosylus', indonesian: 'Bambangan rimba' },
    { category: 'BURUNG', scientific: 'Anorrhinus galeritus', indonesian: 'Enggang klihingan' },
    { category: 'BURUNG', scientific: 'Anthracoceros albirostris', indonesian: 'Kangkareng perut-putih' },
    { category: 'BURUNG', scientific: 'Anthracoceros malayanus', indonesian: 'Kangkareng hitam' },
    { category: 'BURUNG', scientific: 'Berenicornis comatus', indonesian: 'Enggang jambul' },
    { category: 'BURUNG', scientific: 'Buceros bicornis', indonesian: 'Enggang papan' },
    { category: 'BURUNG', scientific: 'Buceros rhinoceros', indonesian: 'Enggang cula' },
    { category: 'BURUNG', scientific: 'Rhabdotorrhinus corrugatus', indonesian: 'Julang jambul-hitam' },
    { category: 'BURUNG', scientific: 'Rhabdotorrhinus exarhatus', indonesian: 'Kangkareng sulawesi' },
    { category: 'BURUNG', scientific: 'Rhinoplax vigil', indonesian: 'Rangkong gading' },
    { category: 'BURUNG', scientific: 'Rhyticeros cassidix', indonesian: 'Julang sulawesi' },
    { category: 'BURUNG', scientific: 'Rhyticeros everetti', indonesian: 'Julang sumba' },
    { category: 'BURUNG', scientific: 'Rhyticeros plicatus', indonesian: 'Julang irian' },
    { category: 'BURUNG', scientific: 'Rhyticeros undulatus', indonesian: 'Julang emas' },
    { category: 'BURUNG', scientific: 'Burhinus grallarius', indonesian: 'Wili-wili semak' },
    { category: 'BURUNG', scientific: 'Esacus magnirostris', indonesian: 'Wili-wili besar' },
    { category: 'BURUNG', scientific: 'Cacatua alba', indonesian: 'Kakatua putih' },
    { category: 'BURUNG', scientific: 'Cacatua galerita', indonesian: 'Kakatua koki' },
    { category: 'BURUNG', scientific: 'Cacatua goffiniana', indonesian: 'Kakatua tanimbar' },
    { category: 'BURUNG', scientific: 'Cacatua moluccensis', indonesian: 'Kakatua maluku' },
    { category: 'BURUNG', scientific: 'Cacatua sanguiena', indonesian: 'Kakatua rawa' },
    { category: 'BURUNG', scientific: 'Cacatua sulphurea', indonesian: 'Kakatua jambul-kuning' },
    { category: 'BURUNG', scientific: 'Probosciger aterrimus', indonesian: 'Kakatua raja' },
    { category: 'BURUNG', scientific: 'Calorhamphus fuliginosus', indonesian: 'Takur ampis-kalimantan' },
    { category: 'BURUNG', scientific: 'Caloramphus hayii', indonesian: 'Takur ampis-sumatera' },
    { category: 'BURUNG', scientific: 'Psilopogon armillaris', indonesian: 'Takur tohtor' },
    { category: 'BURUNG', scientific: 'Psilopogon chrysopogon', indonesian: 'Takur gedang' },
    { category: 'BURUNG', scientific: 'Psilopogon corvinus', indonesian: 'Takur bututut' },
    { category: 'BURUNG', scientific: 'Psilopogon eximius', indonesian: 'Takur leher-hitam' },
    { category: 'BURUNG', scientific: 'Psilopogon henricii', indonesian: 'Takur topi-merah' },
    { category: 'BURUNG', scientific: 'Psilopogon javensis', indonesian: 'Takur tulung-tumpuk' },
    { category: 'BURUNG', scientific: 'Psilopogon lineatus', indonesian: 'Takur bultok' },
    { category: 'BURUNG', scientific: 'Psilopogon monticola', indonesian: 'Takur gunung' },
    { category: 'BURUNG', scientific: 'Psilopogon mystacophanos', indonesian: 'Takur warna-warni' },
    { category: 'BURUNG', scientific: 'Psilopogon oorti', indonesian: 'Takur bukit' },
    { category: 'BURUNG', scientific: 'Psilopogon pulcherrimus', indonesian: 'Takur tengkuk-emas' },
    { category: 'BURUNG', scientific: 'Psilopogon pyrolophus', indonesian: 'Takur api' },
    { category: 'BURUNG', scientific: 'Psilopogon rafflesii', indonesian: 'Takur tutut' },
    { category: 'BURUNG', scientific: 'Caprimulgus concretus', indonesian: 'Cabak kolong' },
    { category: 'BURUNG', scientific: 'Eurostopodus diabolicus', indonesian: 'Taktarau iblis' },
    { category: 'BURUNG', scientific: 'Casuarius bennetti', indonesian: 'Kasuari kerdil' },
    { category: 'BURUNG', scientific: 'Casuarius casuarius', indonesian: 'Kasuari gelambir-ganda' },
    { category: 'BURUNG', scientific: 'Casuarius unappendiculatus', indonesian: 'Kasuari gelambir-tunggal' },
    { category: 'BURUNG', scientific: 'Charadrius alexandrinus', indonesian: 'Cerek tilil' },
    { category: 'BURUNG', scientific: 'Charadrius javanicus', indonesian: 'Cerek jawa' },
    { category: 'BURUNG', scientific: 'Charadrius placidus', indonesian: 'Cerek paruh-panjang' },
    { category: 'BURUNG', scientific: 'Charadrius ruficapillus', indonesian: 'Cerek topi-merah' },
    { category: 'BURUNG', scientific: 'Charadrius veredus', indonesian: 'Cerek asia' },
    { category: 'BURUNG', scientific: 'Erythrogonys cinctus', indonesian: 'Cerek lutut-merah' },
    { category: 'BURUNG', scientific: 'Vanellus indicus', indonesian: 'Trulek gelambir-merah' },
    { category: 'BURUNG', scientific: 'Vanellus cinereus', indonesian: 'Trulek kelabu' },
    { category: 'BURUNG', scientific: 'Vanellus macropterus', indonesian: 'Trulek jawa' },
    { category: 'BURUNG', scientific: 'Vanellus miles', indonesian: 'Trulek topeng' },
    { category: 'BURUNG', scientific: 'Chloropsis media', indonesian: 'Cica daun dahi-emas' },
    { category: 'BURUNG', scientific: 'Chloropsis cochinchinensis', indonesian: 'Cica daun sayap-biru' },
    { category: 'BURUNG', scientific: 'Chloropsis kinabaluensis', indonesian: 'Cica daun sayap-biru kalimantan' },
    { category: 'BURUNG', scientific: 'Chloropsis moluccensis', indonesian: 'Cica daun sayap-biru sumatera' },
    { category: 'BURUNG', scientific: 'Chloropsis cyanopogon', indonesian: 'Cica daun kecil' },
    { category: 'BURUNG', scientific: 'Chloropsis sonnerati', indonesian: 'Cica daun besar' },
    { category: 'BURUNG', scientific: 'Chloropsis venusta', indonesian: 'Cica daun sumatera' },
    { category: 'BURUNG', scientific: 'Ciconia episcopus', indonesian: 'Bangau sandang-lawe' },
    { category: 'BURUNG', scientific: 'Ciconia stormi', indonesian: 'Bangau storm' },
    { category: 'BURUNG', scientific: 'Ephippiorhynchus asiaticus', indonesian: 'Bangau leher-hitam' },
    { category: 'BURUNG', scientific: 'Leptoptilos javanicus', indonesian: 'Bangau tongtong' },
    { category: 'BURUNG', scientific: 'Mycteria cinerea', indonesian: 'Bangau bluwok' },
    { category: 'BURUNG', scientific: 'Cnemophilus loriae', indonesian: 'Cenderawasih loria' },
    { category: 'BURUNG', scientific: 'Cnemophilus sanguineus', indonesian: 'Cenderawasih jambul' },
    { category: 'BURUNG', scientific: 'Loboparadisea sericea', indonesian: 'Cenderawasih sutera' },
    { category: 'BURUNG', scientific: 'Caloenas nicobarica', indonesian: 'Junai emas' },
    { category: 'BURUNG', scientific: 'Columba argentina', indonesian: 'Merpatihutan perak' },
    { category: 'BURUNG', scientific: 'Gallicolumba hoedtii', indonesian: 'Delimukan wetar' },
    { category: 'BURUNG', scientific: 'Goura cristata', indonesian: 'Mambruk ubiaat' },
    { category: 'BURUNG', scientific: 'Goura sclaterii', indonesian: 'Mambruk selatan' },
    { category: 'BURUNG', scientific: 'Goura victoria', indonesian: 'Mambruk victoria' },
    { category: 'BURUNG', scientific: 'Ptilinopus dohertyi', indonesian: 'Walik rawa-manu' },
    { category: 'BURUNG', scientific: 'Ptilinopus granulifrons', indonesian: 'Walik benjol' },
    { category: 'BURUNG', scientific: 'Treron psittaceus', indonesian: 'Punai timor' },
    { category: 'BURUNG', scientific: 'Treron teysmannii', indonesian: 'Punai sumba' },
    { category: 'BURUNG', scientific: 'Cissa chinensis', indonesian: 'Ekek layongan' },
    { category: 'BURUNG', scientific: 'Cissa thalassina', indonesian: 'Ekek geling' },
    { category: 'BURUNG', scientific: 'Corvus florensis', indonesian: 'Gagak flores' },
    { category: 'BURUNG', scientific: 'Corvus fuscicapillus', indonesian: 'Gagak kepala-coklat' },
    { category: 'BURUNG', scientific: 'Corvus orru', indonesian: 'Gagak orru' },
    { category: 'BURUNG', scientific: 'Corvus splendens', indonesian: 'Gagak rumah' },
    { category: 'BURUNG', scientific: 'Corvus tristis', indonesian: 'Gagak kelabu' },
    { category: 'BURUNG', scientific: 'Corvus typicus', indonesian: 'Gagak sulawesi' },
    { category: 'BURUNG', scientific: 'Corvus unicolor', indonesian: 'Gagak banggai' },
    { category: 'BURUNG', scientific: 'Corvus validus', indonesian: 'Gagak halmahera' },
    { category: 'BURUNG', scientific: 'Crypsirina temia', indonesian: 'Tangkar centrong' },
    { category: 'BURUNG', scientific: 'Dendrocitta cinerascens', indonesian: 'Tangkaruli kalimantan' },
    { category: 'BURUNG', scientific: 'Dendrocitta occipitalis', indonesian: 'Tangkaruli sumatera' },
    { category: 'BURUNG', scientific: 'Platylophus galericulatus', indonesian: 'Tangkar ongklet' },
    { category: 'BURUNG', scientific: 'Platysmurus leucopterus', indonesian: 'Tangkar kambing' },
    { category: 'BURUNG', scientific: 'Carpococcyx viridis', indonesian: 'Tokhtor sumatra' },
    { category: 'BURUNG', scientific: 'Centropus nigrorufus', indonesian: 'Bubut jawa' },
    { category: 'BURUNG', scientific: 'Centropus rectunguis', indonesian: 'Bubut teragop' },
    { category: 'BURUNG', scientific: 'Clamator coromandus', indonesian: 'Bubutpacar jambul' },
    { category: 'BURUNG', scientific: 'Cuculus crassirostris', indonesian: 'Kangkok sulawesi' },
    { category: 'BURUNG', scientific: 'Lonchura vana', indonesian: 'Bondol arfak' },
    { category: 'BURUNG', scientific: 'Lonchura oryzivora', indonesian: 'Gelatik jawa' },
    { category: 'BURUNG', scientific: 'Falco berigora', indonesian: 'Alap-alap coklat' },
    { category: 'BURUNG', scientific: 'Falco cenchroides', indonesian: 'Alap-alap layang' },
    { category: 'BURUNG', scientific: 'Falco longipennis', indonesian: 'Alap-alap australia' },
    { category: 'BURUNG', scientific: 'Falco moluccensis', indonesian: 'Alap-alap sapi' },
    { category: 'BURUNG', scientific: 'Falco peregrinus', indonesian: 'Alap-alap kawah' },
    { category: 'BURUNG', scientific: 'Falco severus', indonesian: 'Alap-alap macan' },
    { category: 'BURUNG', scientific: 'Falco subbuteo', indonesian: 'Alap-alap walet' },
    { category: 'BURUNG', scientific: 'Falco tinnunculus', indonesian: 'Alap-alap erasia' },
    { category: 'BURUNG', scientific: 'Microhierax fringillarius', indonesian: 'Alap-alap capung' },
    { category: 'BURUNG', scientific: 'Microhierax latifrons', indonesian: 'Alap-alap dahi putih' },
    { category: 'BURUNG', scientific: 'Fregata andrewsi', indonesian: 'Cikalang christmas' },
    { category: 'BURUNG', scientific: 'Fregata minor', indonesian: 'Cikalang besar' },
    { category: 'BURUNG', scientific: 'Chrysocorythus estherae', indonesian: 'Kenari melayu' },
    { category: 'BURUNG', scientific: 'Glareola maldivarum', indonesian: 'Terik asia' },
    { category: 'BURUNG', scientific: 'Stiltia isabella', indonesian: 'Terik australia' },
    { category: 'BURUNG', scientific: 'Antigone rubicunda', indonesian: 'Jenjang brolga' },
    { category: 'BURUNG', scientific: 'Haematopus fuliginosus', indonesian: 'Kedidir kelam' },
    { category: 'BURUNG', scientific: 'Haematopus longirostris', indonesian: 'Kedidir belang' },
    { category: 'BURUNG', scientific: 'Heliopais personatus', indonesian: 'Pedendang topeng' },
    { category: 'BURUNG', scientific: 'Hydrobates matsudairae', indonesian: 'Petrelbadai matsudairae' },
    { category: 'BURUNG', scientific: 'Hydrobates monorhis', indonesian: 'Petrelbadai swinhoe' },
    { category: 'BURUNG', scientific: 'Indicator archipelagicus', indonesian: 'Pemandulebah asia' },
    { category: 'BURUNG', scientific: 'Anous minutus', indonesian: 'Camarangguk hitam' },
    { category: 'BURUNG', scientific: 'Anous stolidus', indonesian: 'Camarangguk coklat' },
    { category: 'BURUNG', scientific: 'Chlidonias hybrida', indonesian: 'Daralaut kumis' },
    { category: 'BURUNG', scientific: 'Chlidonias leucopterus', indonesian: 'Daralaut sayap-putih' },
    { category: 'BURUNG', scientific: 'Gelochelidon nilotica', indonesian: 'Daralaut tiram' },
    { category: 'BURUNG', scientific: 'Gygis alba', indonesian: 'Daralaut putih' },
    { category: 'BURUNG', scientific: 'Hydroprogne caspia', indonesian: 'Daralaut caspia' },
    { category: 'BURUNG', scientific: 'Larus brunnicephalus', indonesian: 'Camar kepala-coklat' },
    { category: 'BURUNG', scientific: 'Larus fuscus', indonesian: 'Camar baltik' },
    { category: 'BURUNG', scientific: 'Larus novaehollandiae', indonesian: 'Camar perak' },
    { category: 'BURUNG', scientific: 'Larus ridibundus', indonesian: 'Camar kepala-hitam' },
    { category: 'BURUNG', scientific: 'Larus schistisagus', indonesian: 'Camar punggung-abu' },
    { category: 'BURUNG', scientific: 'Onychoprion aleuticus', indonesian: 'Dara laut aleutian' },
    { category: 'BURUNG', scientific: 'Onychoprion anaethetus', indonesian: 'Dara laut batu' },
    { category: 'BURUNG', scientific: 'Onychoprion fuscatus', indonesian: 'Dara laut sayap-hitam' },
    { category: 'BURUNG', scientific: 'Onychoprion lunatus', indonesian: 'Dara laut fiji' },
    { category: 'BURUNG', scientific: 'Sterna dougallii', indonesian: 'Dara laut jambon' },
    { category: 'BURUNG', scientific: 'Sterna hirundo', indonesian: 'Dara laut biasa' },
    { category: 'BURUNG', scientific: 'Sterna paradisea', indonesian: 'Dara laut arktik' },
    { category: 'BURUNG', scientific: 'Sterna sumatrana', indonesian: 'Dara laut tengkuk-hitam' },
    { category: 'BURUNG', scientific: 'Sterluna albifrons', indonesian: 'Dara laut kecil' },
    { category: 'BURUNG', scientific: 'Thalasseus bengalensis', indonesian: 'Dara laut benggala' },
    { category: 'BURUNG', scientific: 'Thalasseus bergii', indonesian: 'Dara laut jambul' },
    { category: 'BURUNG', scientific: 'Thalasseus bernsteini', indonesian: 'Dara laut cina' },
    { category: 'BURUNG', scientific: 'Xema sabini', indonesian: 'Camar sabine' },
    { category: 'BURUNG', scientific: 'Garrulax bicolor', indonesian: 'Poksai sumatra' },
    { category: 'BURUNG', scientific: 'Garrulax leucolophus', indonesian: 'Poksai jambul' },
    { category: 'BURUNG', scientific: 'Garrulax rufifrons', indonesian: 'Poksai kuda' },
    { category: 'BURUNG', scientific: 'Laniellus albonotatus', indonesian: 'Cica matahari' },
    { category: 'BURUNG', scientific: 'Leiothrix laurinae', indonesian: 'Mesia telinga-perak' },
    { category: 'BURUNG', scientific: 'Aepypodius arfakianus', indonesian: 'Maleo gunung' },
    { category: 'BURUNG', scientific: 'Aepypodius bruijnii', indonesian: 'Maleo waigeo' },
    { category: 'BURUNG', scientific: 'Eulipoa wallacei', indonesian: 'Gosong maluku' },
    { category: 'BURUNG', scientific: 'Macrocephalon maleo', indonesian: 'Maleo senkawor' },
    { category: 'BURUNG', scientific: 'Megapodius bernsteinii', indonesian: 'Gosong sula' },
    { category: 'BURUNG', scientific: 'Megapodius cumingii', indonesian: 'Gosong pilipina' },
    { category: 'BURUNG', scientific: 'Megapodius decollatus', indonesian: 'Gosong papua' },
    { category: 'BURUNG', scientific: 'Megapodius forstenii', indonesian: 'Gosong forsten' },
    { category: 'BURUNG', scientific: 'Megapodius freycinet', indonesian: 'Gosong kelam' },
    { category: 'BURUNG', scientific: 'Megapodius geelvinkianus', indonesian: 'Gosong biak' },
    { category: 'BURUNG', scientific: 'Megapodius reinwardt', indonesian: 'Gosong kaki-merah' },
    { category: 'BURUNG', scientific: 'Megapodius tenimberensis', indonesian: 'Gosong tanimbar' },
    { category: 'BURUNG', scientific: 'Talegalla cuvieri', indonesian: 'Maleo kamur' },
    { category: 'BURUNG', scientific: 'Talegalla fuscirostris', indonesian: 'Maleo paruh-hitam' },
    { category: 'BURUNG', scientific: 'Talegalla jobiensis', indonesian: 'Maleo kerah-coklat' },
    { category: 'BURUNG', scientific: 'Macgregoria pulchra', indonesian: 'Cendrawasih elok' },
    { category: 'BURUNG', scientific: 'Melipotes carolae', indonesian: 'Melipotes foja' },
    { category: 'BURUNG', scientific: 'Melipotes fumigatus', indonesian: 'Melipotes pipi-kuning' },
    { category: 'BURUNG', scientific: 'Melipotes gymnops', indonesian: 'Melipotes arfak' },
    { category: 'BURUNG', scientific: 'Meropogon forsteni', indonesian: 'Cirik-cirik sulawesi' },
    { category: 'BURUNG', scientific: 'Eutrichomyias rowleyi', indonesian: 'Seriwang sangihe' },
    { category: 'BURUNG', scientific: 'Symposiachrus boanensis', indonesian: 'Kehicap boano' },
    { category: 'BURUNG', scientific: 'Symposiachrus brehmii', indonesian: 'Kehicap biak' },
    { category: 'BURUNG', scientific: 'Symposiachrus everetti', indonesian: 'Kehicap tanah-jampea' },
    { category: 'BURUNG', scientific: 'Symposiachrus julianae', indonesian: 'Kehicap kofiau' },
    { category: 'BURUNG', scientific: 'Symposiachrus sacerdotum', indonesian: 'Kehicap flores' },
    { category: 'BURUNG', scientific: 'Cyornis concretus', indonesian: 'Sikatan besar' },
    { category: 'BURUNG', scientific: 'Cyornis ruckii', indonesian: 'Sikatan aceh' },
    { category: 'BURUNG', scientific: 'Cyornis sanfordi', indonesian: 'Sikatan matinan' },
    { category: 'BURUNG', scientific: 'Cynornis brunneatus', indonesian: 'Sikatanrimba coklat' },
    { category: 'BURUNG', scientific: 'Muscicapa sodhii', indonesian: 'Sikatanrimba sulawesi' },
    { category: 'BURUNG', scientific: 'Aethopyga duyvenbodei', indonesian: 'Burung madu sangihe' },
    { category: 'BURUNG', scientific: 'Aethopyga mystacalis', indonesian: 'Burung madu jawa' },
    { category: 'BURUNG', scientific: 'Aethopyga siparaja', indonesian: 'Burung madu sepah-raja' },
    { category: 'BURUNG', scientific: 'Anthreptes rhodolaemus', indonesian: 'Burung madu leher-merah' },
    { category: 'BURUNG', scientific: 'Cinnyris buettikoferi', indonesian: 'Burung madu sumba' },
    { category: 'BURUNG', scientific: 'Oceanites oceanicus', indonesian: 'Petrelbadai coklat' },
    { category: 'BURUNG', scientific: 'Pelagodroma marina', indonesian: 'Petrelbadai muka-putih' },
    { category: 'BURUNG', scientific: 'Ardeotis australis', indonesian: 'Kalkunpadang australia' },
    { category: 'BURUNG', scientific: 'Astrapia nigra', indonesian: 'Astrapia arfak' },
    { category: 'BURUNG', scientific: 'Astrapia splendidissima', indonesian: 'Astrapia cemerlang' },
    { category: 'BURUNG', scientific: 'Cicinnurus magnificus', indonesian: 'Cendrawasih belah-rotan' },
    { category: 'BURUNG', scientific: 'Cicinnurus regius', indonesian: 'Cendrawasih raja' },
    { category: 'BURUNG', scientific: 'Cicinnurus respublica', indonesian: 'Cendrawasih botak' },
    { category: 'BURUNG', scientific: 'Drepanornis albertisi', indonesian: 'Paruh sabit ekor-kuning' },
    { category: 'BURUNG', scientific: 'Drepanornis bruijnii', indonesian: 'Paruh sabit paruh-putih' },
    { category: 'BURUNG', scientific: 'Epimachus fastosus', indonesian: 'Paruh sabit kuri-kuri' },
    { category: 'BURUNG', scientific: 'Epimachus meyeri', indonesian: 'Paruh sabit coklat' },
    { category: 'BURUNG', scientific: 'Lophorina magnifica', indonesian: 'Toowa cemerlang' },
    { category: 'BURUNG', scientific: 'Lophorina superba', indonesian: 'Cendrawasih kerah' },
    { category: 'BURUNG', scientific: 'Lycocorax obiensis', indonesian: 'Cenderawasih gagak-obi' },
    { category: 'BURUNG', scientific: 'Lycocorax pyrrhopterus', indonesian: 'Cendrawasih gagak' },
    { category: 'BURUNG', scientific: 'Manucodia ater', indonesian: 'Manukodia kilap' },
    { category: 'BURUNG', scientific: 'Manucodia chalybatus', indonesian: 'Manukodia leher-keriting' },
    { category: 'BURUNG', scientific: 'Manucodia jobiensis', indonesian: 'Manukodia jobi' },
    { category: 'BURUNG', scientific: 'Paradigalla brevicauda', indonesian: 'Paradigalla ibinimi' },
    { category: 'BURUNG', scientific: 'Paradigalla carunculata', indonesian: 'Paradigalla ekor-panjang' },
    { category: 'BURUNG', scientific: 'Paradisaea apoda', indonesian: 'Cendrawasih besar' },
    { category: 'BURUNG', scientific: 'Paradisaea minor', indonesian: 'Cendrawasih kecil' },
    { category: 'BURUNG', scientific: 'Paradisaea rubra', indonesian: 'Cendrawasih merah' },
    { category: 'BURUNG', scientific: 'Parotia berlepschi', indonesian: 'Parotia foja' },
    { category: 'BURUNG', scientific: 'Parotia carolae', indonesian: 'Parotia carola' },
    { category: 'BURUNG', scientific: 'Parotia sefilata', indonesian: 'Parotia arfak' },
    { category: 'BURUNG', scientific: 'Phonygammus keraudrenii', indonesian: 'Manukodia terompet' },
    { category: 'BURUNG', scientific: 'Pteridophora alberti', indonesian: 'Cendrawasih panji' },
    { category: 'BURUNG', scientific: 'Seleucidis melanoleucus', indonesian: 'Cendrawasih mati-kawat' },
    { category: 'BURUNG', scientific: 'Semioptera wallacii', indonesian: 'Bidadari halmahera' },
    { category: 'BURUNG', scientific: 'Pelecanus conspicillatus', indonesian: 'Undan kacamata' },
    { category: 'BURUNG', scientific: 'Pelecanus onocrotalus', indonesian: 'Undan putih' },
    { category: 'BURUNG', scientific: 'Pelecanus philippensis', indonesian: 'Undan paruh-totol' },
    { category: 'BURUNG', scientific: 'Ptilocichla leucogrammica', indonesian: 'Berencet kalimantan' },
    { category: 'BURUNG', scientific: 'Turdinus macrodactylus', indonesian: 'Berencet besar' },
    { category: 'BURUNG', scientific: 'Petroica archboldi', indonesian: 'Robin salju' },
    { category: 'BURUNG', scientific: 'Petroica bivittata', indonesian: 'Robin gunung' },
    { category: 'BURUNG', scientific: 'Phaethon lepturus', indonesian: 'Buntutsate putih' },
    { category: 'BURUNG', scientific: 'Phaethon rubricauda', indonesian: 'Buntutsate merah' },
    { category: 'BURUNG', scientific: 'Anhinga melanogaster', indonesian: 'Pecukular asia' },
    { category: 'BURUNG', scientific: 'Phalaropus lobatus', indonesian: 'Lakirumbai kecil' },
    { category: 'BURUNG', scientific: 'Argusianus argus', indonesian: 'Kuau raja' },
    { category: 'BURUNG', scientific: 'Lophura bulweri', indonesian: 'Sempidan kalimantan' },
    { category: 'BURUNG', scientific: 'Pavo muticus', indonesian: 'Merak hijau' },
    { category: 'BURUNG', scientific: 'Polyplectron chalcurum', indonesian: 'Kuaukerdil sumatera' },
    { category: 'BURUNG', scientific: 'Polyplectron schleiermacheri', indonesian: 'Kuaukerdil kalimantan' },
    { category: 'BURUNG', scientific: 'Mulleripicus fulvus', indonesian: 'Pelatuk kelabu-sulawesi' },
    { category: 'BURUNG', scientific: 'Mulleripicus pulverulentus', indonesian: 'Pelatuk kelabu-besar' },
    { category: 'BURUNG', scientific: 'Erythropitta arquata', indonesian: 'Paok kalung-biru' },
    { category: 'BURUNG', scientific: 'Erythropitta dohertyi', indonesian: 'Paok dohertyi' },
    { category: 'BURUNG', scientific: 'Erythropitta granatina', indonesian: 'Paok delima' },
    { category: 'BURUNG', scientific: 'Erythropitta venusta', indonesian: 'Paok topi-hitam' },
    { category: 'BURUNG', scientific: 'Erythropitta caeruleitorques', indonesian: 'Paok mopo-sangihe' },
    { category: 'BURUNG', scientific: 'Erythropitta celebensis', indonesian: 'Paok mopo-sulawesi' },
    { category: 'BURUNG', scientific: 'Erythropitta inspeculata', indonesian: 'Paok mopo-talaud' },
    { category: 'BURUNG', scientific: 'Erythropitta macklotii', indonesian: 'Paok mopo-papua' },
    { category: 'BURUNG', scientific: 'Erythropitta palliceps', indonesian: 'Paok mopo-siau' },
    { category: 'BURUNG', scientific: 'Erythropitta rubrinucha', indonesian: 'Paok mopo-amboyna' },
    { category: 'BURUNG', scientific: 'Erythropitta rufiventris', indonesian: 'Paok mopo-sultan' },
    { category: 'BURUNG', scientific: 'Hydrornis baudii', indonesian: 'Paok kepala-biru' },
    { category: 'BURUNG', scientific: 'Hydrornis caeruleus', indonesian: 'Paok sintau' },
    { category: 'BURUNG', scientific: 'Hydrornis schneideri', indonesian: 'Paok schneider' },
    { category: 'BURUNG', scientific: 'Hydrornis guajanus', indonesian: 'Paok pancawarna-jawa' },
    { category: 'BURUNG', scientific: 'Hydrornis irena', indonesian: 'Paok pancawarna-sumatera' },
    { category: 'BURUNG', scientific: 'Hydrornis schwaneri', indonesian: 'Paok pancawarna-kalimantan' },
    { category: 'BURUNG', scientific: 'Pitta elegans', indonesian: 'Paok laus' },
    { category: 'BURUNG', scientific: 'Pitta maxima', indonesian: 'Paok halmahera' },
    { category: 'BURUNG', scientific: 'Pitta megarhyncha', indonesian: 'Paok bakau' },
    { category: 'BURUNG', scientific: 'Pitta moluccensis', indonesian: 'Paok hujan' },
    { category: 'BURUNG', scientific: 'Pitta morotaiensis', indonesian: 'Paok morotai' },
    { category: 'BURUNG', scientific: 'Pitta nympha', indonesian: 'Paok bidadari' },
    { category: 'BURUNG', scientific: 'Pitta rosenbergii', indonesian: 'Paok hijau-biak' },
    { category: 'BURUNG', scientific: 'Pitta sordida', indonesian: 'Paok hijau' },
    { category: 'BURUNG', scientific: 'Pitta versicolor', indonesian: 'Paok lantang' },
    { category: 'BURUNG', scientific: 'Batrachostomus harterti', indonesian: 'Paruhkodok dulit' },
    { category: 'BURUNG', scientific: 'Podiceps cristatus', indonesian: 'Titihan jambul' },
    { category: 'BURUNG', scientific: 'Tachybaptus novaehollandiae', indonesian: 'Titihan australia' },
    { category: 'BURUNG', scientific: 'Tachybaptus ruficollis', indonesian: 'Titihan jelaga' },
    { category: 'BURUNG', scientific: 'Ardenna carneipes', indonesian: 'Penggunting-laut kaki-merah' },
    { category: 'BURUNG', scientific: 'Ardenna pacifica', indonesian: 'Penggunting-laut pasifik' },
    { category: 'BURUNG', scientific: 'Bulweria bulwerii', indonesian: 'Petrel bulwer' },
    { category: 'BURUNG', scientific: 'Bulweria fallax', indonesian: 'Petrel hindia' },
    { category: 'BURUNG', scientific: 'Calonectris leucomelas', indonesian: 'Penggunting-laut belang' },
    { category: 'BURUNG', scientific: 'Daption capense', indonesian: 'Petrel tanjung' },
    { category: 'BURUNG', scientific: 'Pachyptila desolata', indonesian: 'Petrel antartika' },
    { category: 'BURUNG', scientific: 'Pseudobulweria rostrata', indonesian: 'Petrel tahiti' },
    { category: 'BURUNG', scientific: 'Pterodorma baraui', indonesian: 'Petrel barau' },
    { category: 'BURUNG', scientific: 'Pterodorma sandwichensis', indonesian: 'Petrel galapagos' },
    { category: 'BURUNG', scientific: 'Puffinus heinrothi', indonesian: 'Penggunting-laut heinroth' },
    { category: 'BURUNG', scientific: 'Alisterus amboinensis', indonesian: 'Nuri-raja ambon' },
    { category: 'BURUNG', scientific: 'Alisterus chloropterus', indonesian: 'Nuri-raja sayap-kuning' },
    { category: 'BURUNG', scientific: 'Aprosmictus erythropterus', indonesian: 'Nuri-raja papua' },
    { category: 'BURUNG', scientific: 'Aprosmictus jonquillaceus', indonesian: 'Nuri-raja kembang' },
    { category: 'BURUNG', scientific: 'Chalcopsitta atra', indonesian: 'Nuri hitam' },
    { category: 'BURUNG', scientific: 'Chalcopsitta duivenbodei', indonesian: 'Nuri coklat' },
    { category: 'BURUNG', scientific: 'Chalcopsitta scintillata', indonesian: 'Nuri aru' },
    { category: 'BURUNG', scientific: 'Charmosyna josefinae', indonesian: 'Perkici josephina' },
    { category: 'BURUNG', scientific: 'Charmosyna multistriata', indonesian: 'Perkici garis' },
    { category: 'BURUNG', scientific: 'Charmosyna papou', indonesian: 'Perkici papua' },
    { category: 'BURUNG', scientific: 'Charmosyna placentis', indonesian: 'Perkici dagu-merah' },
    { category: 'BURUNG', scientific: 'Charmosyna pulchella', indonesian: 'Perkici punggung-hitam' },
    { category: 'BURUNG', scientific: 'Charmosyna rubronotata', indonesian: 'Perkici kepala-merah' },
    { category: 'BURUNG', scientific: 'Charmosyna stellae', indonesian: 'Perkici stella' },
    { category: 'BURUNG', scientific: 'Charmosyna toxopei', indonesian: 'Perkici buru' },
    { category: 'BURUNG', scientific: 'Charmosyna wilhelminae', indonesian: 'Perkici kerdil' },
    { category: 'BURUNG', scientific: 'Cyclopsitta diophthalma', indonesian: 'Nuri-ara mata-ganda' },
    { category: 'BURUNG', scientific: 'Cyclopsitta gulielmitertii', indonesian: 'Nuri-ara dada-jingga' },
    { category: 'BURUNG', scientific: 'Cyclopsitta melanogenia', indonesian: 'Nuri-ara pipi-hitam' },
    { category: 'BURUNG', scientific: 'Cyclopsitta nigrifrons', indonesian: 'Nuri-ara dahi-hitam' },
    { category: 'BURUNG', scientific: 'Eclectus roratus', indonesian: 'Nuri bayan' },
    { category: 'BURUNG', scientific: 'Eos bornea', indonesian: 'Nuri baluku' },
    { category: 'BURUNG', scientific: 'Eos cyanogenia', indonesian: 'Nuri sayap-hitam' },
    { category: 'BURUNG', scientific: 'Eos histrio', indonesian: 'Nuri talaud' },
    { category: 'BURUNG', scientific: 'Eos reticulata', indonesian: 'Nuri tanimbar' },
    { category: 'BURUNG', scientific: 'Eos semilarvata', indonesian: 'Nuri telinga-biru' },
    { category: 'BURUNG', scientific: 'Eos squamata', indonesian: 'Nuri kalung-ungu' },
    { category: 'BURUNG', scientific: 'Geoffroyus geoffroyi', indonesian: 'Nuri pipi-merah' },
    { category: 'BURUNG', scientific: 'Geoffroyus simplex', indonesian: 'Nuri kalung-biru' },
    { category: 'BURUNG', scientific: 'Loriculus amabilis', indonesian: 'Serindit maluku' },
    { category: 'BURUNG', scientific: 'Loriculus aurantiifrons', indonesian: 'Serindit papua' },
    { category: 'BURUNG', scientific: 'Loriculus catamene', indonesian: 'Serindit sangihe' },
    { category: 'BURUNG', scientific: 'Loriculus exilis', indonesian: 'Serindit paruh-merah' },
    { category: 'BURUNG', scientific: 'Loriculus flosculus', indonesian: 'Serindit flores' },
    { category: 'BURUNG', scientific: 'Loriculus galgulus', indonesian: 'Serindit melayu' },
    { category: 'BURUNG', scientific: 'Loriculus pusillus', indonesian: 'Serindit jawa' },
    { category: 'BURUNG', scientific: 'Loriculus sclateri', indonesian: 'Serindit sula' },
    { category: 'BURUNG', scientific: 'Loriculus stigmatus', indonesian: 'Serindit sulawesi' },
    { category: 'BURUNG', scientific: 'Lorius domicella', indonesian: 'Kasturi tengkuk-ungu' },
    { category: 'BURUNG', scientific: 'Lorius garrulus', indonesian: 'Kasturi ternate' },
    { category: 'BURUNG', scientific: 'Lorius lory', indonesian: 'Kasturi kepala-hitam' },
    { category: 'BURUNG', scientific: 'Micropsitta bruijnii', indonesian: 'Nuri-kate dada-merah' },
    { category: 'BURUNG', scientific: 'Micropsitta geelvinkiana', indonesian: 'Nuri-kategeelvink' },
    { category: 'BURUNG', scientific: 'Micropsitta keiensis', indonesian: 'Nuri-kate topi-kuning' },
    { category: 'BURUNG', scientific: 'Micropsitta pusio', indonesian: 'Nuri-kate pusio' },
    { category: 'BURUNG', scientific: 'Neopsittacus musschenbroeki', indonesian: 'Perkici paruh-kuning' },
    { category: 'BURUNG', scientific: 'Neopsittacus pullicauda', indonesian: 'Perkici paruh-jingga' },
    { category: 'BURUNG', scientific: 'Oreopsittacus arfaki', indonesian: 'Perkici arfak' },
    { category: 'BURUNG', scientific: 'Prioniturus flavicans', indonesian: 'Kringkring dada-kuning' },
    { category: 'BURUNG', scientific: 'Prioniturus mada', indonesian: 'Kringkring buru' },
    { category: 'BURUNG', scientific: 'Prioniturus platurus', indonesian: 'Kringkring bukit' },
    { category: 'BURUNG', scientific: 'Pseudeos fuscata', indonesian: 'Nuri kelam' },
    { category: 'BURUNG', scientific: 'Psittacella brehmii', indonesian: 'Nuri-macan brehm' },
    { category: 'BURUNG', scientific: 'Psittacella lorentzi', indonesian: 'Nuri-macan lorentz' },
    { category: 'BURUNG', scientific: 'Psittacella madaraszi', indonesian: 'Nuri-macan madarasz' },
    { category: 'BURUNG', scientific: 'Psittacella modesta', indonesian: 'Nuri-macan sederhana' },
    { category: 'BURUNG', scientific: 'Psittacella picta', indonesian: 'Nuri-macan berbiru' },
    { category: 'BURUNG', scientific: 'Psittacula alexandri', indonesian: 'Betet biasa' },
    { category: 'BURUNG', scientific: 'Psittacula longicauda', indonesian: 'Betet ekor-panjang' },
    { category: 'BURUNG', scientific: 'Psittaculirostris cervicalis', indonesian: 'Nuri-ara muka-merah' },
    { category: 'BURUNG', scientific: 'Psittaculirostris desmarestii', indonesian: 'Nuri-ara besar' },
    { category: 'BURUNG', scientific: 'Psittaculirostris edwardsii', indonesian: 'Nuri-araedward' },
    { category: 'BURUNG', scientific: 'Psittaculirostris godmani', indonesian: 'Nuri-ara kuduk-kuning' },
    { category: 'BURUNG', scientific: 'Psittaculirostris salvadorii', indonesian: 'Nuri-ara pipi-kuning' },
    { category: 'BURUNG', scientific: 'Psitteuteles goldiei', indonesian: 'Perkici lembayung' },
    { category: 'BURUNG', scientific: 'Psitteuteles iris', indonesian: 'Perkici iris' },
    { category: 'BURUNG', scientific: 'Psittinus cyanurus', indonesian: 'Nuri tanau' },
    { category: 'BURUNG', scientific: 'Psittrichas fulgidus', indonesian: 'Nuri kabare' },
    { category: 'BURUNG', scientific: 'Tanygnathus gramineus', indonesian: 'Betet-kelapa buru' },
    { category: 'BURUNG', scientific: 'Tanygnathus lucionensis', indonesian: 'Betet-kelapa filipina' },
    { category: 'BURUNG', scientific: 'Tanygnathus megalorynchos', indonesian: 'Betet-kelapa paruh-besar' },
    { category: 'BURUNG', scientific: 'Tanygnathus sumatranus', indonesian: 'Betet-kelapa punggung-biru' },
    { category: 'BURUNG', scientific: 'Trichoglossus capistratus', indonesian: 'Perkici oranye' },
    { category: 'BURUNG', scientific: 'Trichoglossus euteles', indonesian: 'Perkici timor' },
    { category: 'BURUNG', scientific: 'Trichoglossus flavoviridis', indonesian: 'Perkici kuning-hijau' },
    { category: 'BURUNG', scientific: 'Trichoglossus forsteni', indonesian: 'Perkici dada-merah' },
    { category: 'BURUNG', scientific: 'Trichoglossus haematodus', indonesian: 'Perkici pelangi' },
    { category: 'BURUNG', scientific: 'Trichoglossus meyeri', indonesian: 'Perkici kuning-gelap' },
    { category: 'BURUNG', scientific: 'Trichoglossus ornatus', indonesian: 'Perkici dora' },
    { category: 'BURUNG', scientific: 'Trichoglossus rosenbergii', indonesian: 'Perkici biak' },
    { category: 'BURUNG', scientific: 'Trichoglossus weberi', indonesian: 'Perkici flores' },
    { category: 'BURUNG', scientific: 'Ailuroedus buccoides', indonesian: 'Burungkucing kuping-putih' },
    { category: 'BURUNG', scientific: 'Ailuroedus melanotis', indonesian: 'Burungkucing tutul' },
    { category: 'BURUNG', scientific: 'Amblyornis flavifrons', indonesian: 'Namdur dahi-emas' },
    { category: 'BURUNG', scientific: 'Amblyornis inornata', indonesian: 'Namdur polos' },
    { category: 'BURUNG', scientific: 'Amblyornis macgregoriae', indonesian: 'Namdur jambul-emas' },
    { category: 'BURUNG', scientific: 'Archboldia papuensis', indonesian: 'Namdur archbold' },
    { category: 'BURUNG', scientific: 'Chlamydera cerviniventris', indonesian: 'Namdur coklat' },
    { category: 'BURUNG', scientific: 'Chlamydera lauterbachi', indonesian: 'Namdur dada-kuning' },
    { category: 'BURUNG', scientific: 'Sericulus ardens', indonesian: 'Namdur api' },
    { category: 'BURUNG', scientific: 'Sericulus aureus', indonesian: 'Namdur topeng' },
    { category: 'BURUNG', scientific: 'Setornis criniger', indonesian: 'Empuloh paruh-kait' },
    { category: 'BURUNG', scientific: 'Amaurornis magnirostris', indonesian: 'Kareo talaud' },
    { category: 'BURUNG', scientific: 'Aramidopsis plateni', indonesian: 'Mandar dengkur' },
    { category: 'BURUNG', scientific: 'Eulabeornis castaneoventris', indonesian: 'Mandar bakau' },
    { category: 'BURUNG', scientific: 'Gymnocrex rosenbergii', indonesian: 'Mandar mukabiru' },
    { category: 'BURUNG', scientific: 'Gymnocrex talaudensis', indonesian: 'Mandar talaud' },
    { category: 'BURUNG', scientific: 'Habroptila wallacii', indonesian: 'Mandar gendang' },
    { category: 'BURUNG', scientific: 'Megacrex inepta', indonesian: 'Mandar kasuari' },
    { category: 'BURUNG', scientific: 'Rallicula forbesi', indonesian: 'Mandargunung koma' },
    { category: 'BURUNG', scientific: 'Rallicula leucospila', indonesian: 'Mandargunung garis-putih' },
    { category: 'BURUNG', scientific: 'Rallicula mayri', indonesian: 'Mandargunung mayr' },
    { category: 'BURUNG', scientific: 'Porzana paykullii', indonesian: 'Tikusan siberia' },
    { category: 'BURUNG', scientific: 'Porzana tabuensis', indonesian: 'Tikusan polos' },
    { category: 'BURUNG', scientific: 'Himantopus himantopus', indonesian: 'Gagangbayang belang' },
    { category: 'BURUNG', scientific: 'Rhipidura euryura', indonesian: 'Kipasan bukit' },
    { category: 'BURUNG', scientific: 'Rhipidura javanica', indonesian: 'Kipasan belang' },
    { category: 'BURUNG', scientific: 'Rhipidura phoenicura', indonesian: 'Kipasan ekor-merah' },
    { category: 'BURUNG', scientific: 'Rostratula benghalensis', indonesian: 'Berkik-kembang besar' },
    { category: 'BURUNG', scientific: 'Limnodromus scolopaceus', indonesian: 'Trinil-lumpur paruh-panjang' },
    { category: 'BURUNG', scientific: 'Limnodromus semipalmatus', indonesian: 'Trinil-lumpur asia' },
    { category: 'BURUNG', scientific: 'Numenius arquata', indonesian: 'Gajahan erasia' },
    { category: 'BURUNG', scientific: 'Numenius madagascariensis', indonesian: 'Gajahan timur' },
    { category: 'BURUNG', scientific: 'Numenius minutus', indonesian: 'Gajahan kecil' },
    { category: 'BURUNG', scientific: 'Numenius phaeopus', indonesian: 'Gajahan penggala' },
    { category: 'BURUNG', scientific: 'Scolopax celebensis', indonesian: 'Berkik-gunung sulawesi' },
    { category: 'BURUNG', scientific: 'Scolopax rochussenii', indonesian: 'Berkik-gunung maluku' },
    { category: 'BURUNG', scientific: 'Scolopax rosenbergii', indonesian: 'Berkik-gunung papua' },
    { category: 'BURUNG', scientific: 'Scolopax saturata', indonesian: 'Berkik-gunung merah' },
    { category: 'BURUNG', scientific: 'Tringa erythropus', indonesian: 'Trinil tutul' },
    { category: 'BURUNG', scientific: 'Tringa flavipes', indonesian: 'Trinil kaki-kuning' },
    { category: 'BURUNG', scientific: 'Tringa guttifer', indonesian: 'Trinil nordmann' },
    { category: 'BURUNG', scientific: 'Tringa incana', indonesian: 'Trinil penjelajah' },
    { category: 'BURUNG', scientific: 'Tringa ochropus', indonesian: 'Trinil hijau' },
    { category: 'BURUNG', scientific: 'Catharacta maccormicki', indonesian: 'Skua kutub' },
    { category: 'BURUNG', scientific: 'Stercorarius longicaudus', indonesian: 'Camarkejar kecil' },
    { category: 'BURUNG', scientific: 'Stercorarius parasiticus', indonesian: 'Camarkejar arktika' },
    { category: 'BURUNG', scientific: 'Stercorarius pomarinus', indonesian: 'Camarkejar pomarin' },
    { category: 'BURUNG', scientific: 'Ninox burhani', indonesian: 'Pungguk togian' },
    { category: 'BURUNG', scientific: 'Ninox ios', indonesian: 'Pungguk merah-tua' },
    { category: 'BURUNG', scientific: 'Otus alfredi', indonesian: 'Celepuk flores' },
    { category: 'BURUNG', scientific: 'Otus angelinae', indonesian: 'Celepuk jawa' },
    { category: 'BURUNG', scientific: 'Otus beccarii', indonesian: 'Celepuk biak' },
    { category: 'BURUNG', scientific: 'Otus brookii', indonesian: 'Celepuk raja' },
    { category: 'BURUNG', scientific: 'Otus collari', indonesian: 'Celepuk sangihe' },
    { category: 'BURUNG', scientific: 'Otus enganensis', indonesian: 'Celepuk enggano' },
    { category: 'BURUNG', scientific: 'Otus jolandae', indonesian: 'Celepuk rinjani' },
    { category: 'BURUNG', scientific: 'Otus manadensis', indonesian: 'Celepuk sulawesi' },
    { category: 'BURUNG', scientific: 'Otus mendeni', indonesian: 'Celepuk banggai' },
    { category: 'BURUNG', scientific: 'Otus mentawi', indonesian: 'Celepuk mentawai' },
    { category: 'BURUNG', scientific: 'Otus siaoensis', indonesian: 'Celepuk siau' },
    { category: 'BURUNG', scientific: 'Otus umbra', indonesian: 'Celepuk simalur' },
    { category: 'BURUNG', scientific: 'Acridotheres melanopterus', indonesian: 'Jalak putih-sayap hitam' },
    { category: 'BURUNG', scientific: 'Acridotheres tricolor', indonesian: 'Jalak putih punggungabu' },
    { category: 'BURUNG', scientific: 'Acridotheres tertius', indonesian: 'Jalak putih tunggirabu' },
    { category: 'BURUNG', scientific: 'Gracula religiosa', indonesian: 'Tiong emas' },
    { category: 'BURUNG', scientific: 'Gracula robusta', indonesian: 'Tiong nias' },
    { category: 'BURUNG', scientific: 'Gracula venerata', indonesian: 'Tiong nusa-tenggara' },
    { category: 'BURUNG', scientific: 'Leucopsar rothschildii', indonesian: 'Curik bali' },
    { category: 'BURUNG', scientific: 'Papasula abbotti', indonesian: 'Angsabatu christmas' },
    { category: 'BURUNG', scientific: 'Sula dactylatra', indonesian: 'Angsabatu topeng' },
    { category: 'BURUNG', scientific: 'Sula leucogaster', indonesian: 'Angsabatu coklat' },
    { category: 'BURUNG', scientific: 'Sula sula', indonesian: 'Angsabatu kakimerah' },
    { category: 'BURUNG', scientific: 'Platalea regia', indonesian: 'Ibis sendok raja' },
    { category: 'BURUNG', scientific: 'Plegadis falcinellus', indonesian: 'Ibis rokoroko' },
    { category: 'BURUNG', scientific: 'Pseudibis davisoni', indonesian: 'Ibis karau' },
    { category: 'BURUNG', scientific: 'Threskiornis melanocephalus', indonesian: 'Ibis cucukbesi' },
    { category: 'BURUNG', scientific: 'Threskiornis moluccus', indonesian: 'Ibis australia' },
    { category: 'BURUNG', scientific: 'Threskiornis spinicollis', indonesian: 'Ibis papua' },
    { category: 'BURUNG', scientific: 'Stachyris grammiceps', indonesian: 'Tepus dada-putih' },
    { category: 'BURUNG', scientific: 'Apalharpactes reinwardtii', indonesian: 'Luntur jawa' },
    { category: 'BURUNG', scientific: 'Apalharpactes mackloti', indonesian: 'Luntur sumatera' },
    { category: 'BURUNG', scientific: 'Harpactes oreskios', indonesian: 'Luntur diard' },
    { category: 'BURUNG', scientific: 'Harpactes orrhophaeus', indonesian: 'Luntur putri' },
    { category: 'BURUNG', scientific: 'Harpactes duvaucelli', indonesian: 'Luntur kepala-merah' },
    { category: 'BURUNG', scientific: 'Harpactes diardii', indonesian: 'Luntur kasumba' },
    { category: 'BURUNG', scientific: 'Harpactes erythrocephalus', indonesian: 'Luntur harimau' },
    { category: 'BURUNG', scientific: 'Harpactes whiteheadi', indonesian: 'Luntur tunggir-coklat' },
    { category: 'BURUNG', scientific: 'Harpactes kasumba', indonesian: 'Luntur kalimantan' },
    { category: 'BURUNG', scientific: 'Cochoa azurea', indonesian: 'Ciung-mungkal jawa' },
    { category: 'BURUNG', scientific: 'Cochoa beccarii', indonesian: 'Ciung-mungkal sumatera' },
    { category: 'BURUNG', scientific: 'Turnix everetti', indonesian: 'Gemak sumba' },
    { category: 'BURUNG', scientific: 'Tyto inexspectata', indonesian: 'Serak minahasa' },
    { category: 'BURUNG', scientific: 'Tyto nigrobrunnea', indonesian: 'Serak taliabu' },
    { category: 'BURUNG', scientific: 'Heleia javanica', indonesian: 'Opior jawa' },
    { category: 'BURUNG', scientific: 'Zosterops flavus', indonesian: 'Kacamata jawa' },
    { category: 'BURUNG', scientific: 'Zosterops nehrkorni', indonesian: 'Kacamata sangihe' },
    { category: 'BURUNG', scientific: 'Heleia wallacei', indonesian: 'Kacamata wallacea' },
    { category: 'AMPHIBI', scientific: 'Leptophryne cruentata', indonesian: 'Kodok merah' },
    { category: 'REPTIL', scientific: 'Chlamydosaurus kingii', indonesian: 'Soa payung' },
    { category: 'REPTIL', scientific: 'Carettochelys insculpta', indonesian: 'Labi-labi moncong babi' },
    { category: 'REPTIL', scientific: 'Chelodina mccordii', indonesian: 'Kura-kura rote' },
    { category: 'REPTIL', scientific: 'Chelodina novaeguineae', indonesian: 'Kura-kura papua leher panjang' },
    { category: 'REPTIL', scientific: 'Caretta caretta', indonesian: 'Penyu bromo' },
    { category: 'REPTIL', scientific: 'Chelonia mydas', indonesian: 'Penyu hijau' },
    { category: 'REPTIL', scientific: 'Eretmochelys imbricata', indonesian: 'Penyu sisik' },
    { category: 'REPTIL', scientific: 'Lepidochelys olivacea', indonesian: 'Penyu lekang' },
    { category: 'REPTIL', scientific: 'Natator depressus', indonesian: 'Penyu pipih' },
    { category: 'REPTIL', scientific: 'Crocodylus novaeguineae', indonesian: 'Buaya irian' },
    { category: 'REPTIL', scientific: 'Crocodylus porosus', indonesian: 'Buaya muara' },
    { category: 'REPTIL', scientific: 'Crocodylus siamensis', indonesian: 'Buaya siam' },
    { category: 'REPTIL', scientific: 'Tomistoma schlegelii', indonesian: 'Buaya sinyulong' },
    { category: 'REPTIL', scientific: 'Dermochelys coriacea', indonesian: 'Penyu belimbing' },
    { category: 'REPTIL', scientific: 'Batagur affinis', indonesian: 'Biuku' },
    { category: 'REPTIL', scientific: 'Batagur borneoensis', indonesian: 'Beluku' },
    { category: 'REPTIL', scientific: 'Orlitia borneensis', indonesian: 'Bajuku' },
    { category: 'REPTIL', scientific: 'Lanthanotus borneensis', indonesian: 'Biawak kalimantan' },
    { category: 'REPTIL', scientific: 'Malayophython timoriensis', indonesian: 'Sanca timor' },
    { category: 'REPTIL', scientific: 'Morelia viridis', indonesian: 'Sanca hijau' },
    { category: 'REPTIL', scientific: 'Python bivittatus', indonesian: 'Sanca bodo' },
    { category: 'REPTIL', scientific: 'Simalia boeleni', indonesian: 'Sanca bulan' },
    { category: 'REPTIL', scientific: 'Manouria emys', indonesian: 'Baning coklat' },
    { category: 'REPTIL', scientific: 'Chitra chitra', indonesian: 'Labi-labi bintang' },
    { category: 'REPTIL', scientific: 'Varanus auffenbergi', indonesian: 'Biawak rote' },
    { category: 'REPTIL', scientific: 'Varanus becarii', indonesian: 'Biawak aru' },
    { category: 'REPTIL', scientific: 'Varanus boehmei', indonesian: 'Biawak waigeo' },
    { category: 'REPTIL', scientific: 'Varanus indicus', indonesian: 'Biawak maluku' },
    { category: 'REPTIL', scientific: 'Varanus komodoensis', indonesian: 'Biawak komodo' },
    { category: 'REPTIL', scientific: 'Varanus melinus', indonesian: 'Biawak banggai' },
    { category: 'REPTIL', scientific: 'Varanus nebulosus', indonesian: 'Biawak abu-abu' },
    { category: 'REPTIL', scientific: 'Varanus panoptes', indonesian: 'Biawak coklat' },
    { category: 'REPTIL', scientific: 'Varanus prasinus', indonesian: 'Biawak hijau' },
    { category: 'REPTIL', scientific: 'Varanus reisingeri', indonesian: 'Biawak misool' },
    { category: 'REPTIL', scientific: 'Varanus similis', indonesian: 'Biawak kerdil' },
    { category: 'REPTIL', scientific: 'Varanus timorensis', indonesian: 'Biawak timor' },
    { category: 'REPTIL', scientific: 'Varanus togianus', indonesian: 'Biawak togian' }
  ];

  // Filter hasil pencarian
  const searchResults = wildlifeDatabase.filter(animal => 
    animal.indonesian.toLowerCase().includes(searchQuery.toLowerCase()) ||
    animal.scientific.toLowerCase().includes(searchQuery.toLowerCase()) ||
    animal.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Foto satwa dan alam untuk gallery strip
  const galleryPhotos = [
    { id: 1, src: berries, alt: 'Komodo' },
    { id: 2, src: orangutan, alt: 'Kakaktua' },
    { id: 3, src: squirrel, alt: 'Tapir' },
    { id: 4, src: forest, alt: 'Orangutan' },
  ]

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-container">
        {/* Social Media Sidebar */}
        <div className="social-sidebar">
          <motion.a 
            href="https://web.facebook.com/profile.php?id=61577378520714" 
            className="social-icon"
            whileHover={{ scale: 1.2, x: 5 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </motion.a>
          <motion.a 
            href="https://x.com/BarantinRI" 
            className="social-icon"
            whileHover={{ scale: 1.2, x: 5 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/karantinalampung/" 
            className="social-icon"
            whileHover={{ scale: 1.2, x: 5 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </motion.a>
        </div>

        {/* Main Content */}
        <div className="hero-content">
          <div className="hero-text-left">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              SAVE OUR <span className="highlight">FOREST</span>
            </motion.h1>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Indonesia is home to rare wildlife like the Sumatran Tiger, Elephant, 
              Rhino, and Orangutan. Protecting them means protecting our future.
            </motion.p>

            {/* Search Box */}
            <motion.div 
              className="search-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Cari satwa (contoh: biawak, harimau, orangutan)..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setShowResults(e.target.value.length > 0)
                  }}
                  className="search-input"
                />
                {searchQuery && (
                  <button 
                    className="clear-search"
                    onClick={() => {
                      setSearchQuery('')
                      setShowResults(false)
                    }}
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              {/* Search Results */}
              <AnimatePresence>
                {showResults && searchQuery && (
                  <motion.div 
                    className="search-results"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="results-header">
                      <span>Ditemukan {searchResults.length} satwa</span>
                    </div>
                    
                    {searchResults.length > 0 ? (
                      <div className="results-list">
                        {searchResults.slice(0, 10).map((animal, index) => (
                          <motion.div 
                            key={index}
                            className="result-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <div className="result-category">{animal.category}</div>
                            <div className="result-names">
                              <strong>{animal.indonesian}</strong>
                              <em>{animal.scientific}</em>
                            </div>
                          </motion.div>
                        ))}
                        {searchResults.length > 10 && (
                          <div className="show-more">
                            +{searchResults.length - 10} satwa lainnya
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="no-results">
                        Satwa tidak ditemukan. Coba kata kunci lain.
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>

          {/* Photo Gallery Strip */}
          <motion.div 
            className="gallery-strip"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {galleryPhotos.map((photo, index) => (
              <motion.div 
                key={photo.id}
                className="gallery-photo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + (index * 0.1) }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                <img src={photo.src} alt={photo.alt} />
                <div className="photo-overlay"></div>
              </motion.div>
            ))}
            <motion.div 
              className="gallery-nav"
              whileHover={{ scale: 1.1 }}
            >
              <FaArrowRight />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero