export function filterTask(status, task) {
  if (status === 'Active') {
    return task.filter((item) => item.active)
  } else if (status === 'Completed') {
    return task.filter((item) => !item.active)
  }
  return task
}
