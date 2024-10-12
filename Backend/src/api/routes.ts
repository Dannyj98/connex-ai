import { Express, Request, Response, NextFunction } from "express"
import { checkForAuthorizationHeader } from "../middleware/authorization"
import timeRoutes from "./time/time.routes"

const routes = (app: Express) => {
  app.get("/api/healthcheck", (req: Request, res: Response): void => {
    res.sendStatus(200)
  })

  app.use("/api/time", timeRoutes)

  // 404
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send({ status: "Error", error: "Route not found" })
  })
}

export default routes
