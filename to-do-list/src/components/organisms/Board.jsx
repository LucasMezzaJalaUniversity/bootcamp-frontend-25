import { useReducer, useRef } from "react"
import { InputTask } from "../molecules/InputTask"
import { Task } from "../molecules/Task"
import { Text } from "../atoms/Text"

const taskReducer = (tasks, action) => {
  if(action.type === 'add-id') {
    return {...tasks, edit: action.id}
  } else if(action.type === 'add') {
    return {...tasks , tasks: [...tasks.tasks, action.task ]}
  } else if (action.type === 'edit') {
    return {edit: 0 , tasks: tasks.tasks.map(row => {
      return row.id === action.task.id ? action.task : row
    })}
  } else if(action.type === 'delete') {
    return {...tasks , tasks: tasks.tasks.filter(row => row.id !== action.task.id)}
  } else {
    throw Error('Unknown action: ' + action.type)
  }
}

export const Board = () => {
  const [obj, dispatch] = useReducer(taskReducer, {tasks: [], edit: 0});
  const inputRef = useRef(null)

  const handleInput = () => {
    const task = inputRef.current.value;

    if(!obj.edit) {
      dispatch({
        type: 'add',
        task: {id: Date.now(), task: task, state: false}
      })
    } else {
      const selectedTask = obj.tasks.find(row => row.id === obj.edit);
      dispatch({
        type: 'edit',
        task: {...selectedTask, task: task},
      }) 
    }

    inputRef.current.value = '';
  }

  const handleEdit = id => {
    const task = obj.tasks.find(row => row.id === id);
    if(!task) return;

    dispatch({
      type: 'add-id',
      id: id,
    }) 

    inputRef.current.value = task.task
    inputRef.current.focus();
  }

  const handleDelete = id => {
    dispatch({
      type: 'delete',
      task: {id: id},
    })  
  }

  const handleState = id => {
    const selectedTask = obj.tasks.find(row => row.id === id);
    dispatch({
      type: 'edit',
      task: {...selectedTask, state: !selectedTask.state},
    })  
  }

  return (
    <div>
      <Text>Pague itinerary</Text>
      <InputTask inputRef={inputRef} handleSearch={handleInput}></InputTask>
      {obj.tasks.length > 0 ?
        <ul>
          {obj.tasks.map((row, idx) => (
            <>
              <Task data={row} key={idx} handleDelete={handleDelete} handleEdit={handleEdit} handleState={handleState}></Task>
            </>
          ))}
        </ul>
      : null}      
    </div>
  )
}