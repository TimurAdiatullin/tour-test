import React from 'react'
import FormBlock from './Form/FormBlock'
import './Hero.scss'
const Hero = () => {
	return (
		<div className="hero">
			<div className="hero__main">
				<div className="hero__title">Турция</div>
				<div className="hero__subtitle">
					Cолнце, море, клубы! <br />
					Твой незабываемый отдых в Турции!
				</div>
				<div className="hero__items">
					<div className="hero__item">
						<div className="hero__fact">Прямые рейсы из Новосибирска.</div>
						<div className="hero__desc">
							Зарегистрируем Вас на рейс. Заблаговременно напомним о вылете
						</div>
					</div>
					<div className="hero__item">
						<div className="hero__fact">Знаем о Турции все!</div>
						<div className="hero__desc">
							Порекомендуем лучшие экскурсии. Забронируем идеально подходящий
							Вам отель.
						</div>
					</div>
					<div className="hero__item">
						<div className="hero__fact">Поддержка туристов 24/7</div>
						<div className="hero__desc">
							Решаем все вопросы с заселением, трасфером и качеством
							обслуживания в течение часа.
						</div>
					</div>
				</div>
			</div>
			<FormBlock />
		</div>
	)
}

export default Hero
