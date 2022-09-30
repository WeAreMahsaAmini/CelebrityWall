/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { Celebrity } from '../../types'
import { clsx, getCssColorByStatus } from '../../utils'

export type StatusFilterItemProps = {
  status: Celebrity['status']
  selected: boolean
  select: (value: Celebrity['status']) => void
  unselect: () => void
}

export const StatusFilterItem = ({
  status,
  selected,
  select,
  unselect,
}: StatusFilterItemProps) => (
  <button
    type="button"
    className={clsx(
      'w-5 h-5 rounded-full',
      selected && getCssColorByStatus({ status, background: true }),
      !selected && ['border-2', getCssColorByStatus({ status, border: true })],
    )}
    onClick={selected ? unselect : () => select(status)}
  />
)
