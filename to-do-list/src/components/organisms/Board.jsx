import { useRef, useState } from "react"
import { Searcher } from "../molecules/Searcher"
import { Task } from "../molecules/Task"
import { Text } from "../atoms/Text"

export const Board = () => {
  const [tasks, setTasks] = useState([])
  const [isEdit, setIsEdit] = useState(0)
  const inputRef = useRef(null)

  const handleSearch = (id = '') => {
    const task = inputRef.current.value;

    if(!isEdit) {
      setTasks(prev => [...prev, {id: Date.now(), task: task, state: false}])
    } else {
      const selectedTask = tasks.find(row => row.id === id);
      setTasks(prev => prev.filter(row => row.id !== selectedTask.id))
      setTasks(prev => [...prev, {...selectedTask, task: task}])
      setIsEdit(0)
    }

    inputRef.current.value = '';
  }

  const handleEdit = id => {
    const task = tasks.find(row => row.id === id);
    if(!task) return;

    setIsEdit(id)

    inputRef.current.value = task.task
    inputRef.current.focus();
  }

  const handleDelete = id => {
    setTasks(prev => prev.filter(row => row.id !== id))
  }

  return (
    <div>
      <Text>Pague itinerary</Text>
      <Searcher inputRef={inputRef} handleSearch={handleSearch} isEdit={isEdit}></Searcher>
      {tasks.length > 0 ?
        <ul>
          {tasks.map((row, idx) => (
            <Task data={row} key={idx} handleDelete={handleDelete} handleEdit={handleEdit}></Task>
          ))}
        </ul>
      : null}      
    </div>
  )
}