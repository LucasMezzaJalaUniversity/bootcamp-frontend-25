import { useState } from "react";
import { Button } from "../atoms/Button"

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    isRunning(true)
  }

  const handleStop = () => {
    isRunning(false)
  }

  const handleReset = () => {
    setTimer(0);
    setIsRunning(false);
  }

  return (
    <div>
      <h1>Timer</h1>
      <span><span>0</span> mins <span>0</span> secs</span>
      <div>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop}>Stop</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  )
}