import { isEven } from "../index.js";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("isEven", () => {
  it("returns true for even numbers", () => {
    assert.strictEqual(isEven(4), true);
    assert.strictEqual(isEven(0), true);
    assert.strictEqual(isEven(-2), true);
  });

  it("returns false for odd numbers", () => {
    assert.strictEqual(isEven(7), false);
    assert.strictEqual(isEven(-3), false);
  });

  it("returns false for most floating point numbers", () => {
    assert.strictEqual(isEven(3.5), false);
    // sadly, this is true because JavaScript
    // assert.strictEqual(isEven(4.0000000000000000000001), false);
  });

  it("returns false for non-numbers", () => {
    assert.strictEqual(isEven("a"), false);
    assert.strictEqual(isEven(null), false);
    assert.strictEqual(isEven(undefined), false);
  });

  it("handles large numbers", () => {
    assert.strictEqual(isEven(Number.MAX_SAFE_INTEGER), false);
    assert.strictEqual(isEven(Number.MAX_SAFE_INTEGER - 1), true);
  });

  it("returns false for special number values", () => {
    assert.strictEqual(isEven(NaN), false);
    assert.strictEqual(isEven(Infinity), false);
    assert.strictEqual(isEven(-Infinity), false);
  });

  it("returns false for objects and booleans", () => {
    assert.strictEqual(isEven([]), false);
    assert.strictEqual(isEven({}), false);
    assert.strictEqual(isEven(true), false);
    assert.strictEqual(isEven(false), false);
  });

  it("handles floating point edge cases", () => {
    assert.strictEqual(isEven(2.0), true);
    assert.strictEqual(isEven(-4.0), true);
  });
});
