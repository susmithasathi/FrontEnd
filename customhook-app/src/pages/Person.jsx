import { useState } from 'react';
import useFetch from "../hooks/useFetch"

function PersonComponent() {
const [count, setCount] = useState(0);
  const data = useFetch('persons.json', count);

  return (
    <div>
      <h1>Person Component</h1>
      <button onClick={() => setCount(count + 10)}>Load More</button>
      <table>
        <thead>
          <tr>
            <th>no</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PersonComponent;
