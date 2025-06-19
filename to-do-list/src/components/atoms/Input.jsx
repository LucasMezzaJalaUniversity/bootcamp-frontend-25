export const Input = ({type, value, inputRef, checked, onChange}) => {
  return (
    <input type={type} value={value} ref={inputRef} checked={checked} onChange={onChange}/>
  )
}