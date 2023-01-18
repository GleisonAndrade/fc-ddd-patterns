import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";

describe("Customer factory unit test", () => {

  it("should create a costumer", () => {
    let costumer = CustomerFactory.create("John");

    expect(costumer.id).toBeDefined();
    expect(costumer.name).toEqual("John");
    expect(costumer.Address).toBeUndefined();
  });

  it("should create a customer with an address", () => {
    const address = new Address("Street", 1, "64004-325", "Teresina");
    let customer = CustomerFactory.createWithAddress("John", address);

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("John");
    expect(customer.Address).toBe(address);
  });

});