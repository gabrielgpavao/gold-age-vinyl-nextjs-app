import { RootState } from '@/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface iCartTotalPriceState {
  	payload: number
}

const initialState: iCartTotalPriceState = {
  	payload: 0
}

export const cartTotalPriceSlice = createSlice({
	name: 'cartTotalPrice',
	initialState,
	reducers: {
		increment: (state, action: PayloadAction<number>) => {
			state.payload += action.payload
		},
		decrement: (state, action: PayloadAction<number>) => {
			state.payload -= action.payload
		}
	}
})

export const { increment, decrement } = cartTotalPriceSlice.actions
export const selectCartTotalPriceValue = (state: RootState) => state.cartTotalPrice.payload
export default cartTotalPriceSlice.reducer
