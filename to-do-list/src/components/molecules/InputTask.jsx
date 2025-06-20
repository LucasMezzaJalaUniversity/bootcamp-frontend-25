import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"

export const InputTask = ({inputRef, handleSearch}) => {
  return (
    <div>
      <Input type={'text'} inputRef={inputRef}/>
      <Button onClick={handleSearch}>Add</Button>
    </div>
  )
}