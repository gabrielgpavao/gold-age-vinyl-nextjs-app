import styles from '@/styles/components/Products/ProductCard/productCard.module.scss'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { iProductData } from '@/database'
import { useDispatch } from 'react-redux'
import { setCartProduct } from '@/slices/cartProductsList.slice'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700']
})

interface iProductCardProps {
	product: iProductData
}

export default function ProductCard ({ product }: iProductCardProps): JSX.Element {
	const dispatch = useDispatch()
	
    return (
        <li id={product.id.toString()} className={`${inter.className} ${styles.productCard}`}>
            <div>
                <Image src={product.albumImg} className={styles.cardAlbumImg} alt={product.name} title={product.name} width={220} height={210}/>
                <h3>{product.name}</h3>
                <small>{product.band}</small>
                <span>{product.category}</span>
            </div>

            <div>
                <p className={styles.price}>R$ {product.price.toFixed(2)}</p>
                <small>Frete grátis</small>
                <div className={styles.addToCartDiv}>
                    <button 
						className={styles.addToCartButton}
						onClick={() => {dispatch(setCartProduct(product))}}
					>Adicionar ao carrinho</button>
                </div>
            </div>
        </li>
    )
}