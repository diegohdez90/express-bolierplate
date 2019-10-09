import express from 'express';
import routes from '../../routes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.set('views', `${process.env.PROJECT_DIR}templates` );
app.set('view engine', 'twig');
app.set('twig options', {
    stric_variables: false,
});

app.use(routes);

export default app;
