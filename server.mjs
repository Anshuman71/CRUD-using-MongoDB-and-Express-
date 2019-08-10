import express from 'express';
import dbConfig from './config/index.mjs';
import middlewares from './config/middlewares.mjs';
import Routes from './routes/index.mjs';

const app = express();

dbConfig();

middlewares(app);

const PORT = process.env.PORT || 1337;

app.use('/api', [Routes]);

app.listen(PORT, err => {
  if (err) {
    return console.log(err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
