// import React from 'react'
import styles from '@/styles/components/Header/header.module.scss'
import { Inter, Bungee_Inline } from 'next/font/google'
import { FiMenu } from 'react-icons/fi'
import FilterOptions from './FilterOptions/FilterOptions'
import MenuDropdown from './MenuDropdown/MenuDropdown'
import { openModal, selectIsMenuModalOpenValue } from '@/slices/isMenuModalOpen.slice'
import { useDispatch, useSelector } from 'react-redux'

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
	const isModalOpen: boolean = useSelector(selectIsMenuModalOpenValue)
	const dispatch = useDispatch()
	
	return (
		<>
			<header className={`${styles.header} ${inter.className}`}>
				<div className={`${styles.divHeader} ${styles.container}`}>
					<h1 className={bungeeInline.className}><span className={bungeeInline.className}>Gold</span> Age Vinyl</h1>
					<FilterOptions/>
					<FiMenu
						onClick={() => { dispatch(openModal()) }}
						className={styles.menuIcon}
						size={36}
					/>
				</div>
			</header>
			
			{ isModalOpen && <MenuDropdown/>}
		</>
	)
}
