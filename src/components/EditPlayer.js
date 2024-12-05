import React, { useState } from "react";

function EditPlayer({ player, editPlayer, onCancel }) {
  const [name, setName] = useState(player.name);
  const [position, setPosition] = useState(player.position);
  const [nationality, setNationality] = useState(player.nationality); // Added
  const [age, setAge] = useState(player.age);

  const handleNameChange = (e) => setName(e.target.value);
  const handlePositionChange = (e) => setPosition(e.target.value);
  const handleNationalityChange = (e) => setNationality(e.target.value); // Added
  const handleAgeChange = (e) => setAge(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    editPlayer({
      id: player.id,
      name,
      position,
      nationality, // Added
      age: Number(age),
    });
  };

  return (
    <div>
      <h2>Edit Player</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" value={position} onChange={handlePositionChange} />
        </div>
        <div>
          <label>Nationality:</label>
          <input type="text" value={nationality} onChange={handleNationalityChange} /> {/* Added */}
        </div>
        <div>
          <label>Age:</label>
          <input type="number" value={age} onChange={handleAgeChange} />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditPlayer;