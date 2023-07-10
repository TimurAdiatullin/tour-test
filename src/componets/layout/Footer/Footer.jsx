import React from 'react'
import './Footer.scss'
import { ReactComponent as TGLogo } from '/src/assets/images/tg-footer.svg'
import { ReactComponent as VKLogo } from '/src/assets/images/vk-footer.svg'
import { ReactComponent as WHLogo } from '/src/assets/images/wh-footer.svg'
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__up">
				<div className="footer__img">
					<img
						src="/src/assets/images/footer-logo.png"
						alt=""
						className="footer__image"
					/>
				</div>
				<div className="footer__cont">
					<div className="footer__title">Контакты</div>
					<div className="footer__items">
						<div className="footer__item">+7 903 900 02 92</div>
						<div className="footer__item">8 800 77 00 358</div>
					</div>
				</div>
				<div className="footer__info">
					<div className="footer__title">Информация</div>
					<div className="footer__items">
						<div className="footer__item">О нас</div>
						<div className="footer__item">Туры</div>
					</div>
				</div>
				<div className="footer__logos">
					<VKLogo />
					<TGLogo />
					<WHLogo />
				</div>
			</div>
			<div className="footer__subtitle">
				2023 © Грин вей - Туристическое агентство
			</div>
		</div>
	)
}

export default Footer
