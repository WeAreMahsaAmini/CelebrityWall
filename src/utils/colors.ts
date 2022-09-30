import { Celebrity } from '../types'
import { clsx } from './clsx'

export const getCssColorByStatus = (options: {
  status: Celebrity['status']
  background?: boolean
  text?: boolean
}): string => {
  const { status, background, text } = options
  return clsx([
    status === 'GOOD' && [
      background && 'bg-green-500',
      text && 'text-green-500',
    ],
    status === 'BAD' && [background && 'bg-red-500', text && 'text-red-500'],
    status === 'UGLY' && [background && 'bg-gray-500', text && 'text-gray-500'],
  ])
}

export const getCssColorByCelebrity = (options: {
  celebrity: Celebrity
  background?: boolean
  text?: boolean
}): string => {
  const { celebrity, background, text } = options
  return getCssColorByStatus({
    status: celebrity.status,
    background,
    text,
  })
}
