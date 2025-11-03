'use client';

export default function PriceFilter({ maxPrice, setMaxPrice }) {
    function handleChange(e){
        setMaxPrice(e.target.value);
    }

    return (
        <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={handleChange}
        />
    );
}