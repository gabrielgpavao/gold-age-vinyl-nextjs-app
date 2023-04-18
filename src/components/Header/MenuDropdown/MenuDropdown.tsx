import styles from '@/styles/components/Header/MenuDropdown/menuDropdown.module.scss'
import FilterOptions from '../FilterOptions/FilterOptions'
import { useDispatch } from 'react-redux'
import { closeModal } from '@/slices/isMenuModalOpen.slice'
import { BaseSyntheticEvent } from 'react'

export default function MenuDropdown (): JSX.Element {
	const dispatch = useDispatch()
	
	function handleDispatch (event: BaseSyntheticEvent) {
		if (event.target.id === 'menuModal') {
			dispatch(closeModal())
		}
	}
	
	return (
		<div id='menuModal' className={styles.menuModal} onClick={handleDispatch}>
			<section>
				<div>
					<h2>Categorias</h2>
					<span onClick={() => { dispatch(closeModal()) }}>X</span>
				</div>
				<FilterOptions/>
			</section>
		</div>
	)
}
