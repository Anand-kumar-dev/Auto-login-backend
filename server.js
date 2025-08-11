import {app} from './app.js'
import dotenv from 'dotenv'
dotenv.config()


const port = process.env.PORT || 8000


app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})