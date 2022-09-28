import React from 'react'

import { data } from '../../data/data'
import { Card, Celebrity } from '../Card'

export type GridProps = {
  pos: { x: number; y: number; scale: number }
}

export const Grid = ({ pos }: GridProps) => {
  const { celebrities } = data

  const renderBoxes = () =>
    celebrities.map(celebrity => <Card celebrity={celebrity as Celebrity} />)

  return (
    <div
      className="flex flex-wrap"
      style={{
        width: `${30 * 160}px`,
        transformOrigin: '0 0',
        transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
      }}
      draggable
    >
      {renderBoxes()}
    </div>
  )
}
