import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"
import { Text } from "../atoms/Text"

export const Task = ({data, handleEdit, handleDelete}) => {
  return (
    <li>
      <Input type={'checkbox'} checked={data.state}></Input>
      <Text>{data.task}</Text>
      <Button onClick={e => handleEdit(data.id)}>Edit</Button>
      <Button onClick={e => handleDelete(data.id)}>Delete</Button>
    </li>
  )
}