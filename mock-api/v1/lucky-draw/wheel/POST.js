module.exports = (request, response) => {
  setTimeout(() => {
    response.json({
      code: '201000',
      message: 'Create successfully!',
      data: {
        id: 1,
      },
    });
  }, 1000);
};
