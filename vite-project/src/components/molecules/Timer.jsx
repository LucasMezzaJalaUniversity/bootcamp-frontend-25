import { useEffect, useRef, useState } from "react";
import { Button } from "../atoms/Button"

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const ref = useRef(null)

  useEffect(() => {
    if(isRunning) {
      ref.current = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    } else if(ref.current) {
      clearInterval(ref.current)
    };
    
    return () => {
      if(ref.current) {
        clearInterval(ref.current)
      };
    }
  }, [isRunning])

  const handleStart = () => {
    setIsRunning(true)
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setTimer(0);
    setIsRunning(false);
  }

  const formatTime = (time) => {
    const min = Math.floor(time / 60).toString().padStart(2, "0")
    const sec = (time % 60).toString().padStart(2, "0")
    return `${min} mins ${sec} secs`;
  }

  return (
    <div>
      <h1>Timer</h1>
      <span>{formatTime(timer)}</span>
      <div>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop}>Stop</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  )
}