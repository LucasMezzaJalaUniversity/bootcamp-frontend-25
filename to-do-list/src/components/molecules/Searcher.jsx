import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"

export const Searcher = ({inputRef, handleSearch, isEdit}) => {
  return (
    <div>
      <Input type={'text'} inputRef={inputRef}/>
      <Button onClick={e => isEdit ? handleSearch(isEdit) : handleSearch()}>{isEdit ? 'Edit' : 'Add'}</Button>
    </div>
  )
}