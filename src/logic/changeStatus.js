export function checkboxChange(task, id) {
  // Toggle status when clicked on input checkbox
  return [...task].reduce((acc, item) => {
    if (item.id === id) {
      item.active = !item.active
    }
    return [...acc, item]
  }, [])
}
