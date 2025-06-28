import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );
  
  const dispatch = useDispatch();

  const addProduct = (product, variant = null) => {
    const productToAdd = variant 
      ? { ...product, selectedVariant: variant, price: variant.price }
      : product;
    dispatch(addCart(productToAdd));
  };

  const handleAddToCart = () => {
    if (isOutOfStock) {
      toast.error("Product is out of stock");
      return;
    }
    
    addProduct(product, selectedVariant);
    toast.success("Added to cart");
  };

  const handleVariantChange = (event) => {
    const variantId = event.target.value;
    const variant = product.variants.find(v => v.id === variantId);
    setSelectedVariant(variant);
  };

  // Check if product is out of stock
  const isOutOfStock = product.stock === 0 || 
    (selectedVariant && selectedVariant.stock === 0);

  // Get current price (from variant if selected, otherwise base price)
  const currentPrice = selectedVariant ? selectedVariant.price : product.price;

  // Get current stock
  const currentStock = selectedVariant ? selectedVariant.stock : (product.stock || 10);

  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
      <div className="card h-100 shadow-sm product-card">
        <div className="card-img-container position-relative">
          <img
            className="card-img-top"
            src={product.image}
            alt={product.title}
            style={{
              height: "250px",
              objectFit: "cover",
              transition: "transform 0.3s ease"
            }}
          />
          {isOutOfStock && (
            <div className="position-absolute top-0 end-0 m-2">
              <span className="badge bg-danger">Out of Stock</span>
            </div>
          )}
          {currentStock <= 5 && currentStock > 0 && (
            <div className="position-absolute top-0 end-0 m-2">
              <span className="badge bg-warning text-dark">Low Stock</span>
            </div>
          )}
        </div>
        
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-truncate" title={product.title}>
            {product.title}
          </h5>
          
          <p className="card-text text-muted small flex-grow-1">
            {product.description?.substring(0, 100)}...
          </p>
          
          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-primary mb-0 fw-bold">
                ${currentPrice}
              </h4>
              {product.rating && (
                <div className="text-warning">
                  <i className="fa fa-star"></i>
                  <span className="ms-1 small text-dark">
                    {product.rating.rate} ({product.rating.count})
                  </span>
                </div>
              )}
            </div>

            {/* Variant Selection */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-3">
                <label className="form-label small fw-bold text-uppercase">
                  {product.variants[0].type || "Options"}:
                </label>
                <select 
                  className="form-select form-select-sm"
                  value={selectedVariant?.id || ""}
                  onChange={handleVariantChange}
                >
                  {product.variants.map((variant) => (
                    <option key={variant.id} value={variant.id}>
                      {variant.name} - ${variant.price}
                      {variant.stock === 0 ? " (Out of Stock)" : ""}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Action Buttons */}
            <div className="d-grid gap-2">
              <button
                className={`btn ${isOutOfStock ? 'btn-secondary' : 'btn-primary'} btn-sm`}
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                style={{
                  transition: "all 0.3s ease"
                }}
              >
                {isOutOfStock ? (
                  <>
                    <i className="fa fa-ban me-2"></i>
                    Out of Stock
                  </>
                ) : (
                  <>
                    <i className="fa fa-cart-plus me-2"></i>
                    Add to Cart
                  </>
                )}
              </button>
              
              <Link
                to={`/product/${product.id}`}
                className="btn btn-outline-dark btn-sm"
              >
                <i className="fa fa-eye me-2"></i>
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 