import styles from '@/styles/components/Cart/cart.module.scss'
import { Inter } from 'next/font/google'
import CartProductsList from './CartProductsList/CartProductsList'
import { useSelector } from 'react-redux'
import { selectCartProductsListValue } from '@/slices/cartProductsList.slice'
import { iProductData } from '@/database'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700']
})

export default function Cart ():JSX.Element {	
	const cardProducts: Array<iProductData> = useSelector(selectCartProductsListValue)
	const totalPrice: string = cardProducts.reduce((prev, curr) => prev + curr.price, 0).toFixed(2)

    return (
        <aside className={`${inter.className} ${styles.cart}`}>
            <h2 className={styles.cartTitle}>Carrinho <span>de compras</span></h2>

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
        </aside>
    )
}
