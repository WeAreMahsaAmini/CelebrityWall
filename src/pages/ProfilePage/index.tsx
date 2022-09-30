/* eslint-disable react/self-closing-comp */
import React from 'react'
import { useParams } from 'react-router-dom'
import { Profile } from '../../components/Profile'
import { data } from '../../data/data'

export const ProfilePage = () => {
  const { id } = useParams<{ id: string }>()
  const celebrityIndex = data.celebrities.findIndex(c => c.id === id)
  const celebrity = data.celebrities[celebrityIndex]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 h-screen">
      <div className="col-start-1 md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-1">
        <Profile celebrity={celebrity} />
      </div>
    </div>
  )
}
