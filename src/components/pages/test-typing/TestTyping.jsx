import { React, useEffect, useRef, useState } from 'react'
import langIcon from '../../../../public/planet.png'
import repeatIcon from '../../../../public/repeat-sign.png'
import timeIcon from '../../../../public/time.png'
import './TestTyping.scss'
function TestTyping() {
	let [key, setKey] = useState('press key')
	let [time, setTime] = useState(
		localStorage.getItem('second') === null
			? 30
			: localStorage.getItem('second')
	)

	let [error, setError] = useState(0)

	let [timerSec, setTimerSec] = useState(time)
	let [timeI, setTimeI] = useState(0)
	let [lang, setLang] = useState(
		localStorage.getItem('lang') === null
			? 'english'
			: localStorage.getItem('lang')
	)
	let [iterator, setIterator] = useState(0)
	let [isTimeOver, setTimeOver] = useState(false)
	let txtEnglish =
		'Among its newest features is Newsline, an interactive news ticker that includes local news headlines, weather conditions, forecasts and alerts, stock market data, and top stories across business, entertainment, science, and technology categories.'
	let txtRu = 'Никита лоллллооооо лло'
	let txt = lang === 'russian' ? txtRu : txtEnglish
	let times = [30, 60, 90]
	let textBlock = useRef(null)
	let [intervalTime, setIntervalTime] = useState(true)
	useEffect(() => {
		let splited = txt.split('').map(elem => {
			return `<span>${elem}</span>`
		})
		textBlock.current.innerHTML = splited.join('')
		document.addEventListener('keydown', keyPressHandler)
		return () => {
			document.removeEventListener('keydown', keyPressHandler)
		}
	}, [isTimeOver])

	function keyPressHandler(e) {
		let expectedSyvbol = txt[iterator]
		let currentSpan =
			textBlock.current && textBlock.current.children[iterator + 1]
		if (
			isTimeOver &&
			iterator < txt.length &&
			textBlock.current &&
			isTimeOver
		) {
			if (e && e.key === expectedSyvbol) {
				if (currentSpan && currentSpan.style) {
					currentSpan.classList.add('cursor')
				}
				iterator++
				rerender()
			} else if (e && e.key !== txt[iterator - 1] && e.key !== 'Shift') {
				textBlock.current.children[iterator]?.classList.add('colorR')
				setError(error++)
				console.log(error)
			}
			if (iterator === textBlock.current.children.length || !isTimeOver) {
				finishTest()
			}
		}
	}
	let interval
	function timer() {
		let sec = time
		if (!isTimeOver) {
			interval = setInterval(() => {
				if (sec === 0) {
					clearInterval(interval)
					finishTest()
					document.removeEventListener('keydown', keyPressHandler)
					setTimerSec(time)
				} else {
					sec -= 1
					setTimerSec(sec)
				}
			}, 1000)
		}
	}

	//как сделать так чтобы я смог ее использовать везде и изменять
	//что то с первых входом
	function start() {
		setError(0)
		setTimeOver(true)
		setIntervalTime(true)
		timer()
		keyPressHandler()
		textBlock.current.style.color = 'rgb(206, 198, 198)'
	}

	function repeat() {
		setError(0)
		setIntervalTime(false)
		finishTest()
		document.removeEventListener('keydown', keyPressHandler)
		setTimerSec(time)
	}

	function finishTest() {
		setIterator(0)
		setTimeOver(false)
		for (let i = 0; i < textBlock.current.children.length; i++) {
			textBlock.current.children[i].classList.remove('colorW')
		}
		textBlock.current.style.color = 'grey'
		document.removeEventListener('keydown', keyPressHandler)
	}

	function rerender() {
		let textChildMinOne = textBlock.current.children[iterator - 1]
		for (let i = 0; i <= txt.length; i++) {
			textChildMinOne?.classList.remove('colorR')
			textChildMinOne?.classList.add('colorW')
			if (textChildMinOne) {
				textChildMinOne.classList.remove('cursor')
			}
		}
	}

	function info() {}

	//--------------------------------------------------------------

	localStorage.setItem('second', time)
	localStorage.setItem('lang', lang)
	function changeTime() {
		const nextTimeI = (timeI + 1) % times.length
		setTimeI(nextTimeI)
		setTime(times[nextTimeI])
		setTimerSec(times[nextTimeI])
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
						<div className='settings-btns'>
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
						<h3 className='timerSec'>{timerSec}</h3>
					</div>
					<div className='typing-work'>
						<div className='txts' ref={textBlock}>
							{txt}
						</div>
						<div className='btns-command'>
							<button onClick={start} className='btn-command start-btn'>
								start
							</button>
							<button onClick={repeat} className='btn-command repeat-btn'>
								<img src={repeatIcon} alt='' /> repeat
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default TestTyping
