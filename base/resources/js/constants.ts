import { MenuCategory, MenuItem, WorkingHours } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // 🥣 Pasta
  {
    id: 1,
    name: "Pasta Bolognaise",
    description: "Penne with slow-cooked beef ragù, tomato sauce, and parmesan.",
    price: "850 DA",
    category: MenuCategory.PASTA,
    image: "https://feelgoodfoodie.net/wp-content/uploads/2023/04/Pasta-Bolognese-TIMG-500x500.jpg" // penne bolognese
  },
  {
    id: 2,
    name: "Pasta Alfredo",
    description: "Creamy parmesan sauce with sautéed chicken and mushrooms.",
    price: "900 DA",
    category: MenuCategory.PASTA,
    image: "https://www.vanillabeancuisine.com/wp-content/uploads/2024/12/Spaghetti-Alfredo-FEAT-IMAGE.jpg" // creamy pasta
  },

  // 🥞 Salted Crepes
  {
    id: 3,
    name: "Crêpe Savoyarde",
    description: "Turkey ham, gruyère, mushrooms, and béchamel inside a warm crêpe.",
    price: "750 DA",
    category: MenuCategory.SALTED_CREPE,
    image: "https://www.croquegel.com/Base_Produits_Traites/1930/2-ficelles-savoyarde-250g-0001172-p.jpg" // savory crepe with cheese & ham
  },
  {
    id: 4,
    name: "Crêpe Poulet Fromage",
    description: "Grilled chicken, mozzarella, and La Calèche’s special sauce.",
    price: "700 DA",
    category: MenuCategory.SALTED_CREPE,
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=800&w=800" // savory filled crepe
  },

  // 🍳 Breakfast
  {
    id: 5,
    name: "Petit Déjeuner Classique",
    description: "Omelette, baguette toast, butter, jam, orange juice, and coffee.",
    price: "750 DA",
    category: MenuCategory.BREAKFAST,
    image: "https://assets.afcdn.com/recipe/20170418/28079_w1024h1024c1cx400cy400.webp" // classic breakfast plate
  },
  {
    id: 6,
    name: "Healthy Breakfast",
    description: "Granola yogurt bowl, honey, fresh fruits, and a hot drink.",
    price: "850 DA",
    category: MenuCategory.BREAKFAST,
    image: "https://i.postimg.cc/qMCxSpBy/bloody-mary-obsessed-one-pan-healthy-and-simple-breakfast-recipe-4.jpg" // granola yogurt bowl
  },

  // 🥪 Sandwiches
  {
    id: 7,
    name: "Sandwich Escalope",
    description: "Grilled escalope, lettuce, tomato, cheese, and house sauce.",
    price: "550 DA",
    category: MenuCategory.SANDWICH,
    image: "https://www.legaulois.fr/storage/modelfiles/recipes/24/10/02/4d/recette-sandwich-escalope-dinde-legumes-le-gaulois.jpg" // meat sandwich
  },
  {
    id: 8,
    name: "Sandwich Thon",
    description: "Tuna mix, olives, egg, and fresh vegetables on a soft baguette.",
    price: "500 DA",
    category: MenuCategory.SANDWICH,
    image: "https://voyagezencuisinant.fr/wp-content/uploads/2024/03/RECETTE_SANDWICH_AU_THON_FACON_THAI.webp" // tuna sandwich
  },

  // 🥙 Paninis
  {
    id: 9,
    name: "Panini Poulet",
    description: "Grilled chicken, mozzarella, mushrooms, and creamy sauce.",
    price: "600 DA",
    category: MenuCategory.PANINI,
    image: "https://assets.afcdn.com/recipe/20240731/153082_w1024h768c1cx2880cy1920cxt0cyt0cxb5760cyb3840.webp" // grilled panini
  },
  {
    id: 10,
    name: "Panini Quartiers",
    description: "Turkey ham, tomato, gruyère cheese, and oregano.",
    price: "550 DA",
    category: MenuCategory.PANINI,
    image: "https://www.club-sandwich.net/images/photoarticles/fiche-panini-pb.jpg" // pressed panini with cheese & ham
  },

  // 🍫 Sweet Crepes
  {
    id: 11,
    name: "Crêpe Nutella",
    description: "Warm crêpe coated with Nutella and powdered sugar.",
    price: "450 DA",
    category: MenuCategory.SWEET_CREPE,
    image: "https://www.club-sandwich.net/images/photoarticles/fiche-panini-pb.jpg" // nutella crepe
  },
  {
    id: 12,
    name: "Crêpe Banane Caramel",
    description: "Banana slices, caramel sauce, and whipped cream.",
    price: "500 DA",
    category: MenuCategory.SWEET_CREPE,
    image: "https://porridgelab.com/cdn/shop/articles/240122_recette-crepe-banane-flambe2_site_07ac0e40-ada1-413e-997a-cf2130719bfc.jpg?v=1761479450&width=570" // banana caramel crepe
  },

  // 🧇 Gaufres
  {
    id: 13,
    name: "Gaufre Chocolat",
    description: "Crispy Belgian waffle topped with warm chocolate sauce.",
    price: "550 DA",
    category: MenuCategory.WAFFLE,
    image: "https://cdn.shopify.com/s/files/1/0173/8181/8422/files/20240523183203-screenshot-202024-05-10-20at-204.png?v=1716489126&width=1600&height=900" // chocolate waffle
  },
  {
    id: 14,
    name: "Gaufre Fruits Rouges",
    description: "Waffle topped with berries, whipped cream, and honey.",
    price: "600 DA",
    category: MenuCategory.WAFFLE,
    image: "https://cdn.pratico-pratiques.com/app/uploads/sites/3/2018/08/20175712/gaufres-aux-fruits.jpeg" // waffle with berries
  },

  // 🥞 Pancakes
  {
    id: 15,
    name: "Pancakes Miel",
    description: "Stack of fluffy pancakes drizzled with honey.",
    price: "500 DA",
    category: MenuCategory.PANCAKE,
    image: "https://img.cuisineaz.com/660x660/2013/12/20/i47652-pancakes.jpeg" // pancakes with honey
  },
  {
    id: 16,
    name: "Pancakes Chocolat",
    description: "Chocolate chip pancakes with chocolate drizzle.",
    price: "550 DA",
    category: MenuCategory.PANCAKE,
    image: "https://img.cuisineaz.com/660x495/2013/12/20/i28874-pancakes-sauce-chocolat.jpg" // chocolate pancakes
  },

  // 🍫 Fondants
  {
    id: 17,
    name: "Fondant au Chocolat",
    description: "Warm molten chocolate cake served with vanilla ice cream.",
    price: "700 DA",
    category: MenuCategory.FONDANT,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdDWReBNt1IIe_u9ejP7gYaJmIN6Zcrng2pCsXseGDnrgivr0CLga1Jicgk9QLRqas4-PEmrlMZAW5WLmQ2wT2ergNIRfDnLMv2jZWI8rC-Tk35QXGEQUOOGBiILaI2jLY04T9ZR2Gr_-EV6ic6DAeUnE6kraxrbPLuFNbOJ41b62QYFRRCjSFxJAXWFg/w1200-h630-p-k-no-nu/recette-fondant-chocolat.webp" // molten chocolate cake
  },

  // 🍨 Ice Cream
  {
    id: 18,
    name: "Glace 2 Boules",
    description: "Two scoops of your choice: vanille, chocolat, fraise, pistache.",
    price: "400 DA",
    category: MenuCategory.ICE_CREAM,
    image: "https://occ.groupeleduff.com/medias/520Wx520H-webp-A-FT000818-2-Coupe2boulesFDGAD1124.jpg?context=bWFzdGVyfGltYWdlc3wxMDEwMjR8aW1hZ2UvanBlZ3xhRFZpTDJoaE5pODVNRFU1TlRrME1UUXhOekkyTHpVeU1GZDROVEl3U0MxM1pXSndYMEV0UmxRd01EQTRNVGhmTWw5RGIzVndaVEppYjNWc1pYTkdSRWRCUkRFeE1qUXVhbkJufDM1Njc2MjlkZmFmM2YzM2M1YzM0ODI2ZDQzMWZlOTgzZTU2ZTQ3Nzk1MzEyMDQ3MDEwZTI5MzI3NDViNjUxYmE" // two scoops ice cream
  },
  {
    id: 19,
    name: "Coupe Spéciale La Calèche",
    description: "Vanilla ice cream, fruits, caramel sauce, whipped cream.",
    price: "650 DA",
    category: MenuCategory.ICE_CREAM,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" // sundae with fruit & caramel
  }
];




export const WORK_HOURS: WorkingHours[] = [
  { day: "Monday - Thursday", hours: "08:00 - 23:00" },
  { day: "Friday", hours: "15:00 - 23:00" },
  { day: "Saturday - Sunday", hours: "08:00 - 23:00" },
];

export const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.059939836738!2d6.589407400000001!3d36.262323699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1701b3a037005%3A0xf4e1746663c08a4a!2sLa%20Cal%C3%A8che%20caf%C3%A9%20restaurant%20p%C3%A2tisserie!5e0!3m2!1sen!2sdz!4v1763901530298!5m2!1sen!2sdz";
export const GOOGLE_MAPS_DIRECTIONS_URL = "https://maps.app.goo.gl/vhjHv5MxwXVzftbA8";

export const BACKEND_API_URL = "/api"
