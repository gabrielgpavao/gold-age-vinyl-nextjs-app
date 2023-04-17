import Image from 'next/image';
import searchIcon from '../../../public/searchIcon.png' 
import styles from '@/styles/components/Products/products.module.scss'
import Cart from '../Cart/Cart';
import { Inter } from 'next/font/google';
import ProductCard from './ProductCard/ProductCard';
import { useSelector } from 'react-redux'
import { selectProductsListValue } from '@/slices/productsList.slice';
import { iProductData } from '@/database';
import { selectFilterByCategoryValue } from '@/slices/filterByCategory.slice';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700']
})

export default function Products (): JSX.Element {
	const filterByCategory = useSelector(selectFilterByCategoryValue)
	const productsList: Array<iProductData> = useSelector(selectProductsListValue).filter((product) => {
		if (filterByCategory !== 'default') {
			return product.category === filterByCategory
		}
		
		return product
	})
	
	return (
		<>
			<div className={styles.shadow}></div>
		
			<section className={`${inter.className} ${styles.container}`}>
				<h2 className={styles.sectionTitle}>
					Discos de Vinil
				</h2>
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
