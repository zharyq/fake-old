import { conversionToBalanceType, removeSpacesAndCharacters } from "./money";

test("remove spaces and characters", () => {
  expect(
    removeSpacesAndCharacters("10 000,00 KZT", {
      symbol: ",00 KZT",
      space: true,
    })
  ).toBe("10000");

  expect(
    removeSpacesAndCharacters("10 000,00 KZT", {
      symbol: ",00 KZT",
      space: true,
    })
  ).toBe("10000");

  expect(
    typeof Number(
      removeSpacesAndCharacters("10 000,00 KZT", {
        symbol: ",00 KZT",
        space: true,
      })
    ) === "number"
  ).toBeTruthy();
});

test("conversion to balance type", () => {
  expect(
    conversionToBalanceType(1000, { symbol: ",00 KZT", space: true })
  ).toBe("1 000,00 KZT");

  expect(
    conversionToBalanceType(1000, { symbol: ",00 KZT", space: true })
  ).not.toBe("1000,00 KZT");
});
