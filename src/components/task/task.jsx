import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Input from '../input/input'
import Button from '../button/button'
import { timerFormatter } from '../../logic'

import './task.css'

const Task = ({ task, onClickedTask, completeTask }) => {
  const [state, setState] = useState({
    timerStatus: false,
    defaultTimer: 0,
    currentTimer: 0,
    time: null,
  })

  const { timerStatus, currentTimer, time } = state
  const classSelector = !task.active ? ' completed' : '' // Add new class if task completed
  useEffect(() => {
    if (timerStatus) {
      let timer = setInterval(() => {
        setState((s) => {
          return { ...s, currentTimer: s.currentTimer + 1 }
        })
      }, 1000)
      return setState({ ...state, time: timer })
    } else {
      setState({ ...state, defaultTimer: currentTimer })
      clearInterval(time)
    }
  }, [timerStatus])

  return (
    <li className={classSelector}>
      <div className="view">
        <Input makeActive={() => completeTask(task.id)} selector={task} />
        <label>
          <span className="title">{task.title}</span>
          <span className="description">
            <button className={'icon-play'} onClick={() => !timerStatus && setState({ ...state, timerStatus: true })} />
            <button
              className={'icon-pause'}
              onClick={() => timerStatus && setState({ ...state, timerStatus: false })}
            />
            <div>{timerFormatter(currentTimer)}</div>
          </span>
          <span className="description">{task.created}</span>
        </label>
        <Button classes={'icon-edit'} />
        <Button classes={'icon-destroy'} destroy={onClickedTask} />
      </div>
    </li>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onClickedTask: PropTypes.func,
  completeTask: PropTypes.func,
}

export default Task
