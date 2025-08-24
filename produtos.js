const produtos = [
  {
    productId: "1005004567890123",
    title: "Wireless Bluetooth Headphones 5.0 Noise Cancelling Over Ear Headset with Microphone",
    price: {
      current: 29.99,
      original: 59.99,
      currency: "USD",
      discount: 50
    },
    images: [
      "/placeholder.svg?height=400&width=400&text=Bluetooth+Headphones",
      "/placeholder.svg?height=400&width=400&text=Headphones+Side",
      "/placeholder.svg?height=400&width=400&text=Headphones+Case",
      "/placeholder.svg?height=400&width=400&text=Headphones+Details"
    ],
    mainImage: "/placeholder.svg?height=400&width=400&text=Bluetooth+Headphones",
    rating: {
      average: 4.7,
      count: 15420,
      stars: { 5: 9852, 4: 3421, 3: 1547, 2: 421, 1: 179 }
    },
    seller: {
      id: "seller_12345",
      name: "TechWorld Official Store",
      rating: 98.5,
      followers: 125000,
      yearsOnPlatform: 5,
      topBrand: true,
      location: "Guangdong, China"
    },
    shipping: {
      free: true,
      methods: [
        { name: "Standard Shipping", price: 0, estimatedDays: "15-25", tracked: true },
        { name: "Premium Shipping", price: 4.99, estimatedDays: "7-15", tracked: true }
      ]
    },
    variants: [
      {
        id: "var_001",
        name: "Color",
        options: [
          { value: "Black", stock: 500, priceAdjustment: 0 },
          { value: "White", stock: 300, priceAdjustment: 2.00 },
          { value: "Red", stock: 150, priceAdjustment: 1.50 }
        ]
      }
    ],
    specifications: {
      brand: "TechWorld",
      connectivity: "Bluetooth 5.0",
      batteryLife: "30 hours",
      weight: "250g"
    },
    category: "Electronics > Audio",
    stock: 950,
    sold: 8547,
    tags: ["bluetooth", "wireless", "noise-cancelling", "headphones"]
  },

  {
    productId: "1005004567890124",
    title: "Smart Watch Fitness Tracker Heart Rate Monitor Waterproof Sports Watch",
    price: {
      current: 45.99,
      original: 89.99,
      currency: "USD",
      discount: 49
    },
    images: [
      "/placeholder.svg?height=400&width=400&text=Smart+Watch",
      "/placeholder.svg?height=400&width=400&text=Watch+Display",
      "/placeholder.svg?height=400&width=400&text=Watch+Sports",
      "/placeholder.svg?height=400&width=400&text=Watch+Charging"
    ],
    mainImage: "/placeholder.svg?height=400&width=400&text=Smart+Watch",
    rating: {
      average: 4.5,
      count: 8932,
      stars: { 5: 5421, 4: 2341, 3: 892, 2: 201, 1: 77 }
    },
    seller: {
      id: "seller_67890",
      name: "SmartTech Global",
      rating: 96.8,
      followers: 89000,
      yearsOnPlatform: 3,
      topBrand: false,
      location: "Shenzhen, China"
    },
    shipping: {
      free: true,
      methods: [
        { name: "Standard Shipping", price: 0, estimatedDays: "12-20", tracked: true }
      ]
    },
    variants: [
      {
        id: "var_002",
        name: "Color",
        options: [
          { value: "Black", stock: 800, priceAdjustment: 0 },
          { value: "Pink", stock: 450, priceAdjustment: 0 },
          { value: "Blue", stock: 320, priceAdjustment: 0 }
        ]
      }
    ],
    specifications: {
      brand: "SmartTech",
      display: "1.4 inch TFT",
      batteryLife: "7-10 days",
      waterproof: "IP68"
    },
    category: "Electronics > Wearables",
    stock: 1570,
    sold: 12847,
    tags: ["smartwatch", "fitness", "heart-rate", "waterproof"]
  },

  {
    productId: "1005004567890125",
    title: "Wireless Charging Pad 15W Fast Qi Charger Universal Phone Charger",
    price: {
      current: 12.99,
      original: 25.99,
      currency: "USD",
      discount: 50
    },
    images: [
      "/placeholder.svg?height=400&width=400&text=Wireless+Charger",
      "/placeholder.svg?height=400&width=400&text=Charger+Phone",
      "/placeholder.svg?height=400&width=400&text=Charger+LED"
    ],
    mainImage: "/placeholder.svg?height=400&width=400&text=Wireless+Charger",
    rating: {
      average: 4.3,
      count: 5647,
      stars: { 5: 3201, 4: 1542, 3: 654, 2: 189, 1: 61 }
    },
    seller: {
      id: "seller_11111",
      name: "PowerTech Store",
      rating: 97.2,
      followers: 67000,
      yearsOnPlatform: 4,
      topBrand: true,
      location: "Guangzhou, China"
    },
    shipping: {
      free: true,
      methods: [
        { name: "Standard Shipping", price: 0, estimatedDays: "10-18", tracked: true }
      ]
    },
    variants: [
      {
        id: "var_004",
        name: "Color",
        options: [
          { value: "Black", stock: 1200, priceAdjustment: 0 },
          { value: "White", stock: 890, priceAdjustment: 0 }
        ]
      }
    ],
    specifications: {
      brand: "PowerTech",
      power: "15W Max",
      compatibility: "Qi-enabled devices",
      material: "ABS + PC"
    },
    category: "Electronics > Chargers",
    stock: 2090,
    sold: 18934,
    tags: ["wireless-charger", "qi-charger", "fast-charging"]
  },

  {
    productId: "1005004567890126",
    title: "Gaming Mechanical Keyboard RGB Backlit 87 Keys Blue Switch",
    price: {
      current: 39.99,
      original: 79.99,
      currency: "USD",
      discount: 50
    },
    images: [
      "/placeholder.svg?height=400&width=400&text=Gaming+Keyboard",
      "/placeholder.svg?height=400&width=400&text=Keyboard+RGB",
      "/placeholder.svg?height=400&width=400&text=Keyboard+Keys",
      "/placeholder.svg?height=400&width=400&text=Keyboard+Side"
    ],
    mainImage: "/placeholder.svg?height=400&width=400&text=Gaming+Keyboard",
    rating: {
      average: 4.6,
      count: 7234,
      stars: { 5: 4521, 4: 1892, 3: 621, 2: 134, 1: 66 }
    },
    seller: {
      id: "seller_22222",
      name: "GameZone Pro",
      rating: 95.7,
      followers: 45000,
      yearsOnPlatform: 2,
      topBrand: false,
      location: "Dongguan, China"
    },
    shipping: {
      free: true,
      methods: [
        { name: "Standard Shipping", price: 0, estimatedDays: "12-22", tracked: true },
        { name: "Fast Shipping", price: 8.99, estimatedDays: "6-12", tracked: true }
      ]
    },
    variants: [
      {
        id: "var_005",
        name: "Switch Type",
        options: [
          { value: "Blue Switch", stock: 400, priceAdjustment: 0 },
          { value: "Red Switch", stock: 350, priceAdjustment: 5.00 },
          { value: "Brown Switch", stock: 200, priceAdjustment: 3.00 }
        ]
      }
    ],
    specifications: {
      brand: "GameZone",
      layout: "87 Keys (TKL)",
      backlight: "RGB",
      connection: "USB-C"
    },
    category: "Electronics > Gaming",
    stock: 950,
    sold: 5432,
    tags: ["gaming", "mechanical", "keyboard", "rgb", "backlit"]
  },

  {
    productId: "1005004567890127",
    title: "Portable Bluetooth Speaker Waterproof Wireless Bass Stereo Sound",
    price: {
      current: 24.99,
      original: 49.99,
      currency: "USD",
      discount: 50
    },
    images: [
      "/placeholder.svg?height=400&width=400&text=Bluetooth+Speaker",
      "/placeholder.svg?height=400&width=400&text=Speaker+Water",
      "/placeholder.svg?height=400&width=400&text=Speaker+Size",
      "/placeholder.svg?height=400&width=400&text=Speaker+Controls"
    ],
    mainImage: "/placeholder.svg?height=400&width=400&text=Bluetooth+Speaker",
    rating: {
      average: 4.4,
      count: 9876,
      stars: { 5: 5432, 4: 2987, 3: 1123, 2: 234, 1: 100 }
    },
    seller: {
      id: "seller_33333",
      name: "AudioMax Store",
      rating: 96.3,
      followers: 78000,
      yearsOnPlatform: 3,
      topBrand: true,
      location: "Shenzhen, China"
    },
    shipping: {
      free: true,
      methods: [
        { name: "Standard Shipping", price: 0, estimatedDays: "14-24", tracked: true }
      ]
    },
    variants: [
      {
        id: "var_006",
        name: "Color",
        options: [
          { value: "Black", stock: 600, priceAdjustment: 0 },
          { value: "Blue", stock: 400, priceAdjustment: 0 },
          { value: "Red", stock: 250, priceAdjustment: 2.00 }
        ]
      }
    ],
    specifications: {
      brand: "AudioMax",
      power: "20W",
      batteryLife: "12 hours",
      waterproof: "IPX7"
    },
    category: "Electronics > Audio",
    stock: 1250,
    sold: 11234,
    tags: ["bluetooth", "speaker", "waterproof", "portable", "bass"]
  },

  {
    productId: "1005004567890128",
    title: "USB-C Hub 7-in-1 Multiport Adapter HDMI 4K USB 3.0 SD Card Reader",
    price: {
      current: 19.99,
      original: 39.99,
      currency: "USD",
      discount: 50
    },
    images: [
      "/placeholder.svg?height=400&width=400&text=USB+Hub",
      "/placeholder.svg?height=400&width=400&text=Hub+Ports",
      "/placeholder.svg?height=400&width=400&text=Hub+Laptop",
      "/placeholder.svg?height=400&width=400&text=Hub+Cables"
    ],
    mainImage: "/placeholder.svg?height=400&width=400&text=USB+Hub",
    rating: {
      average: 4.2,
      count: 4567,
      stars: { 5: 2345, 4: 1456, 3: 567, 2: 134, 1: 65 }
    },
    seller: {
      id: "seller_44444",
      name: "ConnectTech Hub",
      rating: 94.8,
      followers: 34000,
      yearsOnPlatform: 2,
      topBrand: false,
      location: "Guangzhou, China"
    },
    shipping: {
      free: true,
      methods: [
        { name: "Standard Shipping", price: 0, estimatedDays: "11-19", tracked: true }
      ]
    },
    variants: [
      {
        id: "var_007",
        name: "Color",
        options: [
          { value: "Space Gray", stock: 800, priceAdjustment: 0 },
          { value: "Silver", stock: 600, priceAdjustment: 0 }
        ]
      }
    ],
    specifications: {
      brand: "ConnectTech",
      ports: "7-in-1",
      hdmi: "4K@30Hz",
      usb: "USB 3.0 x2"
    },
    category: "Electronics > Accessories",
    stock: 1400,
    sold: 6789,
    tags: ["usb-hub", "usb-c", "hdmi", "adapter", "multiport"]
  },

  {
    productId: "1005004567890129",
    title: "Phone Camera Lens Kit 3-in-1 Wide Angle Macro Fisheye Lens",
    price: {
      current: 15.99,
      original: 29.99,
      currency: "USD",
      discount: 47
    },
    images: [
      "/placeholder.svg?height=400&width=400&text=Camera+Lens+Kit",
      "/placeholder.svg?height=400&width=400&text=Lens+Macro",
      "/placeholder.svg?height=400&width=400&text=Lens+Wide",
      "/placeholder.svg?height=400&width=400&text=Lens+Phone"
    ],
    mainImage: "/placeholder.svg?height=400&width=400&text=Camera+Lens+Kit",
    rating: {
      average: 4.1,
      count: 3456,
      stars: { 5: 1789, 4: 1023, 3: 456, 2: 134, 1: 54 }
    },
    seller: {
      id: "seller_55555",
      name: "PhotoPro Gear",
      rating: 93.5,
      followers: 23000,
      yearsOnPlatform: 1,
      topBrand: false,
      location: "Shenzhen, China"
    },
    shipping: {
      free: true,
      methods: [
        { name: "Standard Shipping", price: 0, estimatedDays: "13-21", tracked: true }
      ]
    },
    variants: [
      {
        id: "var_008",
        name: "Kit Type",
        options: [
          { value: "3-in-1 Basic", stock: 500, priceAdjustment: 0 },
          { value: "5-in-1 Pro", stock: 300, priceAdjustment: 10.00 }
        ]
      }
    ],
    specifications: {
      brand: "PhotoPro",
      lenses: "Wide, Macro, Fisheye",
      compatibility: "Universal",
      material: "Aluminum Alloy"
    },
    category: "Electronics > Photography",
    stock: 800,
    sold: 4321,
    tags: ["camera", "lens", "phone", "photography", "macro"]
  },

  {
    productId: "1005004567890130",
    title: "LED Desk Lamp with Wireless Charging Pad Touch Control Dimmable",
    price: {
      current: 34.99,
      original: 69.99,
      currency: "USD",
      discount: 50
    },
    images: [
      "/placeholder.svg?height=400&width=400&text=LED+Desk+Lamp",
      "/placeholder.svg?height=400&width=400&text=Lamp+Charging",
      "/placeholder.svg?height=400&width=400&text=Lamp+Touch",
      "/placeholder.svg?height=400&width=400&text=Lamp+Desk"
    ],
    mainImage: "/placeholder.svg?height=400&width=400&text=LED+Desk+Lamp",
    rating: {
      average: 4.5,
      count: 6789,
      stars: { 5: 4123, 4: 1789, 3: 654, 2: 156, 1: 67 }
    },
    seller: {
      id: "seller_66666",
      name: "LightTech Home",
      rating: 97.1,
      followers: 56000,
      yearsOnPlatform: 4,
      topBrand: true,
      location: "Guangdong, China"
    },
    shipping: {
      free: true,
      methods: [
        { name: "Standard Shipping", price: 0, estimatedDays: "12-20", tracked: true }
      ]
    },
    variants: [
      {
        id: "var_009",
        name: "Color",
        options: [
          { value: "White", stock: 700, priceAdjustment: 0 },
          { value: "Black", stock: 500, priceAdjustment: 0 }
        ]
      }
    ],
    specifications: {
      brand: "LightTech",
      power: "12W LED",
      charging: "10W Wireless",
      control: "Touch Sensitive"
    },
    category: "Home & Garden > Lighting",
    stock: 1200,
    sold: 8765,
    tags: ["led", "desk-lamp", "wireless-charging", "dimmable", "touch"]
  },

  {
    productId: "1005004567890131",
    title: "Car Phone Mount Magnetic Dashboard Windshield Phone Holder",
    price: {
      current: 8.99,
      original: 19.99,
      currency: "USD",
      discount: 55
    },
    images: [
      "/placeholder.svg?height=400&width=400&text=Car+Phone+Mount",
      "/placeholder.svg?height=400&width=400&text=Mount+Dashboard",
      "/placeholder.svg?height=400&width=400&text=Mount+Phone",
      "/placeholder.svg?height=400&width=400&text=Mount+Magnetic"
    ],
    mainImage: "/placeholder.svg?height=400&width=400&text=Car+Phone+Mount",
    rating: {
      average: 4.3,
      count: 12345,
      stars: { 5: 7890, 4: 2987, 3: 1123, 2: 234, 1: 111 }
    },
    seller: {
      id: "seller_77777",
      name: "AutoTech Accessories",
      rating: 95.2,
      followers: 89000,
      yearsOnPlatform: 3,
      topBrand: false,
      location: "Dongguan, China"
    },
    shipping: {
      free: true,
      methods: [
        { name: "Standard Shipping", price: 0, estimatedDays: "9-17", tracked: true }
      ]
    },
    variants: [
      {
        id: "var_010",
        name: "Mount Type",
        options: [
          { value: "Dashboard", stock: 1000, priceAdjustment: 0 },
          { value: "Windshield", stock: 800, priceAdjustment: 2.00 },
          { value: "Air Vent", stock: 600, priceAdjustment: -1.00 }
        ]
      }
    ],
    specifications: {
      brand: "AutoTech",
      type: "Magnetic",
      compatibility: "Universal",
      rotation: "360°"
    },
    category: "Automotive > Accessories",
    stock: 2400,
    sold: 15678,
    tags: ["car", "phone-mount", "magnetic", "dashboard", "holder"]
  },

  {
    productId: "1005004567890132",
    title: "Resistance Bands Set 11pcs Workout Exercise Bands with Handles",
    price: {
      current: 16.99,
      original: 34.99,
      currency: "USD",
      discount: 51
    },
    images: [
      "/placeholder.svg?height=400&width=400&text=Resistance+Bands",
      "/placeholder.svg?height=400&width=400&text=Bands+Exercise",
      "/placeholder.svg?height=400&width=400&text=Bands+Set",
      "/placeholder.svg?height=400&width=400&text=Bands+Workout"
    ],
    mainImage: "/placeholder.svg?height=400&width=400&text=Resistance+Bands",
    rating: {
      average: 4.4,
      count: 8901,
      stars: { 5: 5234, 4: 2456, 3: 891, 2: 234, 1: 86 }
    },
    seller: {
      id: "seller_88888",
      name: "FitnessPro Equipment",
      rating: 96.7,
      followers: 67000,
      yearsOnPlatform: 2,
      topBrand: true,
      location: "Yiwu, China"
    },
    shipping: {
      free: true,
      methods: [
        { name: "Standard Shipping", price: 0, estimatedDays: "11-19", tracked: true }
      ]
    },
    variants: [
      {
        id: "var_011",
        name: "Resistance Level",
        options: [
          { value: "Light (10-35 lbs)", stock: 400, priceAdjustment: 0 },
          { value: "Medium (20-50 lbs)", stock: 600, priceAdjustment: 3.00 },
          { value: "Heavy (30-65 lbs)", stock: 300, priceAdjustment: 5.00 }
        ]
      }
    ],
    specifications: {
      brand: "FitnessPro",
      pieces: "11pcs Set",
      material: "Natural Latex",
      maxResistance: "150 lbs"
    },
    category: "Sports & Entertainment > Fitness",
    stock: 1300,
    sold: 9876,
    tags: ["resistance-bands", "workout", "exercise", "fitness", "home-gym"]
  }
];

export default produtos;