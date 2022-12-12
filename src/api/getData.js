import { TwitterApi } from "twitter-api-v2";

const twitterClient = new TwitterApi(
  "AAAAAAAAAAAAAAAAAAAAAB%2BajwEAAAAAu01MMADYQDJ9lxIu6hNr%2FFb9CQM%3Dr7Czqx037yeOWynH97Rc1JIvNBWroEsLWqSQhQHOnkJfbzHDd9"
);

const readOnlyClient = twitterClient.readOnly;

const user = await readOnlyClient.v2.userByUsername("cryptob_chain");

console.log(user.data.id);

const todosLosTweets = await readOnlyClient.v2.userTimeline(user.data.id, {
  exclude : "replies",
  expansions: 'attachments.media_keys',
  'media.fields': 'url',
});

let tweets = [];

for (const unTweet of todosLosTweets) {
  let link = ''
  unTweet.attachments?.media_keys.forEach ((data12) => {
    todosLosTweets.data.includes.media.forEach ((data25) => {
      if(data12 == data25.media_key) {
        return link = data25.url
      }
    }) 
    unTweet.url = link 
  })
  tweets.push(unTweet)
}

export default tweets;
