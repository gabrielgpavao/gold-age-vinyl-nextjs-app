import styles from '@/styles/components/Hero/hero.module.scss'

export default function Hero (): JSX.Element {
	return (
		<section className={`${styles.backgroundImg}`}>
			<div className={`${styles.backgroundColor}`}>
				<div className={`${styles.container}`}>
					<section className={`${styles.introText}`}>
						<p className={`${styles.topParagraph}`}>
							Você também já sentiu que nasceu no ano errado? Como se sua mente pensasse nos anos 50 - 80 como boas memórias de outra vida? Como se pertencesse àquela época?
						</p>
						<p>
							Se a resposta for uma grande &quot;SIM&quot;, reunimos em um só lugar um compilado de discos de vinis dos melhores hits e álbunds dos velhos e bons tempos do Rock.
						</p>
						<p className={`${styles.bottomParagraph}`}>
							<strong className={`${styles.strong}`}>Confere aqui embaixo o que preparamos especialmente para você!</strong>
						</p>
					</section>
				</div>
			</div>
		</section>
	)
}
