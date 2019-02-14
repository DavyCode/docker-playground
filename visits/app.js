const 
  express = require('express'),
  redis = require('redis'),
  app = express();
const PORT = 8006;

const client = redis.createClient({
  host: 'redis-server',
  port: 6379
})
client.set('visits', 0);

app.get('/', (req, res) => {
  // process.exit(0)
  client.get('visits', (err, visits) => {
    res.send("Hello Simple web " + visits);
    client.set('visits', parseInt(visits) + 1)
  })
});

app.listen(PORT, () => {
  console.log(`app is up on port ${PORT}`) 
});