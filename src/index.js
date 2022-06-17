import {createRoot} from "react-dom/client";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {useState} from "react";
import TaskList from "./components/task-list/task-list";
import { formatDistance, subDays } from 'date-fns'

import './index.css'


const App = () => {
  const [task, setTask] = useState([
    addNewTask('Drink'),
    addNewTask('Eat'),
    addNewTask('Sleep'),
    addNewTask('Walk'),
  ])

  const [stage, setStage] = useState({
    // This state need to control which button is active in footer buttons
    status: 'All'
  })

  function randomDate(addNewTask) {
    const dateCreated = addNewTask ? Date.now() : new Date(Date.now() - Math.floor(Math.random() * 10000000))
    return formatDistance(dateCreated, Date.now(), {includeSeconds: true, addSuffix: true})
  }

  function addNewTask(title, isNewTask) {
    return {
      title,
      id: Math.floor(Math.random() * 1000),
      created: randomDate(isNewTask),
      active: true
    }
  }

  function addTask(item) {
    // Add new task
    setTask([...task, item])
  }

  const removeTask = (id) => {
    // Clear task
    setTask(task.filter(item => item.id !== id))
  }

  const changeStatus = (id) => {
    // Toggle status when clicked on input checkbox
    const newData = [...task].reduce((acc, item) => {
      if (item.id === id) {
        item.active = !item.active
      }
      return [...acc, item]
    }, [])
    setTask(newData)
  }


  function filterTask(status) {
    if (status === 'Active') {
      return task.filter(item => item.active)
    } else if (status === 'Completed') {
      return task.filter(item => !item.active)
    }
    return task
  }

  function destroyCompletedTask() {
    // Clear all completed task by click Clear Completed button
    setTask(task.filter(item => item.active))
  }

  const newTask = filterTask(stage.status) // Filter task data when click on footer buttons All, Active, Completed

  const count = [...task].filter(item => item.active).length // How much active task count

  return (
    <section className={'todoapp'}>
      <Header addNewTask={(title, newTask) => addTask(addNewTask(title, newTask))}/>
      <section className={'main'}>
        {task.length ?
          <TaskList task={newTask} onRemove={removeTask} completeTask={changeStatus}/> :
          <p>Task's End</p>
        }

      </section>
      <Footer count={count} filterTask={(text) => setStage({status: text})} destroyAllComplete={destroyCompletedTask}/>
    </section>
  )
}



const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<App/>)