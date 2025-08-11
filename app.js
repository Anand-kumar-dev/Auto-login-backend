import express, { urlencoded } from 'express'
import cors from 'cors'
import automateRoute from './Routes/automate.route.js'

const app = express();

app.use(express.json())
app.use(cors({
  origin: "https://app.utu.ac.in"
}));

app.use(urlencoded({extended:true}));
app.use('/',automateRoute)


export {app}