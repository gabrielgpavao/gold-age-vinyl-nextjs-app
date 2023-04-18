import { configureStore } from '@reduxjs/toolkit'
import productsListReducer from './slices/productsList.slice'
import cartProductsListReducer from './slices/cartProductsList.slice'
import filterByCategoryReducer from './slices/filterByCategory.slice'
import isMenuModalOpenReducer from './slices/isMenuModalOpen.slice'

export const store = configureStore({
	reducer: {
		productsList: productsListReducer,
		cartProductsList: cartProductsListReducer,
		filterByCategory: filterByCategoryReducer,
		isMenuModalOpen: isMenuModalOpenReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
