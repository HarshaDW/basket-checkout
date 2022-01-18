import { Product } from './Product';

export interface Order {
  products: Array<Product>;
  promoCode: string | null;
}
