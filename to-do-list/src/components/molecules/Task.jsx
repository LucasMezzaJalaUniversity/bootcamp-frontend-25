import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"

export const Task = ({handleEdit, handleDelete}) => {
  return (
    <li>
      <Input type={'checkbox'}></Input>
      <Text>Task</Text>
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </li>
  )
}