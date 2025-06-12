import { useRef } from "react"
import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"

export const Searcher = () => {
  const inputRef = useRef(null);

  const handleSearch = () => {
    const city = inputRef.current.value;

    console.log(city)
  }

  return (
    <div>
      <Input type={'text'} inputRef={inputRef}/>
      <Button onClick={handleSearch}>Search</Button>
      <Button>Clean</Button>
    </div>
  )
}