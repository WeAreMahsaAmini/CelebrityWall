import React from 'react'
import { Celebrity } from '../../types'
import { StatusFilterItem } from './StatusFilterItem'

export type StatusFilterProps = {
  status: Celebrity['status'] | null
  setStatus: (value: Celebrity['status'] | null) => void
}

export const StatusFilter = ({
  status: selectedStats,
  setStatus,
}: StatusFilterProps) => (
  <div className="flex flex-row gap-2 bg-slate-800 rounded-md p-2 text-slate-100 shadow items-center">
    <p className="grow">Filter by stance:</p>
    {['GOOD', 'BAD', 'UGLY'].map(status => (
      <StatusFilterItem
        key={status}
        status={status as Celebrity['status']}
        selected={status === selectedStats}
        select={setStatus}
        unselect={() => setStatus(null)}
      />
    ))}
  </div>
)
