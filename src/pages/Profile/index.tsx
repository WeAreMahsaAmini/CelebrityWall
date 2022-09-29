import React from 'react'
import { useParams } from 'react-router-dom'

export const Profile = () => {
  const { id } = useParams<{ id: string }>()

  return <div>{`Hello ${id || ''}!`}</div>
}
