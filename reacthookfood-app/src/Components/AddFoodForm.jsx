import { useState } from "react";

function AddFoodForm({ addFood }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price) return;

    addFood({
      id: Date.now(),
      name,
      price: Number(price),
    });

    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Food Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Add Food</button>
    </form>
  );
}

export default AddFoodForm;