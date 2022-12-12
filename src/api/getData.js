import { TwitterApi } from "twitter-api-v2";

const twitterClient = new TwitterApi(
  "AAAAAAAAAAAAAAAAAAAAAB%2BajwEAAAAAu01MMADYQDJ9lxIu6hNr%2FFb9CQM%3Dr7Czqx037yeOWynH97Rc1JIvNBWroEsLWqSQhQHOnkJfbzHDd9"
);

const readOnlyClient = twitterClient.readOnly;

const user = await readOnlyClient.v2.userByUsername("cryptob_chain");

console.log('El ID del usuario es: ' + user.data.id);

const todosLosTweets = await readOnlyClient.v2.userTimeline(user.data.id, {
  exclude : "replies",
  exclude : "retweets",
  expansions: 'attachments.media_keys',
  'media.fields': 'url',
});

let tweets = [];

for (const unTweet of todosLosTweets) {
  let link = ''
  unTweet.attachments?.media_keys.forEach ((date_1) => {
    todosLosTweets.data.includes.media.forEach ((date_2) => {
      if(date_1 == date_2.media_key) {
        return link = date_2.url
      }
    }) 
    unTweet.url = link 
  })
  tweets.push(unTweet)
}

export default tweets;
