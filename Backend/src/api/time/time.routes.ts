import { Router } from "express"
import { getServerTimeInEpochs } from "./time.controller"

const timeRouter = Router()

timeRouter.get("/", getServerTimeInEpochs)

export default timeRouter
