export const siteConfig = {
  projectShortName: "SRMS",
  projectFullName: "Akıllı Raporlama ve Yönetim Sistemi",
  projectFullNameEn: "Smart Reporting and Management Systems",
  teamName: "Vexra",
  university: "Atılım Üniversitesi",
  course: "CMPE/ISE/SE 494 | Graduation Project",
  supervisor: "Yrd. Doç. Dr. Arda SEZEN",
  year: "2025–26",
};

export const teamMembers = [
  { name: "Ahmet Efe Bayav", initials: "AEB", color: "#00D4FF" },
  { name: "Barış Özpulat", initials: "BÖ", color: "#0066FF" },
  { name: "Utku Oğul Bolat", initials: "UOB", color: "#7C3AED" },
  { name: "Ünal Namdar", initials: "ÜN", color: "#059669" },
  { name: "Tuna Alan", initials: "TA", color: "#DC2626" },
  { name: "Arda Başdere", initials: "AB", color: "#D97706" },
];

export const heroTaglines = [
  "Tespit Et. Sınıflandır. Önceliklendir.",
  "Yapay zeka destekli kampüs altyapı raporlama",
  "Fotoğraftan çözüme - saniyeler içinde",
  "Akıllı şehirler için akıllı raporlama",
];

export const problemCards = [
  {
    icon: "construction",
    title: "Hasarlı Yollar & Kaldırımlar",
    description:
      "Kampüsteki çukurlar, kırık kaldırımlar ve bozuk yüzeyler güvenliği tehdit eder ancak çoğu zaman fark edilmeden kalır.",
  },
  {
    icon: "lamp",
    title: "Arızalı Aydınlatma",
    description:
      "Bozuk sokak lambaları güvenli olmayan ortamlar oluşturur; manuel denetimlerle tespit edilmesi gecikir.",
  },
  {
    icon: "trash",
    title: "Atık Birikimi",
    description:
      "Boşaltılmayan çöp kutuları ve birikmeler halk sağlığını ve kampüs estetiğini olumsuz etkiler.",
  },
  {
    icon: "clock",
    title: "Yavaş Manuel Raporlama",
    description:
      "Telefon hatları ve genel amaçlı web formları zahmetlidir; yönetim zamanının büyük kısmı manuel triyaja harcanır.",
  },
];

export const howItWorksSteps = [
  {
    number: "01",
    icon: "camera",
    title: "Raporla",
    description:
      "Kullanıcı tek tıkla fotoğraf çeker ve React Native mobil uygulaması üzerinden gönderir. İsteğe bağlı açıklama eklenebilir.",
  },
  {
    number: "02",
    icon: "cpu",
    title: "Yapay Zeka Analizi",
    description:
      "İki aşamalı AI pipeline: Gemini Vision API görüntüyü açıklar ve filtreler; yerel LLM modeli 14 kategori içinden sınıflandırır ve 0–5 öncelik skoru atar.",
  },
  {
    number: "03",
    icon: "check-circle",
    title: "Çözüm",
    description:
      "Rapor otomatik olarak ilgili birime yönlendirilir. Yöneticiler web dashboard üzerinden takip eder, müdahale süresi önemli ölçüde kısalır.",
  },
];

export const features = [
  {
    icon: "grid",
    title: "14 Altyapı Kategorisi",
    description:
      "Yol hasarından vandalizme, başıboş hayvanlara kadar 14 farklı kentsel sorun kategorisi.",
  },
  {
    icon: "zap",
    title: "AI Öncelik Skoru (0–5)",
    description:
      "Her rapor için otomatik öncelik skoru atanır; acil sorunlar üste taşınır.",
  },
  {
    icon: "layers",
    title: "İki Aşamalı AI Pipeline",
    description:
      "Gemini Vision API + yerel LLM modeli iş birliği ile yüksek doğruluklu sınıflandırma.",
  },
  {
    icon: "send",
    title: "Gerçek Zamanlı Yönlendirme",
    description:
      "Raporlar doğrudan sorumlu birime iletilir; sıfır manuel triyaj.",
  },
  {
    icon: "smartphone",
    title: "Çapraz Platform",
    description:
      "React Native mobil uygulama + web yönetim dashboard - her cihazdan erişim.",
  },
  {
    icon: "shield",
    title: "Akıllı Görüntü Filtreleme",
    description:
      "Kapalı alan, NSFW ve alakasız içerikler otomatik olarak elenir; pipeline'a sadece geçerli görüntüler girer.",
  },
];

