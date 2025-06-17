import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"

export const Searcher = ({inputRef, handleSearch, handleClear}) => {
  return (
    <div>
      <Input type={'text'} inputRef={inputRef}/>
      <Button onClick={handleSearch}>Search</Button>
      <Button onClick={handleClear}>Clean</Button>
    </div>
  )
}