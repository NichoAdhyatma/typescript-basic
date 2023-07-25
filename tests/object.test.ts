describe("Object", function () {
  it("should be object type", function () {
    const person: { id: string; name: string; hobbies?: string[] } = {
      id: "1",
      name: "Nico",
    };

    console.info(person);

    person.id = "2";
    person.name = "Adit";

    console.info(person);
  });
});
