import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {

  const [gifts, setGifts] = useState(data);

  return (
    <div>
      <div className="container">
          <h1>Wish list books - {gifts.length} 🎁</h1>
      </div>

      {gifts.map((element => {

        const {id, nameBook, image, price} = element;

        const removeGift = (id) => {
          
          let newGifts = gifts.filter(nameBook => nameBook.id !== id);
        
          setGifts(newGifts);
        
        }

        return (
          <div key={id}>
            <div className="container">
                <h2>{id} - {nameBook}</h2>
            </div>

            <div className="container">
              <img src={image} width="150px" alt="book"/>
            </div>

            <div className="container">
              <h3>{price}</h3>
            </div>

            <div className="container">
              <button onClick={() => removeGift(id)}>Remove</button>
            </div>
          </div>
        )
      }))}
      <div className="container">
          <button onClick={() => setGifts([])}>Delete all</button>
      </div>
    </div>
  );
}

export default App;
