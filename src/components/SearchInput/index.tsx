import React from 'react'
import { StatusFilterProps, StatusFilter } from './StatusFilter'

export type SearchInputProps = {
  query: string
  setQuery: (value: string) => void
  filter: StatusFilterProps
}

export const SearchInput = ({
  query,
  setQuery,
  filter: { status, setStatus },
}: SearchInputProps) => {
  const onChange = (event: { target: { value: string } }) => {
    setQuery(event?.target?.value)
  }
  return (
    <div className="fixed z-50 left-4 bottom-4 flex flex-col gap-2">
      <StatusFilter status={status} setStatus={setStatus} />
      <div className="bg-slate-800 rounded-md p-2 text-slate-100 shadow">
        <svg
          className="float-left"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="24px"
          height="24px"
          fill="currentColor"
        >
          <path d="M 13 3 C 7.488281 3 3 7.488281 3 13 C 3 18.511719 7.488281 23 13 23 C 15.398438 23 17.597656 22.148438 19.324219 20.734375 L 25.292969 26.707031 C 25.542969 26.96875 25.917969 27.074219 26.265625 26.980469 C 26.617188 26.890625 26.890625 26.617188 26.980469 26.265625 C 27.074219 25.917969 26.96875 25.542969 26.707031 25.292969 L 20.734375 19.320312 C 22.148438 17.597656 23 15.398438 23 13 C 23 7.488281 18.511719 3 13 3 Z M 13 5 C 17.429688 5 21 8.570312 21 13 C 21 17.429688 17.429688 21 13 21 C 8.570312 21 5 17.429688 5 13 C 5 8.570312 8.570312 5 13 5 Z M 13 5 " />
        </svg>
        <input
          type="text"
          className="bg-transparent focus:outline-none ml-2"
          placeholder="Search celebrity"
          onChange={onChange}
          value={query}
        />
      </div>
    </div>
  )
}
