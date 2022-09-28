import React from 'react'

import { data } from '../../data/data'
import { Card, Celebrity } from '../Card'

export type GridProps = {
  pos: { x: number; y: number; scale: number }
  searchText: string
}

export const Grid = ({ pos, searchText }: GridProps) => {
  const { celebrities } = data

  const renderBoxes = () =>
    celebrities.map(celebrity => (
      <Card celebrity={celebrity as Celebrity} searchText={searchText} />
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
