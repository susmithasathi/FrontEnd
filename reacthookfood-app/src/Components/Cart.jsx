import { useMemo } from "react";

function Cart({ cart, removeFromCart }) {
  const totalAmount = useMemo(() => {
    console.log("Calculating Total...");
    return cart.reduce(
      (sum, item) => sum + item.price,
      0
    );
  }, [cart]);

  return (
    <div className="card">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="item">
            <span>
              {item.name} - ₹{item.price}
            </span>

            <button
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h3>Total: ₹{totalAmount}</h3>
    </div>
  );
}

export default Cart;