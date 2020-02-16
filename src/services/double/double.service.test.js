const double = require("./double.service");

describe("double service", () => {
  describe("given an input number", () => {
    let result;

    beforeAll(() => {
      result = double(5);
    });

    it("should multiply it by two", () => {
      expect(result).toBe(10);
    });
  });
});
