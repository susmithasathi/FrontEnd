import { useState } from "react";
import useFetch from "../hooks/useFetch";
function Card() {
    const [count, setCount] = useState(0);
    const data = useFetch('card.json', count);
  return (
    <div>
      <h1>Card Component</h1>
      <button onClick={() => setCount(count + 2)}>Load More</button>

      {data.map((item) => (
        <div className="card" key={item.name}>
          <h2>{item.name}</h2>
          <p>Price: ${item.peice}</p>
        </div>
      ))}
    </div>
  )
}
export default Card;