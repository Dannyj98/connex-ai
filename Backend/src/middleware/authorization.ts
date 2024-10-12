import { Request, Response, NextFunction } from "express"
import dotenv from "dotenv"

dotenv.config()

const AUTH_TOKEN = process.env.AUTH_SECRET

if (!AUTH_TOKEN) {
  throw new Error("AUTH_SECRET environment variable is not set")
}

export const checkForAuthorizationHeader = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorizationHeader = req.headers?.authorization

  // Check if the authorization header is present
  if (!authorizationHeader) {
    res.status(401).json({ message: "Authorization header required" })
    return
  }

  // Check it has the correct value
  if (authorizationHeader !== AUTH_TOKEN) {
    res.status(403).json({ message: "Invalid authorization token" })
    return
  }
  next()
}
