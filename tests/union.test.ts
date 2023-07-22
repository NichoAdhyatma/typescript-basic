describe("Union", function () {
  //tipe data union adalah tipe data yang bisa berubah tapi harus kita declare dulu
  
  it("should support typeof", function () {
    const process = (value: string | number | boolean) => {
      return typeof value === "string"
        ? value.toUpperCase()
        : typeof value === "number"
        ? value + 2
        : !value;
    };

    expect(process("nicho")).toBe("NICHO");
    expect(process(1)).toBe(3);
    expect(process(true)).toBe(false);
  });
});
