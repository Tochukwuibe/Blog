import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as router from './router/v1';
import config from './config/main';

// init express
const app = express();

// init mongoose 
mongoose.connect(config.db, {useNewUrlParser: true})


// express middlewear 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(logger('dev'));

// router
router.default(app)  
 

// init server 
let server ; 
if(process.env.NODE_ENV !== config.test_env) { // if we are not in test mode 

    server = app.listen(config.port) // launc the server on the port
    console.log(`server listening on ${config.port}`)

} else { // in test mode 

    server = app.listen(config.test_port) // launc the server on the test_port
    console.log(`server listening on ${config.test_port}`)

}

// export 
export default server;

