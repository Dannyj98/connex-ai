import request from "supertest"
import app from "../app"

describe("Routes", () => {
  it("should return 401 Unauthorized if authorization header is missing", async () => {
    const response = await request(app).get("/api/healthcheck")
    expect(response.status).toBe(401)
    expect(response.body).toEqual({ message: "Authorization header required" })
  })

  it("should return 403 Unauthorized if authorization header is present but incorrect", async () => {
    const response = await request(app)
      .get("/api/healthcheck")
      .set("Authorization", "mynotsosecrettoken")
    expect(response.status).toBe(403)
    expect(response.body).toEqual({ message: "Invalid authorization token" })
  })

  it("should return 200 OK if authorization header is present and correct", async () => {
    const response = await request(app)
      .get("/api/healthcheck")
      .set("Authorization", "mysecrettoken")
    expect(response.status).toBe(200)
  })
})
