import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import indexController from './controllers/home';
import itemsController from './controllers/items';
import categoriesController from './controllers/categories';
import addController from './controllers/add';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src/public'));
app.set('views', 'src/views');
app.set('view engine', 'pug');

app.use('/', indexController);
app.use('/items', itemsController);
app.use('/categories', categoriesController);
app.use('/add', addController);

app.listen(3000, () => console.log('Server is listening on port 3000!'));
