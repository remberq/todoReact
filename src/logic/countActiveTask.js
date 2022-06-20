export function countTask(task) {
  // How much active task count
  return [...task].filter((item) => item.active).length
}
