import { Express, Request, Response, NextFunction } from "express"

export const getServerTimeInEpochs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const currentTime = Math.floor(Date.now() / 1000)
  res.status(200).json({ currentTime })
}
