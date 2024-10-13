import express from "express"
import promMid from "express-prometheus-middleware"
import { checkForAuthorizationHeader } from "./middleware/authorization"

import routes from "./api/routes"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Auth
app.use(checkForAuthorizationHeader)

// Prometheus
app.use(promMid({ metricsPath: "/metrics" }))

// Routes
routes(app)

export default app
