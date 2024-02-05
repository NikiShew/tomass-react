import { Link } from 'react-router-dom'
import doc from '../../../../public/doc.png'
import keyboard from '../../../../public/keyboard (2).png'
import telegramIcon from '../../../../public/telegram.png'
import './Start-page.scss'
function StartPage() {
	return (
		<>
			<div className='start-page'>
				<div className='start-page-inner'>
					<div className='start-page__block1'>
						<img src={keyboard} alt='' />
						<div className='start-page_bl1-info'>
							<h2>Пройди тест и узнай свою скорость печати!</h2>
							<h4>
								Хочешь узнать, насколько быстро твои пальцы могут двигаться по
								клавиатуре? Пройди тест скорости печати и сравни свою скорость с
								тем, как быстро Роналдо может достичь ворот!
							</h4>
							<Link>Начнем</Link>
						</div>
					</div>
					<div className='start-page-packet'>
						<div className='start-page__block2'>
							<h4>вызов</h4>
							<h3>
								Подними на себе вызов: сможешь ли набрать более 20 слов за 30
								секунд? Если докажешь свою способность, жди в награду целых 30
								томов. Уверен, что готов принять вызов?
							</h3>
							<Link>Готов</Link>
						</div>
						<div className='start-page__block3'>
							<div className='telegram-info'>
								<img src={telegramIcon} alt='' />
								<h3>
									Присоединяйся к нашему Telegram-каналу, где выходят все
									новости, а самое главное - ты можешь найти новых друзей с
									общими интересами. Перейди в канал с помощью кнопки в меню."
								</h3>
							</div>
							<div className='telegram-info'>
								<img src={doc} alt='' />
								<h3>
									Если тебе интересно, что это за сайт и как им пользоваться,
									загляни в документацию, она доступна в меню слева.
									Развлекайся!
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default StartPage
