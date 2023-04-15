import styles from '@/styles/components/Products/ProductCard/productCard.module.scss'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import acdc from '../../../../public/acdc.jpg'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700']
})

export default function ProductCard (): JSX.Element {
    return (
        <li id="id" className={`${inter.className} ${styles.productCard}`}>
            <div>
                <Image src={acdc} className={styles.cardAlbumImg} alt="name" title="name"/>
                <h3>{"name"}</h3>
                <small>{"band"}</small>
                <span>{"category"}</span>
            </div>

            <div>
                <p className={styles.price}>R$ {"price"}</p>
                <small>Frete grátis</small>
                <div className={styles.addToCartDiv}>
                    <button className={styles.addToCartButton}>Adicionar ao carrinho</button>
                </div>
            </div>
        </li>
    )
}