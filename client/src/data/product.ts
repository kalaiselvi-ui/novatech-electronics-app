// src/data/productMockData.ts

export const productList = [
  // ==========================================
  // 📺 TELEVISIONS (15 Products)
  // ==========================================
  {
    id: "prod-tv-01",
    name: "65 Inch QLED Q70D 4K Smart TV (2024)",
    brand: "Sony",
    category: "television",
    price: 2799,
    imageUrls: [
      "https://images.samsung.com/is/image/samsung/p6pim/ae/qa65q70dauxzn/gallery/ae-qled-tv-qa65q70dauxzn-front-gray-541614436?$1164_776_PNG$",
      "https://images.samsung.com/is/image/samsung/p6pim/ae/qa65q70dauxzn/gallery/ae-qled-tv-qa65q70dauxzn-r-perspective--gray-541614442?$Q90_1368_1094_F_JPG$",
      "https://images.samsung.com/is/image/samsung/p6pim/ae/qa65q70dauxzn/gallery/ae-qled-tv-qa65q70dauxzn-r-perspective--gray-541614442?$Q90_1368_1094_F_JPG$",
    ],
    rating: 3.9,
    stock: 8,
    description:
      "Our flagship QD-OLED screen powered by Cognitive Processor XR for the ultimate bright contrast.",
    specs: {
      Display: "QD-OLED",
      Resolution: "4K Ultra HD",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Google TV",
    },
    isFeatured: true,
  },
  {
    id: "prod-tv-02",
    name: "OLED EVO G4 Series Gallery Edition",
    brand: "LG",
    category: "television",
    price: 2499,
    rating: 4.8,
    stock: 12,
    imageUrls: [
      "https://m.media-amazon.com/images/I/61BdiDtTj4L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/615d37mu-AL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/41k9PhpmCGL._AC_SX466_.jpg",
    ],
    description:
      "Ultra-thin wall-mountable gallery design with the alpha 11 AI processor.",
    specs: {
      Display: "OLED Evo",
      Resolution: "4K",
      "Refresh Rate": "144Hz",
      "Smart Platform": "webOS",
    },
  },
  {
    id: "prod-tv-03",
    name: "Neo QLED QN90D 4K Smart TV",
    brand: "Samsung",
    category: "television",
    price: 1899,
    rating: 3.7,
    stock: 14,
    description:
      "Quantum Matrix Technology with Mini LEDs for breathtaking details in bright rooms.",
    specs: {
      Display: "Neo QLED",
      Resolution: "4K",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Tizen OS",
    },
    imageUrls: [
      "https://jawdahshop.ae/cdn/shop/files/samsung_98_qn90d_neo_qled_4k_hdr_smart_tv_98qn90d_1.webp?v=1781008645",
      "https://jawdahshop.ae/cdn/shop/files/samsung_98_qn90d_neo_qled_4k_hdr_smart_tv_98qn90d_3.webp?v=1781008645",
      "https://jawdahshop.ae/cdn/shop/files/samsung_98_qn90d_neo_qled_4k_hdr_smart_tv_98qn90d_4.webp?v=1781008645",
      "https://jawdahshop.ae/cdn/shop/files/samsung_98_qn90d_neo_qled_4k_hdr_smart_tv_98qn90d_2.webp?v=1781008645",
    ],
  },
  {
    id: "prod-tv-04",
    name: "QM8 Class Mini-LED 4K TV",
    brand: "TCL",
    category: "television",
    price: 1199,
    rating: 4.6,
    stock: 20,
    description:
      "High-zone local dimming Mini-LED setup offering incredible value and staggering brightness.",
    specs: {
      Display: "Mini-LED",
      Resolution: "4K",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Google TV",
    },
    imageUrls: [
      "https://m.media-amazon.com/images/I/81t+S2Ul4ML._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71NcEscm3dL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/716-UHBpIZL._AC_SX466_.jpg",
    ],
  },
  {
    id: "prod-tv-05",
    name: "BRAVIA 9 Mini-LED flagship",
    brand: "Sony",
    category: "television",
    price: 3299,
    rating: 4.9,
    stock: 5,
    description:
      "Sony's cinematic masterpiece bringing theater-like brightness control to home setups.",
    specs: {
      Display: "Mini-LED",
      Resolution: "4K",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Google TV",
    },
    imageUrls: [
      "https://jawdahshop.ae/cdn/shop/files/85XR90.webp?v=1781010392",
      "https://jawdahshop.ae/cdn/shop/files/8_a4c4be7e-a742-489c-988e-f5593ffc2e54.webp?v=1781010392",
      "https://jawdahshop.ae/cdn/shop/files/4_828c31b5-f664-44ab-9a5c-9dd0c40a3442.webp?v=1781010392",
      "https://jawdahshop.ae/cdn/shop/files/7_e428253f-dd91-4a79-8992-1f55c290afa2.webp?v=1781010392",
    ],
    isFeatured: true,
  },
  {
    id: "prod-tv-06",
    name: "OLED EVO C4 Series 4K TV",
    brand: "LG",
    category: "television",
    price: 1599,
    rating: 4.8,
    stock: 22,
    description:
      "The gold standard for console gaming, featuring four full HDMI 2.1 inputs.",
    specs: {
      Display: "OLED Evo",
      Resolution: "4K",
      "Refresh Rate": "144Hz",
      "Smart Platform": "webOS",
    },
    imageUrls: [
      "https://m.media-amazon.com/images/I/71H8tw2AGzL._AC_SX300_SY300_QL70_ML2_.jpg",
      "https://m.media-amazon.com/images/I/61bcK5vdWuL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/31ektGYbRNL._AC_SX466_.jpg",
    ],
  },
  {
    id: "prod-tv-07",
    name: "S95D QD-OLED Glare-Free TV",
    brand: "Samsung",
    category: "television",
    price: 2599,
    rating: 4.8,
    stock: 9,
    description:
      "Stunning matte screen finish that completely eliminates reflections without sacrificing contrast.",
    specs: {
      Display: "QD-OLED",
      Resolution: "4K",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Tizen OS",
    },
    imageUrls: [
      "https://m.media-amazon.com/images/I/81-PRXqMVWL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/715pHC88i+L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/51L5oZ6-xZL._AC_SX466_.jpg",
    ],
  },
  {
    id: "prod-tv-08",
    name: "U8K Series Mini-LED 4K",
    brand: "Hisense",
    category: "television",
    price: 999,
    rating: 4.5,
    stock: 0,
    description:
      "Quantum Dot color profile coupled with robust audio drivers built right into the frame.",
    specs: {
      Display: "Mini-LED",
      Resolution: "4K",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Google TV",
    },
    imageUrls: [
      "https://microless.com/cdn/products/6c85a675bd3dea9dc076e943886ebd2e-md.jpg",
    ],
  },
  {
    id: "prod-tv-09",
    name: "75 Inch QLED Q60D 4K Smart TV (2024)",
    brand: "Samsung",
    category: "television",
    price: 1499,
    rating: 4.6,
    stock: 11,
    description:
      "Transforms into art when it's off. Customizable bezels suit any living area aesthetic.",
    specs: {
      Display: "QLED (Matte)",
      Resolution: "4K",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Tizen OS",
    },
    imageUrls: [
      "https://images.samsung.com/is/image/samsung/p6pim/ae/qa75q60dauxzn/gallery/ae-qled-tv-qa75q60dauxzn-front-black-541631885?$1164_776_PNG$",
      "https://images.samsung.com/is/image/samsung/p6pim/ae/qa75q60dauxzn/gallery/ae-qled-tv-qa75q60dauxzn-r-perspective--black-541631891?$Q90_1368_1094_F_JPG$",
      "https://images.samsung.com/is/image/samsung/p6pim/ae/qa75q60dauxzn/gallery/ae-qled-tv-qa75q60dauxzn-l-perspective--black-541631887?$Q90_1368_1094_F_JPG$",
      "https://images.samsung.com/is/image/samsung/p6pim/ae/qa75q60dauxzn/gallery/ae-qled-tv-qa75q60dauxzn-l-side-black-541631889?$Q90_1368_1094_F_JPG$",
    ],
  },
  {
    id: "prod-tv-10",
    name: "Samsung 65 Inch Class Neo QLED 8K QN900D 8K Smart TV 65QN900D",
    brand: "Samsung",
    category: "television",
    price: 4999,
    rating: 4.7,
    stock: 3,
    description:
      "Our highest resolution screen backed by powerful AI upscaling modules.",
    specs: {
      Display: "Neo QLED",
      Resolution: "8K Ultra HD",
      "Refresh Rate": "240Hz",
      "Smart Platform": "Tizen OS",
    },
    imageUrls: [
      "https://jawdahshop.ae/cdn/shop/files/65QN900D.webp?v=1780930455",
      "https://jawdahshop.ae/cdn/shop/files/1_0fcca105-1028-49dc-89f6-933eb74dd85f.webp?v=1780930455",
    ],
  },
  {
    id: "prod-tv-11",
    name: "TCL 55 Class 4-Series 4K UHD HDR LED Smart Roku TV - 55S451",
    brand: "TCL",
    category: "television",
    price: 299,
    rating: 4.3,
    stock: 35,
    description:
      "Budget-friendly 4K HDR layout offering basic smart channels naturally.",
    specs: {
      Display: "LED",
      Resolution: "4K",
      "Refresh Rate": "60Hz",
      "Smart Platform": "Roku TV",
    },
    imageUrls: [
      "https://images.directnine.io/products/HAB0CDCPTHD9/1_61pJt6EZ8WL_desktop.webp",
      "https://images.directnine.io/products/HAB0CDCPTHD9/3_61ncSyuw25L_desktop.webp",
    ],
  },
  {
    id: "prod-tv-12",
    name: "A80L OLED 4K Premium TV",
    brand: "Sony",
    category: "television",
    price: 1699,
    rating: 4.7,
    stock: 10,
    description:
      "Acoustic Surface Audio+ turns the entire OLED screen itself into a directional speaker.",
    specs: {
      Display: "OLED",
      Resolution: "4K",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Google TV",
    },
    imageUrls: [
      "https://www.eros.ae/media/catalog/product/cache/4d25cc2d7db4bdfe410479ebb1f61f20/x/r/xr-83a80l_1_.jpg",
    ],
  },

  // ==========================================
  // 💻 LAPTOPS (15 Products)
  // ==========================================
  {
    id: "prod-lap-01",
    name: "MacBook Pro 14-inch (M3 Max)",
    brand: "Apple",
    category: "Laptops",
    price: 3199,
    rating: 4.9,
    stock: 0,
    description:
      "Engineered for developers, creators, and hardcore professional workloads.",
    specs: {
      Processor: "Apple M3 Max",
      RAM: "36GB",
      Storage: "1TB SSD",
      Display: "Liquid Retina XDR",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/OmAAAOSwhGllXuaz/s-l1600.webp",
      "https://i.ebayimg.com/images/g/YY0AAOSw4ZtlXua2/s-l960.webp",
      "https://i.ebayimg.com/images/g/HSEAAOSwOW9lXua0/s-l960.webp",
    ],
    isFeatured: true,
  },
  {
    id: "prod-lap-02",
    name: "ROG Zephyrus G16 OLED Gaming Laptop",
    brand: "ASUS",
    category: "Laptops",
    price: 2299,
    rating: 4.7,
    stock: 7,
    description:
      "Ultra-thin, precision-aluminum gaming powerhouse featuring a 240Hz Nebula OLED display.",
    specs: {
      Processor: "Intel Core Ultra 9",
      GPU: "RTX 4080",
      RAM: "32GB",
      Storage: "1TB NVMe",
    },
    imageUrls: [
      "https://ha-middle-east.com/cdn/shop/files/13.11.2025_13.57.34_REC_1024x1024@2x.png?v=1763028021",
      "https://ha-middle-east.com/cdn/shop/files/13.11.2025_13.58.59_REC_1024x1024@2x.png?v=1763028021",
      "https://ha-middle-east.com/cdn/shop/files/13.11.2025_13.59.24_REC_1024x1024@2x.png?v=1763028021",
    ],
  },
  {
    id: "prod-lap-03",
    name: "XPS 13 9340 Laptop",
    brand: "Dell",
    category: "Laptops",
    price: 1399,
    rating: 4.5,
    stock: 18,
    description:
      "Iconic minimal borderless architecture optimized for business productivity routes.",
    specs: {
      Processor: "Intel Core Ultra 7",
      RAM: "16GB",
      Storage: "512GB SSD",
      Display: "InfinityEdge FHD+",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/hM0AAeSwtJlqKYeJ/s-l1600.webp",
      "https://i.ebayimg.com/images/g/7NwAAeSwaTxqKYeJ/s-l960.webp",
      "https://i.ebayimg.com/images/g/cEgAAeSwNcNqKYeJ/s-l960.webp",
    ],
  },
  {
    id: "prod-lap-04",
    name: "ThinkPad X1 Carbon Gen 12",
    brand: "Lenovo",
    category: "Laptops",
    price: 1849,
    rating: 4.8,
    stock: 20,
    description:
      "The gold standard corporate machine built with durable military-grade carbon fiber weaves.",
    specs: {
      Processor: "Intel Core Ultra 7",
      RAM: "32GB",
      Storage: "1TB SSD",
      Weight: "2.42 lbs",
    },
    imageUrls: [
      "https://m.media-amazon.com/images/I/61GSvJjxBuL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51q4xuGWAVL._AC_SX679_.jpg",
    ],
  },
  {
    id: "prod-lap-05",
    name: "MacBook Air 13-inch (M3)",
    brand: "Apple",
    category: "Laptops",
    price: 1099,
    rating: 4.8,
    stock: 45,
    description:
      "Strikingly thin profile paired with silent, fanless processing capability.",
    specs: {
      Processor: "Apple M3",
      RAM: "8GB",
      Storage: "256GB SSD",
      "Battery Life": "Up to 18 Hours",
    },
    imageUrls: [
      "https://www.menakart.com/media/catalog/product/cache/5e3aebc376dfafba18b6fc051d6e9d85/1/5/1520729_3__2.jpg",
      "https://www.menakart.com/media/catalog/product/cache/5e3aebc376dfafba18b6fc051d6e9d85/1/5/1520729_4__2.jpg",
      "https://www.menakart.com/media/catalog/product/cache/5e3aebc376dfafba18b6fc051d6e9d85/x/_/x_162_-_2025-09-04t160050.111.jpg",
    ],
  },
  {
    id: "prod-lap-06",
    name: "Blade 16 Gaming Laptop",
    brand: "Razer",
    category: "Laptops",
    price: 2999,
    rating: 4.2,
    stock: 0,
    description:
      "Features a revolutionary dual-mode mini-LED display switching between 4K 120Hz and FHD+ 240Hz.",
    specs: {
      Processor: "Intel Core i9-14900HX",
      GPU: "RTX 4090",
      RAM: "32GB",
      Storage: "2TB NVMe",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/HZoAAOSwailnBsSS/s-l1600.webp"],
    isFeatured: true,
  },
  {
    id: "prod-lap-07",
    name: "Surface Laptop 7th Edition (Copilot+ PC)",
    brand: "Microsoft",
    category: "Laptops",
    price: 1299,
    rating: 4.7,
    stock: 14,
    description:
      "Lightning-fast ARM architecture pushing massive multi-day battery cycles alongside native local AI tools.",
    specs: {
      Processor: "Snapdragon X Elite",
      RAM: "16GB",
      Storage: "512GB",
      "NPU Speed": "45 TOPS",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/2m4AAeSwXMpqPVl4/s-l960.webp",
      "https://i.ebayimg.com/images/g/0KAAAeSw9XlqPVl3/s-l960.webp",
      "https://i.ebayimg.com/images/g/Ep4AAeSwWS1qPVl3/s-l960.webp",
    ],
  },
  {
    id: "prod-lap-08",
    name: "HP Spectre x360 14",
    brand: "HP",
    category: "Laptops",
    price: 1449,
    rating: 4.6,
    stock: 12,
    description:
      "Premium convertible 2-in-1 layout tracking crisp 2.8K OLED interactive tablet modes.",
    specs: {
      Processor: "Intel Core Ultra 7",
      RAM: "16GB",
      Storage: "1TB SSD",
      Display: "Touch OLED",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/R4oAAOSwf55nd5Z5/s-l1600.webp",
      "https://i.ebayimg.com/images/g/qskAAOSwrr1nd5Z6/s-l960.webp",
      "https://i.ebayimg.com/images/g/tFYAAOSwZkNnd5Z1/s-l960.webp",
    ],
  },
  {
    id: "prod-lap-09",
    name: "Zenbook DUO Dual Screen Laptop",
    brand: "ASUS",
    category: "Laptops",
    price: 1699,
    imageUrls: [
      "https://m.media-amazon.com/images/I/819SFLPhfHL._AC_SX679_.jpg",
    ],
    rating: 4.7,
    stock: 8,
    description:
      "Dual full-size 14-inch OLED touchscreens configuration for elite mobile programming layouts.",
    specs: {
      Processor: "Intel Core Ultra 9",
      RAM: "32GB",
      Storage: "1TB SSD",
      Display: "Dual OLED",
    },
  },
  {
    id: "prod-lap-10",
    name: "Predator Helios 16",
    brand: "Acer",
    category: "Laptops",
    price: 1799,
    imageUrls: [
      "https://cdn.gccgamers.com/media/products/ac7f1111-ca03-4df7-8e01-7acbe7637f50.webp",
      "https://cdn.gccgamers.com/media/products/504796f0-0faf-414d-8157-2a68a16c89fe.webp",
    ],
    rating: 4.5,
    stock: 11,
    description:
      "High-performance liquid metal thermal compound cooling over-clockable desktop grade modules.",
    specs: {
      Processor: "Intel Core i7-14700HX",
      GPU: "RTX 4070",
      RAM: "16GB",
      Storage: "1TB SSD",
    },
  },
  {
    id: "prod-lap-11",
    name: "Yoga Pro 9i Flagship Creator",
    brand: "Lenovo",
    category: "Laptops",
    price: 1999,
    rating: 4.7,
    stock: 9,
    description:
      "Built explicitly for creative video processing with its vibrant 165Hz Mini-LED tracking screen panels.",
    specs: {
      Processor: "Intel Core i9",
      GPU: "RTX 4060",
      RAM: "32GB",
      Storage: "1TB",
    },
    imageUrls: [
      "https://m.media-amazon.com/images/I/51wlvhVEqyL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/51qjwwazq8L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/514tIiUjNlL._AC_SX679_.jpg",
    ],
  },
  {
    id: "prod-lap-12",
    name: "Alienware m18 R2 Giant Gaming",
    brand: "Dell",
    category: "Laptops",
    price: 2599,
    rating: 3.7,
    stock: 5,
    description:
      "Massive 18-inch desktop replacement architecture delivering peak overclock boundaries safely.",
    specs: {
      Processor: "Intel Core i9-14900HX",
      GPU: "RTX 4080",
      RAM: "64GB",
      Storage: "2TB",
    },
    imageUrls: [
      "https://m.media-amazon.com/images/I/51yLl4eCDPL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/512kFv6TGCL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51BcDwR5D4L._AC_SX679_.jpg",
    ],
  },
  {
    id: "prod-lap-13",
    name: "Gram Pro Ultra-Lightweight",
    brand: "LG",
    category: "Laptops",
    price: 1599,
    rating: 4.4,
    stock: 15,
    description:
      "Unbelievably featherlight 16-inch build keeping full discrete GPU processing intact.",
    specs: {
      Processor: "Intel Ultra 7",
      GPU: "RTX 3050",
      Weight: "2.81 lbs",
      RAM: "16GB",
    },
    imageUrls: [
      "https://images.directnine.io/products/HAB0CTD11PWX/2_4199BrHr0wL_desktop.webp",
      "https://images.directnine.io/products/HAB0CTD11PWX/1_71SjVi8KwdL_desktop.webp",
    ],
  },
  {
    id: "prod-lap-14",
    name: "Vivobook 16X Budget Performance",
    brand: "ASUS",
    category: "Laptops",
    price: 799,
    rating: 4.3,
    stock: 25,
    description:
      "Excellent mid-tier performance targeting entry engineering workloads cleanly.",
    specs: {
      Processor: "Intel Core i5-13500H",
      GPU: "RTX 3050",
      RAM: "8GB",
      Storage: "512GB",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/ILAAAeSwQIRpQu5j/s-l1600.webp",
      "https://i.ebayimg.com/images/g/0mUAAeSwB9lpQu5j/s-l960.webp",
    ],
  },
  {
    id: "prod-lap-15",
    name: "OmniBook Ultra 14 (Copilot+ PC)",
    brand: "HP",
    category: "Laptops",
    price: 1449,
    rating: 4.6,
    stock: 10,
    description:
      "HP's next-generation AI companion packing local deep learning hardware frameworks.",
    specs: {
      Processor: "AMD Ryzen AI 9",
      RAM: "32GB",
      Storage: "1TB",
      "NPU Speed": "55 TOPS",
    },
    imageUrls: [
      "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/a7ed222a-c759-4b21-87fb-ea9a4b5eb921.jpg",
    ],
  },

  // ==========================================
  // 📱 SmartphonesS (15 Products)
  // ==========================================
  {
    id: "prod-phone-01",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    price: 1299,
    rating: 3.1,
    stock: 25,
    description:
      "Welcome to mobile AI. Unleash new levels of productivity with the integrated S-Pen.",
    specs: {
      Processor: "Snapdragon 8 Gen 3",
      Camera: "200MP Quad",
      Storage: "512GB",
      Battery: "5000mAh",
    },
    imageUrls: [
      "https://m.media-amazon.com/images/I/71WkqFssobL._AC_SX679_.jpg",
    ],
    isFeatured: true,
  },
  {
    id: "prod-phone-02",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    category: "Smartphones",
    price: 1199,
    imageUrls: [
      "https://i.ebayimg.com/images/g/AuoAAOSw7HFn7-A-/s-l1600.webp",
      "https://i.ebayimg.com/images/g/MFcAAOSwiklnsZnB/s-l960.webp",
      "https://i.ebayimg.com/images/g/TNwAAOSwVrlnsZnA/s-l960.webp",
    ],
    rating: 4.8,
    stock: 30,
    description:
      "Forged in strong aerospace-grade titanium, featuring the custom Action button and a 5x Telephoto setup.",
    specs: {
      Processor: "A17 Pro Bionic",
      Camera: "48MP Main",
      Storage: "256GB",
      Display: "Super Retina XDR",
    },
  },
  {
    id: "prod-phone-03",
    name: "Pixel 8 Pro",
    brand: "Google",
    category: "Smartphones",
    price: 999,
    imageUrls: [
      "https://i.ebayimg.com/images/g/FngAAOSwTuVmO0G7/s-l1600.webp",
      "https://i.ebayimg.com/images/g/6-wAAOSwHYFmO0G5/s-l960.webp",
      "https://i.ebayimg.com/images/g/Lj0AAOSw~9pmO0G7/s-l960.webp",
    ],
    rating: 4.6,
    stock: 22,
    description:
      "The best computational Smartphones photography array backed by Google's Tensor G3 chip.",
    specs: {
      Processor: "Google Tensor G3",
      Camera: "50MP Triple",
      Storage: "128GB",
      OS: "Android 14 (Clean)",
    },
  },
  {
    id: "prod-phone-04",
    name: "OnePlus 12 5G",
    brand: "OnePlus",
    category: "Smartphones",
    price: 799,
    rating: 4.7,
    stock: 0,
    description:
      "Flagship specifications meeting hyper-charging technology that fuels full battery grids within 26 minutes.",
    specs: {
      Processor: "Snapdragon 8 Gen 3",
      Charging: "100W SUPERVOOC",
      RAM: "16GB",
      Storage: "512GB",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/lK8AAOSwrvVnWUbP/s-l1600.webp",
      "https://i.ebayimg.com/images/g/0cwAAOSwlWRnWUbB/s-l960.webp",
      "https://i.ebayimg.com/images/g/ya8AAOSwVkdnWUfl/s-l960.webp",
    ],
  },
  {
    id: "prod-phone-05",
    name: "X100 Pro Photography Flagship",
    brand: "Vivo",
    category: "Smartphones",
    price: 949,
    rating: 4.8,
    stock: 12,
    description:
      "Co-engineered with ZEISS optics, delivering unmatched mobile zoom and portrait depth definitions.",
    specs: {
      Processor: "Dimensity 9300",
      Camera: "ZEISS 1-inch Sensor",
      Storage: "512GB",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/yOQAAOSwp-ZloRQI/s-l1600.webp",
      "https://i.ebayimg.com/images/g/cuMAAOSwJHBloRQH/s-l960.webp",
    ],
  },
  {
    id: "prod-phone-06",
    name: "ROG Phone 8 Ultimate Gaming",
    brand: "ASUS",
    category: "Smartphones",
    price: 1199,
    rating: 3.4,
    stock: 8,
    description:
      "Dedicated gaming phone built with customizable pressure trigger edges and cooling fan bypass rails.",
    specs: {
      Processor: "Snapdragon 8 Gen 3",
      Display: "165Hz AMOLED",
      RAM: "24GB",
      Storage: "1TB",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/YxwAAOSwG09nFj7W/s-l1600.webp",
      "https://i.ebayimg.com/images/g/EU0AAOSwRklnFj7Y/s-l960.webp",
      "https://i.ebayimg.com/images/g/9aYAAOSw9s9nFj7Z/s-l960.webp",
    ],
  },
  {
    id: "prod-phone-07",
    name: "Razr+ 2024 Foldable",
    brand: "Motorola",
    category: "Smartphones",
    price: 999,
    rating: 4.5,
    stock: 0,
    description:
      "Industry's largest, most functional interactive cover screen on a flip-style folding phone.",
    specs: {
      Processor: "Snapdragon 8s Gen 3",
      Display: "6.9-inch Foldable pOLED",
      "Cover Display": "4.0-inch",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/afgAAeSwKOdqCu1S/s-l1600.webp",
      "https://i.ebayimg.com/images/g/xZoAAeSw1ctqCu1S/s-l960.webp",
      "https://i.ebayimg.com/images/g/INAAAeSwuMVqCu1S/s-l960.webp",
    ],
  },
  {
    id: "prod-phone-08",
    name: "Xperia 1 VI Creator Phone",
    brand: "Sony",
    category: "Smartphones",
    price: 1399,
    rating: 4.6,
    stock: 7,
    description:
      "Pro-grade audio components matched to unique continuous true optical telephoto focal ranges.",
    specs: {
      Processor: "Snapdragon 8 Gen 3",
      Display: "OLED FHD+",
      Audio: "3.5mm Jack + Hi-Res",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/TOwAAeSwHsVpTfoF/s-l960.webp",
      "https://i.ebayimg.com/images/g/Q0IAAeSwW2VpTfoJ/s-l960.webp",
      "https://i.ebayimg.com/images/g/KQYAAeSwAF5pTfqC/s-l960.webp",
    ],
  },
  {
    id: "prod-phone-09",
    name: "14 Ultra Leica Flagship",
    brand: "Xiaomi",
    category: "Smartphones",
    price: 1249,
    rating: 4.9,
    stock: 10,
    description:
      "Stepless variable physical aperture mechanism giving users total manual control over depth of field.",
    specs: {
      Processor: "Snapdragon 8 Gen 3",
      Sensor: "Sony LYT-900 1-inch",
      Charging: "90W Wired",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/u6kAAOSwuENnBRwA/s-l1600.webp",
      "https://i.ebayimg.com/images/g/q5QAAOSw981nBRwD/s-l960.webp",
      "https://i.ebayimg.com/images/g/nWMAAOSw3ThnBRwC/s-l960.webp",
    ],
    isFeatured: true,
  },
  {
    id: "prod-phone-10",
    name: "Galaxy Z Fold 6",
    brand: "Samsung",
    category: "Smartphones",
    price: 1899,
    rating: 4.7,
    stock: 15,
    description:
      "Thinner, lighter box design transforming seamlessly into a powerful multi-window mobile workstation.",
    specs: {
      Processor: "Snapdragon 8 Gen 3 for Galaxy",
      "Main Display": "7.6-inch Dynamic AMOLED",
      Weight: "239g",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/hXAAAOSw1yxn4x0E/s-l1600.webp",
      "https://i.ebayimg.com/images/g/h-cAAOSwO7Vn4xLx/s-l960.webp",
    ],
  },
  {
    id: "prod-phone-11",
    name: "iPhone 15 Standard",
    brand: "Apple",
    category: "Smartphones",
    price: 799,
    rating: 4.5,
    stock: 40,
    description:
      "Now introducing Dynamic Island alerts and advanced 48MP primary sensor resolution tracking.",
    specs: {
      Processor: "A16 Bionic",
      Camera: "48MP Dual",
      Connection: "USB-C Interface",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/rM4AAOSwi4Bnh6L3/s-l960.webp"],
  },
  {
    id: "prod-phone-12",
    name: "Nothing Phone (2)",
    brand: "Nothing",
    category: "Smartphones",
    price: 599,
    rating: 4.6,
    stock: 25,
    description:
      "Unique transparent backing housing glyph interface lighting arrays to track visual notifications elegantly.",
    specs: {
      Processor: "Snapdragon 8+ Gen 1",
      Display: "120Hz LTPO OLED",
      Interface: "Nothing OS 2.5",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/PgsAAeSwC1pqMP3i/s-l1600.webp",
      "https://i.ebayimg.com/images/g/5LgAAeSw7vNqMP3t/s-l960.webp",
    ],
  },
  {
    id: "prod-phone-13",
    name: "Edge+ Premium 2024",
    brand: "Motorola",
    category: "Smartphones",
    price: 699,
    rating: 4.4,
    stock: 0,
    description:
      "Quad-curved display tracking a fluid 165Hz frame presentation rate effortlessly.",
    specs: {
      Processor: "Snapdragon 8 Gen 2",
      Battery: "5100mAh",
      Charging: "68W TurboPower",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/EXAAAOSwzQJnlw5M/s-l1600.webp",
      "https://i.ebayimg.com/images/g/EXAAAOSwzQJnlw5M/s-l1600.webp",
    ],
  },
  {
    id: "prod-phone-14",
    name: "Nord 4 Midrange King",
    brand: "OnePlus",
    category: "Smartphones",
    price: 449,
    rating: 2.5,
    stock: 30,
    description:
      "Full metal unibody design offering high durability and long-term fluid operational performance.",
    specs: {
      Processor: "Snapdragon 7+ Gen 3",
      Battery: "5500mAh",
      Charging: "100W",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/54AAAeSw4OBpZGS5/s-l960.webp",
      "https://i.ebayimg.com/images/g/MxAAAeSw9ehpcJoM/s-l960.webp",
      "https://i.ebayimg.com/images/g/fggAAeSwq7ZpZGS-/s-l960.webp",
    ],
  },
  {
    id: "prod-phone-15",
    name: "Galaxy A55 5G Midtier",
    brand: "Samsung",
    category: "Smartphones",
    price: 399,
    imageUrls: ["https://i.ebayimg.com/images/g/64sAAOSwMORl-Bj8/s-l1600.webp"],
    rating: 4.3,
    stock: 35,
    description:
      "Secure, reliable, water-resistant everyday Smartphones with strong expandable storage options.",
    specs: {
      Processor: "Exynos 1480",
      Display: "120Hz Super AMOLED",
      Durability: "IP67 Rated",
    },
  },

  // ==========================================
  // 🎧 HEADPHONES (15 Products)
  // ==========================================
  {
    id: "prod-head-01",
    name: "WH-1000XM5 Wireless Headphones",
    brand: "Sony",
    category: "Headphones",
    price: 398,
    rating: 4.7,
    stock: 0,
    description:
      "Industry-leading noise cancellation automatically calibrated based on user posture and ambient shifts.",
    specs: {
      "Battery Life": "Up to 30 Hours",
      Connection: "Bluetooth 5.2",
      Drivers: "30mm",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/JOcAAOSwYhpjV3jd/s-l960.webp"],
    isFeatured: true,
  },
  {
    id: "prod-head-02",
    name: "QuietComfort Ultra ANC",
    brand: "Bose",
    category: "Headphones",
    price: 429,
    rating: 4.6,
    stock: 18,
    description:
      "High-end spatialized custom soundscapes paired with unbeatable soft leather pressure distributions.",
    specs: {
      "Battery Life": "Up to 24 Hours",
      "Special Mode": "Immersive Audio Spatializer",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/oVAAAOSwJfJmKNJp/s-l1600.webp"],
  },
  {
    id: "prod-head-03",
    name: "AirPods Max Over-Ear",
    brand: "Apple",
    category: "Headphones",
    price: 549,
    rating: 4.5,
    stock: 25,
    description:
      "Machined aluminum ear cups coupled to incredible seamless tracking integration inside Apple ecosystem loops.",
    specs: {
      Chipset: "Dual Apple H1 Chips",
      Material: "Mesh Canopy / Aluminum",
      Battery: "Up to 20 Hours",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/24MAAeSw3ulpxvVb/s-l1600.webp"],
  },
  {
    id: "prod-head-04",
    name: "Momentum 4 Wireless Audiophile",
    brand: "Sennheiser",
    category: "Headphones",
    price: 349,
    rating: 4.8,
    stock: 15,
    description:
      "Incredible acoustic fidelity configuration delivering a class-shattering 60 hours of play time per charge cycle.",
    specs: {
      "Battery Life": "Up to 60 Hours",
      Drivers: "42mm Dynamic System",
      Codecs: "aptX Adaptive",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/-vIAAeSwCnhqKPJa/s-l960.webp"],
  },
  {
    id: "prod-head-05",
    name: "Maxwell Wireless Gaming Headset",
    brand: "Audeze",
    category: "Headphones",
    price: 299,
    rating: 2.8,
    stock: 12,
    description:
      "Studio-tier ultra-fast response 90mm planar magnetic drivers built for audiophile game tracking filters.",
    specs: {
      Drivers: "90mm Planar Magnetic",
      "Battery Life": "Up to 80 Hours",
      Connection: "Ultra-low Latency 2.4GHz",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/DH8AAeSwph5p71UH/s-l1600.webp",
      "https://i.ebayimg.com/images/g/kfkAAeSwcE5p71VQ/s-l960.webp",
    ],
  },
  {
    id: "prod-head-06",
    name: "Bathys Hi-Fi ANC Headphone",
    brand: "Focal",
    category: "Headphones",
    price: 699,
    rating: 4.9,
    stock: 6,
    description:
      "Ultra-premium speaker arrays incorporating an internal USB-C DAC decoding up to 24-bit/192kHz raw streams.",
    specs: {
      "Driver Material": "Aluminum-Magnesium 'M' Dome",
      "DAC Mode": "24-bit Hi-Res USB Connection",
      Battery: "30 Hours",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/kzoAAeSwIQJqKf~Q/s-l960.webp",
      "https://i.ebayimg.com/images/g/eZkAAeSwakVqKf~O/s-l960.webp",
    ],
    isFeatured: true,
  },
  {
    id: "prod-head-07",
    name: "Beats Studio Pro Elite",
    brand: "Apple",
    category: "Headphones",
    price: 349,
    rating: 4.4,
    stock: 22,
    description:
      "Re-engineered personalized spatial sound staging matched with dual tracking profile maps for iOS and Android.",
    specs: {
      Connection: "USB-C Lossless / BT",
      "Battery Life": "Up to 40 Hours",
      ANC: "Fully Adaptive",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/v7YAAeSwy4ppRiTx/s-l960.webp",
      "https://i.ebayimg.com/images/g/-T8AAeSwVwxpRiTx/s-l960.webp",
    ],
  },
  {
    id: "prod-head-08",
    name: "JBL Tour One M2",
    brand: "JBL",
    category: "Headphones",
    price: 299,
    rating: 4.5,
    stock: 19,
    description:
      "Smart ambient sound tracking logic that automatically attenuates volumes as soon as you start speaking.",
    specs: {
      "Battery Life": "Up to 50 Hours",
      Drivers: "40mm",
      Microphones: "4-Mic Array for Calls",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/MDAAAeSwL4ppprXH/s-l1600.webp"],
  },
  {
    id: "prod-head-09",
    name: "AirPods Pro 2 (USB-C)",
    brand: "Apple",
    category: "Headphones",
    price: 249,
    rating: 4.8,
    stock: 50,
    description:
      "Twice the active noise cancelation power of the first gen, featuring adaptive audio balancing layers.",
    specs: {
      Chipset: "Apple H2",
      "Dust/Waterproof": "IP54 MagSafe Case",
      Charging: "USB-C Interface",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/hi8AAeSwZeRqDkCF/s-l1600.webp",
      "https://i.ebayimg.com/images/g/53IAAeSwH5FqDkJB/s-l960.webp",
    ],
  },
  {
    id: "prod-head-10",
    name: "WF-1000XM5 Premium ANC Earbuds",
    brand: "Sony",
    category: "Headphones",
    price: 299,
    rating: 3.7,
    stock: 35,
    description:
      "Real-time audio processing processors feeding customized sound seals across high and low frequency thresholds.",
    specs: {
      "Driver Size": "8.4mm Dynamic Driver X",
      "Noise Sensor": "3 Mics Per Earbud",
      Battery: "8 Hours (24 With Case)",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/LjUAAOSwPoNoDikO/s-l1600.webp"],
  },

  {
    id: "prod-head-12",
    name: "Crusher Evo Sensory Bass",
    brand: "Skullcandy",
    category: "Headphones",
    price: 199,
    rating: 4.4,
    stock: 30,
    description:
      "Adjustable physical haptic bass sliders that vibrate directly against your skull to simulate sub-woofers.",
    specs: {
      "Haptic Feedback": "Crusher Adjustable Sensory Bass",
      "Battery Life": "Up to 40 Hours",
      Tuning: "Personal Sound via App",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/VIQAAeSwtYRqLcP5/s-l960.webp",
      "https://i.ebayimg.com/images/g/WbAAAeSw35RqLcP5/s-l960.webp",
      "https://i.ebayimg.com/images/g/hLIAAeSwHKFqLaWE/s-l1600.webp",
    ],
  },
  {
    id: "prod-head-13",
    name: "Elite 10 Top-Tier Workout Earbuds",
    brand: "Jabra",
    category: "Headphones",
    price: 249,
    rating: 4.6,
    stock: 18,
    description:
      "All-day comfort design featuring semi-open speaker shapes and revolutionary Dolby Head Tracking filters.",
    specs: {
      "Spatial Audio": "Dolby Atmos with Head Tracking",
      "Waterproof Rating": "IP57 Comfort Fit",
      Microphones: "6-Mic Array",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/2usAAeSwz4VpcbD3/s-l1600.webp",
      "https://i.ebayimg.com/images/g/0dIAAeSw-FppcbD3/s-l960.webp",
    ],
  },
  {
    id: "prod-head-14",
    name: "Marshall Major V On-Ear Classic",
    brand: "Marshall",
    category: "Headphones",
    price: 149,
    rating: 4.5,
    stock: 20,
    description:
      "Iconic vintage leather amp textures paired with a staggering 100+ hour wireless continuous playtime framework.",
    specs: {
      Playtime: "100+ Hours Wireless",
      Charging: "Wireless Charging Capability",
      Design: "Collapsible Ergonomics",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/Qo0AAeSwzxVpMqYT/s-l1600.webp"],
  },
  {
    id: "prod-head-15",
    name: "Tune 770NC Budget Over-Ear",
    brand: "JBL",
    category: "Headphones",
    price: 99,
    rating: 4.3,
    stock: 45,
    description:
      "Lightweight, folding budget sound output incorporating active noise isolation filters perfectly.",
    specs: {
      "Battery Life": "Up to 70 Hours (ANC Off)",
      "Bluetooth Version": "5.3 Multi-Point LE",
      Weight: "232g",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/CGIAAeSwXXhqLCte/s-l960.webp",
      "https://i.ebayimg.com/images/g/u2UAAeSwCPVqLCte/s-l1600.webp",
    ],
  },

  // ==========================================
  // 🔊 SPEAKERS (15 Products)
  // ==========================================
  {
    id: "prod-spk-01",
    name: "Era 300 Spatial Audio Smart Speaker",
    brand: "Sonos",
    category: "Speaker",
    price: 449,
    rating: 3.9,
    stock: 14,
    description:
      "Six drivers intelligently dispersed to reflect custom spatial soundscapes off walls and ceilings flawlessly.",
    specs: {
      Connectivity: "WiFi / Bluetooth",
      "Voice Assistant": "Alexa Built-in",
      "Audio Standard": "Dolby Atmos Spatial",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/HnYAAeSwMX5pLN9N/s-l960.webp"],
  },
  {
    id: "prod-spk-02",
    name: "SoundLink Max Heavy Duty Portable",
    brand: "Bose",
    category: "Speaker",
    price: 399,
    rating: 4.7,
    stock: 20,
    description:
      "Premium stereo drivers and deep bass curves engineered to handle water, dust, and rugged field transport loops.",
    specs: {
      "Battery Life": "Up to 20 Hours",
      "Waterproof Rating": "IP67 Floating Design",
      Inputs: "3.5mm Aux Line",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/sc4AAeSwpJ1qQhZX/s-l1600.webp",
      "https://i.ebayimg.com/images/g/eYgAAeSwS9pqQhZY/s-l1600.webp",
    ],
  },
  {
    id: "prod-spk-03",
    name: "Boombox 3 WiFi & Bluetooth Speaker",
    brand: "JBL",
    category: "Speaker",
    price: 599,
    rating: 4.8,
    stock: 11,
    description:
      "Massive 3-way speaker driver layout delivering extreme party volume boundaries with crystal-clear vocal staging.",
    specs: {
      "Audio Output": "180W RMS (AC Mode)",
      "Battery Life": "Up to 24 Hours",
      Waterproof: "IP67",
    },
    isFeatured: true,
    imageUrls: [
      "https://i.ebayimg.com/images/g/~6YAAeSwPuhqNc9W/s-l1600.webp",
      "https://i.ebayimg.com/images/g/gw0AAeSwjwJqNc9W/s-l1600.webp",
    ],
  },
  {
    id: "prod-spk-04",
    name: "Move 2 Rugged Smart Speaker",
    brand: "Sonos",
    category: "Speaker",
    price: 449,
    rating: 4.7,
    stock: 16,
    description:
      "Upgraded stereo configuration optimizing acoustics automatically wherever you place it via spatial room calibration.",
    specs: {
      "Battery Life": "Up to 24 Hours",
      Acoustics: "Automatic Trueplay Tuning",
      Charging: "Wireless Drop-In Base",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/~kwAAeSwKkFpJ1uy/s-l1600.webp"],
  },
  {
    id: "prod-spk-05",
    name: "Authentics 300 Retro Home Speaker",
    brand: "JBL",
    category: "Speaker",
    price: 449,
    rating: 4.3,
    stock: 10,
    description:
      "Striking 1970s Quadrex grille styling backed by modern twin smart voice assistants running concurrently.",
    specs: {
      Design: "Retro Leather / Gold Accents",
      "Voice Integration": "Google Assistant & Alexa Simultaneous",
      Battery: "8 Hours",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/3qQAAeSwx8pqNc-U/s-l1600.webp",
      "https://i.ebayimg.com/images/g/I7EAAeSwQMRqNc-U/s-l1600.webp",
    ],
  },

  {
    id: "prod-spk-07",
    name: "Woburn III Home Audio System",
    brand: "Marshall",
    category: "Speaker",
    price: 579,
    rating: 4.8,
    stock: 8,
    description:
      "Massive home presence blasting analog tactile control dials and deep chest-thumping soundstage dimensions.",
    specs: {
      Amplifiers: "90W Class D Subwoofer",
      Inputs: "HDMI ARC / RCA / Aux",
      Bluetooth: "5.2 LE Ready",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/jaYAAeSwPZBqC4Ok/s-l1600.webp",
      "https://i.ebayimg.com/images/g/o-kAAeSwbHFqC4Ol/s-l1600.webp",
    ],
  },
  {
    id: "prod-spk-08",
    name: "S-Track Home Theater Bar",
    brand: "Sonos",
    category: "Speaker",
    price: 899,
    rating: 4.8,
    stock: 12,
    description:
      "Premium smart soundbar driving advanced spatial mapping layers into home cinematic viewing matrices.",
    specs: {
      Channels: "11 High-Performance Drivers",
      Processing: "Dolby Atmos / Trueplay",
      Input: "HDMI eARC Only",
    },
    imageUrls: [
      "https://images.samsung.com/is/image/samsung/p6pim/ae/hw-q600h-zn/gallery/ae-q-series-soundbar-hw-q600h-hw-q600h-zn-552468192?$Q90_1368_1094_F_JPG$",
      "https://images.samsung.com/is/image/samsung/p6pim/ae/hw-q600h-zn/gallery/ae-q-series-soundbar-hw-q600h-hw-q600h-zn-552468223?$1164_776_PNG$",
    ],
  },
  {
    id: "prod-spk-09",
    name: "HomePod 2nd Generation",
    brand: "Apple",
    category: "Speaker",
    price: 299,
    rating: 4.5,
    stock: 24,
    description:
      "High-excursion woofer matching custom software arrays to analyze internal spatial sound feedback loop shifts.",
    specs: {
      Sensors: "Room Sensing / Temp / Humidity",
      "Audio Driver": "4-inch High-Excursion Woofer",
      Integration: "Siri Hub",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/oLkAAOSwlklkPowN/s-l960.webp"],
  },
  {
    id: "prod-spk-10",
    name: "Roam 2 Ultra-Compact Smart Speaker",
    brand: "Sonos",
    category: "Speaker",
    price: 179,
    rating: 4.1,
    stock: 33,
    description:
      "Lightweight premium speaker route passing automatic layout updates across WiFi and mobile Bluetooth feeds.",
    specs: {
      Weight: "0.95 lbs",
      Waterproof: "IP67 Dustproof",
      "Battery Life": "Up to 10 Hours",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/kJIAAOSwi9hnfT6J/s-l500.jpg"],
  },

  {
    id: "prod-spk-12",
    name: "PartyBox Club 120 Bluetooth Party",
    brand: "JBL",
    category: "Speaker",
    price: 399,
    rating: 4.7,
    stock: 15,
    description:
      "Blasts dynamic light shows synchronized perfectly with deep bass lines. Includes folding handle assemblies.",
    specs: {
      Inputs: "Mic & Guitar Dual Line-In",
      "Battery Life": "Up to 12 Hours (Replaceable)",
      Power: "160W RMS",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/K38AAOSw5bRn01kS/s-l1600.webp",
      "https://i.ebayimg.com/images/g/Xd4AAOSwfM5n01kT/s-l1600.webp",
    ],
  },

  {
    id: "prod-spk-14",
    name: "Flip 6 Everyday Portable Speaker",
    brand: "JBL",
    category: "Speaker",
    price: 129,
    rating: 4.7,
    stock: 55,
    description:
      "The ultimate portable tube speaker utilizing a 2-way racetrack woofer configuration.",
    specs: {
      Acoustics: "Separate Tweeter & Dual Radiators",
      Waterproof: "IP67 Track Proof",
      Battery: "12 Hours",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/v3UAAOSw3Dtn0hK4/s-l1600.webp",
      "https://i.ebayimg.com/images/g/85kAAOSwlxRn0hK6/s-l1600.webp",
    ],
  },

  // ==========================================
  // 📷 CAMERAS (15 Products)
  // ==========================================
  {
    id: "prod-cam-01",
    name: "Alpha 7 IV Full-Frame Mirrorless",
    brand: "Sony",
    category: "Camera",
    price: 2499,
    rating: 4.9,
    stock: 9,
    description:
      "The baseline hybrid camera capturing flawless 33MP photos alongside cinematic 4K video modules.",
    specs: {
      Sensor: "33MP Full-Frame Exmor R",
      Autofocus: "Real-time Eye Tracking",
      Video: "4K 60p 10-bit 4:2:2",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/9bYAAOSw4-lloQRe/s-l960.webp"],
    isFeatured: true,
  },
  {
    id: "prod-cam-02",
    name: "EOS R6 Mark II Mirrorless Setup",
    brand: "Canon",
    category: "Camera",
    price: 2299,
    rating: 4.8,
    stock: 11,
    description:
      "Blazing action response frames tracking automated vehicle, animal, and human target lines.",
    specs: {
      Sensor: "24.2MP CMOS",
      "Shooting Burst": "40 fps Electronic",
      "Video Output": "4K 60p Uncropped",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/aLIAAOSwAwJnyy3n/s-l1600.webp",
      "https://i.ebayimg.com/images/g/~XEAAOSwTJJnyy3q/s-l960.webp",
    ],
  },
  {
    id: "prod-cam-03",
    name: "Z6 III Mirrorless Camera Body",
    brand: "Nikon",
    category: "Camera",
    price: 2499,
    rating: 4.7,
    stock: 6,
    description:
      "World's first partially-stacked CMOS sensor architecture driving blindingly bright viewfinders.",
    specs: {
      Sensor: "24.5MP Partially-Stacked",
      "EVF Brightness": "4000 nits Ultra-Bright",
      Video: "6K/60p RAW Internal",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/BlUAAeSwIGhqAvYO/s-l960.webp"],
  },
  {
    id: "prod-cam-04",
    name: "Lumix S5 II Phase Hybrid",
    brand: "Panasonic",
    category: "Camera",
    price: 1999,
    rating: 3.6,
    stock: 10,
    description:
      "Upgraded phase-detection autofocus engine combined with elite active image stabilization handles.",
    specs: {
      Autofocus: "Phase Hybrid AF Engine",
      Stabilization: "Active I.S. Walk Profiles",
      Video: "6K 30p Open Gate",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/TlkAAOSwg7dmo528/s-l1600.webp",
      "https://i.ebayimg.com/images/g/5HQAAOSwHRpmo529/s-l960.webp",
    ],
  },
  {
    id: "prod-cam-05",
    name: "X-T5 Mirrorless Retro Camera",
    brand: "Fujifilm",
    category: "Camera",
    price: 1699,
    rating: 4.8,
    stock: 5,
    description:
      "Stunning physical analog control matrices housing an incredibly sharp 40MP crop sensor layout.",
    specs: {
      Sensor: "40.2MP X-Trans CMOS 5 HR",
      Design: "Tactile Mechanical Dials",
      "Color Maps": "19 Film Simulation Modes",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/pOoAAOSw0PRj9IHr/s-l1600.webp",
      "https://i.ebayimg.com/images/g/Lc4AAOSw3thj9IHr/s-l960.webp",
    ],
  },
  {
    id: "prod-cam-06",
    name: "HERO12 Black Action Camera",
    brand: "GoPro",
    category: "Camera",
    price: 399,
    rating: 4.6,
    stock: 35,
    description:
      "Best-in-class rugged action framing driving Max Lens Mod compatibility and HyperSmooth tracking structures.",
    specs: {
      "Video Resolution": "5.3K 60fps / 4K 120fps",
      Stabilization: "HyperSmooth 6.0 AutoBoost",
      Waterproof: "Up to 33ft Rugged",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/MVUAAeSwk~VpWx~D/s-l960.webp"],
  },

  {
    id: "prod-cam-08",
    name: "Alpha 7R V High-Resolution",
    brand: "Sony",
    category: "Camera",
    price: 3899,
    rating: 4.9,
    stock: 4,
    description:
      "Extreme 61-megapixel studio camera driven by a dedicated onboard artificial intelligence auto-tracking core.",
    specs: {
      Sensor: "61MP Full-Frame CMOS",
      "AI Engine": "Deep Learning Autofocus Co-processor",
      Video: "8K 24p Capture",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/sSIAAeSw4phpvy-m/s-l1600.webp",
      "https://i.ebayimg.com/images/g/qXQAAeSw-Qxpvy-n/s-l960.webp",
    ],
  },
  {
    id: "prod-cam-09",
    name: "EOS R50 Vlogging Starter",
    brand: "Canon",
    category: "Camera",
    price: 679,
    rating: 3.9,
    stock: 20,
    description:
      "Lightweight content creation kit that tracks eyes and product details smoothly for online video streaming.",
    specs: {
      Sensor: "24.2MP APS-C Crop",
      "Focus Mode": "Movie for Close-Up Demos",
      Screen: "Vari-angle Touchscreen",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/M6YAAeSwdqNppTXC/s-l1600.webp",
      "https://i.ebayimg.com/images/g/KgYAAeSw7~dppTXD/s-l960.webp",
      "https://i.ebayimg.com/images/g/PqgAAeSweaFppTXD/s-l960.webp",
    ],
  },
  {
    id: "prod-cam-10",
    name: "Z8 Pro Mirrorless Hybrid",
    brand: "Nikon",
    category: "Camera",
    price: 3699,
    rating: 4.9,
    stock: 5,
    description:
      "Nikon's ultimate compact flagship body removing physical mechanical shutters entirely for true electronic speed matrices.",
    specs: {
      "Shutter Mode": "Electronic Only Stacked System",
      "Burst Frames": "120 fps Still Capture",
      Video: "8.3K N-RAW Native",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/QEAAAOSwDWhkmrAL/s-l1600.webp"],
  },

  {
    id: "prod-cam-13",
    name: "G7 X Mark III Content Premium",
    brand: "Canon",
    category: "Camera",
    price: 749,
    rating: 4.5,
    stock: 12,
    description:
      "The classic point-and-shoot camera for social video platforms, handling vertical aspect ratios natively.",
    specs: {
      "Sensor Size": "20.1MP 1.0-inch Stacked",
      Streaming: "Direct YouTube Live Feed Capable",
      Lens: "4.2x Optical Zoom",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/PswAAeSw7kpqCU2X/s-l960.webp",
      "https://i.ebayimg.com/images/g/aKsAAeSwAxtqCU2W/s-l960.webp",
    ],
  },
  {
    id: "prod-cam-14",
    name: "ZV-E10 Interchangeable Vlog Camera",
    brand: "Sony",
    category: "Camera",
    price: 699,
    rating: 4.6,
    stock: 0,
    description:
      "Large sensor vlogging layout driving instant background bokeh defocus sliders on demand.",
    specs: {
      "Sensor Type": "24.2MP APS-C Mirrorless",
      Microphone: "Directional 3-Capsule with Windscreen",
      Focus: "Product Showcase Mode",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/TW8AAOSwjr1mOntj/s-l1600.webp",
      "https://i.ebayimg.com/images/g/jkIAAOSwsRJmOntu/s-l1600.webp",
    ],
  },

  // ==========================================
  // ⌚ SMART WATCHES (15 Products)
  // ==========================================
  {
    id: "prod-watch-01",
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    category: "Smart Watches",
    price: 799,
    rating: 4.8,
    stock: 22,
    description:
      "Rugged high-altitude endurance watch built with light titanium alloy structures.",
    specs: {
      "Case Material": "Titanium",
      Battery: "Up to 36 Hours",
      GPS: "Precision Dual-frequency",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/WHcAAOSwQXVm7dIM/s-l1600.webp"],
  },
  {
    id: "prod-watch-02",
    name: "Galaxy Watch Ultra Apex",
    brand: "Samsung",
    category: "Smart Watches",
    price: 649,
    rating: 2.3,
    stock: 15,
    description:
      "Advanced biomechanical health engine analyzing metabolic markers and sleep fitness deep states.",
    specs: {
      "Case Material": "Titanium Grade 4",
      "OS Core": "Wear OS 5 Ecosystem",
      Waterproof: "10ATM Ocean Swim Proof",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/9T8AAOSwb5tml-k5/s-l960.webp",
      "https://i.ebayimg.com/images/g/u6sAAOSwEiNml-kk/s-l960.webp",
    ],
  },
  {
    id: "prod-watch-03",
    name: "Fenix 7 Pro Sapphire Solar",
    brand: "Garmin",
    category: "Smart Watches",
    price: 899,
    rating: 4.9,
    stock: 10,
    description:
      "High-end multisport tactical navigational computer charging continuously under outdoor sunlight exposures.",
    specs: {
      "Lens Tech": "Power Sapphire Solar Lens",
      "Battery Life": "Up to 22 Days Smart Mode",
      Maps: "Preloaded TopoActive Grids",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/45AAAeSwHk1qPPbC/s-l1600.webp",
      "https://i.ebayimg.com/images/g/yxwAAeSwGNVqPPbC/s-l1600.webp",
    ],
    isFeatured: true,
  },
  {
    id: "prod-watch-04",
    name: "Apple Watch Series 9",
    brand: "Apple",
    category: "Smart Watches",
    price: 399,
    rating: 4.7,
    stock: 35,
    description:
      "Introducing innovative double-tap gesture tracking handlers without touching the digital display surface.",
    specs: {
      "Chip Architecture": "S9 SiP Advanced Core",
      Brightness: "2000 nits Always-On Retina",
      Gesture: "Double Tap Processing",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/W8IAAeSwSqxoarit/s-l1600.webp",
      "https://i.ebayimg.com/images/g/xGQAAeSwUqxoarit/s-l1600.webp",
    ],
  },
  {
    id: "prod-watch-05",
    name: "Galaxy Watch 6 Classic",
    brand: "Samsung",
    category: "Smart Watches",
    price: 379,
    rating: 4.5,
    stock: 20,
    description:
      "The iconic physical rotating navigation dial bezel returns to control business notifications smoothly.",
    specs: {
      "Bezel Style": "Physical Rotating Stainless Steel",
      "Health Matrix": "BIA Body Composition Analysis",
      Screen: "Super AMOLED",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/9hsAAOSwnPFmvnaQ/s-l1600.webp",
      "https://i.ebayimg.com/images/g/t44AAOSwxLVmvnaH/s-l1600.webp",
    ],
  },
  {
    id: "prod-watch-06",
    name: "Venu 3 GPS Fitness Smartwatch",
    brand: "Garmin",
    category: "Smart Watches",
    price: 449,
    rating: 4.6,
    stock: 14,
    description:
      "Advanced coaching modules tracing energy reserves alongside integrated microphone phone call handshakes.",
    specs: {
      Display: "Vibrant AMOLED Touchscreen",
      "Battery Life": "Up to 14 Days",
      Insights: "Body Battery Energy Tracker",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/nhAAAeSwy7tntWM2/s-l960.webp"],
  },
  {
    id: "prod-watch-07",
    name: "Pixel Watch 2 Core",
    brand: "Google",
    category: "Smart Watches",
    price: 349,
    rating: 4.4,
    stock: 18,
    description:
      "Three new physiological sensors track skin stress indicators using Fitbit algorithms.",
    specs: {
      Processor: "Snapdragon W5+ Gen 1",
      Sensors: "cEDA Stress / Skin Temp",
      Integration: "Deep Fitbit Framework",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/IcwAAOSwpJtlL-vq/s-l1600.webp",
      "https://i.ebayimg.com/images/g/~rgAAOSwcE5lL-vq/s-l1600.webp",
    ],
  },
  {
    id: "prod-watch-08",
    name: "Forerunner 965 Premium Running",
    brand: "Garmin",
    category: "Smart Watches",
    price: 599,
    rating: 4.8,
    stock: 12,
    description:
      "Brilliant running computer tracking stride metrics, recovery times, and mapping directly on glass.",
    specs: {
      "Display Type": "1.4-inch AMOLED Screen",
      Bezel: "Ultra-light Titanium",
      "Battery Life": "Up to 23 Days GPS Mode",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/d~gAAeSwcNRpXHKA/s-l960.webp"],
  },

  {
    id: "prod-watch-13",
    name: "Fitbit Charge 6 Advanced Tracker",
    brand: "Google",
    category: "Smart Watches",
    price: 159,
    rating: 4.3,
    stock: 40,
    description:
      "Streamlined performance band layout integrating Google Maps turn navigation signals smoothly.",
    specs: {
      "Heart Rate": "Our Most Accurate Band Sensor",
      "App Syncs": "Google Wallet / YouTube Controls",
      Battery: "Up to 7 Days",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/1zUAAOSwan1naRL8/s-l1600.webp",
      "https://i.ebayimg.com/images/g/4qUAAOSw5AhnaRL8/s-l1600.webp",
    ],
  },

  // ==========================================
  // 🎮 GAMING CONSOLES (15 Products)
  // ==========================================
  {
    id: "prod-game-01",
    name: "PlayStation 5 Pro",
    brand: "Sony",
    category: "Gaming",
    price: 699,
    rating: 4.7,
    stock: 10,
    description:
      "Advanced ray tracing logic running AI upscaling rendering architectures.",
    specs: {
      Storage: "2TB SSD",
      "Graphics Tech": "PlayStation Spectral Super Resolution",
      "Output Framerates": "4K 120Hz Fidelity",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/qr8AAeSwcSxqHT0o/s-l1600.webp",
      "https://i.ebayimg.com/images/g/~g4AAeSw3ZJqHT0o/s-l1600.webp",
    ],
    isFeatured: true,
  },
  {
    id: "prod-game-02",
    name: "Xbox Series X 2TB Black Edition",
    brand: "Microsoft",
    category: "Gaming",
    price: 599,
    rating: 2.4,
    stock: 8,
    description:
      "The fastest, most power-dense Xbox architecture ever deployed with custom solid state drives.",
    specs: {
      Storage: "2TB Custom NVMe",
      Acoustics: "Whisper Quiet Fan",
      "Resolution Matrix": "True 4K Gaming Fields",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/eyQAAOSw5Flhy1ZL/s-l1600.webp"],
  },
  {
    id: "prod-game-03",
    name: "Nintendo Switch OLED Model",
    brand: "Nintendo",
    category: "Gaming",
    price: 349,
    rating: 4.8,
    stock: 50,
    description:
      "Stunning, high-contrast 7-inch OLED panel built right into a versatile mobile layout.",
    specs: {
      "Display Panel": "7.0-inch Vivid OLED Screen",
      "Docking Setup": "Wired LAN Interface Port",
      Storage: "64.GB Internal Base",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/qMgAAOSwmEJhHPn9/s-l960.webp"],
  },
  {
    id: "prod-game-04",
    name: "Steam Deck OLED 1TB Handheld",
    brand: "Valve",
    category: "Gaming",
    price: 649,
    rating: 4.9,
    stock: 15,
    description:
      "Portable personal computer framework built explicitly to stream high-end PC libraries on the go.",
    specs: {
      Display: "90Hz HDR OLED Panel",
      "Storage Matrix": "1TB High-speed NVMe",
      "Battery Evolution": "50% More Capacitance",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/kx0AAeSwogRofPzp/s-l1600.webp"],
    isFeatured: true,
  },
  {
    id: "prod-game-05",
    name: "ROG Ally X Windows Handheld",
    brand: "ASUS",
    category: "Gaming",
    price: 799,
    rating: 4.6,
    stock: 12,
    description:
      "Extreme Windows mobile handheld console housing massive memory expansions and advanced battery modifications.",
    specs: {
      Processor: "AMD Ryzen Z1 Extreme",
      "RAM Capacity": "24GB LPDDR5X",
      "Battery Scale": "80Wh Massive Pack",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/iyUAAeSwq4xpKNkB/s-l1600.webp"],
  },
  {
    id: "prod-game-06",
    name: "Legion Go 8.8-inch Gaming Handheld",
    brand: "Lenovo",
    category: "Gaming",
    price: 699,
    rating: 4.5,
    stock: 14,
    description:
      "Detachable controller layout pairing a massive QHD display screen with mouse-emulating sensor rails.",
    specs: {
      "Display Resolution": "8.8-inch QHD+ 144Hz Touch",
      Controllers: "Detachable True FPS Mouse Mode",
      Storage: "512GB",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/fakAAeSw-2BpzaVA/s-l1600.webp"],
  },
  {
    id: "prod-game-07",
    name: "PlayStation 5 Slim Digital Edition",
    brand: "Sony",
    category: "Gaming",
    price: 449,
    rating: 4.7,
    stock: 0,
    description:
      "Streamlined console silhouette maximizing layout spaces while maintaining identical rendering pipelines.",
    specs: {
      "Storage Space": "1TB Custom Solid State",
      "Drive Option": "Modular Disc Drive Compatible",
      "IO Slots": "Dual USB-C Forward",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/gIYAAeSwtAZqK0ZM/s-l1600.webp"],
  },
  {
    id: "prod-game-08",
    name: "Xbox Series S 1TB Carbon Black",
    brand: "Microsoft",
    category: "Gaming",
    price: 349,
    rating: 4.6,
    stock: 25,
    description:
      "All-digital performance tier inside our most compact housing architecture.",
    specs: {
      "Storage Allocation": "1TB Performance SSD",
      "Target Performance": "1440p up to 120 FPS",
      Architecture: "Xbox Velocity Framework",
    },
    imageUrls: [
      "https://i.ebayimg.com/images/g/6JcAAOSwvoZlQwQu/s-l1600.webp",
      "https://i.ebayimg.com/images/g/vOMAAOSwowBlQwQu/s-l1600.webp",
    ],
  },

  {
    id: "prod-game-10",
    name: "PlayStation VR2 Headset System",
    brand: "Sony",
    category: "Gaming",
    price: 549,
    rating: 4.5,
    stock: 10,
    description:
      "Immersive sensory tracking linking advanced headset feedback rumble nodes to smart eye tracing arrays.",
    specs: {
      Displays: "Dual 2000x2040 OLED Panels",
      "Tracking Loop": "Intelligent Foveated Eye Sensing",
      Feedback: "Headset Vibration Motor",
    },
    imageUrls: ["https://i.ebayimg.com/images/g/MbAAAOSwQPtnjubL/s-l1600.webp"],
  },
];
