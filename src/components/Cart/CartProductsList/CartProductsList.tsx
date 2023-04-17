import { iProductData } from '@/database'
import { selectCartProductsListValue } from '@/slices/cartProductsList.slice'
import styles from '@/styles/components/Cart/cart.module.scss'
import Image from 'next/image'
import { useSelector } from 'react-redux'
  
export default function CartProductsList (): JSX.Element {
	const products: Array<iProductData> = useSelector(selectCartProductsListValue)
	
	return (
		<ul>
			{
				products.map((product: iProductData) => (
					<li key={product.id} className={styles.cartProduct}>
						<Image src={product.albumImg} alt={product.name} className={styles.albumImg} width={60} height={63}/>
						<div>
							<h3>{product.name}</h3>
							<p>{product.band}</p>
							<small>R$ {product.price}</small>
						</div>
						<button className={styles.trashIcon}></button>
					</li>
				))
			}
		</ul>
	)
}
