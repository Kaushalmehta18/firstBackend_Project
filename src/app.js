import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors' 

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(express.json({limit: "16kb"})) // to pose the limit on json files which we accept
app.use(express.urlencoded({extended: true, limit: "16kb"})) // use to modify the URL
app.use(express.static("public")) // to store the public assets like images or fevicons
app.use(cookieParser()) // to set cookies in users browser or perform CURD operations

export default app;