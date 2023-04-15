import Head from 'next/head'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'

export default function Home() {
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
		</>
	)
}
