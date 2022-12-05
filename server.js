import express from 'express';
import user from './src/api/getData.js';

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api', (req, res) => {
    res.send(user)
})

app.use(express.static('src/static'));

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})