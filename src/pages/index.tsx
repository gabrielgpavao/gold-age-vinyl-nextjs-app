import Head from 'next/head'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Products from '@/components/Products/Products'
import { GetStaticProps } from 'next'
import { iProductData } from '@/database'
import { useDispatch } from 'react-redux'
import { setProducts } from '@/slices/productsList.slice'
import { useEffect } from 'react'

interface iHomeProductProps {
	products: Array<iProductData>
}

export default function Home({ products }: iHomeProductProps) {
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(setProducts(products))

	}, [dispatch, products])

	return (
		<>
			<Head>
				<title>Gold Age Vinyl</title>
				<meta charSet='UTF-8'/>
				<meta name="description" content="E-commerce de Discos de Vinis para amantes da Era de Ouro do Rock" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Header/>
			<Hero/>
			<Products/>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch('http://localhost:3000/api/products')
	const products = await response.json()
	
	return {
		props: {
			products
		}
	}
}
