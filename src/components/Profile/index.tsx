/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/require-default-props */
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton } from 'react-twitter-embed'
import { useHistory } from 'react-router-dom'
import { Celebrity } from '../Card'

export type ProfileProps = {
  celebrity: Celebrity
}

export const Profile = ({ celebrity }: ProfileProps) => {
  const history = useHistory()

  const twitterAccount = celebrity?.socialAccounts.find(
    account => account.type === 'TWITTER',
  )

  return (
    <div className="p-10 h-full">
      <div className="flex flex-col rounded-md bg-neutral-100">
        <button
          type="button"
          className="text-neutral-600 w-1/6 bg-neutral-200 rounded-md m-2"
          onClick={() => history.push('/')}
        >
          back
        </button>
        <img
          src={celebrity.imageUrl}
          alt={celebrity.name}
          className="w-1/2 rounded-full overflow-hidden mx-auto"
        />
        <h1 className="text-2xl text-center mt-5 text-neutral-800">
          {celebrity.name}
        </h1>
        {celebrity.status !== 'BAD' && (
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
        {celebrity.status === 'BAD' && twitterAccount?.url && (
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
