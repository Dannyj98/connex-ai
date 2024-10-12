import express from "express"
import dotenv from "dotenv"
import { checkForAuthorizationHeader } from "./middleware/authorization"

import routes from "./api/routes"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Auth
app.use(checkForAuthorizationHeader)
routes(app)

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT} in ${process.env.NODE_ENV} mode`)
})

export default app
