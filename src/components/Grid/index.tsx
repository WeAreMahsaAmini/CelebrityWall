import React from 'react'

import { data } from '../../data/data'
import { Card, Celebrity } from '../Card'
import { Controls } from '../Controls'
import SearchInput from '../SearchInput'

export const Grid = () => {
  const [level, setLevel] = React.useState<number>(6)
  const [visible, setVisible] = React.useState<boolean>(true)
  const [searchText, setSearchText] = React.useState('')
  const { celebrities } = data

  const renderBoxes = () =>
    celebrities.map(celebrity => {
      const nameIncludesSearch = celebrity.name
        .toLowerCase()
        .includes(searchText.toLowerCase())

      if (!nameIncludesSearch) return null

      return (
        <Card
          celebrity={celebrity as Celebrity}
          level={level}
          visible={visible}
        />
      )
    })

  return (
    <div className="flex flex-wrap justify-center h-screen">
      {renderBoxes()}
      <Controls
        level={level}
        setLevel={setLevel}
        visible={visible}
        setVisible={setVisible}
      />
      <SearchInput value={searchText} handleChange={setSearchText} />
    </div>
  )
}
