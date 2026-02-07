import { MissingParamError } from "../../erros";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class LoginController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { email } = httpRequest.body;
    if (!email) {
      return {
        statusCode: 400,
        body: new MissingParamError("email"),
      };
    }
  }
}
