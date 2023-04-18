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
		setCartProduct: (state, action: PayloadAction<iProductData>) => {
			state.payload.push(action.payload)
		},
		removeCartProduct: (state, action: PayloadAction<number>) => {
			const productIndex = state.payload.findIndex((product) => product.id === action.payload)
			state.payload.splice(productIndex, 1)
		}
	}
})

export const { setCartProduct, removeCartProduct } = cartProductsListSlice.actions
export const selectCartProductsListValue = (state: RootState) => state.cartProductsList.payload
export default cartProductsListSlice.reducer
