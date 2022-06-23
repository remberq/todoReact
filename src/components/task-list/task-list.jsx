import PropTypes from 'prop-types'

import Task from '../task/task'

import './task-list.css'

const TaskList = ({ task, completeTask, onRemove }) => {
  return (
    <ul className={'todo-list'}>
      {task.map((item) => {
        return <Task key={item.id} onClickedTask={() => onRemove(item.id)} task={item} completeTask={completeTask} />
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
