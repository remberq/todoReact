import './footer.css'
import PropTypes from 'prop-types'

const Footer = ({filterTask, count, destroyAllComplete}) => {
  
  function delegationListener(e) {
    e.currentTarget.childNodes.forEach(item => {
      item.childNodes[0].classList.remove('selected');
    });
    e.target.classList.add('selected')
    filterTask(e.target.textContent)
  }
  
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <ul className="filters" onClick={delegationListener}>
        <li>
          <button className={'selected'}>All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
      <button className={'clear-completed'} onClick={destroyAllComplete}>Clear completed</button>
    </footer>
  )
}

Footer.propTypes = {
  filterTask: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  destroyAllComplete: PropTypes.func.isRequired
}

export default Footer