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
    <button type='button' className='text-white' onClick={() => setStatus(null)}>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
    </button>
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
