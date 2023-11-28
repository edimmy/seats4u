exports.handler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
      statusCode: 400,
      "error" : "No available venues",
      "error" : "Timed out"
    };
    return response;
  };