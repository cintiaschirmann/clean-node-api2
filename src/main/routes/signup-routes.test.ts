import request from "supertest";
import app from "../config/app";

describe("Signup Routes", () => {
  test("Should return an acccount on sucess", async () => {
    await request(app)
      .post("/api/signup")
      .send({
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
        passwordConfirmation: "password123",
      })
      .expect(200);
  });
});
