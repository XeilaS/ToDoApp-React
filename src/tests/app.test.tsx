import { describe, test, expect } from "vitest";

describe("Mathematic Operation", () => {
    test("should add two numbers ", () => {
        expect(1 + 1).toBe(2);
    })
    test("should return the same nmber", () => {
        expect(1).toBe(1);
    });
});