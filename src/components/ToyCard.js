import React from "react";

function ToyCard( { id, toy, removeToy, addLike } ) {
  const {name, image, likes} = toy

  function donateToy(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      removeToy(id)
    })
  }

    function like(){
      fetch(`http://localhost:3001/toys/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({likes: likes + 1})
      })
      .then(() => {
      addLike(id)
      })
    }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={like}>Like {"<3"}</button>
      <button className="del-btn" onClick={donateToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;