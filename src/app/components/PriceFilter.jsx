'use client';

export default function PriceFilter({ maxPrice, setMaxPrice }) {
    return (
        <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={e => setMaxPrice(e.target.value)}
        />
    );
}