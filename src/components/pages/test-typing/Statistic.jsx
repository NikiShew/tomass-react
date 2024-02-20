import React, { useEffect } from 'react'
import { useResult } from './ResultContext'

const Statistic = () => {
	const { testResults, setTestResults } = useResult()

	useEffect(() => {
		const storedResults = JSON.parse(localStorage.getItem('testResults')) || []
		setTestResults(storedResults)
	}, [setTestResults])

	return (
		<div>
			<h2>Результаты тестов скорости печати:</h2>
			<ul>
				{testResults.map((result, index) => (
					<li key={index}>
						<p>{index + 1}</p>
						<p>Скорость печати: {result.speed} слов в минуту</p>
						<p>Точность: {result.accuracy}%</p>
						<p>Время: {result.time}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Statistic
