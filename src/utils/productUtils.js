// Utility function to add variants and stock info to products for demo purposes
export const enhanceProductWithVariants = (product) => {
  // Generate random stock between 0-20
  const baseStock = Math.floor(Math.random() * 21);
  
  // Some products will have variants based on their category
  let variants = [];
  
  if (product.category === "men's clothing" || product.category === "women's clothing") {
    // Add size variants for clothing
    variants = [
      {
        id: `${product.id}-s`,
        name: "Small",
        type: "Size",
        price: product.price,
        stock: Math.floor(Math.random() * 10)
      },
      {
        id: `${product.id}-m`,
        name: "Medium", 
        type: "Size",
        price: product.price,
        stock: Math.floor(Math.random() * 15)
      },
      {
        id: `${product.id}-l`,
        name: "Large",
        type: "Size", 
        price: (product.price * 1.1).toFixed(2),
        stock: Math.floor(Math.random() * 8)
      },
      {
        id: `${product.id}-xl`,
        name: "X-Large",
        type: "Size",
        price: (product.price * 1.15).toFixed(2),
        stock: Math.floor(Math.random() * 5)
      }
    ];
  } else if (product.category === "electronics") {
    // Add color/model variants for electronics
    const colors = ["Black", "White", "Silver", "Blue"];
    const selectedColors = colors.slice(0, Math.floor(Math.random() * 3) + 2);
    
    variants = selectedColors.map((color, index) => ({
      id: `${product.id}-${color.toLowerCase()}`,
      name: color,
      type: "Color",
      price: index === 0 ? product.price : (product.price * (1 + (index * 0.05))).toFixed(2),
      stock: Math.floor(Math.random() * 12)
    }));
  } else if (product.category === "jewelery") {
    // Add material variants for jewelry
    variants = [
      {
        id: `${product.id}-silver`,
        name: "Silver",
        type: "Material",
        price: product.price,
        stock: Math.floor(Math.random() * 8)
      },
      {
        id: `${product.id}-gold`,
        name: "Gold",
        type: "Material", 
        price: (product.price * 1.3).toFixed(2),
        stock: Math.floor(Math.random() * 5)
      }
    ];
  }

  // Randomly make some products out of stock
  const isOutOfStock = Math.random() < 0.1; // 10% chance of being out of stock
  
  return {
    ...product,
    stock: isOutOfStock ? 0 : baseStock,
    variants: variants.length > 0 ? variants : null
  };
};

// Function to enhance all products in an array
export const enhanceProductsWithVariants = (products) => {
  return products.map(enhanceProductWithVariants);
}; 