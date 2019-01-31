import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import path from 'path'

import userRoutes from './routes/user.routes'

const app = express()
const CURRENT_WORKING_DIR = process.cwd()

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.use('/', userRoutes)


export default app
