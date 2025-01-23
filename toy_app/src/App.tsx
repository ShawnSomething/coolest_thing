import React, { useEffect, useState } from 'react';
import './App.css';
import img1 from './image (8).png';
import img2 from './Nathan.jpeg';
import img3 from './skateboard.png';
import img4 from './Blasthopper.png'

const images = [
  {src: img1, caption: "Road Unicycle"},
  {src: img2, caption: "Homeless guy with an iPad"},
  {src: img3, caption: "Cool Skateboard dude"},
  {src: img4, caption: "Blasthopper Game"},
]

function App() {
  const [sparkles, setSparkles] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [pressed, setPressed] = useState(false)

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

  const handleImageClick = () => {
    setPressed(true);
    setTimeout(() => setPressed(false), 100); 
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="App">
        <div className="App-header">
          <h1>👇 The coolest thing right now</h1>
          <img src={images[currentIndex]. src} alt="Coolest thing" className={pressed ? 'pressed' : ''} onClick = {handleImageClick}/>
          <p>{images[currentIndex].caption}</p>
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
