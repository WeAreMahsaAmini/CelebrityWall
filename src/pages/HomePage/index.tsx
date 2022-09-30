import React from 'react'

import { Grid } from '../../components/Grid'
import { clsx, getCssColorByStatus } from '../../utils'

export const HomePage = () => (
  <div className="flex flex-col">
    <div className="flex flex-col gap-2 items-center p-5 text-center">
      <h1 className="text-4xl font-bold">Celebrity Wall</h1>
      <div className="flex flex-col gap-1 items-center">
        <p className="text-lg">
          The goal of this project is to provide a big picture of celebrities
          and their stance regarding what is happening in Iran.
        </p>
        <p className="text-lg">
          <p
            className={clsx(
              'inline font-bold text-white px-1',
              getCssColorByStatus({ status: 'GOOD', background: true }),
            )}
          >
            Green celebrities
          </p>{' '}
          supported the cause,{' '}
          <p
            className={clsx(
              'inline font-bold text-white px-1',
              getCssColorByStatus({ status: 'UGLY', background: true }),
            )}
          >
            gray celebrities
          </p>{' '}
          didn&apos;t react to the cause, and{' '}
          <p
            className={clsx(
              'inline font-bold text-white px-1',
              getCssColorByStatus({ status: 'BAD', background: true }),
            )}
          >
            red celebrities
          </p>{' '}
          are against the cause!
        </p>
      </div>
    </div>
    <Grid />
  </div>
)
