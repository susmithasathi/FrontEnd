import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import AddFoodForm from "./components/AddFoodForm";
import MenuList from "./components/MenuList";
import Cart from "./components/Cart";
import { RestaurantContext } from "./context/RestaurantContext";

function App() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  const restaurantName = "Food Cart";
  const status = "Open";

  useEffect(() => {
    const defaultMenu = [
      {
        id: 1,
        name: "Pizza",
        price: 299,
      },
      {
        id: 2,
        name: "Burger", 
        price: 149,
      },
      {
        id: 3,
        name: "Pasta",
        price: 199,
      },
    ];

    setMenu(defaultMenu);
  }, []);

  const addFood = (food) => {
    setMenu((prev) => [...prev, food]);
  };

  const addToCart = useCallback((item) => {
    setCart((prev) => [...prev, item]);
  }, []);

  const removeFromCart = useCallback((index) => {
    setCart((prev) =>
      prev.filter((_, i) => i !== index)
    );
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurantName,
        status,
      }}
    >
      <div className="container">
        <Header />

        <AddFoodForm addFood={addFood} />

        <div className="grid">
          <MenuList
            menu={menu}
            addToCart={addToCart}
          />

          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
    </RestaurantContext.Provider>
  );
}

export default App;