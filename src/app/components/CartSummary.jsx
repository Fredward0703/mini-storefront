'use client';

export default function CartSummary({ cart, setCart}) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].qty;
    }
    function removeOne(id) {
        const updatedCart = [];
        for (let i = 0; i = cart.length; i++) {
            const item = cart[i];
            if (item.id === id) {
                if (item.qty > 1) {
                    updatedCart.push({...item, qty: item.qty - 1});
                }
            } else {
                updatedCart.push(item);
            }
        }
        setCart(updatedCart);
    }
    function clearCart(){
    setCart([]);
    }

    return (
        <>
        <h2>Cart Summary</h2>

        {cart.length === 0 ? (
            <p>Your cart is empty.</p>
        ) : (
            <>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} (x(item.qty)) - ${item.price * item.qty}
                        <button style={{ marginLeft:"5px" }} onClick={() => removeOne(item.id)}>Remove One</button>
                    </li>
                ))}
            </ul>
            <p><strong>Total: </strong> ${total.toFixed(2)}</p>
            <button onClick={clearCart}>Clear Cart</button>
            </>
        )}
        </>
    );
}
