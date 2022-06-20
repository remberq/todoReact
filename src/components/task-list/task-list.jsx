import PropTypes from 'prop-types'

import Task from '../task/task'
import './task-list.css'

const TaskList = ({ task, onRemove, completeTask }) => {
  return (
    <ul className={'todo-list'}>
      {task.map((item) => {
        return <Task key={item.id} task={item} onClickedTask={() => onRemove(item.id)} completeTask={completeTask} />
      })}
    </ul>
  )
}

TaskList.propTypes = {
  task: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func,
  completeTask: PropTypes.func,
}

export default TaskList
