import React from 'react'

export type SearchInputProps = {
  value: string
  handleChange: (value: string) => void
}

const SearchInput = ({ value, handleChange }: SearchInputProps) => {
  const onChange = (event: { target: { value: string } }) => {
    handleChange(event?.target?.value)
  }
  return (
    <div className="fixed z-40 left-4 top-4 bg-slate-800 rounded-md p-2 border-2 text-slate-100 border-gray-500 shadow ">
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
        value={value}
      />
    </div>
  )
}

export default SearchInput
