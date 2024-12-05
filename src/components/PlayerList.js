import React from "react";

function PlayerList({ players, onEdit, onDelete, onAdd }) {
  return (
    <div>
      <h2>Player List</h2>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Nationality</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.age}</td>
              <td>{player.position}</td>
              <td>{player.nationality}</td>
              <td>
                <button onClick={() => onEdit(player.id)}>Edit</button>
                <button onClick={() => onDelete(player.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onAdd} style={{ marginTop: "20px" }}>Add Player</button>
    </div>
  );
}

export default PlayerList;