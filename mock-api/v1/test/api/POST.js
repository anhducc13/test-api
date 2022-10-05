module.exports = (request, response) => {
  setTimeout(() => {
    response.json({
      method: request.method,
      url: request.url,
      body: request.body,
      query: request.query,
      headers: request.headers,
    });
  }, 1000);
};
