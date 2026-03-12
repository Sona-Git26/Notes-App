import { useState, useEffect } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null); // which note we are editing

  useEffect(() => {
    fetch("http://127.0.0.1:8000/notes")
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);
//  Update note function
const updateNote = () => {
  fetch(`http://127.0.0.1:8000/notes/${editId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content })
  })
    .then(res => res.json())
    .then(() => {
      setTitle("");
      setContent("");
      setEditId(null);  // reset edit mode
      // Refresh notes
      fetch("http://127.0.0.1:8000/notes")
        .then(res => res.json())
        .then(data => setNotes(data));
    });
};
// Delete note function
const deleteNote = (id) => {
  fetch(`http://127.0.0.1:8000/notes/${id}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(() => {
      // Refresh notes after deletion
      return fetch("http://127.0.0.1:8000/notes")
        .then(res => res.json())
        .then(data => setNotes(data));
    });
};
//   add note function
  const addNote = () => {
    fetch("http://127.0.0.1:8000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, content })
    })
      .then(res => res.json())
      .then(() => {
        setTitle("");
        setContent("");

        fetch("http://127.0.0.1:8000/notes")
          .then(res => res.json())
          .then(data => setNotes(data));
      });
  };

  return (
    <div>
      <h1>Notes App</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br /><br />
      {/* Add/Edit Button Toggle  */}
      {editId ? (
      <button onClick={updateNote}>Update Note</button>
      ) : (
      <button onClick={addNote}>Add Note</button>
      )}

      <br /><br />

      <h2>All Notes</h2>

      <ul>
        {notes.map(note => (
          <li key={note[0]}>
            <h3>{note[1]}</h3>
            <p>{note[2]}</p>
            <button onClick={() => {
                setEditId(note[0]);      // id store pannitu
                setTitle(note[1]);        // title fill pannitu input-la
                setContent(note[2]);      // content fill pannitu textarea-la
            }}>Edit</button>
            <button onClick={() => deleteNote(note[0])}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;