import { Button } from "../atoms/Button"

export const Timer = () => {
  return (
    <div>
      <h1>Timer</h1>
      <span><span>0</span> mins <span>0</span> secs</span>
      <div>
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button>Reset</Button>
      </div>
    </div>
  )
}