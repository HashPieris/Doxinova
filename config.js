// DOXINOVA Website Configuration
// Version: 1.0

const DOXINOVA_CONFIG = {
  // Site Information
  site: {
    name: 'DOXINOVA',
    fullName: 'Doxycycline-Citronellol Nanoemulsion Research',
    tagline: 'Inovasi Nanomedisin untuk Terapi Kanker Ovarium',
    version: '1.0',
    year: '2024-2026'
  },

  // Organization Information
  organization: {
    name: 'DOXINOVA Research Team',
    institution: 'Universitas Palangka Raya',
    city: 'Palangka Raya',
    province: 'Kalimantan Tengah',
    country: 'Indonesia',
    program: 'Kedokteran Program Sarjana'
  },

  // Contact Information
  contact: {
    email: 'doxinova@palangkaraya.ac.id',
    phone: '+62-XXX-XXXX-XXXX',
    website: 'https://doxinova-research.com',
    location: 'Lab ICT & Lab Biomedik FK, Universitas Palangka Raya'
  },

  // Team Members
  team: {
    advisor: {
      name: 'Ysrafil, S.Farm., M.Biomed',
      role: 'Dosen Pembimbing',
      expertise: ['Farmakologi', 'Nanomedisin']
    },
    lead: {
      name: 'Elisabet Rini Loisa Samosir',
      nim: '2430208010031',
      role: 'Ketua Tim',
      expertise: ['Formulasi Nanoemulsi', 'Molecular Dynamics']
    },
    members: [
      {
        id: 1,
        name: 'Yunita Salsabila Puteri',
        nim: '2430308010023',
        role: 'Anggota Tim',
        expertise: ['Uji Sitotoksisitas', 'Analisis Anti-migrasi']
      },
      {
        id: 2,
        name: 'Aulia Fitriansyah Putra Erwan Mujio',
        nim: '2530208010043',
        role: 'Anggota Tim',
        expertise: ['Network Pharmacology', 'Enrichment Analysis']
      },
      {
        id: 3,
        name: 'Made Jessy Andini',
        nim: '2530108010025',
        role: 'Anggota Tim',
        expertise: ['Molecular Docking', 'Laporan Penelitian']
      },
      {
        id: 4,
        name: 'Ni Made Fitriana Desi',
        nim: '2530308010022',
        role: 'Anggota Tim',
        expertise: ['Karakterisasi Nanoemulsi', 'Media Sosial']
      }
    ]
  },

  // Project Details
  project: {
    title: 'Doxycycline-Citronellol Nanoemulsion for Ovarian Cancer Treatment',
    titleIndonesian: 'Nanoemulsi Doxycycline-Citronellol untuk Terapi Kanker Ovarium',
    duration: '4 bulan',
    budget: 'Rp 9.351.000,00',
    category: 'Nanomedisin',
    focus: ['In Silico', 'In Vitro'],
    startDate: '2024',
    endDate: '2026'
  },

  // Research Specifications
  specifications: {
    particleSize: '< 200 nm',
    zetaPotential: '± ≥ 20 mV',
    polydispersityIndex: '< 0.3',
    pH: '4.5 - 6.5'
  },

  // Color Palette
  colors: {
    butter: '#E8D5B7',
    butterLight: '#F8E8C8',
    cherry: '#8B3A3A',
    cherryDark: '#C41E3A',
    olive: '#6B8E23',
    oliveDark: '#5A6F1C',
    oat: '#C5B8A8',
    oatLight: '#E5D8C8',
    dark: '#3D3D3D',
    light: '#FAFAFA'
  },

  // Timeline
  timeline: [
    {
      month: 1,
      title: 'Bulan 1',
      activity: 'Formulasi Nanoemulsi & Perizinan Etik'
    },
    {
      month: 2,
      title: 'Bulan 2',
      activity: 'Karakterisasi & Network Pharmacology'
    },
    {
      month: 3,
      title: 'Bulan 3',
      activity: 'Molecular Docking & Uji In Vitro'
    },
    {
      month: 4,
      title: 'Bulan 4',
      activity: 'Analisis Data & Publikasi'
    }
  ],

  // Sections Configuration
  sections: {
    home: {
      id: 'home',
      title: 'Beranda',
      enabled: true
    },
    about: {
      id: 'about',
      title: 'Tentang Kami',
      enabled: true
    },
    project: {
      id: 'project',
      title: 'Proyek',
      enabled: true
    },
    team: {
      id: 'team',
      title: 'Tim',
      enabled: true
    },
    contact: {
      id: 'contact',
      title: 'Kontak',
      enabled: true
    }
  },

  // Feature Toggles
  features: {
    mobileMenu: true,
    smoothScroll: true,
    formValidation: true,
    animations: true,
    lazyLoading: true,
    darkMode: false,
    newsletter: false,
    blog: false,
    gallery: false
  },

  // API Endpoints (if backend is added)
  api: {
    baseUrl: '/api',
    endpoints: {
      contact: '/api/contact',
      newsletter: '/api/newsletter',
      team: '/api/team',
      research: '/api/research'
    }
  },

  // Analytics
  analytics: {
    enabled: false,
    googleAnalyticsId: '',
    trackingEvents: ['pageview', 'click', 'scroll', 'form_submit']
  },

  // SEO Configuration
  seo: {
    lang: 'id',
    keywords: [
      'DOXINOVA',
      'Nanoemulsi',
      'Doxycycline',
      'Kanker Ovarium',
      'Penelitian',
      'Universitas Palangka Raya',
      'Nanomedisin',
      'Drug Delivery'
    ],
    description: 'DOXINOVA - Penelitian inovatif nanoemulsi doxycycline-citronellol untuk terapi kanker ovarium',
    og: {
      title: 'DOXINOVA Research',
      description: 'Nanoemulsion research for ovarian cancer treatment',
      image: 'assets/images/og-image.png',
      url: 'https://doxinova-research.com'
    }
  },

  // Utility Functions
  getTeamMember: function(id) {
    return this.team.members.find(m => m.id === id);
  },

  getAllTeamMembers: function() {
    return [this.team.advisor, this.team.lead, ...this.team.members];
  },

  getProjectInfo: function() {
    return this.project;
  },

  getContactInfo: function() {
    return this.contact;
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DOXINOVA_CONFIG;
}
