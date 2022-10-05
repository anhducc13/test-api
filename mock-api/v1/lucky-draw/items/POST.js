module.exports = (request, response) => {
  const id = request.body.id;

  return response.status(201).send({
    code: '200',
    message: 'SUCCESS',
    data: {
      id: id || 1,
    },
  });
};
