import { React, useEffect, useState } from 'react'
import langIcon from '../../../../public/planet.png'
import timeIcon from '../../../../public/time.png'
import './TestTyping.scss'
function TestTyping() {
	let [key, setKey] = useState('press key')
	let [time, setTime] = useState(localStorage.getItem('second'))
	let [timeI, setTimeI] = useState(0)
	let [lang, setLang] = useState(localStorage.getItem('lang'))
	let [iterator, setIterator] = useState(0)
	let [isTimeOver, setTimeOver] = useState(false)
	let txtEnglish = 'Nikita lolllfl'
	let txtRu = 'Никита лоллллооооо лло'
	let txt = lang === 'russian' ? txtRu : txtEnglish
	let error
	let times = [30, 60, 90]

	let textBlock

	// useEffect(() => {
	// 	// textBlock = document.querySelector('.txts')
	// 	if (textBlock) {
	// 		let splited = txt.split('').map(elem => {
	// 			return `<span>${elem}</span>`
	// 		})
	// 		textBlock.innerHTML = splited.join('')
	// 	}
	// }, [])

	useEffect(() => {
		textBlock = document.querySelector('.txts')
		let splited = txt.split('').map(elem => {
			return `<span>${elem}</span>`
		})
		textBlock.innerHTML = splited.join('')
	})

	document.addEventListener('keydown', function keyPressHandler(e) {
		textBlock = document.querySelector('.txts')
		if (isTimeOver) {
			let expectedSyvbol = txt[iterator]
			let currentSpan = textBlock && textBlock.children[iterator + 1]
			if (e.key === expectedSyvbol) {
				if (currentSpan && currentSpan.style) {
					currentSpan.classList.add('cursor')
				}
				iterator++
				rerender()
			} else if (e.key !== txt[iterator - 1] && e.key !== 'Shift') {
				textBlock.children[iterator]?.classList.add('colorR')
			}
		}
	})
	function finishTest() {
		for (let i = 0; i < textBlock.children.length; i++) {
			textBlock.children[i].classList.remove('colorW')
		}
		setIterator(0)
	}
	function rerender() {
		let textChildMinOne = textBlock.children[iterator - 1]
		for (let i = 0; i <= txt.length; i++) {
			textChildMinOne?.classList.remove('colorR')
			textChildMinOne?.classList.add('colorW')
			if (textChildMinOne) {
				textChildMinOne.classList.remove('cursor')
			}
		}
		if (iterator === textBlock.children.length) {
			setTimeOver(false)
			finishTest()
		}
	}

	//даем нынешнему спану класс потом по классу ищем и послего него даем спан курсор
	function start() {
		setTimeOver(true)
		textBlock.style.color = 'rgb(206, 198, 198)'
	}

	//--------------------------------------------------------------
	localStorage.setItem('second', time)
	localStorage.setItem('lang', lang)
	function changeTime() {
		const nextTimeI = (timeI + 1) % times.length
		setTimeI(nextTimeI)
		setTime(times[nextTimeI])
	}

	//-----------------------------------------------------------
	function changeLang() {
		lang == 'english' ? setLang('russian') : setLang('english')
		// txt == txtEnglish ? setTxt({ txtEnglish }) : setTxt({ txtRu })
	}

	return (
		<>
			<div className='test-typing'>
				<div className='test-typing-inner'>
					<h2 className='test-typing-title'>Тест скорости печати</h2>
					<h4 className='test-typing-subtitle subtitle-typing'>
						"Тест скорости печати" - это проверка, которая поможет вам
						определить точность и скорость вашей печати. Нажмите кнопку
						"Начать", затем введите первую букву, и время начнется идти.
					</h4>
					<h4 className='test-typing-subtitle2 subtitle-typing'>
						Выберите удобное время и язык, затем приступайте к тесту. Желаю
						успеха!
					</h4>
				</div>

				<div className='test-typing-work'>
					<div className='work-settings'>
						<button
							className='change-time-typing change-typing'
							onClick={changeTime}
						>
							<img src={timeIcon} alt='' />
							<span className='typing-time'>{time}s</span>
						</button>
						<button className='change-typing' onClick={changeLang}>
							<img src={langIcon} alt='' />
							<span>{lang}</span>
						</button>
					</div>
					<div className='typing-work'>
						<div className='txts'>{txt}</div>
						<button onClick={start}>start</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default TestTyping
