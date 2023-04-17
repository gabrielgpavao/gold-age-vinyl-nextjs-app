import { configureStore } from '@reduxjs/toolkit'
import productsListReducer from './slices/productsList.slice'
import cartProductsListReducer from './slices/cartProductsList.slice'
import filterByCategoryReducer from './slices/filterByCategory.slice'

export const store = configureStore({
	reducer: {
		productsList: productsListReducer,
		cartProductsList: cartProductsListReducer,
		filterByCategory: filterByCategoryReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
