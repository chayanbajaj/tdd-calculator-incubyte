import { add } from "../src/calculator";

describe("String Calculator", () => {
  describe("add method", () => {

    it("should return 0 when input is empty", () => {
      expect(add("")).toBe(0);
    });

    it('should return 1 when input is "1"', () => {
      expect(add("1")).toBe(1);
    });
    
    it('should return 6 when input is "1,5"', () => {
      expect(add("1,5")).toBe(6);
    });

    it("should handle large numbers", () => {
      expect(add("1000,2000,3000,4000")).toBe(10000);
    });

    it("should handle new line", () => {
      expect(add("1\n2,3")).toBe(6);
    });

    it("should support custom delimiters", () => {
      expect(add("//;\n1;2")).toBe(3);
    });

    it("should support multiple numbers with custom delimiters", () => {
      expect(add("//;;\n1;;2;;3")).toBe(6);
    });

    it("should throw an exception for negative numbers", () => {
      expect(() => add("-1")).toThrow("negative numbers not allowed -1");
    });

    it("should throw an exception for multiple negative numbers", () => {
      expect(() => add("-1,-2")).toThrow("negative numbers not allowed -1,-2");
    });
  });
});
