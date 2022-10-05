module.exports = (request, response) => {
  setTimeout(() => {
    response.status(201).send({
      code: '200',
      message: 'SUCCESS',
      data: {
        itemId: 1,
        prizeName: 'iPad Pro',
        spinTurn: 1,
      },
    });
  }, 2000);
};
