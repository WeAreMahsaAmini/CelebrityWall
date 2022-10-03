
from datetime import datetime, timezone
import tweepy

WANTED_HASHTAGS = ["#mahsaamini", "#مهسا_امینی", "#opiran"]


def get_user_tweets(client: tweepy.Client, user_name: str, start_date: datetime.astimezone, end_date: datetime.astimezone):
    """Get User's Tweets
    This endpoint/method returns Tweets composed by a single user,
    specified by the requested user ID

    :param user_name
    :return: [user tweets]
    """

    # Get user by username
    user = client.get_user(username=user_name)
    if not user.data:
        # if there is no user, return None
        return None
    user = user.data

    # Get user tweets
    # TODO: find a way to filter by hashtag here
    users_tweets = client.get_users_tweets(
        id=user.id,
        end_time=start_date,
        start_time=end_date
    )
    return users_tweets.data


def get_user_tweets_by_hashtag(client: tweepy.Client, user_name: str, start_date: datetime.astimezone, end_date: datetime.astimezone):
    """Get User's tweets which has the hashtag

    :param user_name
    :return: [Tweet ID]
    """
    # call the get_user_tweets function
    users_tweets = get_user_tweets(client, user_name, start_date, end_date)
    if users_tweets:
        tweets_with_hashtag = []
        for tweet in users_tweets:
            # Check if one of hashtags is on the tweet
            if any([wanted_hashtag in tweet.text.lower() for wanted_hashtag in WANTED_HASHTAGS]):
                tweets_with_hashtag.append(tweet.id)
        return tweets_with_hashtag
