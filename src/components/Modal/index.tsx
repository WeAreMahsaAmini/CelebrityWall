/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/require-default-props */
import React, { Fragment } from 'react'
import { Celebrity } from '../Card'

export type ModalProps = {
  celebrity?: Celebrity
  setCelebrity: (celebrity: Celebrity | undefined) => void
}

export const Modal = ({ celebrity, setCelebrity }: ModalProps) => {
  const twitterAccount = celebrity?.socialAccounts.find(
    account => account.type === 'TWITTER',
  )
  const instagramAccount = celebrity?.socialAccounts.find(
    account => account.type === 'INSTAGRAM',
  )
  if (!celebrity) {
    return null
  }
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full bg-white opacity-50"
        draggable={false}
        hidden={!celebrity}
        onClick={() => setCelebrity(undefined)}
      ></div>
      <div
        className="absolute rounded-md top-1/4 left-1/4 w-1/2 h-1/2 bg-white opacity-100 flex flex-col justify-center items-center z-50"
        draggable={false}
        hidden={!celebrity}
      >
        <button
          className="rounded-md bg-red-400 text-sm p-1 m-1"
          type="button"
          onClick={() => setCelebrity(undefined)}
        >
          Close
        </button>
        {twitterAccount?.url && (
          <a
            className="rounded-md bg-sky-400 text-sm p-1"
            href={`https://twitter.com/intent/tweet?text=Hey%20@${twitterAccount?.url}&hashtags=MahsaAmini&`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
        )}
        {instagramAccount?.url && (
          <a
            className="rounded-md bg-sky-400 text-sm p-1"
            href={`https://twitter.com/intent/tweet?text=Hey%20@${instagramAccount?.url}&hashtags=MahsaAmini&`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
        )}
      </div>
    </>
  )
}
