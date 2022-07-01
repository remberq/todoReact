import { Component } from 'react'

import Input from '../input/input'
import Button from '../button/button'
import './task.css'

// const Task = ({ task, onClickedTask, completeTask }) => {
//   const [status, setStatus] = useState(false)
//   const [count, setCount] = useState(0)
//   const [count2, setCount2] = useState(0)
//   useEffect(() => {
//     const timer = setInterval(() => setCount(count + 1), 1000)
//     return () => clearInterval(timer)
//   }, [count])
//
//   let selector = !task.active ? ' completed' : '' // Add new class if task completed
//   return (
//     <li className={selector}>
//       <div className="view">
//         <Input makeActive={() => completeTask(task.id)} selector={task} />
//         <label>
//           <span className="title">{task.title}</span>
//           <span className="description">
//             <button className={'icon-play'} onClick={() => setStatus(true)} />
//             <button
//               className={'icon-pause'}
//               onClick={() => {
//                 setStatus(false)
//                 setCount2(count)
//               }}
//             />
//             {status ? <div>{count}</div> : count2}
//           </span>
//           <span className="description">{task.created}</span>
//         </label>
//         <Button classes={'icon-edit'} />
//         <Button classes={'icon-destroy'} destroy={onClickedTask} />
//       </div>
//     </li>
//   )
// }

class Task extends Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      selector: this.props.task.active,
      timerStatus: false,
      defaultTimer: 0,
      currentTimer: 0,
      time: null,
    }
  }

  startTimer() {
    if (this.state.timerStatus) {
      return
    }
    this.setState({ timerStatus: true })
    let time = setInterval(() => {
      if (!this.state.timerStatus) {
        clearInterval(time)
      }
      this.setState({
        currentTimer: this.state.currentTimer + 1,
      })
    }, 1000)
    return this.setState({ time: time })
  }

  stopTimer() {
    this.setState({
      defaultTimer: this.state.currentTimer,
      timerStatus: false,
    })
    clearInterval(this.state.time)
  }

  timerFormatter(value) {
    const minutes = Math.floor(value / 60)
    const seconds = value - minutes * 60
    const secFormat = seconds < 10 ? `0${seconds}` : `${seconds}`
    const minutesFormat = minutes < 10 ? `0${minutes}` : `${minutes}`
    return `${minutesFormat}:${secFormat}`
  }

  render() {
    const { task, onClickedTask, completeTask } = this.props
    const selector = !this.props.task.active ? ' completed' : '' // Add new class if task completed
    return (
      <li className={selector}>
        <div className="view">
          <Input makeActive={() => completeTask(task.id)} selector={task} />
          <label>
            <span className="title">{task.title}</span>
            <span className="description">
              <button className={'icon-play'} onClick={this.startTimer.bind(this)} />
              <button className={'icon-pause'} onClick={this.stopTimer.bind(this)} />
              <div>{this.timerFormatter(this.state.currentTimer)}</div>
            </span>
            <span className="description">{task.created}</span>
          </label>
          <Button classes={'icon-edit'} />
          <Button classes={'icon-destroy'} destroy={onClickedTask} />
        </div>
      </li>
    )
  }
}

export default Task
