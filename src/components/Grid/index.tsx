import React from 'react'
import Fuse from 'fuse.js'

import { data } from '../../data/data'
import { Celebrity } from '../../types'
import { Card } from '../Card'
import { Controls } from '../Controls'
import { SearchInput } from '../SearchInput'

const fuse = new Fuse(data.celebrities, {
  keys: ['name'],
  shouldSort: true,
  threshold: 0.2,
  ignoreLocation: true,
  minMatchCharLength: 1,
  findAllMatches: true,
})

export const Grid = () => {
  const [level, setLevel] = React.useState<number>(6)
  const [visible, setVisible] = React.useState<boolean>(true)
  const [query, setQuery] = React.useState('')
  const [status, setStatus] = React.useState<Celebrity['status'] | null>(null)
  const { celebrities: rawCelebs } = data

  const celebs =
    query.trim() === '' ? rawCelebs : fuse.search(query.trim()).map(r => r.item)

  const renderBoxes = () =>
    celebs.map(celebrity => {
      if (status && celebrity.status !== status) return null

      return (
        <Card
          key={celebrity.id}
          celebrity={celebrity}
          level={level}
          visible={visible}
        />
      )
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
