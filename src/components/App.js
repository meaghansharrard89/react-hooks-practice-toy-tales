import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function removeToy(id){
    setToys(toys.filter(toy => toy.id != id))
  }

  function handleNewToy(newToy){
    setToys([...toys, newToy]);
  }

  function addLike(id){
    setToys(toys.map((toy) => {
      if (toy.id != id) {
        return toy
      } else {
        return {...toy, likes: toy.likes + 1}
      }
    }))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNewToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys}
        setToys={setToys}
        removeToy={removeToy}
        addLike={addLike}
        />
    </>
  );
}

export default App;
