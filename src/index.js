import { createRoot } from 'react-dom/client'
import { useState } from 'react'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import TaskList from './components/task-list/task-list'
import './index.css'
import { addNewTask } from './logic/newTaskAdd'
import { useTask } from './logic/taskData'
import { filterTask } from './logic/filterTask'
import { checkboxChange } from './logic/changeStatus'
import { countTask } from './logic/countActiveTask'

const App = () => {
  const [task, setTask] = useTask()
  const [stage, setStage] = useState({
    // This state need to control which button is active in footer buttons
    status: 'All',
  })

  function addTask(item) {
    // Add new task
    setTask([...task, item])
  }

  const removeTask = (id) => {
    // Clear task
    setTask(task.filter((item) => item.id !== id))
  }

  function destroyCompletedTask() {
    // Clear all completed task by click Clear Completed button
    setTask(task.filter((item) => item.active))
  }

  const newTask = filterTask(stage.status, task) // Filter task data when click on footer buttons All, Active, Completed

  return (
    <section className={'todoapp'}>
      <Header addNewTask={(title, newTask) => addTask(addNewTask(title, newTask))} />
      <section className={'main'}>
        {task.length ? (
          <TaskList task={newTask} onRemove={removeTask} completeTask={(id) => setTask(checkboxChange(task, id))} />
        ) : (
          <p>Task End</p>
        )}
      </section>
      <Footer
        count={countTask(task)}
        filterTask={(text) => setStage({ status: text })}
        destroyAllComplete={destroyCompletedTask}
      />
    </section>
  )
}

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<App />)
