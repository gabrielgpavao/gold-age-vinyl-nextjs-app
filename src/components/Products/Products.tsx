import Image from 'next/image';
import searchIcon from '../../../public/searchIcon.png' 
import styles from '@/styles/components/Products/products.module.scss'

export default function Products (): JSX.Element {
	return (
		<section className={styles.container}>
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
	)
}
