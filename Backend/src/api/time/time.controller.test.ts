import request from "supertest"
import Ajv from "ajv"

// JSON schema validator
const ajv = new Ajv()

import app from "../../app"

const validJsonSchema = {
  properties: {
    epoch: {
      description:
        "The current server time, in epochseconds, at time of processing the request.",
      type: "number",
    },
  },
  required: ["epoch"],
  type: "object",
}

describe("GET /time", () => {
  it("should return the current time in epochs", async () => {
    const response = await request(app)
      .get("/api/time")
      .set("Authorization", "mysecrettoken")
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("epoch")
    expect(typeof response.body.epoch).toBe("number")

    const validate = ajv.compile(validJsonSchema)
    const valid = validate(response.body)

    if (!valid) {
      console.error(validate.errors)
    }

    expect(valid).toBe(true)
  })
})
