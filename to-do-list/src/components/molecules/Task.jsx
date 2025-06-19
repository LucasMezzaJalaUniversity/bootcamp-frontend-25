import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"
import { Text } from "../atoms/Text"

export const Task = ({text, handleEdit, handleDelete}) => {
  return (
    <li>
      <Input type={'checkbox'}></Input>
      <Text>{text}</Text>
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </li>
  )
}