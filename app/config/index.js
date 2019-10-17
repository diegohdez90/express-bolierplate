import i18n from 'i18n';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import compress from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';

import dotenv from 'dotenv';

//import { JwtStrategy } from './passport';
import config from '../env';
import routes from '../../routes';

dotenv.config();

i18n.configure({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  directory: `${process.env.PROJECT_DIR}/locales` ,
});

const app = express();

if (config.env == 'development') {
  app.use(logger('dev'));
}

app.set('views', `${process.env.PROJECT_DIR}/templates`);
app.set('view engine', 'twig');


app.use(helmet());
app.use(helmet.noCache());
app.use(helmet.noSniff());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.ieNoOpen());

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(cookieParser());

app.use(compress());

app.use(methodOverride());

app.use(cors());

app.use(express.static(`${process.env.PROJECT_DIR}/public`));

app.use(passport.initialize());

//JwtStrategy(passport);

// eslint-disable-next-line no-unused-vars
app.use(function onError(err, req, res, next) {
  res.statusCode = 500;
  res.end(err + '\n');
});

app.use(routes);

app.use(i18n.init);

mongoose.Promise = global.Promise;

mongoose.set('useUnifiedTopology', true);

mongoose.connect(`${config.database.client}://${config.database.connection.host}:${config.database.connection.port}/${config.database.connection.database}`, {useNewUrlParser: true});

export default app;

