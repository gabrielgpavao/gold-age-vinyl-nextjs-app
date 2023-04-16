import { configureStore } from '@reduxjs/toolkit'
import cartProductsAmountReducer from './slices/cartTotalPriceSlice'
import cartTotalPriceReducer from './slices/cartTotalPriceSlice'

export const store = configureStore({
	reducer: {
		cartProductAmount: cartProductsAmountReducer,
		cartTotalPrice: cartTotalPriceReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
