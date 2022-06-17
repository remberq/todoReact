import './input.css'
import PropTypes from 'prop-types'

const Input = ({makeActive, selector}) => {
  let checkComplete = !selector.active // Check if status task is not active, change checked status
  return (
    <input defaultChecked={checkComplete} className={'toggle'} type={'checkbox'} onClick={makeActive}/>
  )
}

Input.propTypes = {
  makeActive: PropTypes.func,
  selector: PropTypes.object
}

export default Input