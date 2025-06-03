import React, { useState } from 'react';

import styles from './Sidebar.module.css'
import { PlusCircle } from '@phosphor-icons/react'

export const Sidebar = () => {

  const [notes, setNotes] = useState([])

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      content: ''
    }
    setNotes([...notes, newNote])
  }

  return (
    <div className={styles.sidebar}>
      <header className={styles.sidebar__header}>
        <h1>Hello there,</h1>
        <p>Let's plan together!</p>
      </header>

      <div className={styles.sidebar__stats}>
        <div className={styles.sidebar__taskDone}>
          <h1>1</h1>
          <p>Task Done</p>
        </div>

        <div className={styles.sidebar__totalTasks}>
          <h1>3</h1>
          <p>Total tasks</p>
        </div>
      </div>

      <div className={styles.sidebar__notes}>
        <label for="noteTab">Notes</label>
        <hr />

        <div>
          {/*{notes.map((note) => (
            <div key={note.id} className="note-item">
              <textarea
                value={note.content}
                onChange={(e) => updateNote(note.id, e.target.value)}
                placeholder="Enter your note..."
                className="note-textarea"
                rows={4}
              />
              <button
                onClick={() => removeNote(note.id)}
                className="remove-note-btn"
                aria-label="Remove note"
              >
              </button>
            </div>
          ))}*/}

          <div className={styles.sidebar__noteTab}>
            {/* <textarea id="noteTab" name="noteTab"></textarea> */}
            <div
              className={styles.sidebar__addNoteTab}
              onClick={addNote}
            >
              <div>
                <PlusCircle size={32} />
              </div>
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}
