import express from "express"
import promMid from "express-prometheus-middleware"
import { checkForAuthorizationHeader } from "./middleware/authorization"
import cors from "cors"

import routes from "./api/routes"

const app = express()

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
    // credentials: true,
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Auth
app.use(checkForAuthorizationHeader)

// Prometheus
app.use(promMid({ metricsPath: "/api/metrics", collectDefaultMetrics: true }))

// Routes
routes(app)

export default app
