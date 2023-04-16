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
		increment: (state) => {
			state.payload += 1
		},
		decrement: (state) => {
			state.payload -= 1
		}
	}
})

export const { increment, decrement } = cartProductAmountSlice.actions
export const selectCartProductAmountValue = (state: RootState) => state.cartProductAmount.payload
export default cartProductAmountSlice.reducer
