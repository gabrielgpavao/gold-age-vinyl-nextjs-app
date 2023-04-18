import styles from '@/styles/components/Header/header.module.scss'
import { Inter } from 'next/font/google'
import { useDispatch } from 'react-redux'
import { heavyMetal, reset, rockClassics, softRock } from '@/slices/filterByCategory.slice'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700']
})

export default function FilterOptions (): JSX.Element {
	const dispatch = useDispatch()
	
	return (
		<ul className={inter.className}>
			<li onClick={() => { dispatch(reset()) }}>Todos</li>
			<li onClick={() => { dispatch(rockClassics()) }}>Rock Classics</li>
			<li onClick={() => { dispatch(softRock()) }}>Soft Rock</li>
			<li onClick={() => { dispatch(heavyMetal()) }}>Heavy Metal</li>
		</ul>
	)
}
