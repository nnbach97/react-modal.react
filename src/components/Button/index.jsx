import './button.scss'

const Button = (props) => {
  return (
    <>
      <div className="">
        <button className='btn' onClick={props.onClick}>
          {props.children}
        </button>
      </div>
    </>
  )
}

export default Button
