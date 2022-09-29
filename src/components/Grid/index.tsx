import React from 'react'

import { data } from '../../data/data'
import { Card, Celebrity } from '../Card'
import { Controls } from '../Controls'

export const Grid = () => {
  const [level, setLevel] = React.useState<number>(6)
  const [visible, setVisible] = React.useState<boolean>(true)
  const { celebrities } = data

  const renderBoxes = () =>
    celebrities.map(celebrity => (
      <Card
        celebrity={celebrity as Celebrity}
        level={level}
        visible={visible}
      />
    ))

  return (
    <div className="flex flex-wrap justify-center h-screen">
      {renderBoxes()}
      <Controls
        level={level}
        setLevel={setLevel}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  )
}
