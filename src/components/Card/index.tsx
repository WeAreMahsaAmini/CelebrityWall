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

  const levelMapping: Record<string, { size: number; s: number }> = {
    0: { size: 20, s: 2 },
    1: { size: 30, s: 3 },
    2: { size: 40, s: 4 },
    3: { size: 60, s: 6 },
    4: { size: 80, s: 8 },
    5: { size: 100, s: 10 },
    6: { size: 120, s: 12 },
    7: { size: 140, s: 14 },
    8: { size: 180, s: 18 },
  }

  return (
    <button
      type="button"
      className="shadow group overflow-hidden m-[1px] transition-all duration-200"
      onClick={() => {
        history.push(`/profile/${id}`)
      }}
      style={{
        width: `${levelMapping[level].size}px`,
      }}
    >
      <div className="relative">
        <div
          className={clsx(
            'absolute inset-0 opacity-40 group-hover:hidden z-30 transition-all duration-500',
            getCssColorByCelebrity({ celebrity, background: true }),
          )}
        />

        <img
          src={imageUrl}
          alt={name}
          className="w-full grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      {visible && (
        <div
          className="p-[1px] text-center"
          style={{ fontSize: `${levelMapping[level].s}px` }}
        >
          {name}
        </div>
      )}
    </button>
  )
}
