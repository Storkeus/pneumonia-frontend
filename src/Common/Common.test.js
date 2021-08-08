import { checkIsValidEmail, removeDiacritics } from "./FormValidation";

describe("checkIsValidEmail", () => {
  test("empty string is false", () => {
    expect(checkIsValidEmail("")).toBe(false);
  });

  test("proper e-mail is true", () => {
    expect(checkIsValidEmail("test@example.com")).toBe(true);
  });

  test("e-mail with polish diactrics is true", () => {
    expect(checkIsValidEmail("żółć@żółć.pl")).toBe(true);
  });

  test("e-mail with german diactrics is true", () => {
    expect(checkIsValidEmail("ß@ß.de")).toBe(true);
  });

  test("e-mail with Cyrillic alphabet is true", () => {
    expect(checkIsValidEmail("дёж@дёж.ru")).toBe(true);
  });

  test("e-mail with greek alphabet is true", () => {
    expect(checkIsValidEmail("Δξv@Δξv.com")).toBe(true);
  });

  test("e-mail with mixed alphabetes is true", () => {
    expect(checkIsValidEmail("test@дёжΔξv.ru")).toBe(true);
  });
});
