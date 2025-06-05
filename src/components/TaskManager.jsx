import React, { useState } from 'react'
import styles from './TaskManager.module.css'
import { PlusCircle, X, CheckCircle } from '@phosphor-icons/react'


export const TaskManager = () => {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (taskText.trim() === '')
      return;

    const newTask = {
      id: Date.now(),
      content: taskText
    }
    setTasks([...tasks, newTask])

    setTaskText('')
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleInputChange = (e) => {
    setTaskText(e.target.value)
  }

  return (
    <div>
      {/* Header */}
      <header className={styles.tm__header}>
        <div>
          <h1>Tasks</h1>
          <hr />
          <nav>
            <p>All tasks</p>
            <p>Done</p>
          </nav>
        </div>
      </header>

      {/* Add tasks */}
      <div className={styles.tm__addTasks}>
        <input
          type="text"
          placeholder='Add a new task'
          onChange={handleInputChange}
          value={taskText}
          // "The current displayed value of this input field must always 
          // be whatever the taskText state variable holds."
        />
        <button onClick={addTask}>
          <PlusCircle size={32} />
        </button>
      </div>

      {/* Tasks */}
      <div className={styles.tm__taskDisplay}>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={styles.tm__taskDisplay_task}
          >
            <div>
              <button><CheckCircle size={22} /></button>
              <h3>{task.content}</h3>
            </div>
            <button onClick={() => removeTask(task.id)}><X size={22} /></button>
          </div>
        ))}
      </div>



    </div>
  )
}