export const pipelineStages = [
  {
    id: "input",
    label: "Kullanıcı Fotoğrafı",
    sublabel: "Mobil uygulama",
    color: "#8BA3C7",
    icon: "image",
  },
  {
    id: "stage1",
    label: "Aşama 1",
    sublabel: "Gemini Vision API",
    color: "#0066FF",
    icon: "cloud",
    detail: "Görüntü açıklaması üret · Kategori belirle · Geçersiz görüntüleri filtrele",
  },
  {
    id: "stage2",
    label: "Aşama 2",
    sublabel: "Yerel LLM Modeli",
    color: "#00D4FF",
    icon: "cpu",
    detail: "14 kategoriden birini seç · Öncelik skoru (0–5) ata",
  },
  {
    id: "check",
    label: "Güven Kontrolü",
    sublabel: "Eşik değeri karşılaştırması",
    color: "#7C3AED",
    icon: "git-branch",
  },
  {
    id: "route",
    label: "Birime Yönlendir",
    sublabel: "Otomatik routing",
    color: "#059669",
    icon: "send",
  },
];

export const categories = [
  "Yol Hasarı (road_damage)",
  "Normal (normal)",
  "Atık Birikimi (waste)",
  "Kanalizasyon Suyu (sewage_water)",
  "Kaldırım Hasarı (sidewalk_damage)",
  "Vandalizm (vandalism)",
  "Kirlilik (pollution)",
  "Yeşil Alan Hasarı (green_space)",
  "Aydınlatma Arızası (lighting)",
  "Altyapı Hasarı (infrastructure)",
  "Trafik Tabelası (traffic_sign)",
  "Başıboş Hayvan (stray_animal)",
  "İlgisiz (irrelevant)",
  "Doğal Afet (natural_disaster)",
];

export const applicationAreas = [
  {
    icon: "graduation-cap",
    title: "Üniversite Kampüsleri",
    color: "#005BAA",
    bullets: [
      "Geniş alanı sınırlı personelle yönet",
      "Öğrencilerden anlık raporlama",
      "Akademik takvimle uyumlu önceliklendirme",
    ],
  },
  {
    icon: "building-2",
    title: "Belediyeler",
    color: "#003F7A",
    bullets: [
      "Vatandaş katılımını artır",
      "Manuel işlemleri otomatikleştir",
      "Kaynak dağılımını optimize et",
    ],
  },
  {
    icon: "map-pin",
    title: "Organize Yerleşim Alanları",
    color: "#7B8EAC",
    bullets: [
      "Siteler ve OSB'ler için özelleştirilebilir",
      "Yönetim ve sakin iletişimini güçlendir",
      "Bakım süreçlerini dijitalleştir",
    ],
  },
];

export const references = [
  {
    number: 1,
    citation:
      "Alfarrarjeh, A., Trivedi, D., Kim, S. H., & Shahabi, C. (2018). A Deep Learning Approach for Road Damage Detection from Smartphone Images. IEEE International Conference on Big Data.",
  },
  {
    number: 2,
    citation:
      "Majchrowska, S. et al. (2022). Deep learning-based waste detection in natural and urban environments. Waste Management, 138, 274–284.",
  },
  {
    number: 3,
    citation:
      "Vairetti, C. et al. (2024). Analytics-driven complaint prioritisation via deep learning and multicriteria decision-making. European Journal of Operational Research, 312(3), 1108–1118.",
  },
  {
    number: 4,
    citation:
      "Yao, Y., Dall'Ò, G., & Lu, F. (2026). Urban Street-Scene Perception and Renewal Strategies Powered by Vision–Language Models. Land, 15(2), 244.",
  },
  {
    number: 5,
    citation:
      "Hansen, M. M., & Dahiya, B. (2025). Traffy Fondue: a smart city citizen engagement. Frontiers in Sustainable Cities, 7.",
  },
];
