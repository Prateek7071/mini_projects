import express from "express"; // module way to use compared to commonjs way
import 'dotenv/config'

const app = express()

const port = process.env.PORT || 3000;

console.log(port);


app.get('/api/joke', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'joke 1',
      content: "This is joke 1"
    },
    {
      id: 2,
      title: 'joke 2',
      content: "This is joke 2"
    },
    {
      id: 3,
      title: 'joke 3',
      content: "This is joke 3"
    },
    {
      id: 4,
      title: 'joke 4',
      content: "This is joke 4"
    },
    {
      id: 5,
      title: 'joke 5',
      content: "This is joke 5"
    },
  ]
  res.json(jokes)
})

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`)
})