module.exports = (request, response) => {
  const mappingQA = {
    answer1: 'A',
    answer2: 'B',
  }
  const body = request.body;
  const keys = Object.keys(body).filter(el => el.startsWith('answer'));
  if (keys?.[0]) {
    if (body[keys[0]] === mappingQA[keys[0]]) {
      return response.status(200).json({
        message: 'Trả lời đúng',
        code: 1
      });
    } else {
      return response.status(400).json({
        message: 'Trả lời sai',
        code: 0,
      });

    }
  } else {
    return response.status(400).json({
      message: 'Co loi',
      code: -1,
    });
  }
};
