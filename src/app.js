import './database/database';

import express from 'express';
import AuthRoutes from './routes/auth.routes';
import UserRoutes from './routes/user.routes';
import morgan from 'morgan';


const app = express();

//Variables
let mainPath = '/api/v1';

//Constants
app.set('port', 3000);

//Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use(`${mainPath}/auth`, AuthRoutes);
app.use(`${mainPath}/user`, UserRoutes);


//Server initialization
app.listen(app.get('port'), () => {
    console.log('App listening on port:', app.get('port'));
});

