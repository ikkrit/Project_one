import { useState } from "react";

function App() {

  const [fruits, setFruits] = useState([
    {id: 1, name: "Abricot"},
    {id: 2, name: "Banane"},
    {id: 3, name: "Cerise"}
  ]);

  const deleteFruit = (id) => {
    
  }

  return (
    <div>
      <h1>Liste de fruits</h1>
        <ul>
          { fruits.map((fruit) => {
            return <li key={fruit.id}>{fruit.name} <button onClick={() => deleteFruit(fruit.id)}>X</button></li>
          }) }
        </ul>
    </div>
  )
}


export default App;
