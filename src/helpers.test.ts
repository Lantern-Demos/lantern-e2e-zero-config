/**
 * Test utilities for the helpers module.
 *
 * @module helpers.test
 */

import { capitalize, slugify } from "./helpers";

describe("capitalize", () => {
  it("should capitalize the first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("should handle empty strings", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("slugify", () => {
  it("should create a URL-friendly slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("should strip special characters", () => {
    expect(slugify("Hello, World!")).toBe("hello-world");
  });
});
