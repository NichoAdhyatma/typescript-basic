import { Seller } from "../src/seller";

describe("Interface", () => {
  it("should support in typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "Toko BCA",
      npwp: "1231312",
    };

    seller.name = "Toko ABD";

    console.info(seller);
  });

  it("function interface", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number =>
      value1 + value2;

    console.info(add(3, 5));
  });
});
