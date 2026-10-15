
import { useState, useEffect } from "react";

function App() {

  // Task 1: Digital Timer
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };


  // Task 2: Automatic Welcome Message
  const [message, setMessage] = useState("Please Wait...");
  const [restart, setRestart] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Welcome to React!");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [restart]);

  const handleRestart = () => {
    setMessage("Please Wait...");
    setRestart((prev) => prev + 1);
  };


  // Output
  return (
    <>
    <div>

      <div className="bg-purple-950 text-white text-center h-30 p-5">
      <h1>Task 1: Digital Timer</h1>

      <h2>{count} Seconds</h2>

      <button onClick={handleStart} className="bg-black text-white w-30 rounded-2xl ">Start</button>
      <button onClick={handleStop} className="bg-black text-white w-30 rounded-2xl">Stop</button>
      <button onClick={handleReset} className="bg-black text-white w-30 rounded-2xl">Reset</button>

      </div>

      <div className="bg-pink-700 text-white text-center h-30 p-5">
      <h1>Task 2: Automatic Welcome Message</h1>

      <h2>{message}</h2>

      
      <button onClick={handleRestart}  className="bg-black text-white w-30 rounded-2xl">Restart</button>
      </div>
    </div>
    </>
  );
}

export default App;

