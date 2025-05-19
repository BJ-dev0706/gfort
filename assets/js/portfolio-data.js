const portfolioItems = [
  {
    id: 1,
    title: "AI-driven Customer Support System",
    description: "Gfort's AI-driven Customer Support System enhances client interactions through intelligent automation.",
    category: "blockchain",
    image: "assets/img/portfolio/Blockchain/rafffle.famousfoxes.com/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 2,
    title: "Vote Registration Application",
    description: "Gfort's Vote Registration Application simplifies voter registration with user-friendly design and secure data handling.",
    category: "blockchain",
    image: "assets/img/portfolio/Blockchain/ridotto.io/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 3,
    title: "The leading DeFi hub on Radix.",
    description: "The Dex platform for Trading, Liquid staking and more with audited smart contracts.",
    category: "blockchain",
    image: "assets/img/portfolio/Blockchain/caviarnine.com/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 4,
    title: "Graduation Apparel E-commerce Platform",
    description: "A Scandinavian-focused online store for custom graduation caps and student gear, complete with personalization tools and multi-country support.",
    category: "3d",
    image: "assets/img/portfolio/3D/clseifert.com/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 5,
    title: "Real Estate Map",
    description: "An interactive real estate platform that allows users to filter listings directly on a WebGL-powered map using advanced client-side logic.",
    category: "3d",
    image: "assets/img/portfolio/3D/realestate-map.iding.ir/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 6,
    title: "Volkswagen 3D Showroom",
    description: "An interactive 3D web experience allowing users to explore Volkswagen models like the Tiguan and Taos in a realistic virtual showroom.",
    category: "3d",
    image: "assets/img/portfolio/3D/showroom3d.app/2.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 7,
    title: "Custom Sportswear Design Platform",
    description: "A full-featured e-commerce site offering a 3D jersey builder and advanced customization for team sports apparel.",
    category: "3d",
    image: "assets/img/portfolio/3D/www.owayo.com/2.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 8,
    title: "AI Story Generator",
    description: "Unlock your creativity with AI — a free, no-signup tool for generating unlimited unique stories instantly.",
    category: "ai",
    image: "assets/img/portfolio/AI/aistorygenerator.info/2.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 9,
    title: "AI Content Transformer",
    description: "Delights.ai is an AI-powered tool that transforms existing online content - such as videos or articles",
    category: "ai",
    image: "assets/img/portfolio/AI/delights.ai/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 10,
    title: "AI Communication Platform",
    description: "Delights.ai is an AI-powered tool that transforms existing online content - such as videos or articles",
    category: "ai",
    image: "assets/img/portfolio/AI/sendbird.com/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 11,
    title: "The Cutest Children's Boutique Online | Sparkle In Pink",
    description: "With our exclusive designs and high quality kids dresses, mommy & me outfits, and more, Sparkle In Pink will be your new favorite online children's boutique! Shop now!",
    category: "shopify",
    image: "assets/img/portfolio/Shopify/sparkleinpink.com/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 12,
    title: "Buy Maternity Clothes",
    description: "Explore the best maternity clothes online at Momz Joy. Discover stylish pregnancy dresses, comfortable maternity wear, and trendy outfits for moms-to-be. Shop now!",
    category: "shopify",
    image: "assets/img/portfolio/Shopify/momzjoy.com/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 13,
    title: "Shopify App Store 2",
    description: "Grow AOV and conversion with customizations and upsells in cart, checkout, and post-purchase.",
    category: "shopify",
    image: "assets/img/portfolio/Shopify/upsellpluscheckout.com/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 14,
    title: "Shopify App Store 1",
    description: "Optimize subscription upsells, enhance checkout experiences, and increase your recurring revenue with custom icons, text and user reviews.",
    category: "shopify",
    image: "assets/img/portfolio/Shopify/checkout-switcher.com/1.png",
    detailsLink: "portfolio-details.html"
  },
  {
    id: 15,
    title: "Object, face & Sound Detector",
    description: "Object detection will detect all the objects like Chair, Table, person etc. Allow you to record video while detecting object for future use.",
    category: "mobile",
    image: "assets/img/portfolio/Mobile/objectdetector/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://play.google.com/store/apps/details?id=com.expressway.objectdetector.lc"
  },
  {
    id: 16,
    title: "ZIPS Car Wash",
    description: "Rewards, Savings & Shine. Now Available in the ZIPS Car Wash Mobile App.",
    category: "mobile",
    image: "assets/img/portfolio/Mobile/ZIPS/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://play.google.com/store/apps/details?id=com.amp.zipscarwash"
  },
  {
    id: 17,
    title: "Fresh Eats",
    description: "Order from all of your favourite local restaurants or takeaways delivered to your door.",
    category: "mobile",
    image: "assets/img/portfolio/Mobile/FreshEats/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://play.google.com/store/apps/details?id=com.fresh.eats.buyer"
  },
  {
    id: 18,
    title: "Dog Dash",
    description: "Use your strength to boost even further. \n Collect cool accessories and items for your dogs.",
    category: "mobile",
    image: "assets/img/portfolio/Mobile/DogDash/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://play.google.com/store/apps/details?id=com.zepni.superdoggo&hl=en"
  },
  {
    id: 19,
    title: "Glenveagh Homes",
    description: "We build quality new homes, our developments lead the way in building new neighbourhoods and communities all around Ireland. Find your new home.",
    category: "web",
    image: "assets/img/portfolio/Web/glenveagh.ie/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://glenveagh.ie/"
  },
  {
    id: 20,
    title: "Oveit: Smart Ticketing & Cashless Payment Solutions",
    description: "Discover Oveit's innovative platform for ticketing, registration, and cashless payments. Elevate your events with seamless, secure, and user-friendly solutions.",
    category: "web",
    image: "assets/img/portfolio/Web/oveit.com/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://oveit.com/"
  },
  {
    id: 21,
    title: "Access All Framer Templates with One Purchase | Pentaclay",
    description: "Get unlimited access to all premium and free Framer templates at Pentaclay. Get customizable, SEO-optimized, and mobile-responsive designs.",
    category: "web",
    image: "assets/img/portfolio/Web/pentaclay.com/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://pentaclay.com/"
  },
  {
    id: 22,
    title: "Sphynx Marketplace",
    description: "Sphynx Labs Multichain NFT Marketplace. Sell/List/Buy NFTs across multiple chains from one place.",
    category: "web",
    image: "assets/img/portfolio/Web/sphynxmarketplace.co/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://sphynxmarketplace.co/"
  },
  {
    id: 23,
    title: "Will Be",
    description: "Will Be is your source for rental properties and condominiums in Meguro, Setagaya, and Shibuya.",
    category: "web",
    image: "assets/img/portfolio/Web/will-be.co.jp/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://will-be.co.jp/"
  },
  {
    id: 24,
    title: "RustyLoot",
    description: "RustyLoot is a betting game on the Radix blockchain.",
    category: "uiux",
    image: "assets/img/portfolio/UIUX/Rustyloot/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://rustyloot.com/"
  },
  {
    id: 25,
    title: "Online Casino",
    description: "Online Casino is a betting game on the Radix blockchain.",
    category: "uiux",
    image: "assets/img/portfolio/UIUX/Casino/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://onlinecasino.com/"
  },
  {
    id: 26,
    title: "KOLs/Influencer Marketplace ",
    description: "Find the perfect influencer / KOLs for your campaign",
    category: "uiux",
    image: "assets/img/portfolio/UIUX/KOLs/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://onlinecasino.com/"
  },
  {
    id: 26,
    title: "BrainNet. GL JS",
    description: "BrainNet. GL JS is a Networking library for vector networking on  the Web",
    category: "uiux",
    image: "assets/img/portfolio/UIUX/Brainnet/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://onlinecasino.com/"
  },
  {
    id: 26,
    title: "ShibArt - Generate To Earn",
    description: "We are revolutionizing the world of digital art with the power of stable diffusion & blockchain ",
    category: "uiux",
    image: "assets/img/portfolio/UIUX/ShitArt/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://onlinecasino.com/"
  },
  {
    id: 26,
    title: "Family Schedule App",
    description: "Family Schedule App is a scheduling app for families to manage their schedules",
    category: "uiux",
    image: "assets/img/portfolio/UIUX/FamilySchedule/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://onlinecasino.com/"
  },
  {
    id: 27,
    title: "Banking App",
    description: "Banking App is a banking app for families to manage their schedules",
    category: "uiux",
    image: "assets/img/portfolio/UIUX/Banking/1.png",
    detailsLink: "portfolio-details.html",
    Link: "https://onlinecasino.com/"
  },
  {
    id: 28,
    title: "Marvel App",
    description: "Marvel App is a Marvel app for families to manage their schedules",
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