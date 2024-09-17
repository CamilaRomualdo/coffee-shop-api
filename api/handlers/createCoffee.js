const { createCoffee } = require('../models/coffeeModel');
const dynamoDb = require('../utils/dynamoDb');
const { success, error } = require('../utils/response');

module.exports.handler = async (event) => {
  const requestBody = JSON.parse(event.body);
  const {
    accompaniment,
    coffee_blend,
    customer_name,
    size_ml
  } = requestBody;

  if (!accompaniment || !coffee_blend || !customer_name || !size_ml) {
    return error('Missing required fields: accompaniment, coffeeBlend, customerName, and sizeMl are required.');
  }

  const newCoffeeOrder = createCoffee(
    accompaniment,
    coffee_blend,
    customer_name,
    size_ml
  );

  const params = {
    TableName: process.env.COFFEE_ORDERS_TABLE,
    Item: newCoffeeOrder
  };

  try {
    await dynamoDb.put(params).promise();
    return success({ message: 'Coffee order created successfully!', OrderId: newCoffeeOrder.OrderId });
  } catch (err) {
    return error(`Could not create coffee order: ${err.message}`);
  }
};
