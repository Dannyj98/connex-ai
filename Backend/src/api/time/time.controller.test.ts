import request from "supertest"
import express from "express"
import { getServerTimeInEpochs } from "./time.controller"

import app from "../../app"

describe("GET /time", () => {
  it("should return the current time in epochs", async () => {
    const response = await request(app).get("/time")
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("time")
    expect(typeof response.body.time).toBe("number")
  })
})
