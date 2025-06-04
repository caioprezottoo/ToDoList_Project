import React from 'react'
import { Sidebar } from './components/Sidebar.jsx'
import { TaskManager } from './components/TaskManager.jsx'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.appLayout}>
      <Sidebar />
      <TaskManager />
    </div>
  )
}