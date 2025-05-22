const portfolioItems = [
  {
    id: 1,
    title: "Enterprise AI Customer Support Solution",
    description: "Innovative solution leveraging artificial intelligence to automate customer interactions while maintaining personalized service quality.",
    category: "blockchain",
    image: "assets/img/portfolio/Blockchain/rafffle.famousfoxes.com/1.png",
    detailsLink: "portfolio-details.html",
    client: "TechCorp Solutions",
    date: "15 March, 2024"
  },
  {
    id: 2,
    title: "Secure Digital Voter Registration Platform",
    description: "Streamlined voter registration platform featuring intuitive interface design and robust security protocols for protecting sensitive user information.",
    category: "blockchain",
    image: "assets/img/portfolio/Blockchain/ridotto.io/1.png",
    detailsLink: "portfolio-details.html",
    client: "ElectroVote Systems",
    date: "28 April, 2024"
  },
  {
    id: 3,
    title: "Premier Decentralized Finance Hub on Radix",
    description: "Comprehensive decentralized finance platform offering trading, liquid staking and additional services through secure, professionally audited smart contracts.",
    category: "blockchain",
    image: "assets/img/portfolio/Blockchain/caviarnine.com/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 4,
    title: "Nordic Graduation Apparel E-commerce Solution",
    description: "Specialized online marketplace for Nordic graduation attire featuring custom cap design tools and localized experiences for multiple Scandinavian countries.",
    category: "3d",
    image: "assets/img/portfolio/3D/clseifert.com/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 5,
    title: "Interactive WebGL Property Mapping Platform",
    description: "Dynamic property listing platform featuring WebGL-powered interactive mapping with sophisticated filtering capabilities processed entirely on the client side.",
    category: "3d",
    image: "assets/img/portfolio/3D/realestate-map.iding.ir/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 6,
    title: "Immersive Volkswagen 3D Virtual Showroom",
    description: "Immersive virtual automotive experience enabling customers to explore Volkswagen vehicle models with realistic 3D rendering and interactive feature exploration.",
    category: "3d",
    image: "assets/img/portfolio/3D/showroom3d.app/2.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 7,
    title: "Interactive Team Sportswear Customization Platform",
    description: "Comprehensive athletic apparel e-commerce solution featuring interactive 3D jersey customization tools and specialized team uniform configuration options.",
    category: "3d",
    image: "assets/img/portfolio/3D/www.owayo.com/2.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 8,
    title: "Accessible Creative AI Narrative Generator",
    description: "Accessible creative writing tool leveraging artificial intelligence to produce unique narratives instantly without registration requirements or usage limitations.",
    category: "ai",
    image: "assets/img/portfolio/AI/aistorygenerator.info/2.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 9,
    title: "Multi-format AI Content Transformation System",
    description: "Intelligent media conversion platform that automatically repurposes existing digital content including videos and articles into alternative formats and summaries.",
    category: "ai",
    image: "assets/img/portfolio/AI/delights.ai/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 10,
    title: "Intelligent Conversational AI Messaging Platform",
    description: "Advanced messaging infrastructure utilizing artificial intelligence to enhance digital conversations through smart content suggestions and automated responses.",
    category: "ai",
    image: "assets/img/portfolio/AI/sendbird.com/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 11,
    title: "Premium Children's Fashion Boutique Marketplace",
    description: "Premium children's fashion retailer offering exclusive clothing designs, coordinated family outfits, and high-quality apparel that makes Sparkle In Pink the ultimate kids' boutique.",
    category: "shopify",
    image: "assets/img/portfolio/Shopify/sparkleinpink.com/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 12,
    title: "Specialized Maternity Fashion E-commerce Platform",
    description: "Specialized maternity fashion destination featuring comfortable pregnancy wear, trendy maternal outfits, and stylish solutions for expectant mothers at every stage.",
    category: "shopify",
    image: "assets/img/portfolio/Shopify/momzjoy.com/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 13,
    title: "Advanced E-commerce Conversion Optimization Tool",
    description: "Revenue optimization solution for e-commerce stores focusing on cart modifications, checkout enhancements, and post-purchase upselling to maximize average order value.",
    category: "shopify",
    image: "assets/img/portfolio/Shopify/upsellpluscheckout.com/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 14,
    title: "Subscription Revenue Enhancement Application",
    description: "Subscription revenue enhancement tool offering customizable checkout experiences with visual elements, persuasive copy, and social proof to increase recurring purchases.",
    category: "shopify",
    image: "assets/img/portfolio/Shopify/checkout-switcher.com/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 15,
    title: "Multi-purpose Object & Sound Recognition System",
    description: "Versatile recognition application capable of identifying common objects, human faces, and audio patterns with integrated video recording functionality for detection review.",
    category: "mobile",
    image: "assets/img/portfolio/Mobile/objectdetector/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://play.google.com/store/apps/details?id=com.expressway.objectdetector.lc"
  },
  {
    id: 16,
    title: "Comprehensive Car Wash Loyalty Mobile Platform",
    description: "Comprehensive vehicle cleaning service mobile application providing loyalty rewards, promotional discounts, and service management through an intuitive user interface.",
    category: "mobile",
    image: "assets/img/portfolio/Mobile/ZIPS/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://play.google.com/store/apps/details?id=com.amp.zipscarwash"
  },
  {
    id: 17,
    title: "Local Restaurant Food Delivery Application",
    description: "Local food delivery platform connecting users with nearby restaurants and takeaway establishments for convenient ordering with doorstep delivery service.",
    category: "mobile",
    image: "assets/img/portfolio/Mobile/FreshEats/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://play.google.com/store/apps/details?id=com.fresh.eats.buyer"
  },
  {
    id: 18,
    title: "Interactive Canine-themed Mobile Gaming Application",
    description: "Engaging canine-themed mobile game featuring strength-based boost mechanics and collectible accessories to customize and enhance your virtual dog companions.",
    category: "mobile",
    image: "assets/img/portfolio/Mobile/DogDash/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://play.google.com/store/apps/details?id=com.zepni.superdoggo&hl=en"
  },
  {
    id: 19,
    title: "Nationwide Residential Property Development Portal",
    description: "Premier Irish property developer creating quality residential projects that establish vibrant new communities throughout Ireland with a focus on neighborhood development.",
    category: "web",
    image: "assets/img/portfolio/Web/glenveagh.ie/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://glenveagh.ie/"
  },
  {
    id: 20,
    title: "Integrated Event Management & Payment Platform",
    description: "Comprehensive event management platform offering integrated ticketing, registration services, and secure cashless payment processing through an intuitive, user-friendly interface.",
    category: "web",
    image: "assets/img/portfolio/Web/oveit.com/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://oveit.com/"
  },
  {
    id: 21,
    title: "Comprehensive Framer Template Subscription Service",
    description: "Subscription-based template service providing unlimited access to premium and free Framer designs optimized for search engines and responsive across all device types.",
    category: "web",
    image: "assets/img/portfolio/Web/pentaclay.com/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://pentaclay.com/"
  },
  {
    id: 22,
    title: "Cross-chain NFT Trading & Collection Platform",
    description: "Cross-chain NFT trading platform by Sphynx Labs enabling users to buy, sell, and list digital collectibles across multiple blockchain networks from a single interface.",
    category: "web",
    image: "assets/img/portfolio/Web/sphynxmarketplace.co/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://sphynxmarketplace.co/"
  },
  {
    id: 23,
    title: "Premium Tokyo Real Estate Connection Service",
    description: "Specialized Japanese real estate platform focused on connecting clients with rental properties and condominium opportunities in Tokyo's premium Meguro, Setagaya, and Shibuya districts.",
    category: "web",
    image: "assets/img/portfolio/Web/will-be.co.jp/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://will-be.co.jp/"
  },
  {
    id: 24,
    title: "Transparent Blockchain Gaming Experience",
    description: "Blockchain-powered gambling application built on the Radix distributed ledger offering transparent betting mechanics and provably fair gaming experiences.",
    category: "uiux",
    image: "assets/img/portfolio/UIUX/Rustyloot/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://rustyloot.com/"
  },
  {
    id: 25,
    title: "Decentralized Casino Gaming Platform",
    description: "Digital gambling platform utilizing Radix blockchain technology to provide verifiable fairness in traditional casino games with transparent outcome verification.",
    category: "uiux",
    image: "assets/img/portfolio/UIUX/Casino/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://onlinecasino.com/"
  },
  {
    id: 26,
    title: "Strategic Influencer Marketing Connection Hub",
    description: "Specialized platform connecting brands with key opinion leaders and social media influencers to facilitate targeted marketing campaigns and promotional partnerships.",
    category: "uiux",
    image: "assets/img/portfolio/UIUX/KOLs/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://onlinecasino.com/"
  },
  {
    id: 26,
    title: "Advanced Vector Network Visualization Library",
    description: "Advanced JavaScript library designed for creating and visualizing vector network graphics and relationships within web-based applications and interactive data visualizations.",
    category: "uiux",
    image: "assets/img/portfolio/UIUX/Brainnet/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://onlinecasino.com/"
  },
  {
    id: 26,
    title: "Blockchain-powered Digital Art Creation Platform",
    description: "Innovative digital art platform combining stable diffusion AI technology with blockchain infrastructure to enable creators to monetize their generated artwork.",
    category: "uiux",
    image: "assets/img/portfolio/UIUX/ShitArt/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://onlinecasino.com/"
  },
  {
    id: 26,
    title: "Comprehensive Household Calendar Management Solution",
    description: "Household organization solution designed to help families coordinate activities, manage shared calendars, and streamline communication about daily routines and events.",
    category: "uiux",
    image: "assets/img/portfolio/UIUX/FamilySchedule/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://onlinecasino.com/"
  },
  {
    id: 27,
    title: "Secure Personal Financial Management Application",
    description: "Personal finance management application providing secure account access, transaction tracking, and financial planning tools through an intuitive mobile interface.",
    category: "uiux",
    image: "assets/img/portfolio/UIUX/Banking/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://onlinecasino.com/"
  },
  {
    id: 28,
    title: "Interactive Marvel Entertainment Collection Platform",
    description: "Fan-focused application celebrating Marvel entertainment properties with content organization features and interactive elements for superhero enthusiasts and collectors.",
    category: "uiux",
    image: "assets/img/portfolio/UIUX/Marvel/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://onlinecasino.com/"
  },
];

const categories = [
  {id: "all", name: "All"},
  {id: "blockchain", name: "BlockChain", filter: ".filter-blockchain"},
  {id: "web", name: "Web", filter: ".filter-web"},
  {id: "shopify", name: "Shopify", filter: ".filter-shopify"},
  {id: "mobile", name: "Mobile Apps", filter: ".filter-mobile"},
  {id: "3d", name: "3D Web", filter: ".filter-3d"},
  {id: "ai", name: "AI", filter: ".filter-ai"},
  {id: "uiux", name: "UI/UX", filter: ".filter-uiux"}
]; 