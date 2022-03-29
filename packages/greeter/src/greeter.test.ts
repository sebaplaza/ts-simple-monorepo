import hello from "./greeter";

describe("greeter", () => {
  it("should greet", () => {
    const result = hello("to myself");
    expect(result).toEqual("Hello to myself! ...");
  });
});
