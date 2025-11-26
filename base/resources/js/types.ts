export enum MenuCategory {
  // PASTRY = 'Pâtisserie',
  // SAVORY = 'Snacking',
  // DRINKS = 'Boissons',
  // TRADITIONAL = 'Traditionnel',

  // New categories
  PASTA = 'Pâtes',
  SALTED_CREPE = 'Crêpes Salées',
  BREAKFAST = 'Petit Déjeuner',
  SANDWICH = 'Sandwiches',
  PANINI = 'Paninis',
  SWEET_CREPE = 'Crêpes Sucrées',
  WAFFLE = 'Gaufres',
  PANCAKE = 'Pancakes',
  FONDANT = 'Fondants',
  ICE_CREAM = 'Glaces'
}


export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
}


export interface WorkingHours {
  day: string;
  hours: string;
}