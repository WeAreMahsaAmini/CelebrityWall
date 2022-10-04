import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton } from 'react-twitter-embed'
import { useHistory } from 'react-router-dom'
import { Celebrity } from '../../types'

export type ProfileProps = {
  celebrity: Celebrity
}

export const Profile = ({ celebrity }: ProfileProps) => {
  const history = useHistory()

  const twitterAccount = celebrity?.socialAccounts.find(
    account => account.type === 'TWITTER',
  )

  function HandleColorStatus() {
    switch(celebrity.status) {
      case 'BAD':
        return 'bg-red-500'
      case 'GOOD':
        return 'bg-green-500'
      case 'UGLY':
        return 'bg-gray-500'
      default:
        return 'bg-transparent'
    }
  }

  return (
    <div className="sm:p-10 min-h-screen">
      <div className="flex flex-col rounded-md bg-neutral-100">
        <button
          type="button"
          className="text-neutral-600 w-6 p-1 m-3"
          onClick={() => history.goBack()}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <div className='relative w-1/2 mx-auto'>
          <img
            src={celebrity.imageUrl}
            alt={celebrity.name}
            className="w-full h-full rounded-full overflow-hidden object-cover"
          />
          <div className={`z-10 absolute bottom-0 right-0 w-5 h-5 rounded-full ${HandleColorStatus()}`}>{' '}</div>
        </div>
        <h1 className="text-2xl text-center mt-5 text-neutral-800">
          {celebrity.name}
        </h1>
        {celebrity.status !== 'UGLY' && (
          <div className="p-5">
            {/* <TwitterTweetEmbed
              tweetId="1574815161168412675"
              options={{ cards: 'hidden', theme: 'dark', conversation: 'none' }}
            /> */}
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterAccount?.url || ''}
              options={{ height: 600 }}
              noHeader
              noFooter
              noBorders
              transparent
              tweetLimit={1}
            />
          </div>
        )}
        {celebrity.status === 'UGLY' && twitterAccount?.url && (
          <div className="p-10 place-content-center">
            <div className="">
              {`This celebrity has not supported the movement yet. Tweet and
              ask for support:`}
            </div>
            <div className="flex w-full mt-5 justify-center">
              <TwitterShareButton
                url="https://wall.wearemahsaamini.com"
                options={{
                  text: `Hey @${twitterAccount.url}! Please support the #MahsaAmini and #IranProtests2022!`,
                  size: 'large',
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
