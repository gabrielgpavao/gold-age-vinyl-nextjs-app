import { heavyMetal, reset, rockClassics, softRock } from '@/slices/filterByCategory.slice'
import styles from '@/styles/components/Header/header.module.scss'
import { Inter, Bungee_Inline } from 'next/font/google'
import { useDispatch } from 'react-redux'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700']
})

const bungeeInline = Bungee_Inline({
	subsets: ['latin'],
	weight: '400',
	style: 'normal'
})

export default function Header (): JSX.Element {
	const dispatch = useDispatch()
	
	return (
		<header className={`${styles.header} ${inter.className}`}>
			<div className={`${styles.divHeader} ${styles.container}`}>
				<h1 className={bungeeInline.className}><span className={bungeeInline.className}>Gold</span> Age Vinyl</h1>
				<nav>
					<ul className={`${styles.menuNav} ${inter.className}`}>
						<li onClick={() => { dispatch(reset()) }}>Todos</li>
						<li onClick={() => { dispatch(rockClassics()) }}>Rock Classics</li>
						<li onClick={() => { dispatch(softRock()) }}>Soft Rock</li>
						<li onClick={() => { dispatch(heavyMetal()) }}>Heavy Metal</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}