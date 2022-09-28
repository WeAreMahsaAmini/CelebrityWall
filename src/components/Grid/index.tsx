import React from 'react'

import { data } from '../../data/data'
import { Card, Celebrity } from '../Card'

export type GridProps = {
  pos: { x: number; y: number; scale: number }
  setCelebrity: (celebrity: Celebrity) => void
}

export const Grid = ({ pos, setCelebrity }: GridProps) => {
  const { celebrities } = data

  const renderBoxes = () =>
    celebrities.map(celebrity => (
      <Card celebrity={celebrity as Celebrity} setCelebrity={setCelebrity} />
    ))

  return (
    <div
      className="flex flex-wrap"
      style={{
        width: `${25 * 160}px`,
        transformOrigin: '0 0',
        transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
      }}
    >
      {renderBoxes()}
    </div>
  )
}
