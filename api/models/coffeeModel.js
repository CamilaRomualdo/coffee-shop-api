const { v4: uuidv4 } = require('uuid');

module.exports.createCoffee = (
  accompaniment,
  coffeeBlend,
  customerName,
  sizeMl
) => {

  return {
    Accompaniment: accompaniment,
    CoffeeBlend: coffeeBlend,
    CreatedAt: new Date().toISOString(),
    CustomerName: customerName,
    OrderId: uuidv4(),
    OrderStatus: 'Pending',
    SizeMl: sizeMl
  };
};
