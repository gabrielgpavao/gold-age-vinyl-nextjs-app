import { RootState } from '@/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { iProductData } from '@/database';

export interface iProductsListState {
  	payload: Array<iProductData>;
}

const initialState: iProductsListState = {
  	payload: []
}

export const cartProductsListSlice = createSlice({
	name: 'cartProductsList',
	initialState,
	reducers: {
		setCartProduct: (state, action: PayloadAction<iProductData[]>) => {
			state.payload = action.payload
		}
	}
})

export const { setCartProduct } = cartProductsListSlice.actions
export const selectCartProductsListValue = (state: RootState) => state.cartProductsList.payload
export default cartProductsListSlice.reducer
