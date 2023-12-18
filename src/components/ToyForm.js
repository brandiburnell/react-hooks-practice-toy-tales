import React, {useState} from "react";

function ToyForm({ onSubmit }) {
  // set all form inputs to state to make it controlled
  const [toyName, setToyName] = useState("");
  const [toyImage, setToyImage] = useState("");

  // return the new toy to the App component after it is posted to the server
  function handleSubmit(e) {
    e.preventDefault();
    // create new object of new toy user inputs
    const toyObj = {
      name: toyName,
      image: toyImage,
      likes: Number(0),
    };

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toyObj),
    })
      .then((r) => r.json())
      .then((newToy) => onSubmit(newToy));
  }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => setToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => setToyImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
