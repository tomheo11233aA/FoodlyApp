import {AxiosResponse} from 'axios';
import AxiosInstance from '../utilities/AxiosInstance';
import {ProductCategory} from '../datatypes/ProductCategory';
import {Product} from '../datatypes/Product';

const fakePopularProduct: Product[] = [
  {
    _id: '1',
    name: 'Bánh mì',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
    price: 10000,
    weight: 100,
    category_id: '1',
    count: 10,
    buycount: 0,
  },
  {
    _id: '2',
    name: 'Bánh mì',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
    price: 10000,
    weight: 100,
    category_id: '1',
    count: 10,
    buycount: 0,
  },
  {
    _id: '3',
    name: 'Bánh mì',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
    price: 10000,
    weight: 100,
    category_id: '1',
    count: 10,
    buycount: 0,
  },
  {
    _id: '4',
    name: 'Bánh mì',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
    price: 10000,
    weight: 100,
    category_id: '1',
    count: 10,
    buycount: 0,
  },
  {
    _id: '5',
    name: 'Bánh mì',
    photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png',
    price: 10000,
    weight: 100,
    category_id: '1',
    count: 10,
    buycount: 0,
  },
];

export const getPopularProduct = async () => {
  // try {
  //   const products = await AxiosInstance().get<Product[]>(
  //     'product/getpopularproducts',
  //   );
  //   return products;
  // } catch (err) {
  //   console.log('loi lay du lieu tu sever');
  // }
  return fakePopularProduct;
};
