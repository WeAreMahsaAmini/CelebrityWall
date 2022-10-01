import React from 'react'
import { useHistory } from 'react-router-dom'
import { clsx, getCssColorByStatus } from '../../utils'
import MahsaAminiHero from '../../assets/poster.png'
import { SearchInput } from '../SearchInput'
import { Celebrity } from '../../types'

export type HeroProps = {
    query: string
    setQuery: (value: string) => void
    status: Celebrity['status'] | null
    setStatus: (value: Celebrity['status'] | null) => void
}

export const Hero = ({ query, setQuery, status, setStatus }: HeroProps) => {
    const history = useHistory()

    return (
        <div className="flex flex-col gap-2 items-center bg-gray-200 rounded-b-3xl mb-16 justify-center text-center">
            <div className='max-w-6xl mx-auto'>
                <div className='relative grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5'>
                    <div className='col-span-4 lg:col-span-3 px-10 py-10 lg:px-0 lg:py-10 text-start z-10'>
                        <div className='space-y-10'>
                            <div>
                                <h1 className="text-6xl font-black">Celebrity Wall</h1>
                                <h2 className='text-3xl font-medium mb-3'>Rate the Celebrities</h2>
                                <p className="text-base w-3/4">
                                    The goal of this project is to provide a big picture of celebrities
                                    and their stance regarding what is happening in Iran.
                                </p>
                            </div>

                            <div className='space-y-3'>
                                <button
                                    className={clsx('flex items-center gap-x-2 cursor-pointer', (status === 'GOOD' ? 'bg-emerald-500 text-white pr-3 rounded-full' : 'bg-transparent'))}
                                    onClick={() => { if (status === 'GOOD') { setStatus(null) } else { setStatus('GOOD') } }}
                                    type="button"
                                >
                                    <span className={clsx('w-6 h-6 inline-block rounded-full', getCssColorByStatus({ status: 'GOOD', background: true }))} />
                                    <span className='text-base'>Supported in cause</span>
                                </button>
                                <button
                                    className={clsx('flex items-center gap-x-2 cursor-pointer', (status === 'UGLY' ? 'bg-gray-500 text-white pr-3 rounded-full' : 'bg-transparent'))}
                                    onClick={() => { if (status === 'UGLY') { setStatus(null) } else { setStatus('UGLY') } }}
                                    type="button"
                                >
                                    <span className={clsx('w-6 h-6 inline-block rounded-full', getCssColorByStatus({ status: 'UGLY', background: true }))} />
                                    <span className='text-base'>Didn&apos;t react to the cause</span>
                                </button>
                                <button
                                    className={clsx('flex items-center gap-x-2 cursor-pointer', (status === 'BAD' ? 'bg-red-500 text-white pr-3 rounded-full' : 'bg-transparent'))}
                                    onClick={() => { if (status === 'BAD') { setStatus(null) } else { setStatus('BAD') } }}
                                    type="button"
                                >
                                    <span className={clsx('w-6 h-6 inline-block rounded-full', getCssColorByStatus({ status: 'BAD', background: true }))} />
                                    <span className='text-base'>Against the cause</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 w-full opacity-10 md:opacity-100 z-0 md:relative col-span-2 lg:col-span-2 flex justify-end content-end items-end align-bottom'>
                        <img src={MahsaAminiHero} alt='Mahsa Amini Poster' className='w-3/4 mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}
