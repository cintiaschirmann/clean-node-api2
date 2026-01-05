import { EmailValidatorAdapter } from "./email-validator";

jest.mock("validator", () => ({
  isEmail(): boolean {
    return true;
  },
}));

describe("EmailValidatorAdapter", () => {
  test("should return false if validator return", () => {
    const sut = new EmailValidatorAdapter();
    jest.spyOn(sut, "isValid").mockReturnValueOnce(false);
    const isValid = sut.isValid("invalid_email@mail.com");

    expect(isValid).toBe(false);
  });

  test("should return true if validator return", () => {
    const sut = new EmailValidatorAdapter();

    const isValid = sut.isValid("valid_email@mail.com");

    expect(isValid).toBe(true);
  });
});
