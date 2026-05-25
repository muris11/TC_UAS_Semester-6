export type OptionKey = "A" | "B" | "C" | "D";

export type Question = {
  id: number;
  topic: string;
  difficulty: "Dasar" | "Menengah" | "Studi Kasus";
  origin: string;
  question: string;
  options: { key: OptionKey; text: string }[];
  answer: OptionKey;
  explanation: string;
  competency: string;
};

export const questions: Question[] = [
  {
    "id": 1,
    "topic": "Pengantar & Smart City",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari UAS",
    "question": "What is the main concept of technopreneurship and how does it differ from traditional entrepreneurship?",
    "options": [
      {
        "key": "A",
        "text": "Technopreneurship combines technology and entrepreneurship to create innovative technology-based businesses, while technology may not be the core driver in traditional entrepreneurship."
      },
      {
        "key": "B",
        "text": "Technopreneurship focuses only on selling physical products without using technology."
      },
      {
        "key": "C",
        "text": "Technopreneurship is identical to traditional entrepreneurship but always requires larger capital."
      },
      {
        "key": "D",
        "text": "Technopreneurship only concerns software development without considering business sustainability."
      }
    ],
    "answer": "A",
    "explanation": "Technopreneurship memadukan inovasi teknologi dan proses kewirausahaan untuk menciptakan nilai serta bisnis yang berkelanjutan, bukan sekadar membuat aplikasi.",
    "competency": "Definisi technopreneurship"
  },
  {
    "id": 2,
    "topic": "Pengantar & Smart City",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari UAS",
    "question": "What is a Smart City ecosystem, and how can startups contribute to its development?",
    "options": [
      {
        "key": "A",
        "text": "A city that uses only manual systems; startups do not have a significant role."
      },
      {
        "key": "B",
        "text": "An ecosystem using digital technology and collaboration to improve urban services; startups contribute through IoT, data platforms, and smart mobility solutions."
      },
      {
        "key": "C",
        "text": "A city development concept limited to tall buildings and construction companies."
      },
      {
        "key": "D",
        "text": "A program that reduces city population by moving residents outside the urban area."
      }
    ],
    "answer": "B",
    "explanation": "Smart City menekankan peningkatan layanan perkotaan melalui teknologi, data, tata kelola, dan kolaborasi pemangku kepentingan.",
    "competency": "Ekosistem Smart City"
  },
  {
    "id": 3,
    "topic": "Pengantar & Smart City",
    "difficulty": "Studi Kasus",
    "origin": "Pengembangan baru",
    "question": "A flood-prediction startup successfully sends river sensor readings to the cloud, but alerts remain inaccurate because agency datasets are inconsistent and emergency response procedures are not connected. What is the BEST conclusion?",
    "options": [
      {
        "key": "A",
        "text": "The product is ready for city-wide expansion because technical connectivity alone proves success."
      },
      {
        "key": "B",
        "text": "The startup should sell hardware only because institutional coordination is outside a Smart City solution."
      },
      {
        "key": "C",
        "text": "The startup must integrate reliable data, citizen needs, agency collaboration, and operational response procedures in addition to working sensors."
      },
      {
        "key": "D",
        "text": "The product should remove public agencies from the process to speed up innovation."
      }
    ],
    "answer": "C",
    "explanation": "Solusi kota cerdas tidak cukup berhasil hanya karena sensor bekerja; hasil nyata memerlukan integrasi data dan proses layanan publik.",
    "competency": "Dampak solusi perkotaan"
  },
  {
    "id": 4,
    "topic": "Pengantar & Smart City",
    "difficulty": "Menengah",
    "origin": "Pengembangan baru",
    "question": "Why are stakeholder collaboration and governance especially important for a Smart City startup?",
    "options": [
      {
        "key": "A",
        "text": "Because technology products are not allowed to operate without advertising partners."
      },
      {
        "key": "B",
        "text": "Because local governments must always own every startup application."
      },
      {
        "key": "C",
        "text": "Because a startup cannot develop software before receiving public funding."
      },
      {
        "key": "D",
        "text": "Because urban solutions interact with public services, regulations, shared data, and multiple responsible institutions."
      }
    ],
    "answer": "D",
    "explanation": "Masalah kota melibatkan data publik, otoritas, warga, operator, dan aturan; kolaborasi menentukan implementasi serta kepercayaan.",
    "competency": "Kolaborasi stakeholder"
  },
  {
    "id": 5,
    "topic": "Pengantar & Smart City",
    "difficulty": "Studi Kasus",
    "origin": "Pengembangan baru",
    "question": "A city deploys an app that shows air-quality alerts, but it does not provide actions for schools, health services, or residents when pollution becomes dangerous. Which evaluation is MOST accurate?",
    "options": [
      {
        "key": "A",
        "text": "The solution needs an operational value pathway so data can support decisions and public action."
      },
      {
        "key": "B",
        "text": "The solution is complete because displaying sensor values is the final purpose of Smart City technology."
      },
      {
        "key": "C",
        "text": "The solution should remove its dashboard and rely only on printed reports."
      },
      {
        "key": "D",
        "text": "The solution automatically achieves public impact as soon as sensors are installed."
      }
    ],
    "answer": "A",
    "explanation": "Data harus diterjemahkan menjadi keputusan atau tindakan; dashboard tanpa alur respons belum memberi manfaat penuh.",
    "competency": "Value from urban data"
  },
  {
    "id": 6,
    "topic": "Masalah, Ideasi & Value Proposition",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari Kelompok D",
    "question": "Before building a mobile flood-reporting application, a municipal team collects flood points, drainage conditions, citizen complaints, and hazard maps. This action demonstrates that Smart City solution development must begin with…",
    "options": [
      {
        "key": "A",
        "text": "Selecting the newest technology to make the solution appear innovative."
      },
      {
        "key": "B",
        "text": "Mapping real data-driven problems before developing the digital system."
      },
      {
        "key": "C",
        "text": "Building a prototype without involving any stakeholders."
      },
      {
        "key": "D",
        "text": "Adding as many features as possible before understanding the users."
      }
    ],
    "answer": "B",
    "explanation": "Identifikasi masalah berbasis data membantu memastikan solusi menjawab kondisi nyata, bukan hanya keinginan membuat teknologi.",
    "competency": "Problem identification"
  },
  {
    "id": 7,
    "topic": "Masalah, Ideasi & Value Proposition",
    "difficulty": "Menengah",
    "origin": "Diadaptasi dari latihan",
    "question": "A student identifies traffic congestion. Which method is MOST appropriate to validate its root causes before ideation?",
    "options": [
      {
        "key": "A",
        "text": "Immediately develop a navigation app and assume the cause is clear."
      },
      {
        "key": "B",
        "text": "Only study international competitors without speaking to local users."
      },
      {
        "key": "C",
        "text": "Conduct observations and in-depth interviews with different road-user and transport stakeholder segments."
      },
      {
        "key": "D",
        "text": "Write revenue projections before collecting evidence of the problem."
      }
    ],
    "answer": "C",
    "explanation": "Wawancara dan observasi lintas pengguna memvalidasi akar masalah, misalnya pola perjalanan, bottleneck, dan perilaku.",
    "competency": "Validasi akar masalah"
  },
  {
    "id": 8,
    "topic": "Masalah, Ideasi & Value Proposition",
    "difficulty": "Studi Kasus",
    "origin": "Diadaptasi dari Expert Exam",
    "question": "Residents report illegal waste in chat groups, but sanitation officers receive vague locations and cannot track resolution status. Which statement BEST formulates the problem and provides a basis for a value proposition?",
    "options": [
      {
        "key": "A",
        "text": "The city needs an attractive modern application with icons and rewards because digitization itself is the main benefit."
      },
      {
        "key": "B",
        "text": "The problem is entirely citizen awareness, so digital reporting is unnecessary."
      },
      {
        "key": "C",
        "text": "A complete AI system should be deployed immediately because it removes the need for workflow change and validation."
      },
      {
        "key": "D",
        "text": "Waste handling is delayed because complaints are not converted into verifiable location data, evidence, urgency, assignment, and follow-up status; the solution should create that operational flow."
      }
    ],
    "answer": "D",
    "explanation": "Problem statement kuat menunjukkan gap nyata dan manfaat solusi: laporan berubah menjadi informasi yang dapat ditindaklanjuti.",
    "competency": "Problem formulation"
  },
  {
    "id": 9,
    "topic": "Masalah, Ideasi & Value Proposition",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari latihan",
    "question": "Which combination CORRECTLY represents Customer Jobs and Gain Creators for a Smart Parking startup?",
    "options": [
      {
        "key": "A",
        "text": "Customer Job: locating an available parking space; Gain Creator: reducing search time through real-time availability."
      },
      {
        "key": "B",
        "text": "Customer Job: obtaining a parking ticket; Gain Creator: using complex registration forms."
      },
      {
        "key": "C",
        "text": "Customer Job: avoiding congestion; Gain Creator: displaying advertisements on every screen."
      },
      {
        "key": "D",
        "text": "Customer Job: finding parking; Gain Creator: requiring manual calls to every parking operator."
      }
    ],
    "answer": "A",
    "explanation": "Gain Creator harus langsung meningkatkan hasil yang diinginkan pelanggan saat melakukan job utama.",
    "competency": "Value Proposition Canvas"
  },
  {
    "id": 10,
    "topic": "Masalah, Ideasi & Value Proposition",
    "difficulty": "Studi Kasus",
    "origin": "Diadaptasi dari Kelompok A",
    "question": "Urban drivers spend an average of 18 minutes searching for parking. A startup develops an IoT parking platform with a real-time government dashboard. Which Business Model Canvas element is MOST directly represented by the problem solved and the benefit offered?",
    "options": [
      {
        "key": "A",
        "text": "Key Partnerships"
      },
      {
        "key": "B",
        "text": "Value Proposition"
      },
      {
        "key": "C",
        "text": "Customer Relationships"
      },
      {
        "key": "D",
        "text": "Cost Structure"
      }
    ],
    "answer": "B",
    "explanation": "Pengurangan waktu mencari parkir dan peningkatan informasi ketersediaan adalah nilai utama yang ditawarkan kepada pengguna/instansi.",
    "competency": "Value proposition in BMC"
  },
  {
    "id": 11,
    "topic": "Masalah, Ideasi & Value Proposition",
    "difficulty": "Menengah",
    "origin": "Pengembangan baru",
    "question": "Which ideation outcome is MOST suitable after a problem validation study finds that citizens abandon complaints because forms are long and the response status is invisible?",
    "options": [
      {
        "key": "A",
        "text": "An app that first adds augmented reality filters for complaint photographs."
      },
      {
        "key": "B",
        "text": "A dashboard containing only city slogans and promotional banners."
      },
      {
        "key": "C",
        "text": "A streamlined verified-report flow with status tracking and officer response notifications."
      },
      {
        "key": "D",
        "text": "A full national rollout before testing whether reporting completion improves."
      }
    ],
    "answer": "C",
    "explanation": "Ideasi yang baik menjawab pain point tervalidasi: friksi pelaporan dan tidak adanya transparansi tindak lanjut.",
    "competency": "Solution fit"
  },
  {
    "id": 12,
    "topic": "Business Model Canvas",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari UAS",
    "question": "UrbanFlow Nexus routinely develops applications, integrates datasets, maintains cloud servers, deploys updates, and analyzes sensor data. In the Business Model Canvas, these core operational processes belong to…",
    "options": [
      {
        "key": "A",
        "text": "Customer Relationships"
      },
      {
        "key": "B",
        "text": "Revenue Streams"
      },
      {
        "key": "C",
        "text": "Key Partnerships"
      },
      {
        "key": "D",
        "text": "Key Activities"
      }
    ],
    "answer": "D",
    "explanation": "Key Activities berisi aktivitas inti yang diperlukan agar value proposition dapat diwujudkan dan layanan berjalan.",
    "competency": "Key Activities"
  },
  {
    "id": 13,
    "topic": "Business Model Canvas",
    "difficulty": "Menengah",
    "origin": "Pengembangan baru",
    "question": "A Smart Waste platform requires IoT bin sensors, a secure cloud environment, GIS datasets, and a data-science team to deliver its service. Which BMC block is represented MOST directly?",
    "options": [
      {
        "key": "A",
        "text": "Key Resources"
      },
      {
        "key": "B",
        "text": "Channels"
      },
      {
        "key": "C",
        "text": "Customer Relationships"
      },
      {
        "key": "D",
        "text": "Revenue Streams"
      }
    ],
    "answer": "A",
    "explanation": "Sensor, platform, data, dan tenaga ahli adalah sumber daya kunci yang dibutuhkan untuk menjalankan model bisnis.",
    "competency": "Key Resources"
  },
  {
    "id": 14,
    "topic": "Business Model Canvas",
    "difficulty": "Menengah",
    "origin": "Pengembangan baru",
    "question": "A city pays an annual license for predictive-maintenance analytics while citizens access basic reporting without charge. The annual license should be recorded under which BMC block?",
    "options": [
      {
        "key": "A",
        "text": "Channels"
      },
      {
        "key": "B",
        "text": "Revenue Streams"
      },
      {
        "key": "C",
        "text": "Cost Structure"
      },
      {
        "key": "D",
        "text": "Key Activities"
      }
    ],
    "answer": "B",
    "explanation": "Pembayaran lisensi tahunan merupakan cara startup memperoleh pendapatan dari segmen institusional.",
    "competency": "Revenue Streams"
  },
  {
    "id": 15,
    "topic": "Business Model Canvas",
    "difficulty": "Studi Kasus",
    "origin": "Diadaptasi dari Expert Exam",
    "question": "A Smart Parking platform involves drivers, parking operators, city regulators, and malls. The team assumes all are one identical customer segment. What is the MOST important correction?",
    "options": [
      {
        "key": "A",
        "text": "Treat every actor as an end-user paying the same subscription fee."
      },
      {
        "key": "B",
        "text": "Remove revenue planning because public-sector products do not need sustainability."
      },
      {
        "key": "C",
        "text": "Map the multi-sided model because users, payers, data providers, regulators, and beneficiaries may differ and require aligned value and revenue logic."
      },
      {
        "key": "D",
        "text": "Focus only on interface design because stakeholder roles do not affect the business model."
      }
    ],
    "answer": "C",
    "explanation": "Platform Smart City sering multi-sided: pengguna aplikasi, pembayar, pemilik data, dan regulator tidak selalu pihak yang sama.",
    "competency": "Customer segments & multi-sided market"
  },
  {
    "id": 16,
    "topic": "Business Model Canvas",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari latihan",
    "question": "Which sequence MOST logically begins BMC development for a new solution?",
    "options": [
      {
        "key": "A",
        "text": "Revenue Streams → Cost Structure → Value Proposition → Customer Segments"
      },
      {
        "key": "B",
        "text": "Key Partners → Cost Structure → Channels → User Interface"
      },
      {
        "key": "C",
        "text": "Cost Structure → Revenue Streams → Product Logo → Office Location"
      },
      {
        "key": "D",
        "text": "Customer Segments → Value Proposition → Channels → Revenue Streams"
      }
    ],
    "answer": "D",
    "explanation": "Model bisnis perlu dimulai dari pihak yang dilayani dan nilai yang ditawarkan, lalu bagaimana nilai disampaikan dan ditangkap.",
    "competency": "BMC logic"
  },
  {
    "id": 17,
    "topic": "Business Model Canvas",
    "difficulty": "Studi Kasus",
    "origin": "Diadaptasi dari Expert Exam",
    "question": "A team fills all nine BMC blocks, but writes citizens as customers, government licenses as revenue, no government partnership, no cloud operating costs, and promises city-wide service transformation. What is the BEST evaluation?",
    "options": [
      {
        "key": "A",
        "text": "The BMC is weak because the blocks must form a consistent logic of creating, delivering, operating, financing, and capturing value."
      },
      {
        "key": "B",
        "text": "The BMC is strong because completeness of the nine boxes is sufficient."
      },
      {
        "key": "C",
        "text": "Revenue streams should be deleted because social impact excludes financial sustainability."
      },
      {
        "key": "D",
        "text": "Only slide aesthetics need improvement; strategic inconsistency is irrelevant."
      }
    ],
    "answer": "A",
    "explanation": "BMC bukan checklist; setiap blok harus saling mendukung agar implementasi dan keberlanjutan masuk akal.",
    "competency": "Konsistensi BMC"
  },
  {
    "id": 18,
    "topic": "Pasar & Model Digital",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari Kelompok A",
    "question": "A Smart City market analysis identifies 2,000,000 total vehicles in the city, 600,000 vehicles operating in downtown areas, and 50,000 first-year target users. Which statement is CORRECT?",
    "options": [
      {
        "key": "A",
        "text": "TAM = 50,000, SAM = 600,000, SOM = 2,000,000"
      },
      {
        "key": "B",
        "text": "TAM = 2,000,000, SAM = 600,000, SOM = 50,000"
      },
      {
        "key": "C",
        "text": "TAM = 600,000, SAM = 2,000,000, SOM = 50,000"
      },
      {
        "key": "D",
        "text": "TAM = 2,000,000, SAM = 50,000, SOM = 600,000"
      }
    ],
    "answer": "B",
    "explanation": "TAM adalah seluruh pasar potensial, SAM bagian yang dapat dilayani sesuai cakupan, dan SOM target realistis awal.",
    "competency": "TAM SAM SOM"
  },
  {
    "id": 19,
    "topic": "Pasar & Model Digital",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari Kelompok A",
    "question": "Citizens may report infrastructure damage for free, while agencies pay to access advanced analytics and predictive-maintenance capabilities. Which digital business model is BEST represented?",
    "options": [
      {
        "key": "A",
        "text": "Subscription only"
      },
      {
        "key": "B",
        "text": "Marketplace"
      },
      {
        "key": "C",
        "text": "Freemium"
      },
      {
        "key": "D",
        "text": "On-demand service"
      }
    ],
    "answer": "C",
    "explanation": "Model freemium menyediakan fungsi dasar gratis dan fitur bernilai lebih tinggi berbayar bagi segmen yang membutuhkan.",
    "competency": "Freemium model"
  },
  {
    "id": 20,
    "topic": "Pasar & Model Digital",
    "difficulty": "Studi Kasus",
    "origin": "Diadaptasi dari Expert Exam",
    "question": "An MSME marketplace gains 2,000 registered sellers after a campaign, but transactions and buyer return rates remain low. What is the BEST market-analysis response?",
    "options": [
      {
        "key": "A",
        "text": "Registration alone proves strong product-market fit and expansion should begin immediately."
      },
      {
        "key": "B",
        "text": "The only necessary change is improving catalogue colors and photographs."
      },
      {
        "key": "C",
        "text": "Add AI recommendations immediately without validating why users fail to transact."
      },
      {
        "key": "D",
        "text": "Evaluate buyer demand, seller activation, transaction trust, logistics costs, conversion, retention, and network effects before declaring feasibility."
      }
    ],
    "answer": "D",
    "explanation": "Platform dua sisi perlu aktivitas transaksi dan retensi, bukan hanya jumlah pendaftar.",
    "competency": "Platform validation"
  },
  {
    "id": 21,
    "topic": "Pasar & Model Digital",
    "difficulty": "Menengah",
    "origin": "Diadaptasi dari Kelompok D",
    "question": "A Smart Parking app uses IoT and AI but attracts little interest from citizens and government after launch. What is the MOST likely validation failure?",
    "options": [
      {
        "key": "A",
        "text": "The team focused on technology without validating user needs, purchasing stakeholders, and adoption readiness."
      },
      {
        "key": "B",
        "text": "IoT and AI can never be applied to urban transportation."
      },
      {
        "key": "C",
        "text": "Manual parking systems are always superior to digital systems."
      },
      {
        "key": "D",
        "text": "Only international funding can produce user adoption."
      }
    ],
    "answer": "A",
    "explanation": "Teknologi tidak menjamin adopsi; validasi pasar harus memeriksa kebutuhan, stakeholder pembeli, dan kesiapan implementasi.",
    "competency": "Market validation"
  },
  {
    "id": 22,
    "topic": "Pasar & Model Digital",
    "difficulty": "Menengah",
    "origin": "Pengembangan baru",
    "question": "Which business-model choice is MOST sustainable for a platform serving municipal asset maintenance?",
    "options": [
      {
        "key": "A",
        "text": "Offer every costly analytical feature permanently free with no paying segment."
      },
      {
        "key": "B",
        "text": "Combine a clearly defined institutional customer, recurring service contract, measurable maintenance savings, and operational support commitments."
      },
      {
        "key": "C",
        "text": "Avoid calculating cloud and support costs because digital products have no operating expenses."
      },
      {
        "key": "D",
        "text": "Depend only on viral social media attention without identifying a paying beneficiary."
      }
    ],
    "answer": "B",
    "explanation": "Bisnis digital berkelanjutan menghubungkan nilai terukur, pembayar yang jelas, pendapatan berulang, dan biaya operasional realistis.",
    "competency": "Sustainable digital model"
  },
  {
    "id": 23,
    "topic": "Teknologi Smart City",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari UAS",
    "question": "In a Smart City architecture, which layer is primarily responsible for cloud-based storage, integrated datasets, and Big Data analytics supporting decision-making?",
    "options": [
      {
        "key": "A",
        "text": "Sensing Layer"
      },
      {
        "key": "B",
        "text": "Application Layer"
      },
      {
        "key": "C",
        "text": "Data/Platform Layer"
      },
      {
        "key": "D",
        "text": "Network Layer"
      }
    ],
    "answer": "C",
    "explanation": "Data/Platform Layer menampung integrasi, penyimpanan, pemrosesan, dan analitik data dari berbagai sumber.",
    "competency": "Architecture layer"
  },
  {
    "id": 24,
    "topic": "Teknologi Smart City",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari Kelompok A",
    "question": "Which statement BEST explains interoperability in Smart City systems?",
    "options": [
      {
        "key": "A",
        "text": "Systems operate separately without communicating."
      },
      {
        "key": "B",
        "text": "Digital systems are replaced by manual reporting."
      },
      {
        "key": "C",
        "text": "Only one agency is permitted to access public-service information."
      },
      {
        "key": "D",
        "text": "Different technologies and platforms can exchange and use information coherently to support services."
      }
    ],
    "answer": "D",
    "explanation": "Interoperabilitas berarti sistem berbeda dapat saling bertukar dan memanfaatkan data agar layanan terintegrasi.",
    "competency": "Interoperability"
  },
  {
    "id": 25,
    "topic": "Teknologi Smart City",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari latihan",
    "question": "Which is NOT normally a core technological component of a data-driven Smart City solution?",
    "options": [
      {
        "key": "A",
        "text": "Manual data entry as the only and primary city data architecture."
      },
      {
        "key": "B",
        "text": "IoT sensors for collecting urban conditions."
      },
      {
        "key": "C",
        "text": "Big Data analytics for processing multiple data sources."
      },
      {
        "key": "D",
        "text": "Cloud computing for data storage and processing."
      }
    ],
    "answer": "A",
    "explanation": "Input manual dapat menjadi pendukung, tetapi bukan arsitektur utama yang scalable untuk sistem Smart City berbasis data real-time.",
    "competency": "Smart City components"
  },
  {
    "id": 26,
    "topic": "Teknologi Smart City",
    "difficulty": "Studi Kasus",
    "origin": "Diadaptasi dari Expert Exam",
    "question": "A traffic system uploads all raw CCTV footage to a central cloud, causing high latency, bandwidth costs, and privacy risks. Which architecture decision is MOST appropriate?",
    "options": [
      {
        "key": "A",
        "text": "Store all raw footage permanently because more data always eliminates risk."
      },
      {
        "key": "B",
        "text": "Use edge processing near cameras for initial detection and send only needed metadata, alerts, or important events to the platform."
      },
      {
        "key": "C",
        "text": "Give citizens direct unrestricted access to all raw streams."
      },
      {
        "key": "D",
        "text": "Stop using all real-time technology because it is inherently unethical."
      }
    ],
    "answer": "B",
    "explanation": "Edge processing dapat mengurangi latensi, biaya jaringan, dan paparan data pribadi sambil tetap memberi informasi operasional.",
    "competency": "Edge computing & privacy"
  },
  {
    "id": 27,
    "topic": "Teknologi Smart City",
    "difficulty": "Studi Kasus",
    "origin": "Pengembangan baru",
    "question": "Water-level sensors send readings through a network gateway to a cloud platform, and a mobile app displays flood alerts. Which mapping is CORRECT?",
    "options": [
      {
        "key": "A",
        "text": "Sensor = revenue; gateway = customer relationship; cloud = partner; app = cost structure."
      },
      {
        "key": "B",
        "text": "Sensor = application; mobile app = sensing; cloud = manual layer; gateway = pitch deck."
      },
      {
        "key": "C",
        "text": "Sensor = sensing; gateway/connectivity = network; cloud analytics = data/platform; mobile alert = application."
      },
      {
        "key": "D",
        "text": "Every component belongs only to the sensing layer because the system begins with a sensor."
      }
    ],
    "answer": "C",
    "explanation": "Arsitektur berlapis memetakan pengumpulan data, transmisi, pemrosesan, dan penyajian layanan secara terpisah.",
    "competency": "Layer mapping"
  },
  {
    "id": 28,
    "topic": "MVP & Validasi",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari UAS",
    "question": "An ESP32 flood sensor is tested in a laboratory to determine whether water-level readings can be transmitted to a cloud server through Wi-Fi; the device is not yet used publicly. What is the main purpose of this stage?",
    "options": [
      {
        "key": "A",
        "text": "To launch a final public service at large scale."
      },
      {
        "key": "B",
        "text": "To confirm long-term citizen retention."
      },
      {
        "key": "C",
        "text": "To prove a profitable commercial market without user research."
      },
      {
        "key": "D",
        "text": "To validate whether the technical concept works before real implementation."
      }
    ],
    "answer": "D",
    "explanation": "Tahap ini adalah proof of concept teknis, belum merupakan validasi manfaat layanan atau pasar.",
    "competency": "Proof of concept"
  },
  {
    "id": 29,
    "topic": "MVP & Validasi",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari Kelompok D",
    "question": "According to the Cupcake Model of MVP development, which approach is MOST appropriate?",
    "options": [
      {
        "key": "A",
        "text": "Provide one small but functional, reliable, well-designed feature that delivers immediate value to early users."
      },
      {
        "key": "B",
        "text": "Launch many advanced features even if the system frequently fails."
      },
      {
        "key": "C",
        "text": "Offer a half-built application whose core function cannot be used."
      },
      {
        "key": "D",
        "text": "Wait until an entire city infrastructure is finished before testing any user value."
      }
    ],
    "answer": "A",
    "explanation": "MVP bukan produk setengah rusak; ia adalah versi kecil namun utuh yang dapat dipakai untuk menguji asumsi inti.",
    "competency": "Cupcake MVP"
  },
  {
    "id": 30,
    "topic": "MVP & Validasi",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari Kelompok A",
    "question": "What is the main purpose of usability testing on a prototype before releasing an MVP?",
    "options": [
      {
        "key": "A",
        "text": "To increase hardware requirements."
      },
      {
        "key": "B",
        "text": "To identify interaction problems and improve the user experience before real use."
      },
      {
        "key": "C",
        "text": "To finalize only the company logo."
      },
      {
        "key": "D",
        "text": "To eliminate the need for documentation and validation."
      }
    ],
    "answer": "B",
    "explanation": "Usability testing mendeteksi hambatan alur, istilah, tombol, dan beban pengguna sebelum produk fungsional dipakai lebih luas.",
    "competency": "Usability testing"
  },
  {
    "id": 31,
    "topic": "MVP & Validasi",
    "difficulty": "Studi Kasus",
    "origin": "Diadaptasi dari Expert Exam",
    "question": "A team creates a highly realistic clickable Figma prototype for an emergency app, but it cannot send real reports or notify officers. Which assessment is MOST accurate?",
    "options": [
      {
        "key": "A",
        "text": "It is already an MVP because visual fidelity is sufficient proof of operational value."
      },
      {
        "key": "B",
        "text": "It is better than an MVP because public services need design only."
      },
      {
        "key": "C",
        "text": "It remains a prototype useful for flow testing, but is not yet an MVP because it does not deliver the core real-world function."
      },
      {
        "key": "D",
        "text": "It has no testing value because prototypes cannot be used for feedback."
      }
    ],
    "answer": "C",
    "explanation": "Prototype menguji desain/alur, sedangkan MVP harus bekerja minimal dan menghasilkan nilai nyata serta umpan balik penggunaan.",
    "competency": "Prototype versus MVP"
  },
  {
    "id": 32,
    "topic": "MVP & Validasi",
    "difficulty": "Studi Kasus",
    "origin": "Diadaptasi dari Expert Exam",
    "question": "A Smart Waste app records 900 downloads but only 28 verified reports and 6 resolved cases. Which validation metric set is MOST meaningful?",
    "options": [
      {
        "key": "A",
        "text": "Downloads alone because awareness equals product-market fit."
      },
      {
        "key": "B",
        "text": "Social media likes and views only."
      },
      {
        "key": "C",
        "text": "Number of reward badges added before examining the reporting workflow."
      },
      {
        "key": "D",
        "text": "Conversion from download to verified report, officer response, resolved case, retention, and reasons users abandon the action."
      }
    ],
    "answer": "D",
    "explanation": "Validasi layanan publik perlu mengukur tindakan inti sampai penyelesaian masalah, bukan sekadar pemasangan aplikasi.",
    "competency": "Validation funnel"
  },
  {
    "id": 33,
    "topic": "MVP & Validasi",
    "difficulty": "Menengah",
    "origin": "Diadaptasi dari latihan",
    "question": "Which indicator MOST validly suggests product-market fit for a startup?",
    "options": [
      {
        "key": "A",
        "text": "Users retain, use the core feature repeatedly, recommend it organically, and would be disappointed if it disappeared."
      },
      {
        "key": "B",
        "text": "The product is temporarily viral on social media."
      },
      {
        "key": "C",
        "text": "The company attends a well-known technology conference."
      },
      {
        "key": "D",
        "text": "The startup prints a premium-looking pitch deck."
      }
    ],
    "answer": "A",
    "explanation": "PMF ditunjukkan oleh penggunaan berulang, retensi, rekomendasi organik, dan kebutuhan nyata, bukan popularitas sesaat.",
    "competency": "Product-market fit"
  },
  {
    "id": 34,
    "topic": "MVP & Validasi",
    "difficulty": "Menengah",
    "origin": "Diadaptasi dari Kelompok A",
    "question": "A founder keeps a feature even after most customer interviews indicate that the feature is unnecessary. What is the founder’s MAIN mistake?",
    "options": [
      {
        "key": "A",
        "text": "Using any quantitative method."
      },
      {
        "key": "B",
        "text": "Focusing on the founder’s idea rather than evidence of user pain points."
      },
      {
        "key": "C",
        "text": "Not purchasing more cloud capacity."
      },
      {
        "key": "D",
        "text": "Launching an MVP too quickly even though interviews were already conducted."
      }
    ],
    "answer": "B",
    "explanation": "Validasi membutuhkan kesediaan mengubah asumsi berdasarkan bukti pengguna, bukan mempertahankan fitur karena ego ide.",
    "competency": "Learning from validation"
  },
  {
    "id": 35,
    "topic": "Etika & Legal",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari Kelompok A",
    "question": "An application intentionally makes its unsubscribe button difficult to find so that users remain subscribed longer. Why is this unethical?",
    "options": [
      {
        "key": "A",
        "text": "It reduces algorithm speed."
      },
      {
        "key": "B",
        "text": "It contradicts open-source licensing rules only."
      },
      {
        "key": "C",
        "text": "It exploits user behavior through a dark pattern that undermines informed choice."
      },
      {
        "key": "D",
        "text": "It is unethical only if the application uses no artificial intelligence."
      }
    ],
    "answer": "C",
    "explanation": "Dark pattern memanipulasi keputusan pengguna dan bertentangan dengan desain yang transparan serta menghormati pilihan.",
    "competency": "Dark patterns"
  },
  {
    "id": 36,
    "topic": "Etika & Legal",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari Kelompok D",
    "question": "A startup technically complies with a regulation but uses psychological manipulation in its UI to push unwanted subscriptions. What principle is illustrated?",
    "options": [
      {
        "key": "A",
        "text": "Anything legal is automatically ethical."
      },
      {
        "key": "B",
        "text": "Ethics do not matter for technology startups."
      },
      {
        "key": "C",
        "text": "Only government applications need ethical design."
      },
      {
        "key": "D",
        "text": "What is legal is not necessarily ethical."
      }
    ],
    "answer": "D",
    "explanation": "Kepatuhan minimum terhadap hukum belum otomatis memenuhi kewajiban etis terhadap transparansi dan otonomi pengguna.",
    "competency": "Legal versus ethical"
  },
  {
    "id": 37,
    "topic": "Etika & Legal",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari latihan",
    "question": "Which scenario MOST likely violates personal data protection principles in Indonesia?",
    "options": [
      {
        "key": "A",
        "text": "Selling user behavioral data to third parties without users’ knowledge or valid basis."
      },
      {
        "key": "B",
        "text": "Collecting necessary location data with informed consent for a navigation function."
      },
      {
        "key": "C",
        "text": "Providing account deletion controls."
      },
      {
        "key": "D",
        "text": "Using access control and encryption to protect stored data."
      }
    ],
    "answer": "A",
    "explanation": "Pemrosesan data pribadi harus memiliki dasar yang sah dan transparan; menjual data tanpa pengetahuan pengguna berisiko melanggar prinsip PDP.",
    "competency": "UU PDP principles"
  },
  {
    "id": 38,
    "topic": "Etika & Legal",
    "difficulty": "Studi Kasus",
    "origin": "Diadaptasi dari Expert Exam",
    "question": "A startup pitching a citizen-reporting pilot holds names, phone numbers, GPS report locations, photos, and response records. Investors want proof of impact. What is the MOST mature approach?",
    "options": [
      {
        "key": "A",
        "text": "Provide the entire raw dataset because investor transparency overrides privacy."
      },
      {
        "key": "B",
        "text": "Present aggregated or anonymized impact metrics and explain consent, minimization, access controls, security, retention, and milestone-based funding needs."
      },
      {
        "key": "C",
        "text": "Avoid using any impact evidence at all because responsible data use is impossible."
      },
      {
        "key": "D",
        "text": "Collect more identity data even when it is unnecessary to the service."
      }
    ],
    "answer": "B",
    "explanation": "Pembuktian dampak dapat dilakukan tanpa membocorkan identitas; minimisasi dan kontrol keamanan penting dalam layanan publik digital.",
    "competency": "Data protection in pitching"
  },
  {
    "id": 39,
    "topic": "Etika & Legal",
    "difficulty": "Menengah",
    "origin": "Pengembangan baru",
    "question": "A wearable-device startup develops a unique external product shape and visual appearance. Competitors copy the outer design while using different internal technology. Which protection is MOST relevant?",
    "options": [
      {
        "key": "A",
        "text": "Copyright for all business ideas"
      },
      {
        "key": "B",
        "text": "Patent for any logo"
      },
      {
        "key": "C",
        "text": "Industrial Design protection for the product appearance"
      },
      {
        "key": "D",
        "text": "Trademark for the physical form itself"
      }
    ],
    "answer": "C",
    "explanation": "Desain industri melindungi tampilan visual produk, sedangkan paten umumnya terkait invensi teknis dan merek terkait identitas dagang.",
    "competency": "Intellectual property"
  },
  {
    "id": 40,
    "topic": "Pendanaan & Skalabilitas",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari UAS",
    "question": "A startup receives capital from investors in exchange for partial company ownership and shared decision-making authority. This financing is called…",
    "options": [
      {
        "key": "A",
        "text": "Debt financing"
      },
      {
        "key": "B",
        "text": "Government grant"
      },
      {
        "key": "C",
        "text": "Reward-based crowdfunding"
      },
      {
        "key": "D",
        "text": "Equity financing"
      }
    ],
    "answer": "D",
    "explanation": "Equity financing menukar modal dengan kepemilikan saham sehingga investor memperoleh hak ekonomis dan umumnya pengaruh tertentu.",
    "competency": "Equity financing"
  },
  {
    "id": 41,
    "topic": "Pendanaan & Skalabilitas",
    "difficulty": "Menengah",
    "origin": "Diadaptasi dari latihan",
    "question": "Which sequence BEST reflects the typical progression of startup funding stages as business maturity increases?",
    "options": [
      {
        "key": "A",
        "text": "Bootstrapping → Pre-seed → Seed → Series A → Series B → Series C → IPO"
      },
      {
        "key": "B",
        "text": "Series A → Seed → Bootstrapping → IPO"
      },
      {
        "key": "C",
        "text": "IPO → Series C → Series B → Seed"
      },
      {
        "key": "D",
        "text": "Seed → IPO → Bootstrapping → Series A"
      }
    ],
    "answer": "A",
    "explanation": "Urutan umum bergerak dari pendanaan awal pendiri menuju putaran investasi pertumbuhan dan, untuk sebagian kecil startup, IPO.",
    "competency": "Funding stages"
  },
  {
    "id": 42,
    "topic": "Pendanaan & Skalabilitas",
    "difficulty": "Studi Kasus",
    "origin": "Diadaptasi dari Kelompok A",
    "question": "A startup gains 10 million users in one year, but operational costs rise proportionally with every new user added. What does this MOST accurately indicate about scalability?",
    "options": [
      {
        "key": "A",
        "text": "The startup is strongly scalable because the user count increased."
      },
      {
        "key": "B",
        "text": "The startup has not yet built a truly scalable operating model because growth still causes proportional cost growth."
      },
      {
        "key": "C",
        "text": "The startup automatically has financial scalability because it can seek funding."
      },
      {
        "key": "D",
        "text": "Cost structure never matters while the startup is expanding."
      }
    ],
    "answer": "B",
    "explanation": "Skalabilitas menuntut pertumbuhan output atau pengguna tanpa kenaikan biaya yang sebanding secara terus-menerus.",
    "competency": "Scalability"
  },
  {
    "id": 43,
    "topic": "Pendanaan & Skalabilitas",
    "difficulty": "Studi Kasus",
    "origin": "Diadaptasi dari Kelompok D",
    "question": "FinTrack AI has 50,000 active MSME users and stable revenue. It wants major international expansion and stronger cloud infrastructure, while founders understand ownership may dilute. Which funding source is MOST suited for rapid growth and strategic networks?",
    "options": [
      {
        "key": "A",
        "text": "A limited grant regardless of expansion needs."
      },
      {
        "key": "B",
        "text": "Only founders’ savings even if insufficient for the growth plan."
      },
      {
        "key": "C",
        "text": "Venture Capital investment, acknowledging that ownership may decrease."
      },
      {
        "key": "D",
        "text": "Reward crowdfunding as a guaranteed solution for long-term global scaling."
      }
    ],
    "answer": "C",
    "explanation": "VC relevan untuk ekspansi cepat yang membutuhkan modal besar dan jaringan, dengan konsekuensi dilusi kepemilikan.",
    "competency": "Funding fit"
  },
  {
    "id": 44,
    "topic": "Pendanaan & Skalabilitas",
    "difficulty": "Menengah",
    "origin": "Pengembangan baru",
    "question": "A municipal analytics startup chooses a recurring SaaS contract rather than one-time custom projects. Which scalability advantage does this MOST directly support?",
    "options": [
      {
        "key": "A",
        "text": "Elimination of all support, security, and infrastructure costs."
      },
      {
        "key": "B",
        "text": "No need to validate government procurement requirements."
      },
      {
        "key": "C",
        "text": "Guaranteed monopoly in every city market."
      },
      {
        "key": "D",
        "text": "Repeatable revenue and more standardized delivery across institutional customers."
      }
    ],
    "answer": "D",
    "explanation": "SaaS dapat meningkatkan pendapatan berulang dan standardisasi layanan, walaupun tetap membutuhkan biaya serta validasi implementasi.",
    "competency": "SaaS scalability"
  },
  {
    "id": 45,
    "topic": "Pitching",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari UAS",
    "question": "A founder has three minutes to pitch but spends two minutes explaining technical architecture and only thirty seconds on the problem and solution. What is the MOST critical mistake?",
    "options": [
      {
        "key": "A",
        "text": "Failing to emphasize the market problem and value of the solution, which violates the core principle of a persuasive pitch."
      },
      {
        "key": "B",
        "text": "Using any slides at all."
      },
      {
        "key": "C",
        "text": "Not mentioning an angel investor network, which is mandatory in every pitch."
      },
      {
        "key": "D",
        "text": "Presenting financial information, which is prohibited in pitches."
      }
    ],
    "answer": "A",
    "explanation": "Pitch singkat harus memprioritaskan masalah, nilai solusi, pasar, bukti, dan ask, bukan tenggelam dalam jargon teknis.",
    "competency": "Pitch focus"
  },
  {
    "id": 46,
    "topic": "Pitching",
    "difficulty": "Menengah",
    "origin": "Diadaptasi dari Kelompok D",
    "question": "In the ABCD pitching method, a CEO states that the startup has an experienced AI team, existing government collaboration, and credible market research data. This section primarily establishes…",
    "options": [
      {
        "key": "A",
        "text": "Attention"
      },
      {
        "key": "B",
        "text": "Credibility"
      },
      {
        "key": "C",
        "text": "Benefit"
      },
      {
        "key": "D",
        "text": "Direction"
      }
    ],
    "answer": "B",
    "explanation": "Tim, kolaborasi, dan bukti riset membangun kepercayaan audiens bahwa startup mampu mengeksekusi peluang.",
    "competency": "ABCD pitch method"
  },
  {
    "id": 47,
    "topic": "Pitching",
    "difficulty": "Dasar",
    "origin": "Diadaptasi dari latihan",
    "question": "Which pitch-deck sequence is MOST consistent with a persuasive investor-oriented narrative?",
    "options": [
      {
        "key": "A",
        "text": "Team → complete five-year statements → product logo → office location"
      },
      {
        "key": "B",
        "text": "Code architecture → database schema → UI color palette → technical appendix only"
      },
      {
        "key": "C",
        "text": "Problem → Solution → Market Size → Business Model → Traction → Team → Financials/Funding Ask"
      },
      {
        "key": "D",
        "text": "Vision slogan → organizational chart → unrelated awards → closing"
      }
    ],
    "answer": "C",
    "explanation": "Alur tersebut menghubungkan masalah, peluang, cara menghasilkan nilai, bukti eksekusi, dan kebutuhan investasi.",
    "competency": "Pitch structure"
  },
  {
    "id": 48,
    "topic": "Pitching",
    "difficulty": "Studi Kasus",
    "origin": "Diadaptasi dari UAS",
    "question": "A Smart City team pitching to investors overloads its presentation with framework names, database diagrams, and programming jargon. Which recommendation is BEST?",
    "options": [
      {
        "key": "A",
        "text": "Add more implementation-level technical detail so all audience members see system complexity."
      },
      {
        "key": "B",
        "text": "Focus only on coding because investors ignore market opportunity."
      },
      {
        "key": "C",
        "text": "Remove the business model and customer problem because pitching only demonstrates technical progress."
      },
      {
        "key": "D",
        "text": "Deliver a clear, concise, memorable, solution-oriented story emphasizing the urban problem, business value, validation, and benefits."
      }
    ],
    "answer": "D",
    "explanation": "Teknis penting sebagai bukti kelayakan, tetapi narasi pitch harus dipahami audiens dan berpusat pada nilai serta peluang.",
    "competency": "Pitch communication"
  },
  {
    "id": 49,
    "topic": "Pitching",
    "difficulty": "Studi Kasus",
    "origin": "Diadaptasi dari Expert Exam",
    "question": "In a three-minute pitch for investors, government partners, and institutional users, which structure is MOST persuasive?",
    "options": [
      {
        "key": "A",
        "text": "Problem, solution, target market, business model, traction, team, funding needs, and measurable expected impact."
      },
      {
        "key": "B",
        "text": "Complete IoT circuit diagrams, database structure, UI mockups, then a funding number."
      },
      {
        "key": "C",
        "text": "Only TAM/SAM/SOM and five-year projections with no problem or solution."
      },
      {
        "key": "D",
        "text": "Dashboard screenshots and a closing slogan without business sustainability evidence."
      }
    ],
    "answer": "A",
    "explanation": "Audiens perlu memahami alasan masalah penting, solusi layak, model berkelanjutan, bukti awal, tim, kebutuhan dana, dan dampak.",
    "competency": "Three-minute pitch"
  },
  {
    "id": 50,
    "topic": "Pitching",
    "difficulty": "Studi Kasus",
    "origin": "Pengembangan baru",
    "question": "A Smart Drainage startup asks for seed funding to pilot sensors in two districts. Which “ask” is MOST convincing in a pitch?",
    "options": [
      {
        "key": "A",
        "text": "“We need as much funding as possible because smart cities are trending.”"
      },
      {
        "key": "B",
        "text": "“We request funding for a defined pilot covering sensor installation, data integration, field validation, and impact metrics such as alert accuracy and response time.”"
      },
      {
        "key": "C",
        "text": "“We will decide the use of funds after investment because milestones restrict creativity.”"
      },
      {
        "key": "D",
        "text": "“The product has no revenue or impact plan, but the dashboard looks modern.”"
      }
    ],
    "answer": "B",
    "explanation": "Ask yang kuat menyebut penggunaan dana, cakupan uji coba, milestone, dan ukuran keberhasilan yang dapat dievaluasi.",
    "competency": "Funding ask & milestones"
  },
  {
    id: 51,
    topic: "Pasar & Model Digital",
    difficulty: "Menengah",
    origin: "Diadaptasi dari UAS",
    question: "A start-up launches a ride-hailing platform that becomes more valuable as more drivers and passengers join. What is the core economic concept that explains this growth pattern?",
    options: [
      { key: "A", text: "Economies of scale — unit costs fall as total output rises." },
      { key: "B", text: "Network effects — each new user increases the platform's value for all other users." },
      { key: "C", text: "Vertical integration — the firm owns its entire supply chain." },
      { key: "D", text: "First-mover advantage — being first guarantees permanent market leadership." }
    ],
    answer: "B",
    explanation: "Pertumbuhan platform ride-hailing didorong oleh network effects (efek jaringan): semakin banyak pengemudi, penumpang semakin cepat mendapat layanan; semakin banyak penumpang, pengemudi semakin banyak order. Efek ini menciptakan flywheel yang mempercepat ekspansi.",
    competency: "Network effects on digital platforms"
  },
  {
    id: 52,
    topic: "Masalah, Ideasi & Value Proposition",
    difficulty: "Menengah",
    origin: "Diadaptasi dari UAS",
    question: "A city government's innovation team is brainstorming Smart City solutions. They immediately propose deploying AI-powered surveillance cameras everywhere because the technology is cutting-edge. What is the most likely pitfall of this approach?",
    options: [
      { key: "A", text: "The team is too focused on the technology itself rather than identifying and solving the actual urban problem first." },
      { key: "B", text: "AI cameras are too expensive for any city to afford." },
      { key: "C", text: "The team should have started with a hardware prototype instead of software." },
      { key: "D", text: "Surveillance cameras violate all privacy regulations by default." }
    ],
    answer: "A",
    explanation: "Pitfall umum dalam ideasi Smart City adalah technology-first thinking: tim terlalu terobsesi pada kecanggihan teknologi dan melupakan masalah mendasar yang harus dipecahkan. Pendekatan yang benar adalah problem-first: identifikasi masalah, baru pilih teknologi yang tepat.",
    competency: "Smart City ideation pitfalls"
  },
  {
    id: 53,
    topic: "Business Model Canvas",
    difficulty: "Dasar",
    origin: "Diadaptasi dari UAS",
    question: "A student team builds an IoT-based flood early warning system. They pay monthly cloud hosting fees to AWS for data storage and allocate salaries for two junior developers. In the Business Model Canvas, where should these expenses be recorded?",
    options: [
      { key: "A", text: "Revenue Streams — because the team pays money to use AWS." },
      { key: "B", text: "Key Resources — hosting and developers are resources, not costs." },
      { key: "C", text: "Cost Structure — all operational costs incurred to run the business model." },
      { key: "D", text: "Key Partnerships — AWS and developers are external partners." }
    ],
    answer: "C",
    explanation: "Dalam BMC, Cost Structure mencatat seluruh biaya operasional untuk menjalankan model bisnis, termasuk cloud hosting fees dan gaji pengembang. Key Resources mencatat aset penting, sedangkan Key Partnerships mencatat mitra eksternal strategis.",
    competency: "Cost Structure in Business Model Canvas"
  },
  {
    id: 54,
    topic: "Teknologi Smart City",
    difficulty: "Menengah",
    origin: "Diadaptasi dari UAS",
    question: "A city planner wants to simulate the impact of a new public transportation route on traffic congestion before building it. Which technology would be MOST appropriate for creating a real-time virtual replica of the city's transportation network?",
    options: [
      { key: "A", text: "A static 3D model created with CAD software." },
      { key: "B", text: "Digital Twin — a dynamic virtual representation that mirrors the physical system in real time." },
      { key: "C", text: "A blockchain-based ledger of all transportation transactions." },
      { key: "D", text: "A social media sentiment analysis dashboard." }
    ],
    answer: "B",
    explanation: "Digital Twin adalah teknologi yang menciptakan replika virtual dari sistem fisik yang diperbarui secara real-time dengan data sensor. Ini memungkinkan simulasi, prediksi, dan optimasi sebelum kebijakan diterapkan di dunia nyata.",
    competency: "Digital Twin technology"
  },
  {
    id: 55,
    topic: "MVP & Validasi",
    difficulty: "Dasar",
    origin: "Diadaptasi dari UAS",
    question: "A team creates a clickable wireframe of their smart parking app to test the user flow with five friends. Later, they launch a basic but functional version with real parking data for 50 users. What is the relationship between these two artifacts?",
    options: [
      { key: "A", text: "The wireframe is the prototype used to validate the idea; the functional version is the MVP used to test the solution with real users." },
      { key: "B", text: "Both are MVPs because they both test the product." },
      { key: "C", text: "The wireframe is the MVP because it is faster to build; the functional version is the final product." },
      { key: "D", text: "There is no meaningful difference; the terms are interchangeable." }
    ],
    answer: "A",
    explanation: "Prototype adalah model awal (bisa wireframe, mockup) untuk menguji ide dan mendapatkan feedback awal. MVP (Minimum Viable Product) adalah versi fungsional minimal yang bisa digunakan oleh pengguna nyata untuk menyelesaikan masalah dan memvalidasi asumsi bisnis.",
    competency: "Prototype vs MVP distinction"
  },
  {
    id: 56,
    topic: "Etika & Legal",
    difficulty: "Menengah",
    origin: "Diadaptasi dari UAS",
    question: "A Smart City start-up collects location data from citizens' smartphones to optimize traffic light timing. The data is collected automatically when users open the app, without any pop-up explaining what data is collected or asking for permission. Which ethical or legal principle does this violate?",
    options: [
      { key: "A", text: "Data minimization — collecting only the data that is strictly necessary." },
      { key: "B", text: "Transparency and informed consent — users are not told what data is collected and have not explicitly agreed." },
      { key: "C", text: "Data portability — users cannot move their data to another service." },
      { key: "D", text: "Right to deletion — users cannot request their data to be removed." }
    ],
    answer: "B",
    explanation: "Undang-Undang Perlindungan Data Pribadi (UU PDP) dan prinsip etika mewajibkan transparansi (pengguna tahu data apa yang dikumpulkan) dan informed consent (persetujuan eksplisit). Mengumpulkan data tanpa memberi tahu dan tanpa izin melanggar prinsip ini.",
    competency: "Data privacy & informed consent"
  },
  {
    id: 57,
    topic: "Pendanaan & Skalabilitas",
    difficulty: "Menengah",
    origin: "Diadaptasi dari UAS",
    question: "A venture capitalist explains that she only invests in start-ups with scalable business models. Why do investors prioritize scalability so highly?",
    options: [
      { key: "A", text: "Scalable businesses can grow revenue significantly without a proportional increase in costs, enabling large returns on investment." },
      { key: "B", text: "Scalable businesses always have higher profit margins from day one." },
      { key: "C", text: "Scalability means the business has no competitors in the market." },
      { key: "D", text: "Investors prefer scalability because it guarantees immediate profitability." }
    ],
    answer: "A",
    explanation: "Skalabilitas adalah kemampuan bisnis untuk meningkatkan pendapatan tanpa kenaikan biaya yang proporsional. Ini penting bagi investor karena memungkinkan return investasi yang besar ketika bisnis berkembang. Model digital/platform biasanya lebih skalabel daripada bisnis fisik tradisional.",
    competency: "Scalability for investment"
  },
  {
    id: 58,
    topic: "Pitching",
    difficulty: "Sulit",
    origin: "Diadaptasi dari UAS",
    question: "A founder spends 80% of her pitch deck explaining the technical architecture of her AI-powered waste sorting system, but only mentions briefly that 'people need better recycling.' What is the MOST likely weakness of this pitch?",
    options: [
      { key: "A", text: "The technical explanation is too complex for a general audience." },
      { key: "B", text: "The pitch fails to demonstrate product-market fit by not clearly defining the problem, target customer, and why the solution is urgently needed." },
      { key: "C", text: "AI-based solutions are not suitable for waste management." },
      { key: "D", text: "The pitch deck should use more animations and graphics." }
    ],
    answer: "B",
    explanation: "Kelemahan terbesar pitch yang terlalu fokus pada fitur teknis adalah gagal menunjukkan product-market fit: apakah masalahnya nyata, apakah pasar cukup besar, dan mengapa solusi ini diperlukan sekarang. Investor ingin melihat problem-solution fit, bukan sekadar kecanggihan teknologi.",
    competency: "Product-market fit in pitching"
  },
  {
    id: 59,
    topic: "Teknologi Smart City",
    difficulty: "Sulit",
    origin: "Diadaptasi dari UAS",
    question: "A city deploys thousands of IoT sensors across public parks to monitor air quality and soil moisture. A security researcher discovers that the sensors have default passwords and unencrypted data transmissions. What is the most significant risk posed by this vulnerability?",
    options: [
      { key: "A", text: "The sensors may display incorrect air quality readings." },
      { key: "B", text: "Attackers could gain unauthorized access to the sensor network, manipulate data, or use the devices as entry points to attack other city systems." },
      { key: "C", text: "The sensors' batteries will drain faster with unencrypted transmission." },
      { key: "D", text: "The only consequence is that the sensor manufacturer might lose reputation." }
    ],
    answer: "B",
    explanation: "Kerentanan keamanan IoT (default password, data tidak terenkripsi) membuka risiko serius: peretas bisa mengakses jaringan, memanipulasi data, atau menggunakan sensor sebagai pintu masuk ke sistem kota yang lebih besar (pivot attack). Smart City harus menerapkan security by design.",
    competency: "IoT cybersecurity risks"
  },
  {
    id: 60,
    topic: "Pengantar & Smart City",
    difficulty: "Sulit",
    origin: "Diadaptasi dari UAS",
    question: "A technopreneur wants to build a Smart City solution that genuinely improves quality of life. She studies the city's waste management system and discovers that informal waste pickers collect 30% of recyclables but earn very little and have no health insurance. Which approach BEST reflects the essence of technopreneurship?",
    options: [
      { key: "A", text: "Build a mobile app for residents to report overflowing bins, ignoring the waste pickers' situation." },
      { key: "B", text: "Design a platform that connects waste pickers directly with recycling factories, provides digital identity for insurance access, and uses data to optimize collection routes — combining technology, social impact, and business sustainability." },
      { key: "C", text: "Create a social media campaign asking people to donate to waste pickers." },
      { key: "D", text: "Focus only on developing an AI-powered sorting robot and sell it to the government." }
    ],
    answer: "B",
    explanation: "Hakikat technopreneurship adalah memadukan inovasi teknologi, jiwa kewirausahaan, dan dampak sosial untuk memecahkan masalah nyata secara berkelanjutan. Opsi B mencerminkan hal ini dengan memberdayakan waste pickers (social), menggunakan platform digital (technology), dan menciptakan model bisnis yang viable (entrepreneurship).",
    competency: "Essence of technopreneurship"
  }
];

export const topics = Array.from(new Set(questions.map((question) => question.topic)));
