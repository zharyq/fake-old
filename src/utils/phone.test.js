import { phoneConversion } from "./phone";

test("phone conversion", () => {
  const converted = phoneConversion("87474776622");
  expect(converted).toBe("+7 (747) 477-66-22");
  expect(converted).not.toBe("+7(747)477-66-22");
  expect(converted).not.toBe("+77 (474) 776-62-2");
  expect(converted).not.toBe("7 (474) 776-62-2");
});
