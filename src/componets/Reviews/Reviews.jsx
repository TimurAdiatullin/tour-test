import './Reviews.scss'
import Message from './UI/Message'
const Reviews = () => {
	return (
		<div className="reviews">
			<div className="reviews__title">
				Отзывы <br /> наших туристов
			</div>
			<div className="reviews__dialogs">
				<div className="reviews__dialog">
					<div className="reviews__user">
						<div className="reviews__userblock">
							<img src="./images/ann.png" alt="" className="reviews__image" />
							Анна <br /> Москва, Россия
						</div>
						<Message type="left">
							Марьяна спасибо за прекрасный отдых в отеле “Адонис Отель” который
							вы посоветовали действительно отличный. Действительно была
							великоленая анимация для детей.
						</Message>
					</div>
					<div className="reviews__comp">
						<Message type="right">
							Благодарим, что выбрали нас для организации своего путешествия. Мы
							очень рады, что Вы остались довольны предоставленными услугами.
						</Message>
						<div className="reviews__compblock">
							<img src="./images/owner.png" alt="" />
						</div>
					</div>
				</div>
				<div className="reviews__dialog">
					<div className="reviews__user">
						<div className="reviews__userblock">
							<img src="./images/ivan.png" alt="" className="reviews__image" />
							Иван <br /> Санкт-Петербург, Россия
						</div>
						<Message type="left">
							Качество и хорошее отношение туроператора, приветливые сотрудники.
							Подобрали прекрасный тур в Турцию. Seven Seas Hotel Blue классный
							отель, там большая территория и очень красиво. Были на нескольких
							экскурсиях, очень понравилось.
						</Message>
					</div>
					<div className="reviews__comp">
						<Message type="right">
							Спасибо, рады что вам понравилось, ждем Вас в следующий раз.
						</Message>
						<div className="reviews__compblock">
							<img src="/images/owner.png" alt="" />
						</div>
					</div>
				</div>
				<div className="reviews__dialog">
					<div className="reviews__user">
						<div className="reviews__userblock">
							<img src="./images/petr.png" alt="" className="reviews__image" />
							Петр <br /> Екатеринбург, Россия
						</div>
						<Message type="left">
							Я был просто в восторге от моей первой поездки с семьей в Турцию.
							Туроператор Coral Travel я буду рекомендовать, т. к. у нас отдых
							удался. И надеюсь, что в наши следующие путешествия с ним, никаких
							проблем не возникнет.
						</Message>
					</div>
					<div className="reviews__comp">
						<Message type="right">
							Мы очень рады, что путешествие с нами оставило у Вас приятное
							впечатление. С нетерпением будем ждать новых встреч!
						</Message>
						<div className="reviews__compblock">
							<img src="./images/owner.png" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="reviews__btn">Хочу такой же отдых</div>
		</div>
	)
}

export default Reviews
