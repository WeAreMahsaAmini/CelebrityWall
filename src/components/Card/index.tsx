import React from 'react'
import { useHistory } from 'react-router-dom'
import { Celebrity } from '../../types'
import { clsx, getCssColorByCelebrity } from '../../utils'

export type CardProps = {
  celebrity: Celebrity
  level: number
  visible: boolean
}

export const Card = ({ celebrity, level, visible }: CardProps) => {
  const { id, name, imageUrl } = celebrity

  const history = useHistory()

  // getCssColorByCelebrity({ celebrity, border: true })

  return (
    <button
      type="button"
      className={clsx("shadow-lg bg-white group overflow-hidden transition-all duration-200 mb-3 rounded-xl border-b-4 hover:-translate-y-2", getCssColorByCelebrity({ celebrity, border: true }))}
      onClick={() => {
        history.push(`/profile/${id}`)
      }}
    >
      <div className="relative">

        <img
          src={imageUrl}
          alt={name}
          className="w-full grayscale bg-gray-300 group-hover:grayscale-0 transition-all duration-500 rounded-t-lg"
        />
      </div>
      {visible && (
        <div className='p-3'>
          <div
            className="p-[1px] font-semibold text-left"
          >
            {name}
          </div>
        </div>
      )}
    </button>
  )
}
