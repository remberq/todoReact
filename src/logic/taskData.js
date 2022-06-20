import { useState } from 'react'

import { addNewTask } from './newTaskAdd'

export function useTask() {
  const [task, setTask] = useState([addNewTask('Drink'), addNewTask('Eat'), addNewTask('Sleep'), addNewTask('Walk')])
  return [task, setTask]
}
