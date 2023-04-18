import styles from '@/styles/components/CartModal/cartModal.module.scss'
import { Inter } from 'next/font/google'
import { selectCartProductsListValue } from '@/slices/cartProductsList.slice'
import { useDispatch, useSelector } from 'react-redux'
import { iProductData } from '@/database'
import CartProductsList from '../Cart/CartProductsList/CartProductsList'
import { closeModal } from '@/slices/isCartModalOpen.slice'
import { BaseSyntheticEvent } from 'react'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700']
})

export default function CartModal (): JSX.Element {
	const cardProducts: Array<iProductData> = useSelector(selectCartProductsListValue)
	const totalPrice: string = cardProducts.reduce((prev, curr) => prev + curr.price, 0).toFixed(2)
	const dispatch = useDispatch()
	
	function handleDispatch (event: BaseSyntheticEvent) {
		if (event.target.id === 'cartModal') {
			dispatch(closeModal())
		}
	}
	
	return (
		<div id='cartModal' className={styles.cartModal} onClick={handleDispatch}>
			<section className={`${inter.className} ${styles.cart}`}>
				<div>
					<h2 className={styles.cartTitle}>Carrinho <span>de compras</span></h2>
					<span onClick={() => { dispatch(closeModal()) }}>X</span>
				</div>

				<div>
					{
						cardProducts.length === 0 ?
							<p className={styles.emptyCart}>Adicionar itens ao carrinho</p>
						:
							<CartProductsList/>
					}
				</div>

				<section className={styles.cartInfo}>
					<div className={styles.productsAmount}>
						<p>Quantidade:</p>
						<p>{cardProducts.length}</p>
					</div>
					<div className={styles.totalPrice}>
						<p>Total:</p>
						<p>R$ {totalPrice}</p>
					</div>
				</section>
			</section>
		</div>
	)
}
