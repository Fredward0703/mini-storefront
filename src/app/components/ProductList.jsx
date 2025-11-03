'use client';

import ProductCard from "./ProductCard";

export default function ProductList({ prodcuts, onAddToCart }) {
    return (
        <div style={{display:"grid" , gap:"10px", gridTemplateColumns:"repeat(auto-fit,minmax(200px, 1px))"}}>
        {prodcuts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
        </div>
    );
}