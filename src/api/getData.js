import { TwitterApi } from 'twitter-api-v2';

// Instantiate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAB%2BajwEAAAAAu01MMADYQDJ9lxIu6hNr%2FFb9CQM%3Dr7Czqx037yeOWynH97Rc1JIvNBWroEsLWqSQhQHOnkJfbzHDd9');

// Tell typescript it's a readonly app
const readOnlyClient = twitterClient.readOnly;

// Play with the built in methods
const user = await readOnlyClient.v2.userByUsername('plhery');

console.log(user) 

export default user;