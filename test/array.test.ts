describe("Array", function () {
  it("Should be same with javascript", function () {
    const names: string[] = ["budi", "nicho", "andi"];
    const numbers: number[] = [1, 2, 3, 4];

    console.info(names, numbers);
  });

  //read-only array

  it("Should be same with javascript", function () {
    const names: ReadonlyArray<string> = ["budi", "nicho", "andi"];
    const numbers: ReadonlyArray<number> = [1, 2, 3, 4];

    console.info(names, numbers);
  });

  //tuple

  it("Should be same with javascript", function () {
    const person: readonly [string, string, number] = ["budi", "nicho", 10];
  });
});
