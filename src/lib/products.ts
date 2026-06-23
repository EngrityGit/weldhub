import { Product, FilterOptions, SortOption } from '../types/index'

// Enhanced product data with SEO, media arrays, seller info, condition, pricing
export const products: Product[] = [
  {
    id: '1',
    slug: 'xir-1800-swir-thermal-camera',
    name: 'XIR-1800 SWIR Thermal Camera',
    description: 'Advanced SWIR HDR thermal camera system for metal additive and critical welding applications with 120+ dB HDR capability.',
    longDescription: 'The XIR-1800 represents the pinnacle of SWIR thermal imaging technology, specifically engineered for metal additive manufacturing and critical welding applications. With an unprecedented 120+ dB HDR capability, this camera system delivers unparalleled temperature measurement accuracy from 300-6000°C. The SWIR advantage ensures clear vision through weld fumes with low sensitivity to emissivity changes, making it the ideal choice for research, development, and quality assurance in demanding industrial environments.',
    price: 'Request a Quote',
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
    category: 'Thermal Imaging',
    brand: 'Xiris',
    badge: 'PREMIUM',
    
    images: [
      'https://www.xiris.com/wp-content/uploads/2025/07/SWIR-Thermal-camera-1024x578.jpg',
      'https://www.xiris.com/wp-content/uploads/2025/07/SWIR-Thermal-camera-angle-2.jpg',
      'https://www.xiris.com/wp-content/uploads/2025/07/SWIR-Thermal-camera-detail.jpg',
      'https://www.xiris.com/wp-content/uploads/2025/07/SWIR-Thermal-camera-application.jpg',
    ],
    
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
    createdAt: '2025-11-01',
    
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
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
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
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
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
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
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
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
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
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
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
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
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
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
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
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
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
      phone: 'null'
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
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
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
    name: 'Olympus Focus PX 32:128PR',
    description: 'High-performance phased array and UT data acquisition unit for automated inspection.',
    longDescription:
      'The Focus PX is a powerful, dedicated acquisition unit designed for automated ultrasonic testing (AUT). It features 32:128PR phased array capabilities and is built for seamless integration into high-volume manufacturing environments. Ideal for aerospace, automotive, and pipeline applications where high data throughput and signal quality are mandatory.',
    price: 'Request a Quote',
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
    category: 'NDT Equipment',
    brand: 'Olympus',
    badge: 'AUTOMATED UT',
    images: [
      '/images/products/focus.png',
      '/images/products/focusstack.jpg',
      '/images/products/focusintegration.jpg',
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-02-10',
    seo: {
      title: 'Olympus Focus PX 32128PR | WeldHub Edmonton',
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
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
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
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
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
      ogImage: '/images/products/eddy.png',
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
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
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
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
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
      'The SIR 4000 is GSSI\'s first high-performance GPR controller designed to bridge the gap between legacy analog antennas and next-generation digital offerings. It provides the field professional with the versatility and power to tackle any GPR application, from utility mapping to concrete scanning and bridge deck analysis.',
    price: 'Request a Quote',
    originalPrice: null,
    condition: 'New',
    onSale: false,
    discountPercent: 0,
    bulkPricing: null,
    category: 'GPR & Survey',
    brand: 'GSSI',
    badge: 'GPR EXPERT',
    images: [
      '/images/products/gssi2.jpg'
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
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
      ogImage: '/images/products/gssi2.jpg',
      canonicalUrl: '/products/gssi-sir-4000-controller'
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // NEW USED EQUIPMENT (Pine Environmental) — All On Sale, June 23 2026
  // ─────────────────────────────────────────────────────────────────────────────

  {
    id: '17',
    slug: 'olympus-omniscan-x3-32128-used',
    name: 'Olympus OmniScan X3 32:128',
    description: 'Used portable phased array flaw detector with advanced TFM/FMC imaging and intuitive touchscreen interface.',
    longDescription: 'The OmniScan X3 is Olympus\'s most advanced portable PA UT instrument, featuring Total Focusing Method (TFM) and Full Matrix Capture (FMC) alongside conventional phased array. This 32:128 configuration supports simultaneous acquisition across multiple groups, ideal for weld inspection, corrosion mapping, and composite testing. This is a used unit in excellent working condition, inspected and verified by Pine Environmental technicians.',
    price: '$75,000 CAD',
    originalPrice: '$79,598 CAD',
    condition: 'Used',
    onSale: true,
    discountPercent: 4,
    bulkPricing: {
      minQty: 2,
      pricePerUnit: '$72,000 CAD'
    },
    category: 'NDT Equipment',
    brand: 'Olympus',
    badge: 'USED',
    images: [
      '/images/products/omiscan_x3.webp'
    ],
    videos: [],
    specifications: {
      'Configuration': '32:128',
      'Imaging Modes': 'PA UT, TFM, FMC',
      'Display': '10.4" High-Brightness Touchscreen',
      'Battery Life': '6+ hours',
      'Weight': '4.3 kg',
      'Protection': 'IP65',
      'Condition': 'Used – Verified Working'
    },
    features: [
      'Total Focusing Method (TFM) imaging',
      'Full Matrix Capture (FMC) acquisition',
      'Simultaneous multi-group phased array',
      'High-brightness sunlight-readable display',
      'IP65 rated for field use',
      'Bulk pricing available for 2+ units'
    ],
    applications: [
      'Weld Inspection',
      'Corrosion Mapping',
      'Composite Material Testing',
      'Pipe and Pressure Vessel Inspection'
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-06-23',
    seo: {
      title: 'Used Olympus OmniScan X3 32:128 | Pine Environmental Edmonton',
      description: 'Used Olympus OmniScan X3 32:128 phased array flaw detector with TFM/FMC. $75,000 CAD, bulk pricing available. Verified working condition.',
      keywords: ['OmniScan X3', 'used phased array', 'TFM FMC', 'used NDT equipment', 'Olympus used', 'phased array flaw detector'],
      ogImage: '/images/products/omiscan_x3.webp',
      canonicalUrl: '/products/olympus-omniscan-x3-32128-used'
    }
  },

  {
    id: '18',
    slug: 'olympus-omniscan-x4-64128-used',
    name: 'Olympus OmniScan X4 64:128',
    description: 'Used high-channel phased array flaw detector with expanded 64:128 configuration for complex multi-zone inspections.',
    longDescription: 'The OmniScan X4 64:128 is the most capable portable phased array instrument in the Olympus lineup. The expanded 64:128 channel configuration enables simultaneous multi-zone coverage and complex beam forming for demanding inspection scenarios. Includes TFM, FMC, and advanced TOFD capabilities. This used unit has been thoroughly inspected by Pine Environmental and is in excellent working condition.',
    price: '$99,000 CAD',
    originalPrice: '$103,000 CAD',
    condition: 'Used',
    onSale: true,
    discountPercent: 3,
    bulkPricing: {
      minQty: 2,
      pricePerUnit: '$96,000 CAD'
    },
    category: 'NDT Equipment',
    brand: 'Olympus',
    badge: 'USED',
    images: [
      '/images/products/omniscan-x4.avif'
    ],
    videos: [],
    specifications: {
      'Configuration': '64:128',
      'Imaging Modes': 'PA UT, TFM, FMC, TOFD',
      'Display': '10.4" High-Brightness Touchscreen',
      'Battery Life': '6+ hours',
      'Weight': '4.5 kg',
      'Protection': 'IP65',
      'Condition': 'Used – Verified Working'
    },
    features: [
      '64:128 channel configuration for complex inspections',
      'Total Focusing Method (TFM) and FMC imaging',
      'Advanced TOFD acquisition capability',
      'Simultaneous multi-zone scanning',
      'IP65 field-ready construction',
      'Bulk pricing for 2+ units'
    ],
    applications: [
      'Complex Weld Inspection',
      'Multi-Zone Scanning',
      'Pressure Vessel Inspection',
      'Pipeline NDT',
      'TOFD Weld Inspection'
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-06-23',
    seo: {
      title: 'Used Olympus OmniScan X4 64:128 | Pine Environmental Edmonton',
      description: 'Used Olympus OmniScan X4 64:128 with TFM, FMC, and TOFD. $99,000 CAD. Bulk pricing for 2+ units. Verified working condition.',
      keywords: ['OmniScan X4', 'used 64:128 phased array', 'TFM TOFD', 'advanced NDT', 'Olympus used equipment'],
      ogImage: '/images/products/omniscan-x4.avif',
      canonicalUrl: '/products/olympus-omniscan-x4-64128-used'
    }
  },

  {
    id: '19',
    slug: 'olympus-hydroform-scanner-used',
    name: 'Olympus HydroFORM Scanner',
    description: 'Used immersion-style phased array scanner for curved surface and pipe inspection using a flexible water column.',
    longDescription: 'The HydroFORM scanner uses a flexible water column to provide full acoustic coupling on curved surfaces without immersion tanks. It is ideal for corrosion mapping on pipes and pressure vessels with varying diameters, allowing high-speed scanning without the mess and setup time of traditional immersion setups. This used unit is in excellent condition and ready for deployment.',
    price: '$15,000 CAD',
    originalPrice: '$16,000 CAD',
    condition: 'Used',
    onSale: true,
    discountPercent: 5,
    bulkPricing: null,
    category: 'NDT Equipment',
    brand: 'Olympus',
    badge: 'USED',
    images: [
      '/images/products/Hydroform.webp'
    ],
    videos: [],
    specifications: {
      'Coupling Method': 'Flexible Water Column',
      'Surface Type': 'Curved / Flat',
      'Compatible Systems': 'OmniScan / Focus PX',
      'Pipe Diameter Range': 'Wide range',
      'Condition': 'Used – Verified Working'
    },
    features: [
      'Flexible water column coupling – no immersion tank needed',
      'Suitable for curved and flat surfaces',
      'Compatible with OmniScan and Focus PX systems',
      'High-speed corrosion mapping capability',
      'Compact and portable design'
    ],
    applications: [
      'Pipe Corrosion Mapping',
      'Pressure Vessel Inspection',
      'Curved Surface NDT',
      'Field Corrosion Assessment'
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-06-23',
    seo: {
      title: 'Used Olympus HydroFORM Scanner | Pipe Corrosion Mapping',
      description: 'Used Olympus HydroFORM scanner for curved surface and pipe corrosion mapping. $15,000 CAD. Flexible water column coupling, no immersion needed.',
      keywords: ['HydroFORM scanner', 'pipe corrosion mapping', 'phased array scanner', 'used NDT scanner', 'Olympus scanner'],
      ogImage: '/images/products/focus.png',
      canonicalUrl: '/products/olympus-hydroform-scanner-used'
    }
  },

  {
    id: '20',
    slug: 'jireh-navic-scanner-used',
    name: 'Jireh NAVIC Scanner',
    description: 'Used automated pipe weld scanner for phased array UT with magnetic wheel drive and precise encoder positioning.',
    longDescription: 'The Jireh NAVIC is a fully automated, self-propelled pipe weld scanner used for phased array ultrasonic testing of circumferential and longitudinal welds. Featuring magnetic wheel drive and high-precision encoder feedback, it ensures consistent scan paths on a wide range of pipe diameters. Compatible with major phased array acquisition systems. This used unit has been inspected and is in excellent working order.',
    price: '$54,000 CAD',
    originalPrice: '$57,800 CAD',
    condition: 'Used',
    onSale: true,
    discountPercent: 5,
    bulkPricing: null,
    category: 'NDT Equipment',
    brand: 'Jireh',
    badge: 'USED',
    images: [
      '/images/products/Navic_scanner.jpg'
    ],
    videos: [],
    specifications: {
      'Drive System': 'Magnetic Wheel',
      'Encoder': 'High-precision positional feedback',
      'Weld Types': 'Circumferential & Longitudinal',
      'Compatibility': 'Major PA UT systems',
      'Condition': 'Used – Verified Working'
    },
    features: [
      'Self-propelled magnetic wheel drive',
      'High-precision encoder for consistent scan indexing',
      'Supports circumferential and longitudinal weld scanning',
      'Compatible with major phased array acquisition systems',
      'Rugged construction for field deployment'
    ],
    applications: [
      'Pipe Weld Inspection',
      'Automated Phased Array UT',
      'Pipeline QA/QC',
      'Pressure Vessel Scanning'
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-06-23',
    seo: {
      title: 'Used Jireh NAVIC Scanner | Automated Pipe Weld Inspection',
      description: 'Used Jireh NAVIC automated pipe weld scanner with magnetic drive and encoder positioning. $54,000 CAD. Compatible with major PA UT systems.',
      keywords: ['Jireh NAVIC', 'pipe weld scanner', 'automated UT scanner', 'phased array scanner', 'used NDT scanner'],
      ogImage: '/images/products/focus.png',
      canonicalUrl: '/products/jireh-navic-scanner-used'
    }
  },

  {
    id: '21',
    slug: 'proceq-equotip-550-leeb-uci-used',
    name: 'Proceq Equotip 550 (Leeb + UCI Probe Kit)',
    description: 'Used portable hardness tester supporting both Leeb rebound and UCI methods for comprehensive field hardness testing.',
    longDescription: 'The Proceq Equotip 550 is the most versatile portable hardness testing platform available, supporting both the Leeb rebound and Ultrasonic Contact Impedance (UCI) methods in a single unit. The included probe kit provides coverage for a wide range of material types, geometries, and thicknesses. Ideal for in-field weld hardness verification, heat-affected zone testing, and material sorting. This used unit is in excellent working condition.',
    price: '$17,500 CAD',
    originalPrice: '$17,500 CAD',
    condition: 'Used',
    onSale: true,
    discountPercent: 8,
    bulkPricing: null,
    category: 'Hardness Testers',
    brand: 'Proceq',
    badge: 'USED',
    images: [
      '/images/products/proceq_550.jpg'
    ],
    videos: [],
    specifications: {
      'Methods': 'Leeb Rebound + UCI',
      'Display': 'Color Touchscreen',
      'Connectivity': 'Bluetooth / USB',
      'Standards': 'ASTM E110, ISO 16859',
      'Condition': 'Used – Verified Working'
    },
    features: [
      'Dual method: Leeb rebound and UCI',
      'Full probe kit included',
      'Bluetooth data transfer and reporting',
      'Compliant with ASTM E110 and ISO 16859',
      'Suitable for thin sections and complex geometries'
    ],
    applications: [
      'Weld Heat-Affected Zone (HAZ) Testing',
      'Field Material Hardness Verification',
      'Post-Weld Heat Treatment Checks',
      'Material Sorting and PMI'
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-06-23',
    seo: {
      title: 'Used Proceq Equotip 550 Leeb + UCI | Portable Hardness Tester',
      description: 'Used Proceq Equotip 550 with Leeb and UCI probe kit. $17,500 CAD. Dual-method hardness testing for field and weld inspection applications.',
      keywords: ['Proceq Equotip 550', 'portable hardness tester', 'Leeb UCI', 'weld hardness testing', 'used hardness tester'],
      ogImage: '/images/products/proceq_550.jpg',
      canonicalUrl: '/products/proceq-equotip-550-leeb-uci-used'
    }
  },

  {
    id: '22',
    slug: 'ge-mic-10-dl-ht-hardness-tester-used',
    name: 'GE MIC 10 DL HT Hardness Tester',
    description: 'Used portable UCI hardness tester for in-situ testing of welds, HAZ, and base materials in the field.',
    longDescription: 'The GE MIC 10 DL HT is a compact, portable UCI hardness tester designed for precise in-situ hardness measurement of welds, heat-affected zones, and base materials. Lightweight and easy to use, it stores up to 1,000 readings with statistical analysis and direct hardness scale conversion. This used unit is in excellent working condition and includes probes.',
    price: '$6,500 CAD',
    originalPrice: '$6,500 CAD',
    condition: 'Used',
    onSale: true,
    discountPercent: 5,
    bulkPricing: null,
    category: 'Hardness Testers',
    brand: 'GE Inspection',
    badge: 'USED',
    images: [
      '/images/products/ge_hardness.webp'
    ],
    videos: [],
    specifications: {
      'Method': 'UCI (Ultrasonic Contact Impedance)',
      'Memory': 'Up to 1,000 readings',
      'Scales': 'HV, HB, HRC, HRB, HS, N/mm²',
      'Display': 'Backlit LCD',
      'Condition': 'Used – Verified Working'
    },
    features: [
      'UCI method for non-destructive hardness testing',
      'Stores 1,000 readings with statistics',
      'Direct conversion between hardness scales',
      'Lightweight and field-portable design',
      'Probes included'
    ],
    applications: [
      'Weld and HAZ Hardness Testing',
      'Field QA/QC Inspections',
      'Post-Weld Heat Treatment Verification',
      'Material Acceptance Testing'
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-06-23',
    seo: {
      title: 'Used GE MIC 10 DL HT Hardness Tester | UCI Field Testing',
      description: 'Used GE MIC 10 DL HT UCI hardness tester for weld and HAZ testing. $6,500 CAD. Stores 1,000 readings, multiple hardness scales.',
      keywords: ['GE MIC 10', 'UCI hardness tester', 'weld hardness', 'portable hardness tester', 'used GE NDT'],
      ogImage: '/images/products/ge_hardness.webp',
      canonicalUrl: '/products/ge-mic-10-dl-ht-hardness-tester-used'
    }
  },

  {
    id: '23',
    slug: 'thermo-niton-apollo-libs-carbon-analyzer-used',
    name: 'Thermo Niton Apollo LIBS Carbon Analyzer',
    description: 'Used handheld LIBS analyzer for rapid carbon content measurement and positive material identification.',
    longDescription: 'The Niton Apollo uses Laser-Induced Breakdown Spectroscopy (LIBS) technology to deliver fast, accurate carbon content analysis directly in the field — something traditional XRF cannot do. Critical for distinguishing low-carbon from high-carbon steels and identifying grade-critical alloys on the spot. This used unit is in excellent working condition, inspected by Pine Environmental technicians.',
    price: '$30,000 CAD',
    originalPrice: '$30,000 CAD',
    condition: 'Used',
    onSale: true,
    discountPercent: 10,
    bulkPricing: null,
    category: 'LIBS Analyzers',
    brand: 'Thermo Scientific',
    badge: 'USED',
    images: [
      '/images/products/Niton-Apollo.webp'
    ],
    videos: [],
    specifications: {
      'Technology': 'LIBS (Laser-Induced Breakdown Spectroscopy)',
      'Key Element': 'Carbon (C)',
      'Analysis Time': '< 2 seconds',
      'Display': 'Color Touchscreen',
      'Condition': 'Used – Verified Working'
    },
    features: [
      'Carbon detection unavailable with XRF – LIBS fills the gap',
      'Sub-2-second analysis for rapid throughput',
      'Handheld, field-portable form factor',
      'Complements XRF for full alloy PMI programs',
      'Robust enclosure for harsh environments'
    ],
    applications: [
      'Carbon Steel Grade Verification',
      'Positive Material Identification (PMI)',
      'Low vs. High Carbon Steel Sorting',
      'Alloy Identification in Oil & Gas'
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-06-23',
    seo: {
      title: 'Used Thermo Niton Apollo LIBS Analyzer | Carbon PMI Testing',
      description: 'Used Niton Apollo LIBS carbon analyzer for rapid PMI and carbon content measurement. $27,000 CAD. Field-portable, sub-2-second analysis.',
      keywords: ['Niton Apollo LIBS', 'LIBS analyzer', 'carbon analyzer', 'PMI carbon testing', 'used LIBS', 'handheld carbon'],
      ogImage: '/images/products/Niton-Apollo.webp',
      canonicalUrl: '/products/thermo-niton-apollo-libs-carbon-analyzer-used'
    }
  },

  {
    id: '24',
    slug: 'thermo-niton-xl3t-goldd-xrf-used',
    name: 'Thermo Niton XL3t GOLDD PMI/XRF Analyzer',
    description: 'Used handheld XRF analyzer with GOLDD detector technology for fast, accurate elemental analysis and PMI.',
    longDescription: 'The Thermo Niton XL3t GOLDD is a premium handheld XRF analyzer equipped with Geometrically Optimized Large Area Drift Detector (GOLDD) technology, delivering up to 10x faster analysis than conventional SDD detectors. Industry-standard for Positive Material Identification, alloy sorting, and environmental screening. This used unit is in excellent working condition, fully calibrated.',
    price: '$32,000 CAD',
    originalPrice: '$32,000 CAD',
    condition: 'Used',
    onSale: true,
    discountPercent: 15,
    bulkPricing: null,
    category: 'XRF Analyzers',
    brand: 'Thermo Scientific',
    badge: 'USED',
    images: [
      '/images/products/xrf.png'
    ],
    videos: [],
    specifications: {
      'Detector': 'GOLDD (SDD)',
      'X-Ray Tube': '50 kV / 2 W',
      'Elements': 'Mg to U',
      'Weight': '1.3 kg',
      'Condition': 'Used – Fully Calibrated'
    },
    features: [
      'GOLDD detector for 10x faster light element analysis',
      'Identifies Mg, Al, Si, P, S alongside heavy elements',
      'Non-destructive — no sample prep required',
      'GPS-integrated for site data logging',
      'IP rating for field and industrial use'
    ],
    applications: [
      'Positive Material Identification (PMI)',
      'Alloy Sorting and Grade Verification',
      'Environmental Soil Analysis',
      'Scrap Metal Recycling'
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-06-23',
    seo: {
      title: 'Used Thermo Niton XL3t GOLDD XRF Analyzer | PMI Edmonton',
      description: 'Used Niton XL3t GOLDD+ handheld XRF for fast elemental analysis and PMI. $32,000 CAD. Fully calibrated, verified working.',
      keywords: ['Niton XL3t GOLDD', 'handheld XRF', 'PMI analyzer', 'used XRF', 'elemental analysis'],
      ogImage: '/images/products/xrf.png',
      canonicalUrl: '/products/thermo-niton-xl3t-goldd-xrf-used'
    }
  },

  {
    id: '25',
    slug: 'olympus-vanta-vcr-xrf-used',
    name: 'Olympus Vanta VCR PMI/XRF Analyzer',
    description: 'Used rugged handheld XRF analyzer designed for PMI and alloy identification in harsh industrial environments.',
    longDescription: 'The Olympus Vanta VCR is engineered for the toughest field conditions, with a drop-tested, IP65-rated enclosure and rapid alloy identification in under 2 seconds. Featuring dual SDD detectors for improved sensitivity and a large 5" touchscreen, the Vanta VCR excels at PMI programs in oil & gas, power generation, and heavy industry. This used unit is in excellent condition.',
    price: '$30,000 CAD',
    originalPrice: '$30,000 CAD',
    condition: 'Used',
    onSale: true,
    discountPercent: 10,
    bulkPricing: null,
    category: 'XRF Analyzers',
    brand: 'Olympus',
    badge: 'USED',
    images: [
      '/images/products/vanta.jpg'
    ],
    videos: [],
    specifications: {
      'Detector': 'Dual SDD',
      'Display': '5" Color Touchscreen',
      'Analysis Time': '< 2 seconds',
      'Protection': 'IP65, Drop-tested',
      'Condition': 'Used – Verified Working'
    },
    features: [
      'Dual SDD detectors for superior sensitivity',
      'Sub-2-second alloy identification',
      'Large 5" sunlight-readable touchscreen',
      'IP65 rated and drop-tested for field durability',
      'Bluetooth and Wi-Fi data transfer'
    ],
    applications: [
      'PMI in Oil & Gas and Petrochemical',
      'Power Generation Component Verification',
      'Alloy Sorting and Grade Confirmation',
      'Scrap Metal Identification'
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-06-23',
    seo: {
      title: 'Used Olympus Vanta VCR XRF Analyzer | PMI Instrument Edmonton',
      description: 'Used Olympus Vanta VCR handheld XRF for PMI and alloy ID. $35,000 CAD. Dual SDD detectors, IP65, drop-tested. Excellent condition.',
      keywords: ['Olympus Vanta VCR', 'handheld XRF', 'PMI analyzer', 'used Vanta', 'alloy identification'],
      ogImage: '/images/products/vanta.png',
      canonicalUrl: '/products/olympus-vanta-vcr-xrf-used'
    }
  },

  {
    id: '26',
    slug: 'danatronics-echo-pro-flaw-detector-new',
    name: 'Danatronics Echo PRO Flaw Detector',
    description: 'New portable conventional UT flaw detector with advanced digital signal processing and large colour display.',
    longDescription: 'The Danatronics Echo PRO is a full-featured portable UT flaw detector designed for demanding inspection applications. Featuring advanced digital signal processing, a large high-resolution colour display, and a comprehensive feature set including DAC, TCG, DGS, and AWS D1.1 weld rating, the Echo PRO provides professional-grade performance in a rugged, lightweight package. This is a brand new unit.',
    price: '$10,900 CAD',
    originalPrice: '$12,000 CAD',
    condition: 'New',
    onSale: true,
    discountPercent: 10,
    bulkPricing: null,
    category: 'NDT Equipment',
    brand: 'Danatronics',
    badge: 'NEW',
    images: [
      '/images/products/Echo-Pro.jpg'
    ],
    videos: [],
    specifications: {
      'Type': 'Conventional UT Flaw Detector',
      'Display': 'Large Colour LCD',
      'Pulser': 'Spike / Square Wave',
      'Features': 'DAC, TCG, DGS, AWS D1.1',
      'Condition': 'New'
    },
    features: [
      'Advanced digital signal processing',
      'Full DAC, TCG, and DGS curve support',
      'AWS D1.1 weld rating built-in',
      'Rugged and lightweight field-ready design',
      'Long battery life for full-shift operation'
    ],
    applications: [
      'Weld Flaw Detection',
      'Thickness Measurement',
      'Structural Inspection',
      'Pipeline and Pressure Vessel Testing'
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-06-23',
    seo: {
      title: 'New Danatronics Echo PRO Flaw Detector | Edmonton NDT',
      description: 'New Danatronics Echo PRO portable UT flaw detector. $12,000 CAD. DAC, TCG, DGS, AWS D1.1. In stock at Pine Environmental Edmonton.',
      keywords: ['Danatronics Echo PRO', 'UT flaw detector', 'conventional UT', 'portable flaw detector', 'NDT equipment'],
      ogImage: '/images/products/Echo-Pro.jpg',
      canonicalUrl: '/products/danatronics-echo-pro-flaw-detector-new'
    }
  },

  {
    id: '27',
    slug: 'danatronics-echo-fd-flaw-detector-new',
    name: 'Danatronics Echo FD Flaw Detector',
    description: 'New entry-level portable conventional UT flaw detector for weld inspection and thickness measurement.',
    longDescription: 'The Danatronics Echo FD is an affordable, full-featured portable UT flaw detector ideal for inspectors requiring reliable performance in a compact package. Supporting standard DAC and TCG curves, it covers the most common flaw detection and weld inspection tasks without compromise. A brand new unit — in stock and ready to ship.',
    price: '$6,900 CAD',
    originalPrice: '$6,900 CAD',
    condition: 'New',
    onSale: true,
    discountPercent: 0,
    bulkPricing: null,
    category: 'NDT Equipment',
    brand: 'Danatronics',
    badge: 'NEW',
    images: [
      '/images/products/echofd.jpg'
    ],
    videos: [],
    specifications: {
      'Type': 'Conventional UT Flaw Detector',
      'Features': 'DAC, TCG',
      'Display': 'Colour LCD',
      'Battery': 'Rechargeable Li-ion',
      'Condition': 'New'
    },
    features: [
      'Affordable full-featured flaw detection',
      'DAC and TCG curve support',
      'Compact and lightweight form factor',
      'Rechargeable battery for full-shift use',
      'Simple, intuitive interface'
    ],
    applications: [
      'Weld Inspection',
      'Thickness Measurement',
      'General Flaw Detection',
      'Field and Shop Inspection'
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-06-23',
    seo: {
      title: 'New Danatronics Echo FD Flaw Detector | Entry-Level UT',
      description: 'New Danatronics Echo FD portable UT flaw detector. $6,900 CAD. DAC, TCG support. Affordable entry-level UT for weld inspection.',
      keywords: ['Danatronics Echo FD', 'entry level UT', 'portable flaw detector', 'conventional UT', 'affordable NDT'],
      ogImage: '/images/products/echofd.jpg',
      canonicalUrl: '/products/danatronics-echo-fd-flaw-detector-new'
    }
  },

  {
    id: '28',
    slug: 'olympus-epoch-650-flaw-detector-new',
    name: 'Olympus Epoch 650 Flaw Detector',
    description: 'New industry-standard portable conventional UT flaw detector with advanced digital processing and comprehensive code compliance tools.',
    longDescription: 'The Olympus EPOCH 650 is one of the most trusted conventional UT flaw detectors in the industry. Combining high-performance digital signal processing, a bright 6.5-inch VGA display, and comprehensive code-compliance tools including DAC, TCG, AWS D1.1, and ASME, it delivers professional results in the most demanding field environments. Brand new units in stock with full warranty.',
    price: '$13,500 CAD',
    originalPrice: '$13,500 CAD',
    condition: 'New',
    onSale: true,
    discountPercent: 0,
    bulkPricing: {
      minQty: 2,
      pricePerUnit: '$12,800 CAD'
    },
    category: 'NDT Equipment',
    brand: 'Olympus',
    badge: 'NEW',
    images: [
      '/images/products/epoch.jpg'
    ],
    videos: [],
    specifications: {
      'Type': 'Conventional UT Flaw Detector',
      'Display': '6.5" VGA Colour',
      'Pulser': 'Spike / Square Wave',
      'Features': 'DAC, TCG, AWS D1.1, ASME',
      'Battery Life': '12+ hours',
      'Condition': 'New – Full Warranty'
    },
    features: [
      'Industry-standard EPOCH 650 platform',
      '6.5" high-brightness VGA display',
      'Full code compliance: DAC, TCG, AWS D1.1, ASME',
      '12+ hour battery life for full-shift operation',
      'Bulk pricing for 2+ units ($12,800 CAD each)',
      'Rugged IP66-rated enclosure'
    ],
    applications: [
      'Weld Inspection (AWS / ASME)',
      'Flaw Detection and Sizing',
      'Thickness Measurement',
      'Aerospace and Power Generation NDT'
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
      description: 'North America\'s leading provider of environmental, NDT, RVI, and HMS equipment rentals and sales.',
      website: 'https://www.pine-environmental.com',
      email: 'sales@engrity.com',
      phone: 'null'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-06-23',
    seo: {
      title: 'New Olympus Epoch 650 Flaw Detector | UT Inspection Edmonton',
      description: 'New Olympus EPOCH 650 conventional UT flaw detector. $13,500 CAD, $12,800 CAD for 2+. DAC, TCG, AWS D1.1, ASME. Full warranty.',
      keywords: ['Olympus EPOCH 650', 'conventional UT', 'flaw detector', 'weld inspection', 'AWS ASME UT', 'Olympus NDT'],
      ogImage: '/images/products/epoch.jpg',
      canonicalUrl: '/products/olympus-epoch-650-flaw-detector-new'
    }
  }
]

// ─── Helper to compute the displayed (discounted) price ────────────────────────
export function computeDisplayPrice(product: Product): string {
  if (product.onSale && product.discountPercent > 0 && typeof product.originalPrice === 'string') {
    // Parse CAD numeric price
    const numericMatch = product.originalPrice.replace(/,/g, '').match(/[\d.]+/)
    if (numericMatch) {
      const original = parseFloat(numericMatch[0])
      const discounted = original * (1 - product.discountPercent / 100)
      const formatted = discounted.toLocaleString('en-CA', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
      return `$${formatted} CAD`
    }
  }
  return product.price
}

// ─── Helper functions ──────────────────────────────────────────────────────────

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
  const conditions = [...new Set(products.map(p => p.condition))]

  return {
    categories: categories.sort(),
    brands: brands.sort(),
    conditions: conditions.sort(),
    priceRange: {
      min: 0,
      max: 0,
    },
  }
}

export function filterAndSortProducts(
  searchQuery: string = '',
  selectedCategories: string[] = [],
  selectedBrands: string[] = [],
  selectedConditions: string[] = [],
  onSaleOnly: boolean = false,
  priceRange: { min: number; max: number } | null = null,
  sortBy: SortOption = 'newest'
): Product[] {
  let filtered = products

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

  if (selectedCategories.length > 0) {
    filtered = filtered.filter(p => selectedCategories.includes(p.category))
  }

  if (selectedBrands.length > 0) {
    filtered = filtered.filter(p => selectedBrands.includes(p.brand))
  }

  if (selectedConditions.length > 0) {
    filtered = filtered.filter(p => selectedConditions.includes(p.condition))
  }

  if (onSaleOnly) {
    filtered = filtered.filter(p => p.onSale)
  }

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
      case 'price-desc':
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