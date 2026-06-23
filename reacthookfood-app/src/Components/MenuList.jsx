function MenuList({ menu, addToCart }) {
  return (
    <div className="card">
      <h2>Menu</h2>

      {menu.map((item) => (
        <div key={item.id} className="item">
          <span>
            {item.name} - ₹{item.price}
          </span>

          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default MenuList;