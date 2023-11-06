import { ImageSourcePropType } from 'react-native';
import { Product } from '../datatypes/Product';
import { ProductCategory } from '../datatypes/ProductCategory';
export const fakeCartData: Product[] = [
  {
    _id: '1',
    name: 'Apple',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
    price: 10000,
    weight: 1,
    count: 1,
  },
  {
    _id: '2',
    name: 'Apple',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
    price: 10000,
    weight: 1,
    count: 1,
  },
  {
    _id: '3',
    name: 'Apple',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
    price: 10000,
    weight: 1,
    count: 1,
  },
  {
    _id: '4',
    name: 'Apple',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
    price: 10000,
    weight: 1,
    count: 1,
  },
  {
    _id: '5',
    name: 'Apple',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
    price: 10000,
    weight: 1,
    count: 1,
  },
  {
    _id: '6',
    name: 'Apple',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
    price: 10000,
    weight: 1,
    count: 1,
  },
  {
    _id: '7',
    name: 'Apple',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
    price: 10000,
    weight: 1,
    count: 1,
  },

];
export type delivery = {
  time: string;
  name: string;
  price: number;
  img: ImageSourcePropType;
};
export const deliverys: delivery[] = [
  {
    name: 'ghn',
    img: require('../assets/images/ic_ghn.png'),
    price: 20000,
    time: '2-3 days',
  },
  {
    name: 'ghtk',
    img: require('../assets/images/ic_vtpost.png'),

    price: 24000,
    time: '4-5 days',
  },
  {
    name: 'vtp',
    img: require('../assets/images/ghtk.png'),
    price: 53000,
    time: '1 days',
  },
  {
    name: 'shopeeex',
    img: require('../assets/images/ic_shopee_express.png'),

    price: 21200,
    time: '1-2 days',
  },
];

export const productCategory: ProductCategory[] = [
  {
    id: '1',
    name: 'Fruits',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
  },
  {
    id: '2',
    name: 'Vegetables',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
  },
  {
    id: '3',
    name: 'Meat',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
  },
  {
    id: '4',
    name: 'Seafood',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
  },
  {
    id: '5',
    name: 'Fast Food',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
  },
  {
    id: '6',
    name: 'Others',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
  },
];

  // {
  //   amount: 1,
  //   id: 2,
  //   image: require('../assets/images/salmon.png'),
  //   name: 'Salmon',
  //   weight: 6,
  //   price: 143000,
  // },
  // {
  //   amount: 1,
  //   id: 3,
  //   image: require('../assets/images/orance.png'),
  //   name: 'Orange',
  //   weight: 6,
  //   price: 113000,
  // },
  // {
  //   amount: 1,
  //   id: 4,
  //   image: require('../assets/images/paple.png'),
  //   name: 'Paple',
  //   weight: 6,
  //   price: 73000,
  // },
  // {
  //   amount: 1,
  //   id: 5,
  //   image: require('../assets/images/mango.png'),
  //   name: 'Mango',
  //   weight: 6,
  //   price: 123000,
  // },
  // {
  //   amount: 1,
  //   id: 6,
  //   image: require('../assets/images/watermelo.png'),
  //   name: 'Water Melon',
  //   weight: 6,
  //   price: 113000,
  // },
  // {
  //   amount: 1,
  //   id: 7,
  //   image: require('../assets/images/straw.png'),
  //   name: 'Strawberry',
  //   weight: 6,
  //   price: 93000,
  // },
  // {
  //   amount: 1,
  //   id: 8,
  //   image: require('../assets/images/peach.png'),
  //   name: 'Peach',
  //   weight: 6,
  //   price: 143000,
  // },

  // {
  //   amount: 1,
  //   id: 9,
  //   image: require('../assets/images/grape.png'),
  //   name: 'Grapee',
  //   weight: 6,
  //   price: 123000,
  // }, {
  //   amount: 1,
  //   id: 11,
  //   image: require('../assets/images/greenapple.png'),
  //   name: 'Green apple',
  //   weight: 6,
  //   price: 123000,
  // },

