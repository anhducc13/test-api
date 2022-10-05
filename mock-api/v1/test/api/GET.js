module.exports = (request, response, next) => {
  const data = {
    method: request.method,
    url: request.url,
    body: request.body,
    query: request.query,
    headers: request.headers,
  };

  setTimeout(() => {
    response.json(data);
  }, 1000);
};
