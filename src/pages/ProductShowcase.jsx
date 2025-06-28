import React from "react";
import { Navbar, Footer, ProductCard } from "../components";

const ProductShowcase = () => {
  // Sample products with different scenarios for demonstration
  const sampleProducts = [
    {
      id: 1,
      title: "Premium Cotton T-Shirt",
      description: "Comfortable and stylish cotton t-shirt perfect for everyday wear. Made with high-quality materials for lasting comfort.",
      price: 29.99,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      category: "men's clothing",
      stock: 15,
      rating: { rate: 4.5, count: 125 },
      variants: [
        {
          id: "1-s",
          name: "Small",
          type: "Size",
          price: 29.99,
          stock: 5
        },
        {
          id: "1-m",
          name: "Medium",
          type: "Size",
          price: 29.99,
          stock: 10
        },
        {
          id: "1-l",
          name: "Large",
          type: "Size",
          price: 32.99,
          stock: 0 // Out of stock variant
        },
        {
          id: "1-xl",
          name: "X-Large",
          type: "Size",
          price: 34.99,
          stock: 3
        }
      ]
    },
    {
      id: 2,
      title: "Wireless Bluetooth Headphones",
      description: "High-quality wireless headphones with noise cancellation and premium sound quality for the ultimate listening experience.",
      price: 199.99,
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      category: "electronics",
      stock: 8,
      rating: { rate: 4.8, count: 89 },
      variants: [
        {
          id: "2-black",
          name: "Black",
          type: "Color",
          price: 199.99,
          stock: 8
        },
        {
          id: "2-white",
          name: "White",
          type: "Color",
          price: 209.99,
          stock: 4
        },
        {
          id: "2-silver",
          name: "Silver",
          type: "Color",
          price: 219.99,
          stock: 2
        }
      ]
    },
    {
      id: 3,
      title: "Elegant Gold Necklace",
      description: "Beautiful handcrafted gold necklace that adds elegance to any outfit. Perfect for special occasions or daily wear.",
      price: 299.99,
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      category: "jewelery",
      stock: 0, // Out of stock product
      rating: { rate: 4.2, count: 34 },
      variants: [
        {
          id: "3-silver",
          name: "Silver",
          type: "Material",
          price: 199.99,
          stock: 3
        },
        {
          id: "3-gold",
          name: "Gold",
          type: "Material",
          price: 299.99,
          stock: 0
        }
      ]
    },
    {
      id: 4,
      title: "Classic Leather Jacket",
      description: "Timeless leather jacket with premium craftsmanship. A wardrobe essential that never goes out of style.",
      price: 399.99,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      category: "women's clothing",
      stock: 6,
      rating: { rate: 4.7, count: 67 },
      variants: [
        {
          id: "4-xs",
          name: "X-Small",
          type: "Size",
          price: 399.99,
          stock: 1
        },
        {
          id: "4-s",
          name: "Small",
          type: "Size",
          price: 399.99,
          stock: 2
        },
        {
          id: "4-m",
          name: "Medium",
          type: "Size",
          price: 399.99,
          stock: 3
        }
      ]
    },
    {
      id: 5,
      title: "Smart Fitness Watch",
      description: "Advanced fitness tracking watch with heart rate monitoring, GPS, and smartphone connectivity.",
      price: 249.99,
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      category: "electronics",
      stock: 12,
      rating: { rate: 4.6, count: 156 },
      variants: null // No variants for this product
    },
    {
      id: 6,
      title: "Vintage Denim Jeans",
      description: "Classic vintage-style denim jeans with perfect fit and comfort. Made from premium denim fabric.",
      price: 89.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      category: "men's clothing",
      stock: 20,
      rating: { rate: 4.3, count: 98 },
      variants: [
        {
          id: "6-30",
          name: "30\" Waist",
          type: "Size",
          price: 89.99,
          stock: 5
        },
        {
          id: "6-32",
          name: "32\" Waist",
          type: "Size",
          price: 89.99,
          stock: 8
        },
        {
          id: "6-34",
          name: "34\" Waist",
          type: "Size",
          price: 89.99,
          stock: 4
        },
        {
          id: "6-36",
          name: "36\" Waist",
          type: "Size",
          price: 94.99,
          stock: 3
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="display-4 fw-bold text-dark">Product Card Showcase</h1>
            <p className="lead text-muted">
              Demonstrating responsive product cards with variants, stock management, and modern UI design
            </p>
            <hr className="w-25 mx-auto" />
          </div>
        </div>

        <div className="row">
          <div className="col-12 mb-4">
            <div className="alert alert-info">
              <h5 className="alert-heading">Features Demonstrated:</h5>
              <ul className="mb-0">
                <li><strong>Responsive Design:</strong> Cards adapt to different screen sizes</li>
                <li><strong>Variant Selection:</strong> Dropdown for size, color, or material options</li>
                <li><strong>Stock Management:</strong> Out of stock and low stock indicators</li>
                <li><strong>Modern UI:</strong> Hover effects, gradients, and clean typography</li>
                <li><strong>Cart Integration:</strong> Add to cart functionality with toast notifications</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <h3 className="mb-3">Layout Approach</h3>
            <p className="text-muted">
              The product cards use Bootstrap's responsive grid system with CSS Grid for internal layout. 
              Cards maintain consistent height while adapting to different content lengths.
            </p>

            <h3 className="mb-3 mt-4">Responsiveness Considerations</h3>
            <p className="text-muted">
              Cards display 3 per row on large screens, 2 per row on tablets, and 1 per row on mobile devices. 
              Image heights adjust appropriately and text scaling ensures readability on all devices.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductShowcase; 