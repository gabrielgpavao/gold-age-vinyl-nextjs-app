import { RootState } from '@/store'
import { createSlice } from '@reduxjs/toolkit'

export interface iCartProductAmountState {
  	payload: number
}

const initialState: iCartProductAmountState = {
  	payload: 0
}

export const cartProductAmountSlice = createSlice({
	name: 'cartProductAmount',
	initialState,
	reducers: {
		increment: (state: RootState) => {
			state.value += 1
		},
		decrement: (state: RootState) => {
			state.value -= 1
		}
	}
})

export const { increment, decrement } = cartProductAmountSlice.actions
export const selectCartProductAmountValue = (state: RootState) => state.cartProductAmount.value
export default cartProductAmountSlice.reducer
