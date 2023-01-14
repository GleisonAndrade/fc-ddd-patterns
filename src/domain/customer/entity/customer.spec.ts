import Customer from "./customer";

describe("Customer unit tests", () => {
  
  it("should throw error when Id is empty", () => {
    expect(() => {
      let customer = new Customer("", "John");      
    }).toThrowError("Id is required");
  });

  it("should throw error when Name is empty", () => {
    expect(() => {
      let customer = new Customer("123", "");      
    }).toThrowError("Name is required");
  });

  it("should add reward points", () => {
    const customer = new Customer("123", "Customer 1");

    expect(customer.rewardPoints).toBe(0);
    
    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
