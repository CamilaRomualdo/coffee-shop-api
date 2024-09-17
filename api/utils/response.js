module.exports.success = (data) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

module.exports.error = (message) => {
  return {
    statusCode: 500,
    body: JSON.stringify({ error: message }),
  };
};
