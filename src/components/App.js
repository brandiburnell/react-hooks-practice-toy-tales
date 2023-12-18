import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  // GET request for toys to then pass to the Toy Container
  // run only on first render
  useEffect(() => {
    fetch("http://localhost:3001/toys") 
      .then((r) => r.json())
      .then((toys) => setToys(toys));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddNewToy(newToy) {
    setToys([...toys, newToy]);
  }

  function handleDeleteToy(id) {
    const toysToDisplay = toys.filter((toy) => toy.id !== id);
    setToys(toysToDisplay);
  }

  function handleLikeToy(updatedToy) {
    const toysToDisplay = toys.map((toy) => {
      if (toy.id === updatedToy.id) {
        toy.likes = updatedToy.likes;
        return toy;
      }
      else {
        return toy;
      }
    });
    setToys(toysToDisplay);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onSubmit={handleAddNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleDeleteToy} onLike={handleLikeToy}/>
    </>
  );
}

export default App;
