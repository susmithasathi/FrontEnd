import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";

function Header() {
  const { restaurantName, status } = useContext(RestaurantContext);

  return (
    <div className="header">
      <h1>{restaurantName}</h1>
      <p>
        Delivery Status:
        <span className={status === "Open" ? "open" : "closed"}>
          {" "}
          {status}
        </span>
      </p>
    </div>
  );
}

export default Header;