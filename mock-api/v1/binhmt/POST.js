module.exports = (request, response) => {
  const mappingQA = {
    answer1: 'A',
    answer2: 'B',
    answer3: 'C',
    answer4: 'da3',
    answer5: 'sre',
    answer6: 'cpm',
    answer7: 'bi',
    answer8: 'deprecated',
  }
  const body = request.body;
  const keys = Object.keys(body).filter(el => el.startsWith('answer'));
  if (keys?.[0]) {
    if (body?.[keys[0]]?.toLowerCase?.().trim?.() === mappingQA?.[keys[0]]?.toLowerCase?.().trim?.()) {
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
