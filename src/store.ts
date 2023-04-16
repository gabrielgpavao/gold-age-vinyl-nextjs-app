import { configureStore } from '@reduxjs/toolkit'
import productsListReducer from './slices/productsListSlice'
import cartProductsAmountReducer from './slices/cartTotalPriceSlice'
import cartTotalPriceReducer from './slices/cartTotalPriceSlice'

export const store = configureStore({
	reducer: {
		productsList: productsListReducer,
		cartProductAmount: cartProductsAmountReducer,
		cartTotalPrice: cartTotalPriceReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch