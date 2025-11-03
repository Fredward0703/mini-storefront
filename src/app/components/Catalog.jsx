'use client';
import { useState, useEffect } from "react";
import StatusMessage from "./StatusMessage";
import ProductList from "./ProductList";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import CartSummary from "./CartSummary";

export default function Catalog(){
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState("loading");

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
    if (status === "loading") return <StatusMessage message ="Loading..." />;
    if (status === "error") return <StatusMessage message ="Error loading products." />;

    return (
        <>
        <h1>Mini Storefront</h1>
        <pre>{JSON.stringify(products, null, 2)}</pre>
        </>
    );
}