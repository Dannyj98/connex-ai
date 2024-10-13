import express from "express"
import { checkForAuthorizationHeader } from "./middleware/authorization"

import routes from "./api/routes"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Auth
app.use(checkForAuthorizationHeader)
routes(app)

export default app
