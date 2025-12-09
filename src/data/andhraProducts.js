const andhraProducts = [
  // 🌾 Traditional Foods
  {
    id: 3,
    name: "Gongura Pickle",
    category: "Traditional Foods",
    price: 199,
    image: "/images/gongura_pickle.jpg",
    description:
      "Tangy and spicy gongura pickle made from fresh sorrel leaves, a true Andhra favorite."
  },

  // 🧂 Spices & Condiments
  {
    id: 2,
    name: "Guntur Red Chilli Powder",
    category: "Spices & Condiments",
    price: 149,
    image: "/images/guntur_chilli.jpg",
    description:
      "Premium Guntur red chilli powder known for its rich color and fiery flavor."
  },
  {
    id: 13,
    name: "Tamarind Paste",
    category: "Spices & Condiments",
    price: 89,
    image: "/images/tamarind_paste.jpg",
    description:
      "Natural tamarind pulp ideal for Andhra-style puli pulusu and sambar."
  },
  {
    id: 14,
    name: "Curry Leaf Powder",
    category: "Spices & Condiments",
    price: 129,
    image: "/images/curry_leaf_powder.jpg",
    description:
      "Fragrant dry powder made from roasted curry leaves and spices."
  },
  {
    id: 35,
    name: "Ginger Garlic Paste",
    category: "Spices & Condiments",
    price: 129,
    image: "/images/ginger_garlic_paste.jpg",
    description:
      "Freshly ground ginger and garlic paste, perfect for Andhra curries and biryani."
  },

  // 🍬 Sweets
  {
    id: 6,
    name: "Pootharekulu",
    category: "Sweets",
    price: 299,
    image: "/images/pootharekulu.jpg",
    description:
      "Paper-thin handmade sweet layered with ghee, sugar, and jaggery — specialty of Atreyapuram."
  },
  {
    id: 7,
    name: "Kakinada Kaja",
    category: "Sweets",
    price: 249,
    image: "/images/kakinada_kaja.jpg",
    description:
      "Crispy, syrup-soaked layered sweet from coastal Kakinada."
  },
  {
    id: 8,
    name: "Bandar Laddu",
    category: "Sweets",
    price: 199,
    image: "/images/bandar_laddu.jpg",
    description:
      "Soft, round laddus made from gram flour, ghee, and sugar — famous in Machilipatnam."
  },
  {
    id: 32,
    name: "Ariselu",
    category: "Sweets",
    price: 179,
    image: "/images/ariselu.jpg",
    description:
      "Traditional deep-fried sweet made from rice flour and jaggery, popular during festivals."
  },
  {
    id: 33,
    name: "Bobbatlu",
    category: "Sweets",
    price: 149,
    image: "/images/bobbatlu.jpg",
    description:
      "Sweet flatbread stuffed with lentil and jaggery mixture, served with ghee."
  },

  // 🍛 Snacks
  {
    id: 11,
    name: "Murukulu (Chakli)",
    category: "Snacks",
    price: 179,
    image: "/images/murukulu.jpg",
    description:
      "Crunchy traditional rice flour snack seasoned with chili and sesame."
  },
  {
    id: 12,
    name: "Karampusa",
    category: "Snacks",
    price: 159,
    image: "/images/karampusa.jpg",
    description:
      "Crispy spicy fried snack made from besan and rice flour — a tea-time favorite."
  },

  // 🧵 Textiles
  {
    id: 15,
    name: "Mangalagiri Cotton Saree",
    category: "Textiles",
    price: 1299,
    image: "/images/mangalagiri_saree.jpg",
    description:
      "Elegant handloom cotton saree with characteristic temple borders."
  },
  {
    id: 16,
    name: "Uppada Silk Saree",
    category: "Textiles",
    price: 2499,
    image: "/images/uppada_silk.jpg",
    description:
      "Luxury silk saree handwoven with fine zari work, a pride of East Godavari."
  },
  {
    id: 17,
    name: "Venkatagiri Saree",
    category: "Textiles",
    price: 1999,
    image: "/images/venkatagiri_saree.jpg",
    description:
      "Lightweight, soft cotton sarees with gold borders — signature of Venkatagiri."
  },
  {
    id: 18,
    name: "Kalamkari Fabric",
    category: "Textiles",
    price: 499,
    image: "/images/kalamkari_fabric.jpg",
    description:
      "Traditional hand-printed cotton fabric with mythological designs."
  },
  {
    id: 36,
    name: "Pochampally Ikat Saree",
    category: "Textiles",
    price: 2199,
    image: "/images/pochampally_ikat.jpg",
    description:
      "Handwoven Ikat saree with unique geometric patterns, traditional Andhra craftsmanship."
  },

  // 🎨 Handicrafts
  {
    id: 19,
    name: "Kondapalli Wooden Toy",
    category: "Handicrafts",
    price: 599,
    image: "/images/kondapalli_toy.jpg",
    description:
      "Colorful hand-carved wooden toy made by Kondapalli artisans."
  },
  {
    id: 20,
    name: "Etikoppaka Toys",
    category: "Handicrafts",
    price: 499,
    image: "/images/etikoppaka_toy.jpg",
    description:
      "Eco-friendly wooden toys colored with natural dyes."
  },
  {
    id: 21,
    name: "Lepakshi Handicrafts",
    category: "Handicrafts",
    price: 899,
    image: "/images/lepakshi_art.jpg",
    description:
      "Traditional handmade paintings and brass crafts from Lepakshi village."
  },

  // 🌿 Agricultural Products
  {
    id: 22,
    name: "Banginapalli Mangoes",
    category: "Agriculture Products",
    price: 399,
    image: "/images/banginapalli_mango.jpg",
    description:
      "Juicy and sweet Banginapalli mangoes — a seasonal favorite."
  },
  {
    id: 24,
    name: "Groundnuts",
    category: "Agriculture Products",
    price: 179,
    image: "/images/groundnuts.jpg",
    description:
      "Locally grown Rayalaseema groundnuts — ideal for snacks or cooking oil."
  },
  {
    id: 25,
    name: "Jaggery Blocks",
    category: "Agriculture Products",
    price: 149,
    image: "/images/jaggery.jpg",
    description:
      "Pure jaggery made from traditional sugarcane extraction methods."
  },
  {
    id: 38,
    name: "Totapuri Mangoes",
    category: "Agriculture Products",
    price: 349,
    image: "/images/totapuri_mango.jpg",
    description:
      "Tangy and sweet Totapuri mangoes, perfect for summer season and pickles."
  }
];

export default andhraProducts;
