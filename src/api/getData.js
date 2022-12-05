import { TwitterApi } from 'twitter-api-v2';

async function getTweets() {

  const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAB%2BajwEAAAAAu01MMADYQDJ9lxIu6hNr%2FFb9CQM%3Dr7Czqx037yeOWynH97Rc1JIvNBWroEsLWqSQhQHOnkJfbzHDd9');

  const readOnlyClient = twitterClient.readOnly;

  const user = await readOnlyClient.v2.userByUsername('elonmusk');

  console.log(user.data.id) 

  const tweetsOfJack = await readOnlyClient.v2.userTimeline(user.data.id , { exclude: 'replies' });

  for (const asd of tweetsOfJack) {
    console.log(asd)
  }

}

function esperame(time) {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

while(true){
  getTweets();
  esperame(1000)
}

export default getTweets;