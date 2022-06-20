import './input.css'
import PropTypes from 'prop-types'

const Input = ({ makeActive, selector }) => {
  return <input defaultChecked={!selector.active} className={'toggle'} type={'checkbox'} onClick={makeActive} />
}

Input.propTypes = {
  makeActive: PropTypes.func,
  selector: PropTypes.object,
}

export default Input
