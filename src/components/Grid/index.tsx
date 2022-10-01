import React from 'react'

import { data } from '../../data/data'
import { Celebrity } from '../../types'
import { clsx, getCssColorByStatus } from '../../utils'
import { Card } from '../Card'
import { Controls } from '../Controls'
import { SearchInput } from '../SearchInput'

export type GridProps = {
  query: string
  setQuery: (value: string) => void
  visible: boolean
  setVisible: (value: boolean) => void
  level: number
  setLevel: (value: number) => void
  status: Celebrity['status'] | null
  setStatus: (value: Celebrity['status'] | null) => void
}

export const Grid = ({ query, setQuery, visible, setVisible, level, setLevel, status, setStatus }: GridProps) => {
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
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-7 gap-x-5 px-10 lg:px-0">
        {renderBoxes()}
      </div>
      <Controls
        level={level}
        setLevel={setLevel}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  )
}