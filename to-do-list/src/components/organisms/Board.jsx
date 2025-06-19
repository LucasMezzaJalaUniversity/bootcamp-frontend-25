import { useRef, useState } from "react"
import { Searcher } from "../molecules/Searcher"
import { Task } from "../molecules/Task"
import { Text } from "../atoms/Text"

export const Board = () => {
  const [tasks, setTasks] = useState([])
  const inputRef = useRef(null)

  const handleSearch = () => {
    const task = inputRef.current.value;
    setTasks(prev => [...prev, {id: Date.now(), task: task, state: false}])
  }

  // const handleEdit = id => {
  //   setTasks(prev => [...prev, task])
  // }

  const handleDelete = id => {
    setTasks(prev => prev.filter(row => row.id !== id))
  }

  return (
    <div>
      <Text>Pague itinerary</Text>
      <Searcher inputRef={inputRef} handleSearch={handleSearch}></Searcher>
      {tasks.length > 0 ?
        <ul>
          {tasks.map((row, idx) => (
            <Task data={row} key={idx} handleDelete={handleDelete}></Task>
          ))}
        </ul>
      : null}      
    </div>
  )
}