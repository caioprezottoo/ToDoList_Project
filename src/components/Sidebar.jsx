import React, { useState } from 'react';

import styles from './Sidebar.module.css'
import { PlusCircle, Trash } from '@phosphor-icons/react'

export const Sidebar = ({ totalTasks, completedTasks }) => {
  const [notes, setNotes] = useState([])

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      content: ''
    }
    setNotes([...notes, newNote])
  }

  const removeNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const updateNote = (id, content) => {
    setNotes(notes.map(note => (
      note.id === id ? { ...note, content } : note
    )))
  }

  return (
    <div className={styles.sidebar}>

      {/* Header */}
      <header className={styles.sidebar__header}>
        <h1>Hello there,</h1>
        <p>Let's plan together!</p>
      </header>

      {/* Stats */}
      <div className={styles.sidebar__stats}>
        <div className={styles.sidebar__stats_taskDone}>
          <h1>{completedTasks}</h1>
          <p>Task{completedTasks !== 1 ? 's' : ''} Done</p>
        </div>

        <div className={styles.sidebar__stats_totalTasks}>
          <h1>{totalTasks}</h1>
          <p>Total tasks</p>
        </div>
      </div>

      {/* Notes */}
      <div className={styles.sidebar__notes}>
        <label htmlFor="noteTab">Notes</label>
        <hr />

        {/* Note */}
        <div>
          {notes.map((note) => (
            <div key={note.id} className={styles.sidebar__notes_noteTab}>
              <textarea
                value={note.content}
                onChange={(e) => updateNote(note.id, e.target.value)}
                id="noteTab"
                name="noteTab"
                placeholder='Text here...'
              />
              <button
                onClick={() => removeNote(note.id)}
              >
                <Trash size={22} />
              </button>
            </div>
          ))}

          {/* Add Note */}
          <div
            className={styles.sidebar__addNoteTab}
            onClick={addNote}
          >
            <PlusCircle size={32} />
          </div>

        </div>

      </div>

    </div>
  )
}