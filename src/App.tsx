/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react'
import './App.css'
import { Grid } from './components/Grid'

function App() {
  const [pos, setPos] = useState({ oldX: 0, oldY: 0, x: 0, y: 0, scale: 0.5 })
  const [isPanning, setPanning] = useState(false)
  const [isPanningTouch, setPanningTouch] = useState(false)

  const scrollHandler = (event: any) => {
    const minScale = 0.2
    const maxScale = 20

    const delta = event.deltaY * -0.01 * (pos.scale / 5)

    const newScale = Math.max(Math.min(pos.scale + delta, maxScale), minScale)

    const ratio = 1 - newScale / pos.scale

    setPos({
      ...pos,
      scale: newScale,
      x: pos.x + (event.clientX - pos.x) * ratio,
      y: pos.y + (event.clientY - pos.y) * ratio,
    })
  }

  const onMouseDown = (event: any) => {
    event.preventDefault()
    setPanning(true)
    setPos({
      ...pos,
      oldX: event.clientX,
      oldY: event.clientY,
    })
  }

  const onTouchStart = (event: any) => {
    setPanningTouch(true)
    setPos({
      ...pos,
      oldX: event.touches[0].clientX,
      oldY: event.touches[0].clientY,
    })
  }

  useEffect(() => {
    const mouseup = () => {
      setPanning(false)
    }
    const touchend = () => {
      setPanning(false)
    }
    const mousemove = (event: any) => {
      event.preventDefault()
      if (isPanning) {
        setPos({
          ...pos,
          x: pos.x + event.clientX - pos.oldX,
          y: pos.y + event.clientY - pos.oldY,
          oldX: event.clientX,
          oldY: event.clientY,
        })
      }
    }
    const touchmove = (event: any) => {
      event.preventDefault()
      if (isPanningTouch) {
        setPos({
          ...pos,
          x: pos.x + event.touches[0].clientX - pos.oldX,
          y: pos.y + event.touches[0].clientY - pos.oldY,
          oldX: event.touches[0].clientX,
          oldY: event.touches[0].clientY,
        })
      }
    }
    window.addEventListener('mouseup', mouseup)
    window.addEventListener('touchend', touchend)
    window.addEventListener('mousemove', mousemove, { passive: false })
    window.addEventListener('touchmove', touchmove, { passive: false })
    return () => {
      window.removeEventListener('mouseup', mouseup)
      window.removeEventListener('touchend', touchend)
      window.removeEventListener('mousemove', mousemove)
      window.removeEventListener('touchmove', touchmove)
    }
  })

  return (
    <div
      className="App"
      onWheelCapture={scrollHandler}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <Grid pos={pos} />
    </div>
  )
}

export default App
