const 
  express = require('express'),
  app = express();
const PORT = 8006;

app.get('/', (req, res) => {
  res.send("Hello Simple web");
});

app.listen(PORT, () => {
  console.log(`app is up on port ${PORT}`) 
});