const dynamoDb = require('../utils/dynamoDb');
const { success, error } = require('../utils/response');

module.exports.handler = async (event) => {
  const requestBody = JSON.parse(event.body);
  const {
    accompaniment,
    customer_name,
    new_status,
    order_id,
    size_ml,
  } = requestBody;

  const params = {
    TableName: process.env.COFFEE_ORDERS_TABLE,
    Key: {
      OrderId: order_id,
      CustomerName: customer_name
    },
    UpdateExpression: 'SET OrderStatus = :status, Accompaniment = :accompaniment, SizeML = :size_ml',

    ExpressionAttributeValues: {
      ':accompaniment': accompaniment,
      ':size_ml': size_ml,
      ':status': new_status
    }
  };

  try {
    await dynamoDb.update(params).promise();
    return success({ message: 'Coffee order status updated successfully!', OrderId: order_id });
  } catch (err) {
    return error(`Could not update coffee order: ${err.message}`);
  }
};
