describe("Any", function () {
  it("should support with javascript", function () {
    //tipe data any artinya bebas sama kayak js biasa sih
    const person: any = {
      id: 1,
      name: "Nico",
      age: 30,
    };

    person.address = "Surabaya";

    console.info(person);
  });
});
