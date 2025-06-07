import React, { useState } from 'react'
import styles from './TaskManager.module.css'
import { PlusCircle, X, CheckCircle, Circle } from '@phosphor-icons/react'


export const TaskManager = () => {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  // default value of filter is all

  const addTask = () => {
    if (taskText.trim() === '')
      return;

    const newTask = {
      id: Date.now(),
      content: taskText,
      isCompleted: false
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

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task))
  }

  const filteredTasks = tasks.filter(task => {
    return (filter === 'all') || (filter === 'done' && task.isCompleted) || (filter === 'inProgress' && !task.isCompleted)
  })

  return (
    <div>
      {/* Header */}
      <header className={styles.tm__header}>
        <div>
          <h1>Tasks</h1>
          <hr />
          <nav>
            <button
              onClick={() => setFilter('all')}
              className={filter === 'all' ? styles.active : styles.inactive}
            >
              All tasks
            </button>
            <button
              onClick={() => setFilter('inProgress')}
              className={filter === 'inProgress' ? styles.active : styles.inactive}
            >
              In Progress
            </button>
            <button
              onClick={() => setFilter('done')}
              className={filter === 'done' ? styles.active : styles.inactive}
            >Done</button>
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
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={task.isCompleted ? styles.tm__taskDisplay_task_completedBorder : styles.tm__taskDisplay_task}
          >
            <div>
              <button
                onClick={() => toggleTaskCompletion(task.id)}
                className={task.isCompleted ? styles.tm__taskDisplay_task_completed : styles.tm__taskDisplay_task_button}
              >
                <Circle size={22} />
              </button>
              <h3>{task.content}</h3>
            </div>
            <button className={styles.tm__taskDisplay_task_removeButton} onClick={() => removeTask(task.id)}><X size={22} /></button>
          </div>
        ))}
      </div>



    </div>
  )
}