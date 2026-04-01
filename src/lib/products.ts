import { Product, FilterOptions, SortOption } from '../types/index'

// Enhanced product data with SEO, media arrays, and seller info
export const products: Product[] = [
  {
    id: '1',
    slug: 'xir-1800-swir-thermal-camera',
    name: 'XIR-1800 SWIR Thermal Camera',
    description: 'Advanced SWIR HDR thermal camera system for metal additive and critical welding applications with 120+ dB HDR capability.',
    longDescription: 'The XIR-1800 represents the pinnacle of SWIR thermal imaging technology, specifically engineered for metal additive manufacturing and critical welding applications. With an unprecedented 120+ dB HDR capability, this camera system delivers unparalleled temperature measurement accuracy from 300-6000°C. The SWIR advantage ensures clear vision through weld fumes with low sensitivity to emissivity changes, making it the ideal choice for research, development, and quality assurance in demanding industrial environments.',
    price: 'Request a Quote',
    category: 'Thermal Imaging',
    brand: 'Xiris',
    badge: 'PREMIUM',
    
    // Multiple high-resolution images
    images: [
      'https://www.xiris.com/wp-content/uploads/2025/07/SWIR-Thermal-camera-1024x578.jpg',
      'https://www.xiris.com/wp-content/uploads/2025/07/SWIR-Thermal-camera-angle-2.jpg',
      'https://www.xiris.com/wp-content/uploads/2025/07/SWIR-Thermal-camera-detail.jpg',
      'https://www.xiris.com/wp-content/uploads/2025/07/SWIR-Thermal-camera-application.jpg',
    ],
    
    // Video content for product demos
    videos: [
      {
        url: 'https://www.youtube.com/embed/xir1800-demo',
        thumbnail: 'https://www.xiris.com/wp-content/uploads/2025/07/video-thumb-1.jpg',
        title: 'XIR-1800 Product Demo',
        duration: '3:45'
      },
      {
        url: 'https://www.youtube.com/embed/xir1800-application',
        thumbnail: 'https://www.xiris.com/wp-content/uploads/2025/07/video-thumb-2.jpg',
        title: 'Real-World Applications',
        duration: '5:20'
      }
    ],
    
    specifications: {
      'Temperature Range': '300-6000°C',
      'Sensor Type': 'SWIR HDR InGaAs',
      'HDR Capability': '120+ dB',
      'Weight': '140g',
      'Mount': 'C-Mount',
      'Software': 'WeldStudio Pro',
      'Cooling': 'Passive',
      'Interface': 'GigE Vision'
    },
    
    features: [
      'Temperature range: 300-6000°C',
      'SWIR advantage for metal thermography',
      'Real-time t8/5 cooling time calculation',
      'WeldStudio Pro software included',
      'Low sensitivity to emissivity changes',
      'Clear vision through weld fumes'
    ],
    
    applications: [
      'Metal Additive Manufacturing (DED)',
      'Critical Welding Applications',
      'Research & Development',
      'GMAW, GTAW, Laser, Plasma, SMAW',
      'Process Development & Troubleshooting',
      'Quality Assurance'
    ],
    
    // Seller information
    seller: {
      name: 'Xiris Automation Inc',
      logo: null, // Will use avatar initials
      avatar: 'XI',
      rating: 4.9,
      totalReviews: 100,
      location: 'Burlington, ON, Canada',
      verified: true,
      establishedYear: 2000,
      description: 'Leading manufacturer of industrial weld cameras and thermal imaging systems',
      website: 'https://www.xiris.com',
      email: 'sales@engrity.com',
      phone: '1 (780) 800-6297'
    },
    
    inStock: true,
    featured: false,
    createdAt: '2025-11-01',
    
    // SEO optimization
    seo: {
      title: 'XIR-1800 SWIR Thermal Camera - Metal Additive Manufacturing | Xiris',
      description: 'Advanced SWIR HDR thermal camera with 120+ dB capability for metal additive manufacturing and welding. Temperature range 300-6000°C. WeldStudio Pro included.',
      keywords: [
        'SWIR thermal camera',
        'metal additive manufacturing camera',
        'welding thermal imaging',
        'HDR thermal camera',
        'industrial thermal camera',
        'temperature measurement',
        'weld monitoring',
        'XIR-1800'
      ],
      ogImage: 'https://www.xiris.com/wp-content/uploads/2025/07/SWIR-Thermal-camera-1024x578.jpg',
      canonicalUrl: '/products/xir-1800-swir-thermal-camera'
    }
  },
  
  {
    id: '2',
    slug: 'xvc-1000e-1100e-weld-camera',
    name: 'XVC-1000e/1100e Weld Camera',
    description: 'Ruggedized weld camera for production and harsh environments with IP65 rated housing and integrated LED lighting.',
    longDescription: 'Built for the toughest industrial environments, the XVC-1000e/1100e series combines rugged IP65-rated construction with cutting-edge HDR imaging technology. Available in both monochrome and color variants, these cameras feature motorized fine focus, integrated LED lighting, and the ability to monitor welding operations remotely from up to 100 meters away. Perfect for production environments, hard automation systems, and mechanized fabrication operations.',
    price: 'Request a Quote',
    category: 'Weld Cameras',
    brand: 'Xiris',
    badge: 'INDUSTRIAL',
    
    images: [
      'https://www.xiris.com/wp-content/uploads/2020/02/Xiris_024-1920x1280.jpg',
      'https://www.xiris.com/wp-content/uploads/2020/02/XVC-1000e-mounted.jpg',
      'https://www.xiris.com/wp-content/uploads/2020/02/XVC-1000e-detail.jpg',
      'https://www.xiris.com/wp-content/uploads/2020/02/XVC-1000e-application.jpg',
    ],
    
    videos: [
      {
        url: 'https://www.youtube.com/embed/xvc1000e-overview',
        thumbnail: 'https://www.xiris.com/wp-content/uploads/2020/02/video-thumb.jpg',
        title: 'XVC-1000e Overview',
        duration: '4:15'
      }
    ],
    
    specifications: {
      'Resolution': '1280 x 1024',
      'Frame Rate': 'Up to 55 fps',
      'Protection Rating': 'IP65',
      'Mount': 'C/CS Mount',
      'Cooling': 'Air/Water',
      'Lighting': 'Integrated LED',
      'Focus': 'Motorized Fine Focus',
      'Cable Length': 'Up to 100m'
    },
    
    features: [
      'IP65 rated air/water-cooled housing',
      'HDR Monochrome or Color options',
      'Motorized fine focus',
      'Integrated LED lighting',
      'Remote monitoring up to 100 meters',
      'WeldStudio 3 software included'
    ],
    
    applications: [
      'Production Environments',
      'Hard Automation (Column & Boom)',
      'GMAW Cladding/Overlay',
      'Mechanized Fabrication',
      'GMAW, GTAW, Laser, Plasma welding'
    ],
    
    seller: {
      name: 'Xiris Automation Inc',
      logo: null,
      avatar: 'XI',
      rating: 4.9,
      totalReviews: 100,
      location: 'Burlington, ON, Canada',
      verified: true,
      establishedYear: 2000,
      description: 'Leading manufacturer of industrial weld cameras and thermal imaging systems',
      website: 'https://www.xiris.com',
      email: 'sales@engrity.com',
      phone: '1 (780) 800-6297'
    },
    
    inStock: true,
    featured: false,
    createdAt: '2024-10-15',
    
    seo: {
      title: 'XVC-1000e/1100e Ruggedized Weld Camera - IP65 Rated | Xiris',
      description: 'Industrial weld camera with IP65 rating, HDR imaging, motorized focus, and remote monitoring up to 100m. Perfect for harsh production environments.',
      keywords: [
        'industrial weld camera',
        'IP65 weld camera',
        'ruggedized camera',
        'production weld monitoring',
        'HDR weld camera',
        'automated welding',
        'XVC-1000e',
        'remote weld monitoring'
      ],
      ogImage: 'https://www.xiris.com/wp-content/uploads/2020/02/Xiris_024-1920x1280.jpg',
      canonicalUrl: '/products/xvc-1000e-1100e-weld-camera'
    }
  },
  
  {
    id: '3',
    slug: 'xvc-700-series-weld-cameras',
    name: 'XVC-700 Series Weld Cameras',
    description: 'Next-generation compact weld cameras with slimline design for tight spaces in automated welding applications.',
    longDescription: 'The XVC-700 series represents the next evolution in compact weld monitoring technology. With an ultra-slimline design, these cameras fit into the tightest spaces while delivering full HDR imaging capabilities in monochrome, color, or NIR variants. S-Mount optics compatibility and configurable off-axis options make these cameras incredibly versatile for robotic welding, WAAM, and hard automation environments where space is at a premium.',
    price: 'Request a Quote',
    category: 'Weld Cameras',
    brand: 'Xiris',
    badge: 'COMPACT',
    
    images: [
      'https://www.xiris.com/wp-content/uploads/2023/11/XVC-700-710-750-high-res-white-background-website.jpg',
      'https://www.xiris.com/wp-content/uploads/2023/11/XVC-700-angle.jpg',
      'https://www.xiris.com/wp-content/uploads/2023/11/XVC-700-size-comparison.jpg',
      'https://www.xiris.com/wp-content/uploads/2023/11/XVC-700-mounted.jpg',
    ],
    
    videos: [
      {
        url: 'https://www.youtube.com/embed/xvc700-compact',
        thumbnail: 'https://www.xiris.com/wp-content/uploads/2023/11/video-thumb.jpg',
        title: 'XVC-700 Compact Design',
        duration: '2:50'
      }
    ],
    
    specifications: {
      'Form Factor': 'Ultra-compact Slimline',
      'Imaging Options': 'HDR Mono/Color/NIR',
      'Mount Type': 'S-Mount',
      'Optics': 'Configurable Off-axis',
      'Integration': 'Robotic & Hard Automation',
      'Processes': 'All major welding processes',
      'Software': 'WeldStudio Compatible'
    },
    
    features: [
      'Ultra-compact slimline design',
      'HDR imaging in Mono/Color/NIR',
      'S-Mount optics compatibility',
      'Configurable off-axis optics',
      'Easy integration with automation',
      'Compatible with all major welding processes'
    ],
    
    applications: [
      'Robotic Welding Systems',
      'Cladding Applications',
      'Hard Automation Environments',
      'Wire Arc Additive Manufacturing (WAAM)',
      'Metal Additive (DED)',
      'Weld Tractors and Cobots'
    ],
    
    seller: {
      name: 'Xiris Automation Inc',
      logo: null,
      avatar: 'XI',
      rating: 4.9,
      totalReviews: 100,
      location: 'Burlington, ON, Canada',
      verified: true,
      establishedYear: 2000,
      description: 'Leading manufacturer of industrial weld cameras and thermal imaging systems',
      website: 'https://www.xiris.com',
      email: 'sales@engrity.com',
      phone: '1 (780) 800-6297'
    },
    
    inStock: true,
    featured: false,
    createdAt: '2025-10-20',
    
    seo: {
      title: 'XVC-700 Series Compact Weld Cameras - Slimline Design | Xiris',
      description: 'Ultra-compact weld cameras with HDR imaging for tight spaces. Perfect for robotic welding, WAAM, and automated systems. S-Mount optics.',
      keywords: [
        'compact weld camera',
        'robotic welding camera',
        'slimline camera',
        'WAAM camera',
        'automated welding',
        'XVC-700',
        'cobot camera',
        'additive manufacturing camera'
      ],
      ogImage: 'https://www.xiris.com/wp-content/uploads/2023/11/XVC-700-710-750-high-res-white-background-website.jpg',
      canonicalUrl: '/products/xvc-700-series-weld-cameras'
    }
  },
  
  {
    id: '4',
    slug: 'xvc-310-lipstick-weld-camera',
    name: 'XVC-310 Lipstick Weld Camera',
    description: 'Advanced compact solution for GTAW and Plasma processes in confined spaces like Narrow Gap and Orbital applications.',
    longDescription: 'Revolutionary lipstick form factor camera designed specifically for GTAW and Plasma welding in the most confined spaces. The XVC-310 delivers 120+ dB HDR color imaging, allowing operators to monitor TIG tips in real-time with unprecedented clarity of the melt pool. Ideal for narrow gap welding, orbital applications, and micro welding where traditional cameras simply cannot fit.',
    price: 'Request a Quote',
    category: 'Weld Cameras',
    brand: 'Xiris',
    badge: 'NEW',
    
    images: [
      'https://www.xiris.com/wp-content/uploads/2024/04/XVC-310-Lipstick-camera-web-size-no-background.png',
      'https://www.xiris.com/wp-content/uploads/2024/04/XVC-310-size.png',
      'https://www.xiris.com/wp-content/uploads/2024/04/XVC-310-application.png',
      'https://www.xiris.com/wp-content/uploads/2024/04/XVC-310-orbital.png',
    ],
    
    videos: [
      {
        url: 'https://www.youtube.com/embed/xvc310-lipstick',
        thumbnail: 'https://www.xiris.com/wp-content/uploads/2024/04/video-thumb.jpg',
        title: 'XVC-310 Lipstick Camera Demo',
        duration: '3:30'
      }
    ],
    
    specifications: {
      'Sensor Type': 'Color HDR',
      'HDR Range': '120+ dB',
      'Design': 'Lipstick Form Factor',
      'Primary Process': 'GTAW, Plasma',
      'Size': 'Ultra-compact',
      'Focus': 'Fixed/Adjustable',
      'Integration': 'Easy automation mounting'
    },
    
    features: [
      'Ultra-compact lipstick design',
      '120+ dB HDR capability',
      'Perfect for narrow gap welding',
      'Monitor TIG tips in real-time',
      'Clear melt pool visibility',
      'Easy integration with automation systems'
    ],
    
    applications: [
      'GTAW (TIG) Welding',
      'Orbital Welding',
      'Narrow Gap Applications',
      'Cladding Operations',
      'Micro Welding',
      'Plasma Welding'
    ],
    
    seller: {
      name: 'Xiris Automation Inc',
      logo: null,
      avatar: 'XI',
      rating: 4.9,
      totalReviews: 100,
      location: 'Burlington, ON, Canada',
      verified: true,
      establishedYear: 2000,
      description: 'Leading manufacturer of industrial weld cameras and thermal imaging systems',
      website: 'https://www.xiris.com',
      email: 'sales@engrity.com',
      phone: '1 (780) 800-6297'
    },
    
    inStock: true,
    featured: false,
    createdAt: '2024-11-15',
    
    seo: {
      title: 'XVC-310 Lipstick Weld Camera - TIG & Orbital Welding | Xiris',
      description: 'Ultra-compact lipstick camera for GTAW, orbital, and narrow gap welding. 120+ dB HDR imaging for confined spaces. Monitor TIG tips in real-time.',
      keywords: [
        'lipstick weld camera',
        'TIG welding camera',
        'orbital welding camera',
        'narrow gap welding',
        'GTAW camera',
        'micro welding camera',
        'XVC-310',
        'confined space camera'
      ],
      ogImage: 'https://www.xiris.com/wp-content/uploads/2024/04/XVC-310-Lipstick-camera-web-size-no-background.png',
      canonicalUrl: '/products/xvc-310-lipstick-weld-camera'
    }
  },
  
  {
    id: '5',
    slug: 'wi-2200-weld-inspection-system',
    name: 'WI-2200 Weld Inspection System',
    description: 'Laser-based 3D post-weld inspection for tube & pipe mills (5-200mm OD) with real-time defect detection down to 0.015mm.',
    longDescription: 'The WI-2200 represents the gold standard in automated weld inspection for tube and pipe manufacturing. Using advanced laser-based 3D scanning technology, this system provides 100% in-line monitoring with defect detection capabilities down to an incredible 0.015mm. Non-contact and non-destructive, the air-cooled system integrates seamlessly into high-speed production lines, delivering real-time quality assurance and automated defect classification for tubes and pipes ranging from 5-200mm OD.',
    price: 'Request a Quote',
    category: 'Inspection Systems',
    brand: 'Xiris',
    badge: 'PRECISION',
    
    images: [
      'https://www.xiris.com/wp-content/uploads/2020/02/xiris-wi2000-2-1024x745.jpg',
      'https://www.xiris.com/wp-content/uploads/2020/02/wi2200-system.jpg',
      'https://www.xiris.com/wp-content/uploads/2020/02/wi2200-detail.jpg',
      'https://www.xiris.com/wp-content/uploads/2020/02/wi2200-application.jpg',
    ],
    
    videos: [
      {
        url: 'https://www.youtube.com/embed/wi2200-inspection',
        thumbnail: 'https://www.xiris.com/wp-content/uploads/2020/02/video-thumb.jpg',
        title: 'WI-2200 Inspection System',
        duration: '6:45'
      },
      {
        url: 'https://www.youtube.com/embed/wi2200-defects',
        thumbnail: 'https://www.xiris.com/wp-content/uploads/2020/02/video-thumb-2.jpg',
        title: 'Defect Detection Demo',
        duration: '4:20'
      }
    ],
    
    specifications: {
      'Detection Accuracy': 'Down to 0.015mm',
      'Monitoring': '100% In-line',
      'Method': 'Non-contact, Non-destructive',
      'Technology': 'Laser-based 3D',
      'Cooling': 'Air-cooled System',
      'Tube OD Range': '5-200mm',
      'Speed': 'High-speed capable',
      'Integration': 'Production line ready'
    },
    
    features: [
      'Defect detection down to 0.015mm',
      '100% in-line monitoring',
      'Non-contact, non-destructive',
      'Air-cooled system',
      'Real-time quality assurance',
      'Automated defect classification'
    ],
    
    applications: [
      'Tube & Pipe Mills',
      'Quality Control Systems',
      'Production Line Integration',
      'Post-Weld Inspection',
      'Automated Manufacturing',
      'High-Speed Processing'
    ],
    
    seller: {
      name: 'Xiris Automation Inc',
      logo: null,
      avatar: 'XI',
      rating: 4.9,
      totalReviews: 100,
      location: 'Burlington, ON, Canada',
      verified: true,
      establishedYear: 2000,
      description: 'Leading manufacturer of industrial weld cameras and thermal imaging systems',
      website: 'https://www.xiris.com',
      email: 'sales@engrity.com',
      phone: '1 (780) 800-6297'
    },
    
    inStock: true,
    featured: false,
    createdAt: '2025-09-01',
    
    seo: {
      title: 'WI-2200 Weld Inspection System - 0.015mm Detection | Xiris',
      description: 'Laser-based 3D weld inspection system for tube & pipe mills. Detects defects down to 0.015mm. 100% in-line monitoring, non-destructive testing.',
      keywords: [
        'weld inspection system',
        'tube mill inspection',
        'pipe weld inspection',
        '3D laser inspection',
        'defect detection',
        'quality control',
        'WI-2200',
        'automated inspection'
      ],
      ogImage: 'https://www.xiris.com/wp-content/uploads/2020/02/xiris-wi2000-2-1024x745.jpg',
      canonicalUrl: '/products/wi-2200-weld-inspection-system'
    }
  },
  
  {
    id: '6',
    slug: 'xvc-1000-1100-weld-camera',
    name: 'XVC-1000 & XVC-1100 Weld Camera',
    description: 'A fully digital weld camera intended for monitoring all open arc welding processes for OEMs, Advanced End Users or Lab Environments',
    longDescription: 'The XVC-1000 and XVC-1100 represent the perfect balance of performance and flexibility for OEMs, advanced end users, and laboratory environments. These fully digital cameras feature high dynamic range imaging in monochrome (XVC-1000) or color (XVC-1100) variants, C/CS mount compatibility for custom optics, and capture rates up to 55 fps at full 1280 x 1024 resolution. With remote monitoring capabilities up to 100 meters and included WeldStudio Pro software, these cameras are ideal for development, testing, and production applications.',
    price: 'Request a Quote',
    category: 'Weld Cameras',
    brand: 'Xiris',
    badge: 'INDUSTRIAL',
    
    images: [
      'https://www.xiris.com/wp-content/uploads/2021/05/XVC_1000_Etched_AngledLens_Transparent-768x512.png',
      'https://www.xiris.com/wp-content/uploads/2021/05/XVC-1000-front.png',
      'https://www.xiris.com/wp-content/uploads/2021/05/XVC-1000-mounted.png',
      'https://www.xiris.com/wp-content/uploads/2021/05/XVC-1000-lab.png',
    ],
    
    videos: [
      {
        url: 'https://www.youtube.com/embed/xvc1000-digital',
        thumbnail: 'https://www.xiris.com/wp-content/uploads/2021/05/video-thumb.jpg',
        title: 'XVC-1000/1100 Overview',
        duration: '5:10'
      }
    ],
    
    specifications: {
      'Resolution': '1280 x 1024',
      'Frame Rate': 'Up to 55 fps',
      'Protection Rating': 'IP65',
      'Mount': 'C/CS Mount',
      'Imaging': 'HDR Mono (1000) or Color (1100)',
      'Cable Distance': 'Up to 100m',
      'Software': 'WeldStudio Pro',
      'Environment': 'OEM/Lab/Production'
    },
    
    features: [
      'High Dynamic Range (HDR) Images in Monochrome (XVC-1000) or Color (XVC-1100)',
      'Remote Monitoring from up to 100 Metres',
      'C/CS Mount for custom optics',
      'Up to 55 fps @ 1280 x 1024',
      'WeldStudio Pro software included'
    ],
    
    applications: [
      'Production Environments',
      'Hard Automation (Column & Boom)',
      'GMAW Cladding/Overlay',
      'Mechanized Fabrication',
      'GMAW, GTAW, Laser, Plasma welding',
      'OEM Integration',
      'Laboratory Research'
    ],
    
    seller: {
      name: 'Xiris Automation Inc',
      logo: null,
      avatar: 'XI',
      rating: 4.9,
      totalReviews: 100,
      location: 'Burlington, ON, Canada',
      verified: true,
      establishedYear: 2000,
      description: 'Leading manufacturer of industrial weld cameras and thermal imaging systems',
      website: 'https://www.xiris.com',
      email: 'sales@engrity.com',
      phone: '1 (780) 800-6297'
    },
    
    inStock: true,
    featured: false,
    createdAt: '2025-11-15',
    
    seo: {
      title: 'XVC-1000 & XVC-1100 Digital Weld Camera - HDR Imaging | Xiris',
      description: 'Fully digital weld camera with HDR imaging for OEMs and labs. 55 fps, C/CS mount, remote monitoring up to 100m. WeldStudio Pro included.',
      keywords: [
        'digital weld camera',
        'HDR weld monitoring',
        'OEM weld camera',
        'laboratory weld camera',
        'C mount camera',
        'XVC-1000',
        'remote weld monitoring',
        'WeldStudio Pro'
      ],
      ogImage: 'https://www.xiris.com/wp-content/uploads/2021/05/XVC_1000_Etched_AngledLens_Transparent-768x512.png',
      canonicalUrl: '/products/xvc-1000-1100-weld-camera'
    }
  },
  {
  id: '7',
  slug: 'rm-1450-10-hw-robotic-arm',
  name: 'RM 1450 10 HW Robotic Arm',
  description: 'A compact 6-axis industrial robotic arm designed for high-precision automated welding applications.',
  longDescription: 'The RM 1450 10 HW Robotic Arm is a heavy-duty, 6-axis industrial robot engineered for precision welding automation in compact work cells. With a working range of 1453 mm, repeatability of ±0.05 mm, and IP65 protection rating, it is ideal for production environments requiring reliability, accuracy, and flexible installation. The robot supports floor, wall, and overhead mounting and integrates seamlessly with major MIG/MAG welding power sources and external axes such as tracks and positioners.',
  price: 'Request a Quote',
  category: 'Robotic Arms',
  brand: 'Weldmatic',
  badge: 'INDUSTRIAL',

  images: [
    '/images/products/rm1450.png',
    '/images/products/2rm1450.png',
    '/images/products/rm1450-6-hw/application.png'
  ],

  videos: [],

  specifications: {
    'Number of Axes': '6',
    'Working Range': '57.2 in (1453 mm)',
    'Rated Payload': '13.3 lb (6 kg)',
    'Repeatability': '±0.002 in (±0.05 mm)',
    'Mounting Position': 'Floor, Wall, Overhead',
    'Protection Rating': 'IP65',
    'Avg. Power Consumption': '3 kWh',
    'Weight': '287 lb (130 kg)'
  },

  features: [
    'High-precision 6-axis motion',
    'Compact footprint for small to mid-size cells',
    'Supports external axes and positioners',
    'Compatible with major MIG/MAG welding power sources',
    'IP65-rated for industrial environments'
  ],

  applications: [
    'Robotic MIG/MAG Welding',
    'Automated Fabrication',
    'Production Welding Cells',
    'OEM Welding Integration',
    'Industrial Automation'
  ],

  seller: {
    name: 'Weldmatic Automation Inc.',
    logo: null,
    avatar: 'WA',
    rating: 4.8,
    totalReviews: 86,
    location: 'Surrey, BC & Mississauga, ON, Canada',
    verified: true,
    establishedYear: 1997,
    description: 'Canadian provider of robotic welding automation systems and industrial integration solutions.',
    website: 'https://www.weldmatic.ca',
    email: 'sales@engrity.com',
    phone: 'null'
  },

  inStock: true,
  featured: false,
  createdAt: '2025-12-01',

  seo: {
    title: 'RM 1450/6 HW Robotic Welding Arm | Weldmatic Automation',
    description: 'Compact 6-axis robotic arm for precision welding automation. IP65 rated, floor/wall/overhead mounting, MIG/MAG compatible.',
    keywords: [
      'robotic welding arm',
      '6 axis robot',
      'industrial welding robot',
      'automated MIG welding',
      'weldmatic robot'
    ],
    ogImage: '/images/products/rm1450.png',
    canonicalUrl: '/products/rm-1450-6-hw-robotic-arm'
  }
},
{
  id: '8',
  slug: 'rm-2000-10-hw-robotic-arm',
  name: 'RM 2000 10 HW Robotic Arm',
  description: 'Extended-reach 6-axis robotic arm engineered for large-scale automated welding applications.',
  longDescription: 'The RM 2000 10 HW Robotic Arm offers an extended 2000 mm reach while maintaining high-speed, high-accuracy motion for demanding industrial welding applications. Designed for large work envelopes, it features ±0.08 mm repeatability, IP65 protection, and full compatibility with external axes, welding tracks, and positioners. Its robust design makes it ideal for heavy fabrication, structural welding, and high-volume production environments.',
  price: 'Request a Quote',
  category: 'Robotic Arms',
  brand: 'Weldmatic',
  badge: 'INDUSTRIAL',

  images: [
    '/images/products/rm2000.png',
    '/images/products/rm2000.png'
  ],

  videos: [],

  specifications: {
    'Number of Axes': '6',
    'Working Range': '78.7 in (2000 mm)',
    'Rated Payload': '13.3 lb (6 kg)',
    'Repeatability': '±0.003 in (±0.08 mm)',
    'Mounting Position': 'Floor, Wall, Overhead',
    'Protection Rating': 'IP65',
    'Avg. Power Consumption': '4.5 kWh',
    'Weight': '430 lb (195 kg)'
  },

  features: [
    'Extended reach for large workpieces',
    'High-speed multi-axis performance',
    'Supports tracks and external positioners',
    'Pre-assembled welding station compatibility',
    'Industrial IP65 protection'
  ],

  applications: [
    'Large Fabrication Cells',
    'Structural Steel Welding',
    'Robotic MIG/MAG Welding',
    'High-Volume Production',
    'Automated Welding Lines'
  ],

  seller: {
    name: 'Weldmatic Automation Inc.',
    logo: null,
    avatar: 'WA',
    rating: 4.8,
    totalReviews: 86,
    location: 'Surrey, BC & Mississauga, ON, Canada',
    verified: true,
    establishedYear: 1997,
    description: 'Canadian provider of robotic welding automation systems and industrial integration solutions.',
    website: 'https://www.weldmatic.ca',
    email: 'sales@engrity.com',
    phone: 'null'
  },

  inStock: true,
  featured: false,
  createdAt: '2025-12-01',

  seo: {
    title: 'RM 2000 10 HW Extended Reach Welding Robot | Weldmatic',
    description: '6-axis robotic welding arm with 2000 mm reach. Designed for large fabrication cells and heavy industrial welding.',
    keywords: [
      'extended reach robot',
      'robotic welding arm',
      'industrial automation',
      'large welding robot'
    ],
    ogImage: '/images/products/rm2000.png',
    canonicalUrl: '/products/rm-2000-6-hw-robotic-arm'
  }
},
{
  id: '9',
  slug: 'rmc-203-robotic-plc-controller',
  name: 'RMC 203 Robotic PLC Controller',
  description: 'Advanced programmable logic controller for robotic welding systems.',
  longDescription: 'The RMC 203 is a high-performance robotic PLC designed for welding automation. Featuring a 4-core processor, EtherCAT fieldbus, advanced safety functions, and real-time motion control, it enables precise multi-axis movement, welding coordination, and system safety. The controller supports point-to-point, linear, and circular motion paths and integrates seamlessly with robotic welding power sources.',
  price: 'Request a Quote',
  category: 'Robot Controllers',
  brand: 'Weldmatic',
  badge: 'INDUSTRIAL',

  images: [
    '/images/products/rmc203.png',
    '/images/products/rmc203/io.png'
  ],

  videos: [],

  specifications: {
    'Processor': '4-core CPU',
    'RAM': '2 GB',
    'Storage': '12 GB Flash',
    'Operating System': 'Senou Lite',
    'Fieldbus': 'EtherCAT',
    'Safety': 'E-Stop, Servo Braking, Anti-Collision'
  },

  features: [
    'Advanced motion control',
    'Integrated welding I/O',
    'Real-time EtherCAT communication',
    'Comprehensive safety monitoring',
    'External axis support'
  ],

  applications: [
    'Robotic Welding Cells',
    'Multi-Axis Automation',
    'Industrial PLC Control',
    'OEM Robotic Systems'
  ],

  seller: {
    name: 'Weldmatic Automation Inc.',
    logo: null,
    avatar: 'WA',
    rating: 4.8,
    totalReviews: 86,
    location: 'Surrey, BC & Mississauga, ON, Canada',
    verified: true,
    establishedYear: 1997,
    description: 'Canadian provider of robotic welding automation systems and industrial integration solutions.',
    website: 'https://www.weldmatic.ca',
    email: 'sales@engrity.com',
    phone: "null"
  },

  inStock: true,
  featured: false,
  createdAt: '2025-12-01',

  seo: {
    title: 'RMC 203 Robotic PLC Controller | Weldmatic Automation',
    description: 'Industrial PLC controller for robotic welding systems with EtherCAT, safety integration, and multi-axis motion control.',
    keywords: [
      'robotic PLC',
      'welding controller',
      'ethercat PLC',
      'robot motion control'
    ],
    ogImage: '/images/products/rmc203.png',
    canonicalUrl: '/products/rmc-203-robotic-plc-controller'
  }
},
{
  id: '10',
  slug: 'rm-1800-25-robotic-laser-welding',
  name: 'RM 1800/25 Robotic Laser Welding Arm',
  description: '6-axis industrial robotic arm designed for high-precision laser welding applications.',
  longDescription:
    'The RM 1800/25 is a heavy-duty 6-axis robotic arm engineered for robotic laser welding and advanced automation tasks. With a working range of up to 1808 mm, a rated payload of 25 kg, and repeatability of ±0.03 mm, it delivers exceptional accuracy, speed, and reliability. Designed for harsh industrial environments, the robot features IP67 protection, flexible mounting options (floor, wall, or overhead), and seamless integration with external axes, positioning systems, and leading laser welding power sources.',

  price: 'Request a Quote',
  category: 'Robotic Arms',
  brand: 'Weldmatic',
  badge: 'INDUSTRIAL',

  images: [
    '/images/products/rm1880.png',
    '/images/products/rm18802.png',
    '/images/products/rm18803.png'
  ],

  videos: [],

  specifications: {
    'Number of Axes': '6',
    'Working Range': '712 – 1808 mm',
    'Rated Payload': '25 kg (55.1 lb)',
    'Repeatability': '±0.03 mm',
    'Mounting Positions': 'Floor, Wall, Overhead',
    'Protection Rating': 'IP67',
    'Controller': 'RMC 203',
    'Average Power Consumption': '3 kWh',
    'Base Dimensions': '298 × 286 mm (11.7 × 11.3 in)',
    'Robot Weight': '198 kg (436.5 lb)'
  },

  features: [
    'High-precision 6-axis robotic motion',
    'Optimized for robotic laser welding applications',
    'IP67-rated for harsh industrial environments',
    'Wide working envelope with extended reach',
    'High-speed axis movement for cycle-time optimization',
    'Supports external axes, positioners, and tracks',
    'Compatible with major laser welding power sources',
    'Flexible mounting: floor, wall, or overhead'
  ],

  applications: [
    'Robotic Laser Welding Cells',
    'Automotive and Structural Welding',
    'Pipe and Tube Welding Automation',
    'Heavy Fabrication and Manufacturing',
    'Integrated Robotic Welding Lines',
    'Custom Industrial Automation Systems'
  ],

  seller: {
    name: 'Weldmatic Automation Inc.',
    logo: null,
    avatar: 'WA',
    rating: 4.8,
    totalReviews: 86,
    location: 'Surrey, BC & Mississauga, ON, Canada',
    verified: true,
    establishedYear: 1997,
    description:
      'Canadian provider of robotic welding automation systems, robotic arms, laser welding solutions, and industrial integration services.',
    website: 'https://www.weldmatic.ca',
    email: 'sales@engrity.com',
    phone: 'null'
  },

  inStock: true,
  featured: true,
  createdAt: '2026-01-19',

  seo: {
    title: 'RM 1800/25 Robotic Laser Welding Arm | Weldmatic Automation',
    description:
      'Industrial 6-axis robotic arm for laser welding applications with 25 kg payload, IP67 protection, and high precision motion control.',
    keywords: [
      'robotic laser welding',
      'industrial robotic arm',
      '6-axis robot',
      'laser welding robot',
      'weldmatic robotic arm',
      'robotic welding automation'
    ],
    ogImage: '/images/products/rm1800-25.png',
    canonicalUrl: '/products/rm-1800-25-robotic-laser-welding'
  }
},

{
    id: '11',
    slug: 'olympus-focus-px-32128pr',
    name: 'Olympus Focus PX 32128PR',
    description: 'High-performance phased array and UT data acquisition unit for automated inspection.',
    longDescription:
      'The Focus PX is a powerful, dedicated acquisition unit designed for automated ultrasonic testing (AUT). It features 32:128PR phased array capabilities and is built for seamless integration into high-volume manufacturing environments. Ideal for aerospace, automotive, and pipeline applications where high data throughput and signal quality are mandatory.',
    price: 'Request a Quote',
    category: 'NDT Equipment',
    brand: 'Olympus',
    badge: 'AUTOMATED UT',
    images: [
      '/images/products/focus.png'
    ],
    videos: [],
    specifications: {
      'Configuration': '32:128PR',
      'Technology': 'Phased Array / Conventional UT',
      'Data Throughput': 'Up to 30 MB/s',
      'Operating Temp': '0°C to 45°C',
      'Enclosure': 'IP65 Rated',
      'Interface': 'Ethernet'
    },
    features: [
      'Fast and scalable automated ultrasonic testing',
      'Seamless integration with FocusPC and Winspect',
      'Exceptional signal-to-noise ratio',
      'Rugged design for industrial production lines',
      'Supports high-speed data acquisition'
    ],
    applications: [
      'Aerospace Component Inspection',
      'Automotive Manufacturing Quality Control',
      'Weld Inspection Automation',
      'Heavy Industrial Production Lines'
    ],
    seller: {
      name: 'Pine Environmental',
      logo: null,
      avatar: 'PE',
      rating: 4.9,
      totalReviews: 142,
      location: 'Edmonton, AB',
      verified: true,
      establishedYear: 1995,
      description: 'North America’s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-02-10',
    seo: {
      title: 'Olympus Focus PX 32128PR | Pine Environmental Edmonton',
      description: 'Buy or rent the Olympus Focus PX 32128PR phased array unit in Edmonton. High-speed automated UT acquisition for industrial manufacturing.',
      keywords: ['Olympus Focus PX', 'phased array UT', 'automated ultrasonic testing', 'NDT Edmonton', 'industrial inspection'],
      ogImage: '/images/products/focus.png',
      canonicalUrl: '/products/olympus-focus-px-32128pr'
    }
  },
  {
    id: '12',
    slug: 'olympus-omniscan-mx2-1664-p2',
    name: 'Olympus Omniscan MX2 1664 P2',
    description: 'Portable phased array flaw detector with high-resolution touchscreen and advanced analysis tools.',
    longDescription:
      'The OmniScan MX2 is the industry standard for portable phased array flaw detection. This 16:64 P2 configuration provides high-speed testing, simplified workflows, and advanced analysis tools. It is compatible with a wide range of modules and scanners, making it the most versatile tool for NDT professionals worldwide.',
    price: 'Request a Quote',
    category: 'NDT Equipment',
    brand: 'Olympus',
    badge: 'INDUSTRY STANDARD',
    images: [
      '/images/products/omniscan.jpg'
    ],
    videos: [],
    specifications: {
      'Configuration': '16:64PR',
      'Display': '10.4 inch Touchscreen',
      'Data Storage': 'SD Card / USB',
      'Battery Life': '6 hours',
      'Weight': '3.2 kg (7.0 lb)'
    },
    features: [
      'Intuitive touchscreen interface',
      'Multi-group support for simultaneous PA and UT',
      'Full TCG and DAC curve support',
      'Weld overlay and setup wizard included',
      'Fast data throughput for large file analysis'
    ],
    applications: [
      'Pressure Vessel Weld Inspection',
      'Corrosion Mapping',
      'Composite Material Testing',
      'Pipe and Tube Inspection'
    ],
    seller: {
      name: 'Pine Environmental',
      logo: null,
      avatar: 'PE',
      rating: 4.9,
      totalReviews: 142,
      location: 'Edmonton, AB',
      verified: true,
      establishedYear: 1995,
      description: 'North America’s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-02-11',
    seo: {
      title: 'Olympus Omniscan MX2 1664 P2 | Portable Phased Array',
      description: 'Get a quote for the Olympus Omniscan MX2 1664 P2. The most trusted portable NDT tool for weld inspection and flaw detection.',
      keywords: ['Omniscan MX2', 'phased array flaw detector', 'Olympus NDT', 'NDT equipment rental', 'weld inspection'],
      ogImage: '/images/products/omniscan.jpg',
      canonicalUrl: '/products/olympus-omniscan-mx2-1664-p2'
    }
  },
  {
    id: '13',
    slug: 'eddyfi-pipescan-hd-127-flat',
    name: 'EddyFi Pipescan HD 127xFLAT',
    description: 'High-definition Magnetic Flux Leakage (MFL) pipe inspection system.',
    longDescription:
      'The Pipescan HD is designed for the rapid detection of corrosion in carbon steel pipes and storage tanks. Featuring high-definition sensors, it provides unmatched sensitivity and detection probability compared to traditional MFL systems. No couplant is required, allowing for extremely fast scanning speeds across flat surfaces and large diameter pipes.',
    price: 'Request a Quote',
    category: 'NDT Equipment',
    brand: 'EddyFi',
    badge: 'MFL TECHNOLOGY',
    images: [
      '/images/products/eddy.png'
    ],
    videos: [],
    specifications: {
      'Technology': 'MFL (Magnetic Flux Leakage)',
      'Pipe Range': '100 mm to Flat',
      'Scanning Speed': 'Up to 1 m/s',
      'Battery Life': '8+ hours',
      'Connectivity': 'Bluetooth / USB'
    },
    features: [
      'High-definition mapping of corrosion',
      'No couplant required for fast data collection',
      'Adjustable for various pipe diameters',
      'Instant PDF reporting on-site',
      'Rugged construction for field use'
    ],
    applications: [
      'Refinery Pipe Inspection',
      'Storage Tank Wall Scanning',
      'Oil & Gas Asset Integrity',
      'Large Diameter Pipe Inspection'
    ],
    seller: {
      name: 'Pine Environmental',
      logo: null,
      avatar: 'PE',
      rating: 4.9,
      totalReviews: 142,
      location: 'Edmonton, AB',
      verified: true,
      establishedYear: 1995,
      description: 'North America’s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: false,
    createdAt: '2026-02-12',
    seo: {
      title: 'EddyFi Pipescan HD | MFL Pipe Inspection Edmonton',
      description: 'Rapidly detect pipe corrosion with the EddyFi Pipescan HD. Available for quote through Pine Environmental Edmonton.',
      keywords: ['EddyFi Pipescan HD', 'MFL pipe inspection', 'corrosion detection', 'pipeline integrity', 'NDT scanners'],
      ogImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
      canonicalUrl: '/products/eddyfi-pipescan-hd-127-flat'
    }
  },
  {
    id: '14',
    slug: 'thermo-niton-xl3t-980-goldd-plus',
    name: 'Thermo Niton XL3t 980 Goldd+',
    description: 'Premier hand-held XRF analyzer for fast elemental analysis and PMI.',
    longDescription:
      'The Niton XL3t 980 GOLDD+ provides the ultimate in speed and sensitivity for elemental analysis. Equipped with Geometrically Optimized Large Area Drift Detector (GOLDD) technology, it delivers 10x faster analysis than conventional detectors. It is the gold standard for Positive Material Identification (PMI), scrap metal sorting, and mining exploration.',
    price: 'Request a Quote',
    category: 'XRF Analyzers',
    brand: 'Thermo Scientific',
    badge: 'ADVANCED XRF',
    images: [
      '/images/products/xrf.png'
    ],
    videos: [],
    specifications: {
      'Detector': 'GOLDD Technology (SDD)',
      'X-Ray Tube': '50 kV / 2 W',
      'Elements': 'Mg to U',
      'Weight': '1.3 kg (3.0 lb)',
      'Display': 'Tilting Color Touchscreen'
    },
    features: [
      'High-speed analysis of light elements (Mg, Al, Si, P, S)',
      'Non-destructive testing with lab-quality results',
      'Ergonomic design for all-day field use',
      'Integrated GPS for site mapping',
      'Waterproof and dustproof enclosure'
    ],
    applications: [
      'Positive Material Identification (PMI)',
      'Scrap Metal Recycling',
      'Mining and Geochemistry',
      'Environmental Soil Screening'
    ],
    seller: {
      name: 'Pine Environmental',
      logo: null,
      avatar: 'PE',
      rating: 4.9,
      totalReviews: 142,
      location: 'Edmonton, AB',
      verified: true,
      establishedYear: 1995,
      description: 'North America’s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-02-13',
    seo: {
      title: 'Thermo Niton XL3t 980 Goldd+ | Handheld XRF Analyzer',
      description: 'Fastest PMI results with the Niton XL3t 980 Goldd+ XRF analyzer. Request a quote for elemental analysis in Edmonton.',
      keywords: ['Niton XL3t 980', 'handheld XRF', 'elemental analysis', 'PMI testing', 'metal analyzer'],
      ogImage: '/images/products/xrf.png',
      canonicalUrl: '/products/thermo-niton-xl3t-980-goldd-plus'
    }
  },
  {
    id: '15',
    slug: 'olympus-iplex-gx-420-videoscope',
    name: 'Olympus IPLEX GX 420 Videoscope',
    description: 'High-definition industrial videoscope with interchangeable scopes.',
    longDescription:
      'The IPLEX GX industrial videoscope features interchangeable scopes and light sources for maximum versatility. Its 8-inch high-definition touchscreen provides crisp, bright images in dark industrial environments. PulsarPic image processing reduces noise and sharpens details, ensuring you never miss a defect during critical inspections.',
    price: 'Request a Quote',
    category: 'Visual Inspection',
    brand: 'Olympus',
    badge: 'RVI SPECIALIST',
    images: [
      '/images/products/iplex.jpg'
    ],
    videos: [],
    specifications: {
      'Scope Diameter': '4.0 mm',
      'Scope Length': '2.0 m',
      'LCD': '8-inch Touchscreen',
      'Illumination': 'High-intensity LED',
      'Weight': '2.7 kg'
    },
    features: [
      'Interchangeable scope system for various diameters',
      'Responsive TrueFeel joystick articulation',
      'Stereo measurement capability',
      'IP65 rated for harsh environments',
      'Wireless image and video sharing'
    ],
    applications: [
      'Gas Turbine Internal Inspection',
      'Heat Exchanger Tube Inspection',
      'Aviation Maintenance',
      'Boiler and Piping Internal View'
    ],
    seller: {
      name: 'Pine Environmental',
      logo: null,
      avatar: 'PE',
      rating: 4.9,
      totalReviews: 142,
      location: 'Edmonton, AB',
      verified: true,
      establishedYear: 1995,
      description: 'North America’s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-02-14',
    seo: {
      title: 'Olympus IPLEX GX 420 | Industrial Videoscope Edmonton',
      description: 'Inspect gas turbines and piping with the high-definition IPLEX GX 420 videoscope. Available from Pine Environmental Edmonton.',
      keywords: ['IPLEX GX 420', 'industrial videoscope', 'RVI equipment', 'Olympus IPLEX', 'borescope inspection'],
      ogImage: '/images/products/iplex.jpg',
      canonicalUrl: '/products/olympus-iplex-gx-420-videoscope'
    }
  },
  {
    id: '16',
    slug: 'gssi-sir-4000-controller',
    name: 'GSSI SIR 4000 GPR Controller',
    description: 'High-performance GPR controller for utility and concrete scanning.',
    longDescription:
      'The SIR 4000 is GSSI’s first high-performance GPR controller designed to bridge the gap between legacy analog antennas and next-generation digital offerings. It provides the field professional with the versatility and power to tackle any GPR application, from utility mapping to concrete scanning and bridge deck analysis.',
    price: 'Request a Quote',
    category: 'GPR & Survey',
    brand: 'GSSI',
    badge: 'GPR EXPERT',
    images: [
      '/images/products/gsi.webp'
    ],
    videos: [],
    specifications: {
      'Display': '10.4 inch LED Touchscreen',
      'Scan Rate': '800 KHz',
      'Operating Temp': '-20°C to 40°C',
      'Storage': '32 GB Internal',
      'Protection': 'IP65'
    },
    features: [
      'Supports analog and digital antennas',
      'Advanced data visualization and filtering',
      'Rugged, sunlight-readable display',
      'Integrated GPS support',
      'Hot-swappable dual batteries'
    ],
    applications: [
      'Utility Locating and Mapping',
      'Concrete Structural Analysis',
      'Geology and Archaeology',
      'Road and Bridge Inspection'
    ],
    seller: {
      name: 'Pine Environmental',
      logo: null,
      avatar: 'PE',
      rating: 4.9,
      totalReviews: 142,
      location: 'Edmonton, AB',
      verified: true,
      establishedYear: 1995,
      description: 'North America’s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-02-15',
    seo: {
      title: 'GSSI SIR 4000 Controller | Ground Penetrating Radar',
      description: 'Advanced GPR data collection with the GSSI SIR 4000 controller. In stock at Pine Environmental Edmonton.',
      keywords: ['GSSI SIR 4000', 'GPR controller', 'utility locating', 'ground penetrating radar', 'concrete scanning'],
      ogImage: 'https://images.unsplash.com/photo-1534398079244-67c8ad98f3f7?auto=format&fit=crop&q=80&w=800',
      canonicalUrl: '/products/gssi-sir-4000-controller'
    }
  }


]

// Helper functions
export function getAllProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export function getFilterOptions(): FilterOptions {
  const categories = [...new Set(products.map(p => p.category))]
  const brands = [...new Set(products.map(p => p.brand))]
  
  // Since prices are now strings ("Request a Quote"), we can't use numeric ranges
  // Return placeholder values or remove price filtering
  return {
    categories: categories.sort(),
    brands: brands.sort(),
    priceRange: {
      min: 0,
      max: 0, // Price filtering disabled for quote-based products
    },
  }
}

export function filterAndSortProducts(
  searchQuery: string = '',
  selectedCategories: string[] = [],
  selectedBrands: string[] = [],
  priceRange: { min: number; max: number } | null = null,
  sortBy: SortOption = 'newest'
): Product[] {
  let filtered = products

  // Search filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase()
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.features.some(f => f.toLowerCase().includes(query)) ||
      p.applications.some(a => a.toLowerCase().includes(query))
    )
  }

  // Category filter
  if (selectedCategories.length > 0) {
    filtered = filtered.filter(p => selectedCategories.includes(p.category))
  }

  // Brand filter
  if (selectedBrands.length > 0) {
    filtered = filtered.filter(p => selectedBrands.includes(p.brand))
  }

  // Price range filter - SKIP since all prices are "Request a Quote"
  // If you have numeric prices in the future, uncomment this:
  // if (priceRange) {
  //   filtered = filtered.filter(p => {
  //     const price = typeof p.price === 'number' ? p.price : 0
  //     return price >= priceRange.min && price <= priceRange.max
  //   })
  // }

  // Sorting
  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
      case 'price-desc':
        // Can't sort by price when prices are strings
        // Fall back to name sorting
        return a.name.localeCompare(b.name)
      case 'name-asc':
        return a.name.localeCompare(b.name)
      case 'name-desc':
        return b.name.localeCompare(a.name)
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      default:
        return 0
    }
  })

  return sorted
}