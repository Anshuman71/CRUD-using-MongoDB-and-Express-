import mongoose from 'mongoose';
import config from './dbConfig';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(
    config.DB_URL,
    { useMongoClient: true },
  );
  mongoose.set('debug', true);
  mongoose.connection
    .once('open', () => console.log(`Connected to mongodb at ${config.DB_URL}`))
    .on('error', err => console.log(err));
};
