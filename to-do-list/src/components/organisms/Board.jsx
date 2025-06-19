import { useRef, useState } from "react"
import { Searcher } from "../molecules/Searcher"
import { Task } from "../molecules/Task"
import { Text } from "../atoms/Text"

export const Board = () => {
  const [tasks, setTasks] = useState([])
  const inputRef = useRef(null)

  const handleSearch = () => {
    const task = inputRef.current.value;
    setTasks(prev => [...prev, task])
  }

  return (
    <div>
      <Text>Pague itinerary</Text>
      <Searcher inputRef={inputRef} handleSearch={handleSearch}></Searcher>
      {tasks.length > 0 ?
        <ul>
          {tasks.map((row, idx) => (
            <Task text={row} key={idx}></Task>
          ))}
        </ul>
      : null}      
    </div>
  )
}