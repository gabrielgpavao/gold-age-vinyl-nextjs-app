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
		increment: (state: RootState, action: PayloadAction<number>) => {
			state.value += action.payload
		},
		decrement: (state: RootState, action: PayloadAction<number>) => {
			state.value -= action.payload
		}
	}
})

export const { increment, decrement } = cartTotalPriceSlice.actions
export const selectValue = (state: RootState) => state.cartTotalPrice.value
export default cartTotalPriceSlice.reducer
