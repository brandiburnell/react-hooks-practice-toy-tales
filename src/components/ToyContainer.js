import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDelete, onLike }) {
  console.log(toys);

  function handleDelete(id) {
    onDelete(id);
  }

  function handleLike(updatedToy) {
    onLike(updatedToy);
  }
  const toyCards = toys.map((toy) => {
    return (
      <ToyCard
        name={toy.name}
        key={toy.id}
        likes={toy.likes}
        image={toy.image}
        id={toy.id}
        onDelete={handleDelete}
        onLike={handleLike}
      />
    );
  });

  return (
    <div id="toy-collection">{ toyCards/* Render the collection of ToyCards */}</div>
  );
}

export default ToyContainer;
