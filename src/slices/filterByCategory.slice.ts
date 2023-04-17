import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

export interface iFilterByCategoryState {
	payload: 'default' | 'Rock Classics' | 'Heavy Metal' | 'Soft Rock';
}

const initialState: iFilterByCategoryState = {
	payload: 'default'
}

export const filterByCategorySlice = createSlice({
	name: 'filterByCategory',
	initialState,
	reducers: {
		reset: (state) => {
			state.payload = 'default'
		},
		rockClassics: (state) => {
			state.payload = 'Rock Classics'
		},
		heavyMetal: (state) => {
			state.payload = 'Heavy Metal'
		},
		softRock: (state) => {
			state.payload = 'Soft Rock'
		}
	}
})

export const { reset, rockClassics, heavyMetal, softRock } = filterByCategorySlice.actions
export const selectFilterByCategoryValue = (state: RootState) => state.filterByCategory.payload
export default filterByCategorySlice.reducer
