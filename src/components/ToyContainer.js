import React, { useState, useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer( {toys, setToys, removeToy, addLike } ) {

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((res) => res.json())
    .then((data) => setToys(data))
  }, [])
  
  return (
    <div id="toy-collection">
      {toys.map(toy => 
        <ToyCard 
          key={toy.id} 
          toy={toy}
          id={toy.id}
          removeToy={removeToy}
          addLike={addLike}
        />)}
    </div>
  );
}

export default ToyContainer;
