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

  it("should return empty string for null", () => {
    expect(capitalize(null)).toBe("");
  });

  it("should return empty string for undefined", () => {
    expect(capitalize(undefined)).toBe("");
  });
});

describe("slugify", () => {
  it("should create a URL-friendly slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("should strip special characters", () => {
    expect(slugify("Hello, World!")).toBe("hello-world");
  });

  it("should transliterate accented characters", () => {
    expect(slugify("Héllo Wörld")).toBe("hello-world");
  });

  it("should handle unicode accents", () => {
    expect(slugify("café résumé")).toBe("cafe-resume");
  });

  it("should return empty string for null", () => {
    expect(slugify(null)).toBe("");
  });

  it("should return empty string for undefined", () => {
    expect(slugify(undefined)).toBe("");
  });
});
