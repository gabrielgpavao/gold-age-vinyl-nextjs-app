import { RootState } from '@/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { iProductData } from '@/database';

export interface iProductsListState {
  	payload: Array<iProductData>;
}

const initialState: iProductsListState = {
  	payload: []
}

export const productsListSlice = createSlice({
	name: 'productsList',
	initialState,
	reducers: {
		getProducts: (state, action: PayloadAction<iProductData[]>) => {
			state.payload = action.payload
		}
	}
})

export const { getProducts } = productsListSlice.actions
export const selectproductsListValue = (state: RootState) => state.productsList.payload
export default productsListSlice.reducer
