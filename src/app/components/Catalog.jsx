'use client';
import { useState, useEffect } from "react";
import StatusMessage from "./StatusMessage";

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
        </>
    );
}