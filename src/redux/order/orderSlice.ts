import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { GetProductsInstance } from '../../api/ApiInstance';
import { Order } from '../../types/Order';

export interface OrderState {
  order: Order;
}

const initialState: OrderState = {
  order: {
    promoCode: null,
    products: [],
  },
};

const OrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addPromoCode(state, action: PayloadAction<string>) {
      state.order.promoCode = action.payload
    },
  },
});

export const { addPromoCode } = OrderSlice.actions;

export default OrderSlice.reducer;
