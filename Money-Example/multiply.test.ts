import { Dollar } from "./Dollar";
import { test, afterAll, beforeAll, describe, expect, it } from "@jest/globals";

test("test multiplication", () => {
    const five = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
})
