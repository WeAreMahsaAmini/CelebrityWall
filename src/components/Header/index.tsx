import React from 'react'
import { useHistory } from 'react-router-dom'
import { Celebrity } from '../../types'
import { clsx, getCssColorByCelebrity } from '../../utils'
import { SearchInput } from '../SearchInput'

export type HeaderProps = {
    query: string
    setQuery: (value: string) => void
    status: Celebrity['status'] | null
    setStatus: (value: Celebrity['status'] | null) => void
}

export const Header = ({ query, setQuery, status, setStatus }: HeaderProps) => {
    const history = useHistory()

    return (
        <div className='relative bg-zinc-900 border-b shadow'>
            <div className='mx-auto max-w-6xl h-16 flex items-center justify-between px-10 lg:px-0'>
                <p className='text-base md:text-2xl text-white font-black'>Celebrity Wall</p>
                <div>
                    <SearchInput
                        query={query}
                        setQuery={setQuery}
                        filter={{ status, setStatus }}
                        theme="dark"
                    />
                </div>
            </div>
        </div>
    )
}
