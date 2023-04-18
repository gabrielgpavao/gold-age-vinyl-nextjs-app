import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

export interface iIsModalOpenState {
	payload: boolean;
}

const initialState: iIsModalOpenState = {
	payload: false
}

export const isMenuModalOpenSlice = createSlice({
	name: 'isMenuModalOpen',
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

export const { openModal, closeModal } = isMenuModalOpenSlice.actions
export const selectIsMenuModalOpenValue = (state: RootState) => state.isMenuModalOpen.payload
export default isMenuModalOpenSlice.reducer
