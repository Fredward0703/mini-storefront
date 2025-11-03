'use client';
import { useState, useEffect } from "react";
import StatusMessage from "./StatusMessage";
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import CartSummary from "./CartSummary";

export default function Catalog(){
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState("loading");
    const [filtered, setFiltered] = useState([]);
    const [category, setCategory] = useState("All");
    const [maxPrice, setMaxPrice] = useState("");
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        async function fetchProducts() {
            try {
                const res = await fetch("/api/products");
                if (!res.ok) throw new Error();
                const data = await res.json();
                setProducts(data);
                setStatus("ready");
            } catch {
                setStatus("error");
            }
        }
        fetchProducts();
    }, []);

    useEffect(() => {
        let results = [...products];
        if(category !=="All") {
            results = results.filter (p => p.category === category);
        }
        if(maxPrice !=="") {
            results = results.filter (p => p.price <= Number(maxPrice));
        }
        setFiltered(results);
    }, [category, maxPrice, products]);

    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        if(existingItem) {
            const updatedCart = cart.map(item =>
                item.id === product.id ? {...item, qty: item.qty + 1} : item
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, qty:1}]);
        }
    }

    if (status === "loading") return <StatusMessage message ="Loading..." />;
    if (status === "error") return <StatusMessage message ="Error loading products." />;
    if (filtered.length === 0) return <StatusMessage message="No products found." />;

    return (
        <div style={{ padding:"20px" }}>
        <h1>Mini Storefront</h1>
        
            <div style={{ marginBottom:"15px" }}>
            <CategoryFilter category={category} setCategory={setCategory} />
            <PriceFilter maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
            </div>

            <ProductList prodcuts={filtered} onAddToCart={addToCart} />
            <CartSummary cart={cart} setCart={setCart} />
        </div>
    );
}