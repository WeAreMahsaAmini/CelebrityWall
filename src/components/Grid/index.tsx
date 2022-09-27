import React, { Fragment } from 'react'

import {
  TransformWrapper,
  TransformComponent,
} from '@pronestor/react-zoom-pan-pinch'
import { data } from '../../data/data'
import { Card, Celebrity } from '../Card'

export const Grid = () => {
  const { celebrities } = data

  const renderBoxes = () =>
    celebrities.map(celebrity => <Card celebrity={celebrity as Celebrity} />)

  return (
    <TransformWrapper
      minScale={0.1}
      maxScale={2}
      initialScale={0.5}
      initialPositionX={0}
      initialPositionY={0}
      limitToBounds={false}
    >
      {({ zoomIn, zoomOut, resetTransform }) => (
        <>
          <div className="flex space-x-2 items-center justify-center">
            <button
              type="button"
              onClick={() => {
                zoomIn()
              }}
            >
              +
            </button>
            <button type="button" onClick={() => zoomOut()}>
              -
            </button>
            <button type="button" onClick={() => resetTransform()}>
              x
            </button>
          </div>
          <TransformComponent>
            <div className="flex flex-wrap m-5 items-start h-[100vh] w-[400vw] ">
              {renderBoxes()}
            </div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  )
}
