import React, { useState } from 'react'
import styles from './TaskManager.module.css'
import { PlusCircle, X, XCircle, Circle } from '@phosphor-icons/react'

export const TaskManager = ({ tasks, addTask, removeTask, toggleTaskCompletion }) => {
  const [taskText, setTaskText] = useState('')
  const [filter, setFilter] = useState('all')
  // default value of filter is all

  const handleAddTask = () => {
    addTask(taskText)
    setTaskText('')
  }

  const handleInputChange = (e) => {
    setTaskText(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask()
    }
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
            >Done
            </button>
          </nav>
        </div>
      </header>

      {/* Add tasks */}
      <div className={styles.tm__addTasks}>
        <input
          type="text"
          placeholder='Add a new task'
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          value={taskText}
        />
        <button onClick={handleAddTask}>
          <PlusCircle size={32} />
        </button>
      </div>

      {/* Tasks */}
      <div className={styles.tm__taskDisplay}>
        {tasks.length < 1 ? (
          <div className={styles.tm__taskDisplay_noTasks}>
            <XCircle size={22} />
            <p>No tasks to Display</p>
          </div>
        ) : ''}


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