module.exports = (request, response) => {
  setTimeout(() => {
    response.json({
      code: 200,
      message: 'SUCCESS',
      data: {
        pageId: 81,
        items: [
          {
            id: 1,
            name: 'iPhone 13',
            image: {
              src: 'https://lh3.googleusercontent.com/iR2E5dzwV7ymr5y1gwPg7HEoXFs07fj2PJsNKGhnenvj7AN3nS4-Pd0i6DA0XiH7cfpNmTrQVXj3QLn24kBboHA0Xj2uEbSa',
              width: 130,
            },
            wheelId: 1,
            request: {
              method: 'GET',
              endpoint: 'www.google.com',
            },
          },
          {
            id: 2,
            name: 'Phần quà bí mật',
            image: {
              src: 'https://lh3.googleusercontent.com/J7wxzbQA75Xj4cpRH7-_r4KWeC5twkYS8BYDWB0NYhvBITDgL1kM93UYWDHNoOYn4PQ5kheoASEiUIUTKpj5HQXzne2FYXg',
              width: 100,
            },
            wheelId: 1,
          },
          {
            id: 3,
            name: 'Airpods 3',
            image: {
              src: 'https://lh3.googleusercontent.com/m92t4sN5ER6z6A5WtQM3Kgh3b5x6uZvqGb8yx-dcWf4YF-n29_YU8Tqam2XGPfR-y05x1rQ4xIkRReEXr3NknYLrwLn_tMPK',
              width: 100,
            },
            wheelId: 1,
          },
          {
            id: 4,
            name: 'iPad Pro',
            image: {
              src: 'https://lh3.googleusercontent.com/E5PdY_gddf35IcO3Chfgrzj0arZGhi-Se3YbBl-b-GxkZrOj_XIJuvumZF26rosjtxDUpKiwWvBIQZ6Li_OPTNF9h7TYusdM',
              width: 100,
            },
            wheelId: 1,
          },
          {
            id: 5,
            name: 'Macbook Pro',
            image: {
              src: 'https://lh3.googleusercontent.com/K1PfMyElBEOHeTzTrpLw4WU-tURtvm73xM_eUSsSow-Nk1PgMUl-Z2Dod3muL3demqHy3KA9zvzzvuc1Vmeg6OVfC8Kd1ec',
            },
            wheelId: 1,
          },
          {
            id: 6,
            name: 'Thẻ cào 50k',
            image: {
              src: 'https://lh3.googleusercontent.com/nyBfdZg5-gSVt4JYI3QLDXSg5TBNvCxxPa1VIuJm3ly60mRGdvohW7IobHvy9xcw0gKA6y_a7BObJ83C5xoBHBt6Dlu7uWTc',
            },
            wheelId: 1,
          },
          {
            id: 1,
            name: 'iPhone 13',
            image: {
              src: 'https://lh3.googleusercontent.com/iR2E5dzwV7ymr5y1gwPg7HEoXFs07fj2PJsNKGhnenvj7AN3nS4-Pd0i6DA0XiH7cfpNmTrQVXj3QLn24kBboHA0Xj2uEbSa',
              width: 130,
            },
            wheelId: 1,
          },
          {
            id: 2,
            name: 'Phần quà bí mật',
            image: {
              src: 'https://lh3.googleusercontent.com/J7wxzbQA75Xj4cpRH7-_r4KWeC5twkYS8BYDWB0NYhvBITDgL1kM93UYWDHNoOYn4PQ5kheoASEiUIUTKpj5HQXzne2FYXg',
              width: 100,
            },
            wheelId: 1,
          },
        ],
        condition: {
          form: {
            fields: [
              {
                label: 'Số điện thoại',
                name: 'phoneNumber',
                required: true,
              },
              {
                label: 'Họ và tên',
                name: 'name',
                required: false,
              },
              {
                label: 'Email',
                name: 'email',
                required: false,
              },
              {
                label: 'Địa chỉ',
                name: 'address',
                required: false,
              },
            ],
          },
          limit: {
            type: 1,
            spinTurn: 3,
            startAt: 'ISO-Datetime',
            resetAfter: 1,
            resetUnit: 'day/week/month',
          },
        },
      },
    });
  }, 1000);
};

// module.exports = (request, response) => {
//   response.json({
//     code: '200',
//     message: 'Success',
//     data: {
//       id: 1,
//       pageId: 123,
//       condition: {},
//       createdAt: '2019-08-24T14:15:22Z',
//       updatedAt: '2019-08-24T14:15:22Z',
//       createdBy: 'Huy',
//       updatedBy: 'Huy',
//       items: [
//         {
//           id: 1,
//           name: 'iPhone 14 Pro',
//           image: {
//             src: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/253531669.jpeg',
//             width: 100,
//           },
//           wheelId: 1,
//           percentage: 50,
//           quantity: 999,
//           request: {
//             endpoint: 'www.google.com',
//             method: 'POST',
//             body: {},
//             headers: {},
//           },
//         },
//         {
//           id: 2,
//           name: 'Samsung S22 Ultra',
//           image: {
//             src: 'https://cdn.tgdd.vn/Products/Images/42/271698/Galaxy-S22-Ultra-Black-600x600.jpg',
//             width: 100,
//           },
//           wheelId: 1,
//           percentage: 50,
//           quantity: 999,
//           request: {
//             endpoint: 'www.samsung.com',
//             method: 'GET',
//             body: {},
//             headers: {},
//           },
//         },
//       ],
//     },
//   });
// };
