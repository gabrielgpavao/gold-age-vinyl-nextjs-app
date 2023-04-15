import styles from '@/styles/components/Cart/cart.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700']
})

export default function Cart ():JSX.Element {
    return (
        <aside className={`${inter.className} ${styles.cart}`}>
            <h2 className={styles.cartTitle}>Carrinho de compras</h2>
            <div>
                <p className={styles.emptyCart}>Adicionar itens ao carrinho</p>
            </div>

            <section className={styles.cartInfo}>
                <div className={styles.productsAmount}>
                    <p>Quantidade:</p>
                    <p>0</p>
                </div>
                <div className={styles.totalPrice}>
                    <p>Total:</p>
                    <p>R$ 0.00</p>
                </div>
            </section>
        </aside>
    )
}
