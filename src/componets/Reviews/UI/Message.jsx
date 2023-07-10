import cn from 'classnames'
import './Message.scss'
const Message = ({ children, type }) => {
	const classNameMessage = type == 'left' ? 'message__left' : 'message__right'
	return (
		<div className={cn('reviews__message', 'message', classNameMessage)}>
			{children}
			<span className='message__dec'></span>
		</div>
	)
}

export default Message
