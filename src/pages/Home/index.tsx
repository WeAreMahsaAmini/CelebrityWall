/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

import { Grid } from '../../components/Grid'

export const Home = () => {
  const [pos, setPos] = useState({ oldX: 0, oldY: 0, x: 0, y: 0, scale: 0.5 })
  const [isPanning, setPanning] = useState(false)
  const [clickable, setClickable] = useState(true)

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
    setTimeout(() => {
      setClickable(false)
    }, 100)
    setPos({
      ...pos,
      oldX: event.clientX,
      oldY: event.clientY,
    })
  }

  useEffect(() => {
    const mouseup = () => {
      setTimeout(() => {
        setPanning(false)
        setClickable(true)
      }, 100)
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
    window.addEventListener('mouseup', mouseup)
    window.addEventListener('mousemove', mousemove)
    return () => {
      window.removeEventListener('mouseup', mouseup)
      window.removeEventListener('mousemove', mousemove)
    }
  })
  return (
    <div
      className={`App w-screen h-screen ${isMobile ? '' : 'overflow-hidden'}`}
      onWheelCapture={scrollHandler}
      onMouseDown={onMouseDown}
    >
      <Grid pos={pos} clickable={clickable} />
    </div>
  )
}
