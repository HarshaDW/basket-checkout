import IRoute from './types/IRoute';
import BasketView from './components/BasketView';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'ProductList View',
    component: ProductList,
    exact: true,
  },
  {
    path: '/basket',
    name: 'Basket View',
    component: BasketView,
    exact: true,
  },
  {
    path: '/checkout',
    name: 'Checkout View',
    component: Checkout,
    exact: true,
  },
];

export default routes;
