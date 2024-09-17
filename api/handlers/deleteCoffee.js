const dynamoDb = require('../utils/dynamoDb');
const { success, error } = require('../utils/response');

module.exports.handler = async (event) => {
  const requestBody = JSON.parse(event.body);
  const { order_id, customer_name } = requestBody;

  const params = {
    TableName: process.env.COFFEE_ORDERS_TABLE,
    Key: {
      OrderId: order_id,
      CustomerName: customer_name
    }
  };

  try {
    await dynamoDb.delete(params).promise();
    return success({ message: 'Coffee order deleted successfully!', OrderId: order_id });
  } catch (err) {
    return error(`Could not delete coffee order: ${err.message}`);
  }
};
