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
    <input
      type="text"
      className="fixed left-6 top-6 bg-white rounded-xl py-1 px-3 border-2 border-gray-500 shadow focus:outline-none"
      placeholder="Search celebrity"
      onChange={onChange}
      value={value}
    />
  )
}

export default SearchInput
