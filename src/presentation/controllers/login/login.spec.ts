import { MissingParamError } from "../../erros";
import { badRequest } from "../../helpers/https-helper";
import { LoginController } from "./login";

describe("LoginController", () => {
  it("should return 400 if no email is provided", async () => {
    const sut = new LoginController();
    const httpRequest = {
      body: {
        password: "any_password",
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError("email")));
  });
});
