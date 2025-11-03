'use client';

export default function ProductCard({ product, onAddToCart }) {
    return (
        <>
        <h2>{product.name}</h2>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Stock: {product.stock}</p>
        <button 
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0} 
        >
            {product.stock === 0 ? "Out of stock" : "Add to cart"}
        </button>
        </>
    );
}