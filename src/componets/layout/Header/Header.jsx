import React from 'react'
import './Header.scss'
import { ReactComponent as CoralLogo } from '/src/assets/images/logo.svg'
import { ReactComponent as TGLogo } from '/src/assets/images/tg.svg'
import { ReactComponent as VKLogo } from '/src/assets/images/vk.svg'
import { ReactComponent as WHLogo } from '/src/assets/images/whatsup.svg'
const Header = () => {
	return (
		<div className="header">
			<div className="header__left">
				<div className="header__logo">
					<CoralLogo />
				</div>
				<div className="header__items">
					<div className="header__item">Туры</div>
					<div className="header__item">Контакты</div>
				</div>
			</div>
			<div className="header__right">
				<div className="header__images">
					<VKLogo />
					<TGLogo />
					<WHLogo />
				</div>
				<div className="header__numbers">
					<div className="header__number">8 800 77 00 358</div>
					<div className="header__number">+7 903 900 02 92</div>
				</div>
			</div>
		</div>
	)
}

export default Header
