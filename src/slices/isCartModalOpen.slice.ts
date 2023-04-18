import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';
import { iIsModalOpenState } from './isMenuModalOpen.slice';

const initialState: iIsModalOpenState = {
	payload: false
}

export const isCartModalOpenSlice = createSlice({
	name: 'isCartModalOpen',
	initialState,
	reducers: {
		openModal: (state) => {
			state.payload = true
		},
		closeModal: (state) => {
			state.payload = false
		}
	}
})

export const { openModal, closeModal } = isCartModalOpenSlice.actions
export const selectIsCartModalOpenValue = (state: RootState) => state.isCartModalOpen.payload
export default isCartModalOpenSlice.reducer
