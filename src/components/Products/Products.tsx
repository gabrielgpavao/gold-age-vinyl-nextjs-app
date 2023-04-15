import Image from 'next/image';
import searchIcon from '../../../public/searchIcon.png' 
import styles from '@/styles/components/Products/products.module.scss'
import Cart from '../Cart/Cart';
import { Inter } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700']
})

export default function Products (): JSX.Element {
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

			<div>
				<Cart/>
			</div>
		</>
	)
}
