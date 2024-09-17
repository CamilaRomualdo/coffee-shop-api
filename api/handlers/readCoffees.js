const dynamoDb = require('../utils/dynamoDb');
const { success, error } = require('../utils/response');

module.exports.handler = async () => {
  const params = {
    TableName: process.env.COFFEE_ORDERS_TABLE
  };

  try {
    const result = await dynamoDb.scan(params).promise();
    return success(result.Items);
  } catch (err) {
    return error(`Could not retrieve coffee orders: ${err.message}`);
  }
};
