import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './Form.scss'
import { ReactComponent as CheckIn } from '/src/assets/images/check.svg'

const FormBlock = () => {
	const { register, handleSubmit } = useForm()
	const [check, setCheck] = useState(false)
	const onSubmit = data => {
		console.log(data)
	}
	return (
		<div className="hero__form form">
			<div className="form__subtitle">Нет времени подбирать тур ? </div>
			<div className="form__title">ОСТАВЬТЕ ЗАЯВКУ</div>
			<div className="form__subtitle">
				Мы подберем лучший тур под ваш бюджет
			</div>
			<form className=" form__in" onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					{...register('name')}
					placeholder="Введите телефон"
					className="form__input"
				/>
				<input
					type="text"
					{...register('telephoneNumber')}
					placeholder="Введите имя"
					className="form__input"
				/>
				<input
					type="text"
					{...register('type')}
					placeholder="Какой тур вам нужен ?"
					className="form__input"
				/>
				<button type="submit" className="form__button">
					Подобрать Тур
				</button>
			</form>
			<div className="form__check">
				<button className="form__checkbox" onClick={() => setCheck(!check)}>
					<div className="form__icon">{check ? <CheckIn /> : <></>}</div>
				</button>
				<div className="form__checktext">
					Нажимая кнопку "Подобрать тур" я даю свое согласие на обработку
					персональных данных.
				</div>
			</div>
		</div>
	)
}

export default FormBlock
