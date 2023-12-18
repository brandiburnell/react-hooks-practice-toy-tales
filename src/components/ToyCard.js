import React from "react";

function ToyCard({ id, name, image, likes, onDelete, onLike}) {
  // delete toy from DB and pass up id to delete from DOM
  function deleteToy() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then(() => onDelete(id));
  }

  // calculate new number of likes and pass that up to be reflected in DOM
  function handleClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: Number(likes + 1)}),
    })
      .then((r) => r.json())
      .then((updatedToy) => onLike(updatedToy));
  }

  return (
    <div className="card">
      <h2>{name /* Toy's Name */}</h2>
      <img
        src={image /* Toy's Image */}
        alt={name /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{likes /* Toy's Likes */} Likes </p>
      <button className="like-btn" onClick={handleClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={deleteToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
