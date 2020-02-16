const request = require("supertest");
const app = require("../../src/app");

describe("hello-world.integration.test", () => {
  describe("given a request without a query", () => {
    let result;

    beforeAll(async () => {
      result = await request(app).get(`/`);
    });

    it("should respond with a status of 200", () => {
      expect(result.status).toBe(200);
    });

    it("should respond with a message that shows an undefined input number", () => {
      expect(result.body.message).toBe(
        "Hello world! Input number is undefined"
      );
    });
  });

  describe("given a request with a number query", () => {
    let result;

    beforeAll(async () => {
      result = await request(app).get(`/?number=100`);
    });

    it("should respond with a status of 200", () => {
      expect(result.status).toBe(200);
    });

    it("should respond with a message that shows the correct input number", () => {
      expect(result.body.message).toBe("Hello world! Input number is 100");
    });
  });
});
