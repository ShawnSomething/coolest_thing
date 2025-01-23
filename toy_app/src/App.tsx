import React, { useEffect, useState } from 'react';
import './App.css';
import img from './image (8).png';

function App() {
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const sparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }
      setSparkles((prev) => [...prev, sparkle])

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id))
      }, 1000)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <div className="App">
        <div className="App-header">
          <h1>👇 The coolest thing right now</h1>
          <img src={img} alt="Coolest thing" />
          <p>Road Unicycle</p>
        </div>
        <div className="sparkle-container">
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="sparkle"
              style={{
                left: sparkle.x,
                top: sparkle.y,
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
