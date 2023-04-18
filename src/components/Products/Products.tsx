import styles from '@/styles/components/Products/products.module.scss'
import Cart from '../Cart/Cart';
import { Inter } from 'next/font/google';
import ProductCard from './ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux'
import { selectProductsListValue } from '@/slices/productsList.slice';
import { iProductData } from '@/database';
import { iFilterByCategoryState, selectFilterByCategoryValue } from '@/slices/filterByCategory.slice';
import CartModal from '../CartModal/CartModal';
import { openModal, selectIsCartModalOpenValue } from '@/slices/isCartModalOpen.slice';
import { BiCart } from 'react-icons/bi'
import { selectCartProductsListValue } from '@/slices/cartProductsList.slice';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700']
})

export default function Products (): JSX.Element {
	const dispatch = useDispatch()
	const isCartModalOpen: boolean = useSelector(selectIsCartModalOpenValue)
	const filterByCategory = useSelector(selectFilterByCategoryValue)
	const cartProductsAmount: number = useSelector(selectCartProductsListValue).length

	const productsList: Array<iProductData> = useSelector(selectProductsListValue).filter((product) => {
		if (filterByCategory !== 'default') {
			return product.category === filterByCategory
		}
		
		return product
	})
	
	return (
		<>
			{isCartModalOpen && <CartModal/>}
		
			<div className={styles.shadow}></div>
		
			<section className={`${inter.className} ${styles.container}`}>
				<h2 className={styles.sectionTitle}>
					Discos de Vinil
				</h2>

				<button onClick={() => { dispatch(openModal()) }}>
					<BiCart size={28}/>
					<span 
						style={cartProductsAmount === 0 ? { display: 'none' } : { display: 'unset' }}
					>{cartProductsAmount}</span>
				</button>
			</section>

			<main className={`${inter.className} ${styles.layout}`}>
				<ul className={styles.productsList}>
					{productsList.map((product) => <ProductCard key={product.id} product={product}/>)}
				</ul>
				
				<Cart/>
			</main>
		</>
	)
}
