import React from 'react'

import { Grid } from '../../components/Grid'
import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { Celebrity } from '../../types'

export const HomePage = () => {
  const [level, setLevel] = React.useState<number>(6)
  const [visible, setVisible] = React.useState<boolean>(true)
  const [query, setQuery] = React.useState('')
  const [status, setStatus] = React.useState<Celebrity['status'] | null>(null)

  return (
    <div className="flex flex-col bg-gray-50">
      <Header query={query} setQuery={setQuery} status={status} setStatus={setStatus} />
      <Hero query={query} setQuery={setQuery} status={status} setStatus={setStatus} />
      <Grid query={query} setQuery={setQuery} visible={visible} setVisible={setVisible} level={level} setLevel={setLevel} status={status} setStatus={setStatus} />
    </div>
  )
}