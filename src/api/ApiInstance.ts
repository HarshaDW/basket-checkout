import axios, { AxiosResponse } from 'axios';
import { Product } from '../types/Product';

export class GetProductsInstance {
  private instance = axios.create({
    method: 'GET',
    baseURL: 'http//localhost:9001/',
  });

  getProducts(url: string): Promise<AxiosResponse<Product>> {
    return this.instance.get<Product>(url);
  }
}
