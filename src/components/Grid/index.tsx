import React from 'react'

import { data } from '../../data/data'
import { Celebrity } from '../../types'
import { Card } from '../Card'
import { Controls } from '../Controls'
import { SearchInput } from '../SearchInput'

export const Grid = () => {
  const [level, setLevel] = React.useState<number>(6)
  const [visible, setVisible] = React.useState<boolean>(true)
  const [query, setQuery] = React.useState('')
  const [status, setStatus] = React.useState<Celebrity['status'] | null>(null)
  const { celebrities } = data

  const renderBoxes = () =>
    celebrities.map(celebrity => {
      const nameIncludesSearch = celebrity.name
        .toLowerCase()
        .includes(query.toLowerCase())

      if (!nameIncludesSearch) return null
      if (status && celebrity.status !== status) return null

      return <Card celebrity={celebrity} level={level} visible={visible} />
    })

  return (
    <div className="flex flex-wrap justify-center content-start h-screen">
      {renderBoxes()}
      <Controls
        level={level}
        setLevel={setLevel}
        visible={visible}
        setVisible={setVisible}
      />
      <SearchInput
        query={query}
        setQuery={setQuery}
        filter={{ status, setStatus }}
      />
    </div>
  )
}
