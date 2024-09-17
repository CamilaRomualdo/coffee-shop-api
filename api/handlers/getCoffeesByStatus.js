const dynamoDb = require('../utils/dynamoDb');
const { success, error } = require('../utils/response');

module.exports.handler = async (event) => {
  const status = event.pathParameters.status;

  const params = {
    TableName: process.env.COFFEE_ORDERS_TABLE,
    FilterExpression: 'OrderStatus = :status',
    ExpressionAttributeValues: {
      ':status': status
    }
  };

  try {
    const result = await dynamoDb.scan(params).promise();
    return success(result.Items);
  } catch (err) {
    console.error('Error fetching orders by status:', err);
    return error(`Could not retrieve orders with status ${status}: ${err.message}`);
  }
};
