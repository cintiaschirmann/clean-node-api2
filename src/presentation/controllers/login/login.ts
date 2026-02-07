import { MissingParamError } from "../../erros";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class LoginController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { email, password } = httpRequest.body;

    if (!email) {
      return {
        statusCode: 400,
        body: new MissingParamError("email"),
      };
    }

    if (!password) {
      return {
        statusCode: 400,
        body: new MissingParamError("password"),
      };
    }

    return {
      statusCode: 200,
      body: {
        email,
        password,
      },
    };
  }
}
