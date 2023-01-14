import Address from "./domain/customer/value-object/address";
import Customer from "./domain/customer/entity/customer";
import Order from "./domain/checkout/entity/order";
import OrderItem from "./domain/checkout/entity/order_item";

let customer = new Customer("123", "Gleison Andrade");
const address = new Address("CIntia Portela", 11, "64004-325", "Teresina");
customer.Address = address;
customer.activate();
// ID

// Objeto - Entidade
const item1 = new OrderItem("1", "Item 1", 10, "p1", 1);
const item2 = new OrderItem("2", "Item 2", 20, "p2", 1);
const order = new Order("1", "123", [item1, item2]);