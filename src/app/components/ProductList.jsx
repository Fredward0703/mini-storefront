'use client';

import ProductCard from "./ProductCard";

export default function ProductList({ prodcuts, onAddToCart }) {
    return (
        <>
        {prodcuts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
        </>
    );
}