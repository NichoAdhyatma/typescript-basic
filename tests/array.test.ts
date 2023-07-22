describe("Array", function () {
  it("Should be same with javascript", function () {
    const names: string[] = ["budi", "nicho", "andi"];
    const numbers: number[] = [1, 2, 3, 4];

    console.info(names, numbers);
  });

  //read-only array : tidak bisa diubah dan di tambah isi nya

  it("Should be same with javascript", function () {
    const names: ReadonlyArray<string> = ["budi", "nicho", "andi"];
    const numbers: ReadonlyArray<number> = [1, 2, 3, 4];

    console.info(names, numbers);
  });

  //tuple : panjang array dan tipe data nya dideclare diawal dan tidak bisa diubah ataupun di tambah

  it("Should be same with javascript", function () {
    const person: readonly [string, string, number] = ["budi", "nicho", 10];

    console.info(person)
  });
});
