import { useRef } from "react"
import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"

export const Searcher = () => {
  const inputRef = useRef(null);

  const handleSearch = () => {
    const city = inputRef.current.value;

    console.log(city)
  }

  const handleClear = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  return (
    <div>
      <Input type={'text'} inputRef={inputRef}/>
      <Button onClick={handleSearch}>Search</Button>
      <Button onClick={handleClear}>Clean</Button>
    </div>
  )
}