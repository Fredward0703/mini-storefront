'use client';

export default function CategoryFilter({ category, setCategory}) {
    return (
        <select value={category} onChange={e => setCategory(e.target.value)} style={{margainRight:"10px"}}>
        <option value="All">All</option>
        <option value="Electornics">Electornics</option>
        <option value="Clothing">Clothing</option>
        <option value="Furniture">Furniture</option>
        </select>
    );
}