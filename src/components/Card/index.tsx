import React from 'react'

export type Celebrity = {
  id: string
  name: string
  imageUrl: string
  status: 'GOOD' | 'BAD' | 'UGLY'
}

export const Card = ({ celebrity }: { celebrity: Celebrity }) => {
  const { id, name, imageUrl, status } = celebrity
  return (
    <div
      className="shadow w-40 m-2 group overflow-hidden"
      key={id}
      // onClick={() => {}}
      onContextMenu={() => {}}
      draggable={false}
    >
      <div className="relative">
        {status === 'GOOD' && (
          <div
            className="absolute inset-0 opacity-40 bg-green-500 group-hover:hidden z-50 transition-all duration-500"
            draggable={false}
          />
        )}
        {status === 'UGLY' && (
          <div
            className="absolute inset-0 opacity-40 bg-red-500 group-hover:hidden z-50 transition-all duration-500"
            draggable={false}
          />
        )}
        <img
          src={imageUrl}
          alt={name}
          className="w-full grayscale group-hover:grayscale-0 transition-all duration-500"
          draggable={false}
        />
      </div>
      <div className="p-2 text-xs">{name}</div>
    </div>
  )
}
