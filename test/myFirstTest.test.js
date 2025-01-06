describe("number operations", () => {
  test("one plu two", () => {
    expect(2 + 1).toBe(3);
  });
  test("9 plus 4", () => {
    expect(9 + 4).not.toBe(10);
  });
});

describe("Matcher Methods", () => {
  //numbers
  test("check if a number is undefined", () => {
    let b = undefined;
    expect(b).toBeFalsy();
    expect(b).not.toBeTruthy();
    expect(b).not.toBeDefined();
    expect(b).toBeUndefined();
    expect(b).not.toBeNull();
  });
  it("should be zeor", () => {
    let zero = 0;
    expect(zero).toBeFalsy();
    expect(zero).not.toBeTruthy();
    expect(zero).not.toBeNull();
    expect(zero).not.toBeUndefined();
  });
  test("number test", () => {
    let x = 5;
    let y = 6;
    expect(x + y).toBeLessThan(20);
    expect(x + y).toBeLessThanOrEqual(20);
    expect(x + y).toBeGreaterThan(10);
    expect(x + y).toBeGreaterThanOrEqual(10);
  });
  //strings
  it("should not have I", () => {
    let team = "Mauano";

    expect(team).not.toMatch(/I/i);
  });
  test("there is 'stop' in christopher", () => {
    let team = "christopher";

    expect(team).toMatch(/stop/i);
  });
  //arrays
  let shoppingList = [
    "Apples",
    "Bananas",
    "Carrots",
    "Eggs",
    "Milk",
    "Bread",
    "Cheese",
    "Chicken",
    "Tomatoes",
    "Oranges",
  ];
  //all tests are case sensitive
  test("should not have PS5", () => {
    expect(shoppingList).not.toContain("PS5");
    expect(shoppingList).toContain("Milk");
  });
});
