import Input from '../input/input'
import Button from '../button/button'
import './task.css'

const Task = ({ task, onClickedTask, completeTask }) => {
  let selector = !task.active ? ' completed' : '' // Add new class if task completed

  return (
    <li className={selector}>
      <div className="view">
        <Input makeActive={() => completeTask(task.id)} selector={task} />
        <label>
          <span className="description">{task.title}</span>
          <span className="created">{task.created}</span>
        </label>
        <Button classes={'icon-edit'} />
        <Button classes={'icon-destroy'} destroy={onClickedTask} />
      </div>
    </li>
  )
}

export default Task
