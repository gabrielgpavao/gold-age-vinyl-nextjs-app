import { configureStore } from '@reduxjs/toolkit'
import productsListReducer from './slices/productsList.slice'
import cartProductsListReducer from './slices/cartProductsList.slice'

export const store = configureStore({
	reducer: {
		productsList: productsListReducer,
		cartProductsList: cartProductsListReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
