import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"

export const Searcher = () => {
  return (
    <div>
      <Input type={'text'} />
      <Button>Search</Button>
      <Button>Clean</Button>
    </div>
  )
}