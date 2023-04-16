import Image from 'next/image';
import searchIcon from '../../../public/searchIcon.png' 
import styles from '@/styles/components/Products/products.module.scss'
import Cart from '../Cart/Cart';
import { Inter } from 'next/font/google';
import ProductCard from './ProductCard/ProductCard';
import { useSelector } from 'react-redux'
import { selectproductsListValue } from '@/slices/productsListSlice';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700']
})

export default function Products (): JSX.Element {
	const productsList = useSelector(selectproductsListValue)
	
	return (
		<>
			<section className={`${inter.className} ${styles.container}`}>
				<h2 className={styles.sectionTitle}>
					Discos de Vinil
				</h2>
				<fieldset>
					<input 
						type="search" 
						className={styles.input}
						placeholder="O que você está procurando..."
					/>

					<button className={styles.searchButton}>
						<Image className={styles.searchIcon} src={searchIcon} alt="Ícone de Pesquisa"/>
					</button>
				</fieldset>
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
