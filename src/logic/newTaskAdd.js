import { randomDate } from './randomDate'

export function addNewTask(title, isNewTask) {
  return {
    title,
    id: Math.floor(Math.random() * 1000),
    created: randomDate(isNewTask),
    active: true,
  }
}
