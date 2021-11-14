const popularData = [
  {
    id: '1',
    image: require('../images/pizza1.png'),
    title: 'Primavera Pizza',
    weight: '540 gr',
    rating: '5.0',
    price: '12.00',
    sizeName: 'Medium',
    sizeNumber: 14,
    crust: 'ThinCrust',
    deliveryTime: 30,
    ingredients: [
      {
        id: '1',
        name: 'ham',
        image: require('../images/ham.png'),
      },
      {
        id: '2',
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
      {
        id: '3',
        name: 'tomato',
        image: require('../images/tomato.png'),
      },
      {
        id: '4',
        name: 'garlic',
        image: require('../images/garlic.png'),
      },
    ],
  },
  {
    id: '2',
    image: require('../images/pizza2.png'),
    title: 'Vegetarian Pizza',
    weight: '450 gr',
    rating: '5.0',
  },
  {
    id: '3',
    image: require('../images/pizza3.png'),
    title: 'Pepperoni Pizza',
    weight: '700 gr',
    rating: '5.0',
  },
];

export default popularData;
