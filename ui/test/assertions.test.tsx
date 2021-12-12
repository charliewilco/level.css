import { isString } from "../src/utils/assertions";
import { describe, it, expect } from "@jest/globals";

describe("assertions", () => {
  it("strings", () => {
    expect(isString("hello")).toBeTruthy();
    expect(isString(4)).toBeFalsy();
  });
});
