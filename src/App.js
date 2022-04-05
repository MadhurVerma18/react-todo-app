import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      setItem([...item, inputData]);
      setInputData("");
    }
  };
const editItem  = () => {
  
}

  const deleteItem = (e) => {
    const newItem = item.filter((el,i) => {
      return i !== e;
    });
    setItem(newItem);
  }

  return (
    <div className="main">
      <div className="app">
        <h1 className="head">Todo-App</h1>

        <div className="addItem">
          <input
            type="text"
            placeholder="Add Items"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button onClick={addItem}>Add</button>
        </div>
                                                                                    
        <div className="displayItems">
           {
          item.map((el,ind) => {
            return(
              <div className="displayItem" key={ind}>
            <h3>{el}</h3>
            <div className="displayBtn">
              <button onClick={() => editItem(ind)} >Edit</button>
              <button onClick={() => deleteItem(ind)} >Delete</button>
            </div>
          </div>

            )
          })
        }
          

        </div>
      </div>
    </div>
  );
}

export default App;
