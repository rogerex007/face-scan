require('dotenv').config();
import {connect} from 'mongoose';

let User = process.env.DB_USER;
let Pass = process.env.DB_PASS;
let Uri = `mongodb+srv://${User}:${Pass}@cluster0.mgm3e.mongodb.net/face-scan?retryWrites=true&w=majority`;

connect(Uri, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    autoIndex: false
})
.then((db) => console.log('Db is connected'))
.catch((err) => console.log(err));