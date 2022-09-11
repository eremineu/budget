/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import UsersRoutes from './app/routes/user';
import { routes } from './app/routes/dictionary.routes';

const app = express();

app.use(cors());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.json());

app.use(routes.users, UsersRoutes);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
