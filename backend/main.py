import tweepy
from dotenv import dotenv_values
from helpers.user_tweets import get_user_tweets_by_hashtag
from datetime import datetime

# Get the .env values
config = dotenv_values(".env")

bearer_token = config.get("BEARER_TOKEN")
# access_token = config.get("API_KEY")
# access_token_secret = config.get("API_KEY_SECRET")

start_date = datetime.now().astimezone()
end_date = datetime(2022, 9, 16, 0, 0, 0, 0).astimezone()

# set-up tweepy Client
client = tweepy.Client(bearer_token)


# Get user Tweets
# TODO: Loop all the users
username = "FoadHaydri"
tweet_ids = get_user_tweets_by_hashtag(client, username, start_date, end_date)
print(tweet_ids)
