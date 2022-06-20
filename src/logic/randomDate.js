import { formatDistance } from 'date-fns'

export function randomDate(isNewTask) {
  // if we add new task, we use Date.now(), else random Date
  const dateCreated = isNewTask ? Date.now() : new Date(Date.now() - Math.floor(Math.random() * 10000000))
  return formatDistance(dateCreated, Date.now(), { includeSeconds: true, addSuffix: true })
}
