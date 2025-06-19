import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"
import { Text } from "../atoms/Text"

export const Task = ({data, handleEdit, handleDelete, handleState}) => {
  return (
    <li>
      <Input type={'checkbox'} checked={data.state} onChange={e => handleState(data.id)}></Input>
      <Text>{data.task}</Text>
      {
        !data.state ? 
          <>
            <Button onClick={e => handleEdit(data.id)}>Edit</Button>
            <Button onClick={e => handleDelete(data.id)}>Delete</Button>
          </>
      : null}
    </li>
  )
}