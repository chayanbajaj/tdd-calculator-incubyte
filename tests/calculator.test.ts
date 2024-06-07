import { add } from "../src/calculator";

describe("String Calculator", () => {
  describe("add method", () => {

    it("should return 0 when input is empty", () => {
      expect(add("")).toBe(0);
    });
    
    it('should return 1 when input is "1"', () => {
      expect(add("1")).toBe(1);
    });
  });
});
