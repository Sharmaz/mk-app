const express = require('express');
const cors = require('cors');

const router = express.Router();
const PORT = process.env.PORT || 3000;

router.get('/', async (req, res) => {
  res.send('Hello World!');
});

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(router);

  return app;
};

const app = createApp();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
