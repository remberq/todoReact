const timerFormatter = (value) => {
  const minutes = Math.floor(value / 60)
  const seconds = value - minutes * 60
  const secFormat = seconds < 10 ? `0${seconds}` : `${seconds}`
  const minutesFormat = minutes < 10 ? `0${minutes}` : `${minutes}`
  return `${minutesFormat}:${secFormat}`
}

export { timerFormatter }
