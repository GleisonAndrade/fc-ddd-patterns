import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  
  it("should throw error when id is empty", () => {

    expect(() => {
          new Order("", "123", []);
        }).toThrow("Id is required");
  });


  it("should throw error when id is empty", () => {

    expect(() => {
          new Order("123", "", []);
        }).toThrow("CustomerId is required");
  });

  it("should throw error when id is empty", () => {

    expect(() => {
          new Order("123", "123", []);
        }).toThrow("tems are required");
  });

  it("should calculate total", () => {

    const item = new OrderItem("i1", "Item 1", 100, "p1", 1);
    const item2 = new OrderItem("i2", "Item 2", 200, "p2", 1);
    const order = new Order("o1", "c1", [item]);

    let total = order.total();

    expect(total).toBe(100);

    const order2 = new Order("o2", "c2", [item, item2]);
    total = order2.total();
    
    expect(total).toBe(300);
  });
  
});