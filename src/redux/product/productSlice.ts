import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { GetProductsInstance } from '../../api/ApiInstance';
import { Product } from '../../types/Product';

export interface ProductState {
  selectedProducts: Array<Product>;
}

const initialState: ProductState = {
  selectedProducts: [],
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const api = new GetProductsInstance();
    const response = await api.getProducts('products');

    return response.data;
  }
);

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<Product>) {
      //TODO Add a check for duplicates
      state.selectedProducts.push(action.payload);
    },
  },
});

export const { addToBasket } = ProductSlice.actions;
export const selectedProducts = (state: RootState) =>
  state.products.selectedProducts;

export default ProductSlice.reducer;
