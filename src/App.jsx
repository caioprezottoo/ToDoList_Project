import React, { useState } from 'react'
import { Sidebar } from './components/Sidebar.jsx'
import { TaskManager } from './components/TaskManager.jsx'
import styles from './App.module.css'

export default function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (taskContent) => {
    if (taskContent.trim() === '') return;

    const newTask = {
      id: Date.now(),
      content: taskContent,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ))
  }

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length

  return (
    <div className={styles.appLayout}>
      <Sidebar
        totalTasks={totalTasks}
        completedTasks={completedTasks}
      />
      <TaskManager
        tasks={tasks}
        addTask={addTask}
        removeTask={removeTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  )
}