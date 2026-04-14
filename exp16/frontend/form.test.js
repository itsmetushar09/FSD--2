import { describe, it, expect } from "vitest";

describe("Form Testing", () => {
  it("should validate username", () => {
    const username = "Tushar";
    expect(username.length).toBeGreaterThan(3);
  });

  it("should check email format", () => {
    const email = "test@gmail.com";
    expect(email.includes("@")).toBe(true);
  });
});