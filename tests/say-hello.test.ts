import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should return Hello nicho", function () {
    expect(sayHello('nicho')).toBe("Hello nicho");
  });
});
