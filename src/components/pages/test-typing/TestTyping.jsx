import { React, useEffect, useRef, useState } from 'react'
import arrowIcon from '../../../../public/arrow-icon.png'
import iconCorrect from '../../../../public/icon-corrects.png'
import iconFailed from '../../../../public/icon-failed.png'
import iconPrecision from '../../../../public/icon-precision.png'
import iconSpeed from '../../../../public/icon-speed.png'
import iconTop from '../../../../public/icon-top.png'
import langIcon from '../../../../public/planet.png'
import repeatIcon from '../../../../public/repeat-sign.png'
import timeIcon from '../../../../public/time.png'
import { useResult } from './ResultContext'
import './TestTyping.scss'
function TestTyping() {
	let [key, setKey] = useState('press key')
	let [time, setTime] = useState(
		localStorage.getItem('second') === null
			? 30
			: localStorage.getItem('second')
	)

	let [error, setError] = useState(0)
	// let [words] = useState(iterators / 5)
	let [accuracy, setAccuracy] = useState(0)
	let [speed, setSpeed] = useState(0)
	let [words, setWords] = useState(0)

	let [timerSec, setTimerSec] = useState(time)
	let [timeI, setTimeI] = useState(0)
	let [lang, setLang] = useState(
		localStorage.getItem('lang') === null
			? 'english'
			: localStorage.getItem('lang')
	)
	let [iterator, setIterator] = useState(-1)
	let [resultBlock, setResultBlock] = useState(false)
	let txtEnglish =
		'Among its newest features is Newsline, an interactive news ticker that includes local news headlines, weather conditions, forecasts and alerts, stock market data, and top stories across business, entertainment, science, and technology categories.'
	let txtRu = 'Никита лоллллооооо лло'
	let txt = lang === 'russian' ? txtRu : txtEnglish
	let times = [30, 60, 90]
	let textBlock = useRef(null)
	let [text, setText] = useState(txt.split(''))

	// let [resultList, setResultList] = useState([])

	// useEffect(() => {
	// 	setResultList({ nikita: ' parvov', oleg: 'vinnik' })
	// }, [])
	const { addTestResult } = useResult()
	const [seconds, setSeconds] = useState(timerSec)
	const [isActive, setIsActive] = useState(false)
	let iteratorRef = useRef(iterator)
	const buttonRef = useRef(null)
	useEffect(() => {
		iteratorRef.current = iterator
	}, [iterator])

	useEffect(() => {
		setText(txt.split(''))

		const keyPressHandler = e => {
			if (isActive) {
				let iterator = iteratorRef.current
				const letterCandidate = text[iterator === -1 ? 0 : iterator]
				if (e.key === letterCandidate) {
					setIterator(prev => (prev === -1 ? 1 : prev + 1))
				} else {
					setError(prev => prev + 1)
				}
			} else {
				setText(txt.split(''))
			}
		}

		window.addEventListener('keypress', keyPressHandler)
		return () => {
			window.removeEventListener('keypress', keyPressHandler)
		}
	}, [isActive])
	let interval
	useEffect(() => {
		interval = setInterval(() => {
			if (isActive && seconds > 0) {
				setSeconds(seconds => seconds - 1)
			} else if (seconds == 0 || !isActive) {
				clearInterval(interval)
				setSeconds(timerSec)
				result()
				setResultBlock(true)
				setIsActive(false)
				setIterator(0)
			}
		}, 1000)

		return () => clearInterval(interval)
	}, [isActive, seconds])

	//как сделать чтобы не правильно введенные буквы подсвечивались красным
	//чтобы оно передавала информацию на другую страницу
	//смена языка при первом клике а не втором
	const toggleTimer = () => {
		setIsActive(!isActive)
		setIsActive(true)
		setError(0)
		buttonRef.current.blur()
	}

	const resetTimer = () => {
		setSeconds(timerSec)
		setIsActive(false)
		setIterator(0)
		setError(0)
	}

	const result = () => {
		if (isActive) {
			const timeol = new Date()
			let words = iterator / 5
			let goodWSymvols = iterator - error

			let resSpeed = words / (timerSec / 60)
			let resAccuracy = (goodWSymvols / iterator) * 100

			setWords(Math.round(words))
			setSpeed(Math.round(resSpeed))
			setAccuracy(Math.round(resAccuracy))
			const testResult = {
				speed: Math.round(resSpeed),
				accuracy: Math.round(resAccuracy),
				time: timeol.toLocaleDateString() + ' ' + timeol.toLocaleTimeString(),
			}
			addTestResult(testResult)

			const storedResults =
				JSON.parse(localStorage.getItem('testResults')) || []
			const updatedResults = [...storedResults, testResult]
			localStorage.setItem('testResults', JSON.stringify(updatedResults))
		}
	}

	// res
	//--------------------------------------------------------------

	localStorage.setItem('second', time)
	localStorage.setItem('lang', lang)
	function changeTime() {
		const nextTimeI = (timeI + 1) % times.length
		setTimeI(nextTimeI)
		setTime(times[nextTimeI])
		setTimerSec(times[nextTimeI])
		setSeconds(times[nextTimeI])
	}

	//-----------------------------------------------------------
	function changeLang() {
		lang == 'english' ? setLang('russian') : setLang('english')
		setText(txt.split(''))
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
					<div className='work-section'>
						<div className='work-settings'>
							<div className='settings-btns'>
								<button
									className='change-time-typing change-typing'
									onClick={changeTime}
								>
									<img src={timeIcon} alt='' />
									<span className='typing-time'>{time}s</span>
								</button>
								<button
									ref={buttonRef}
									className='change-typing'
									onClick={changeLang}
								>
									<img src={langIcon} alt='' />
									<span>{lang}</span>
								</button>
							</div>
							<h3 className='timerSec'>{seconds}</h3>
						</div>
						<div className='typing-work'>
							<div className='txts' ref={textBlock}>
								{text.map((elem, index) => {
									return (
										<span
											key={index}
											className={
												isActive
													? iterator !== null && index < iterator
														? 'colorW'
														: iterator === index
														? 'cursor'
														: undefined
													: undefined
											}
										>
											{elem}
										</span>
									)
								})}
							</div>
							<div className='btns-command'>
								<button
									ref={buttonRef}
									tabIndex={-1}
									onClick={() => {
										// setFuckedMather(true)
										// start()
										// console.log(fuckedMather)
										// timer()
										textBlock.current.focus()
										toggleTimer()
									}}
									className='btn-command start-btn'
								>
									start
								</button>
								<button
									onClick={resetTimer}
									className='btn-command repeat-btn'
									tabIndex={-1}
								>
									<img src={repeatIcon} alt='' /> repeat
								</button>
							</div>
						</div>
					</div>
					<div className={resultBlock ? 'resultBlock open' : 'resultBlock'}>
						<div className='resultInner'>
							<div className='result-inner__left result-inner-info'>
								<h4>
									<img src={iconSpeed} alt='' />
									speed: <span className='speed'>{speed}</span>s/m
								</h4>

								<h4>
									<img src={iconPrecision} alt='' /> accuracy:
									<span className='accuracy:'> {accuracy}</span>%
								</h4>
							</div>
							<div className='result-inner__right result-inner-info'>
								<div className='flex-cont'>
									<h4>
										<img src={iconFailed} alt='' /> incorrectly pressed
										characters: <span className='error'> {error}</span>
									</h4>
									<h4>
										<img src={iconCorrect} alt='' />
										words: {words}
									</h4>
								</div>
								<h4>
									<img src={iconTop} alt='' /> You worked hard, you are now in
									4th place in the statistics, try again
								</h4>
							</div>
						</div>

						<div
							className='arrow-element'
							onClick={() => setResultBlock(!resultBlock)}
						>
							<img
								onClick={() => setResultBlock(!resultBlock)}
								src={arrowIcon}
								alt=''
								className={resultBlock ? 'arrow closed' : 'arrow'}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default TestTyping
