import { Dollar } from "./Dollar";
import { test, afterAll, beforeAll, describe, expect, it } from "@jest/globals";

test("test multiplication", () => {
    const five = new Dollar(5);
    let product = five.times(2);
    expect(product.amount).toBe(10);
    product = five.times(3);
    expect(product.amount).toBe(product.amount);
})
