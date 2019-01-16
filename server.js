import express from 'express';
import dbConfig from './config';
import middlewares from './config/middlewares';
import Routes from './routes';

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
