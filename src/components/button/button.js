import './button.css'
const Button = ({classes = '', text, destroy}) => {
  return (
    <button className={`icon ${classes}`} onClick={destroy}>{ text ? text : '' }</button>
  )
}

export default Button