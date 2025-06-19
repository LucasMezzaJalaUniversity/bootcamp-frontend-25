export const Input = ({type, value, inputRef, checked}) => {
  return (
    <input type={type} value={value} ref={inputRef} checked={checked}/>
  )
}