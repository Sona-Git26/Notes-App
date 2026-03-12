from fastapi import FastAPI
from pydantic import BaseModel
from app.database import db_connection
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Note structure
class Note(BaseModel):
    title: str
    content: str

# Add new note
@app.post("/notes")
def add_note(note: Note):
    query = "INSERT INTO notes (title, content) VALUES (%s, %s)"
    values = (note.title, note.content)
    db_connection.cursor.execute(query, values)
    db_connection.conn.commit()
    return {"message": "Note added successfully!"}

# Add get route
@app.get("/notes")
def get_notes():
    db_connection.cursor.execute("SELECT * FROM notes")
    results = db_connection.cursor.fetchall()
    return results

# Add delete route
@app.delete("/notes/{note_id}")
def delete_note(note_id: int):
    query = "DELETE FROM notes WHERE id = %s"
    db_connection.cursor.execute(query, (note_id,))
    db_connection.conn.commit()
    return {"message": "Note deleted"}

# Update note (PUT)
@app.put("/notes/{note_id}")
def update_note(note_id: int, note: Note):
    query = "UPDATE notes SET title=%s, content=%s WHERE id=%s"
    values = (note.title, note.content, note_id)
    db_connection.cursor.execute(query, values)
    db_connection.conn.commit()
    return {"message": "Note updated successfully!"}