import { isNotEmpty } from "../validations";

describe("Validations render tests", () => {
  it("isNotEmpty ", () => {
    expect(isNotEmpty("")).toBeFalsy();
    expect(isNotEmpty("NotEmpty")).toBeTruthy();
    expect(isNotEmpty(5)).toBeTruthy();
  });
});
