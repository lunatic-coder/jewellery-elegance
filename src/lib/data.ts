import { Product, Category } from './types';

// Categories
export const categories: Category[] = [
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Elegant necklaces to enhance your neckline and add sophistication to any outfit.',
    image: 'https://plus.unsplash.com/premium_photo-1674255466849-b23fc5f5d3eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Beautiful earrings that frame your face with an elegant touch.',
    image: 'https://images.unsplash.com/photo-1617074172287-f364b77c1e77?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    description: 'Stunning bracelets that add a touch of elegance to your wrist.',
    image: 'https://images.unsplash.com/photo-1626122738142-bbd66f671eca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'rings',
    name: 'Rings',
    description: 'Exquisite rings that make a statement of refined taste.',
    image: 'https://plus.unsplash.com/premium_photo-1675003662150-2569448d2b3b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

// Products
export const products: Product[] = [
  {
    id: 'pearl-pendant-necklace',
    name: 'Pearl Pendant Necklace',
    description: 'A delicate gold-plated chain with a lustrous pearl pendant, perfect for both casual and formal occasions.',
    price: 89.99,
    category: 'necklaces',
    images: ['https://images.unsplash.com/photo-1474585628895-4579822e21a8?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1703175767171-016738f4d3d7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      "https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1633810542706-90e5ff7557be?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    featured: true,
    new: true,
    details: ['18K gold plating', 'Freshwater pearl pendant', 'Adjustable length: 16-18 inches', 'Spring ring clasp'],
    material: 'Brass with gold plating, freshwater pearl',
    careInstructions: ['Store in a cool, dry place', 'Avoid contact with perfumes and chemicals', 'Clean with a soft cloth'],
    stock: 15
  },
  {
    id: 'crystal-chandelier-earrings',
    name: 'Crystal Chandelier Earrings',
    description: 'Stunning chandelier earrings featuring sparkling crystals that catch and reflect light beautifully.',
    price: 75.99,
    category: 'earrings',
    images: ['https://images.unsplash.com/photo-1665198134143-8c4434d3578b?q=80&w=635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1722410180651-efd51636f260?q=80&w=892&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      "https://images.unsplash.com/photo-1633810542706-90e5ff7557be?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1633810542706-90e5ff7557be?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    bestseller: true,
    details: ['Silver-tone plating', 'Premium crystal elements', 'Push back closure', 'Length: 2.5 inches'],
    material: 'Zinc alloy with silver plating, premium crystals',
    careInstructions: ['Store in jewelry box when not in use', 'Avoid exposure to water', 'Clean with a soft, dry cloth'],
    stock: 20
  },
  {
    id: 'twisted-gold-bangle',
    name: 'Twisted Gold Bangle',
    description: 'An elegant twisted design gold bangle that adds a touch of sophistication to any outfit.',
    price: 65.50,
    category: 'bracelets',
    images: ['https://images.unsplash.com/photo-1708220041029-e2dbe9089eb4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1679019940100-035d471f2a0f?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "https://plus.unsplash.com/premium_photo-1722686455050-290ed7fb810e?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1740020266177-d4cae0fd36b0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    featured: true,
    details: ['18K gold plating', 'Diameter: 2.5 inches', 'Twisted design', 'Hinged closure'],
    material: 'Brass with gold plating',
    careInstructions: ['Avoid contact with water and chemicals', 'Store in a cool, dry place', 'Polish with a jewelry cloth'],
    stock: 12
  },
  {
    id: 'statement-cocktail-ring',
    name: 'Statement Cocktail Ring',
    description: 'A bold and elegant cocktail ring featuring a large center stone surrounded by smaller crystals.',
    price: 55.99,
    category: 'rings',
    images: ['https://images.unsplash.com/photo-1704455303122-39974eebf58a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1673266969980-dc954e025e80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "https://plus.unsplash.com/premium_photo-1739899051444-fcbdb848db5d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1739899051451-fadea8348f65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    bestseller: true,
    new: true,
    details: ['Gold-tone plating', 'Large center cubic zirconia', 'Surrounding pave crystals', 'Adjustable band'],
    material: 'Brass with gold plating, cubic zirconia and crystals',
    careInstructions: ['Remove before washing hands', 'Store separately to avoid scratches', 'Clean with a soft brush'],
    stock: 18
  },
  {
    id: 'layered-pearl-necklace',
    name: 'Layered Pearl Necklace',
    description: 'A sophisticated multi-strand pearl necklace that brings elegance and grace to any ensemble.',
    price: 95.00,
    category: 'necklaces',
    images: ['https://plus.unsplash.com/premium_photo-1681276168324-a6f1958aa191?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      '/https://plus.unsplash.com/premium_photo-1681276169903-83b87f1cbf19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      "https://plus.unsplash.com/premium_photo-1739899051451-fadea8348f65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1739899051451-fadea8348f65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    ],
    details: ['Three strands of varying lengths', 'Freshwater pearls', 'Length: 16-20 inches', 'Lobster clasp closure'],
    material: 'Freshwater pearls, gold-plated brass',
    careInstructions: ['Store flat in a jewelry box', 'Avoid contact with perfumes and lotions', 'Clean with a soft damp cloth'],
    stock: 10
  },
  {
    id: 'geometric-drop-earrings',
    name: 'Geometric Drop Earrings',
    description: 'Modern geometric drop earrings that add a contemporary touch to your jewelry collection.',
    price: 59.99,
    category: 'earrings',

    images: ['https://images.unsplash.com/photo-1708389828307-53f7813cbd0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1739899051444-fcbdb848db5d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      "https://plus.unsplash.com/premium_photo-1739899051451-fadea8348f65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1739899051451-fadea8348f65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    details: ['Rose gold plating', 'Geometric design', 'French wire hooks', 'Length: 2 inches'],
    material: 'Brass with rose gold plating',
    careInstructions: ['Store in a jewelry pouch', 'Avoid exposure to moisture', 'Clean with a jewelry cloth'],
    stock: 15
  },
  {
    id: 'crystal-tennis-bracelet',
    name: 'Crystal Tennis Bracelet',
    description: 'A timeless tennis bracelet featuring a line of sparkling crystals for a touch of everyday luxury.',
    price: 85.50,
    category: 'bracelets',
    images: ['https://images.unsplash.com/photo-1645412665918-fa13253d06c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1642394079543-9411d9bd0371?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      "https://plus.unsplash.com/premium_photo-1739899051451-fadea8348f65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1739899051451-fadea8348f65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    details: ['Silver-tone plating', 'Premium crystals in prong setting', 'Length: 7 inches with 1 inch extender', 'Box with tongue clasp'],
    material: 'Brass with rhodium plating, premium crystals',
    careInstructions: ['Avoid contact with water and chemicals', 'Store in a cool, dry place', 'Clean with a soft cloth'],
    stock: 8
  },
  {
    id: 'stacking-rings-set',
    name: 'Stacking Rings Set',
    description: 'A set of three delicate rings designed to be worn together or separately for versatile styling options.',
    price: 65.00,
    category: 'rings',
    images: ['https://images.unsplash.com/photo-1634833132548-d8dd82651239?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1634833132548-d8dd82651239?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      "https://plus.unsplash.com/premium_photo-1739899051451-fadea8348f65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1739899051451-fadea8348f65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    new: true,
    details: ['Set of three rings', 'Mix of gold, rose gold, and silver tones', 'One with pave crystals', 'Available in sizes 6-9'],
    material: 'Brass with mixed plating, cubic zirconia',
    careInstructions: ['Remove before sleeping or exercising', 'Avoid contact with harsh chemicals', 'Store separately from other jewelry'],
    stock: 20
  }
];

// Featured Products
export const featuredProducts = products.filter(product => product.featured);

// New Arrivals
export const newArrivals = products.filter(product => product.new);

// Bestsellers
export const bestsellers = products.filter(product => product.bestseller);

// Get Products by Category
export const getProductsByCategory = (categoryId: string) => {
  return products.filter(product => product.category === categoryId);
};

// Get Product by ID
export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};