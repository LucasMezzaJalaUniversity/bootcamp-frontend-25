import { useState } from "react"
import { Searcher } from "../molecules/Searcher"
import { Task } from "../molecules/Task"

export const Board = () => {
  const [tasks, setTasks] = useState([])
  return (
    <div>
      <Text>Pague itinerary</Text>
      <Searcher></Searcher>
      {tasks.length > 0 ?
        <ul>
          {tasks.map(row => (
            <Task text={row}></Task>
          ))}
        </ul>
      : null}      
    </div>
  )
}