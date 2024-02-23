import React, { useEffect, useState } from 'react'
import awardIcon from '../../../../public/award.png'
import filterIcon from '../../../../public/filter.png'
import removeIcon from '../../../../public/remove.png'
import Pagination from './Pagination'
import { useResult } from './ResultContext'
import './Statistic.scss'
const Statistic = () => {
	const { testResults, setTestResults } = useResult()
	const [currentPage, setCurrentPage] = useState(1)
	const [statisticPerPage] = useState(10)
	const lastCurrentIndex = currentPage * statisticPerPage
	const firstCurrentIndex = lastCurrentIndex - statisticPerPage
	const [filterBull, setFilterBull] = useState(true)
	const [filtered, setFiltered] = useState(testResults)

	const updateTestResults = newResults => {
		localStorage.setItem('testResults', JSON.stringify(newResults))
		setTestResults(newResults)
	}

	let paginate = pageNumber => setCurrentPage(pageNumber)
	useEffect(() => {
		const storedResults = JSON.parse(localStorage.getItem('testResults')) || []
		setFiltered(storedResults)
		setTestResults(storedResults)
	}, [setTestResults, setFiltered])

	// useEffect(() => {
	// 	setFiltered(testResults)
	// }, [testResults])

	const currentStatistics = filtered.slice(firstCurrentIndex, lastCurrentIndex)

	function deleteStatistic(index) {
		let newStatistic = [...testResults].filter((item, i) => i !== index)
		setTestResults(newStatistic)
		setFiltered(newStatistic)
		updateTestResults(newStatistic)
	}

	useEffect(() => {
		if (filterBull) {
			setFiltered(prevFiltered =>
				[...prevFiltered].sort((a, b) => b.speed - a.speed)
			)
		} else {
			setFiltered(prevFiltered =>
				[...prevFiltered].sort((a, b) => a.speed - b.speed)
			)
		}
	}, [filterBull])

	return (
		<div>
			<h2 className='statistic-title'>
				<img src={awardIcon} alt='' />
				Результаты тестов скорости печати:
			</h2>
			<h3 className='statistic-subtitle'>
				Здесь вы можете просматривать результаты своих тестов, отсортированные
				от лучших к худшим, чтобы всегда имели цель для улучшения. Превзойдите
				свои собственные достижения!
			</h3>

			<div className='result_Block'>
				<div className='result_Block__inner'>
					<div className='result_Block-left result_Block-component'>
						<div className='header-result'>
							<h3 className='Block-component_title'>Modes</h3>
						</div>
						<ul className='modes-ul'>
							<li className='active'>Classic</li>
						</ul>
						<ul className='modes-ul'>
							<li>more...</li>
						</ul>
					</div>
					<div className='result_Block-right result_Block-component'>
						<table>
							<thead>
								<tr>
									<th>№</th>
									<th>Date</th>
									<th>Speed</th>
									<th>Accuracy</th>
									<th>
										<button onClick={() => setFilterBull(!filterBull)}>
											<img src={filterIcon} alt='' /> filter
										</button>
									</th>
								</tr>
							</thead>
							<tbody>
								{currentStatistics.map((result, index) => (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{result.time}</td>
										<td>{result.speed}sv/m</td>
										<td>{result.accuracy}%</td>
										<td>
											{' '}
											<button onClick={() => deleteStatistic(index)}>
												<img src={removeIcon} alt='' />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className='page-num'>
							<Pagination
								statisticPerPage={statisticPerPage}
								totalStatistics={testResults.length}
								paginate={paginate}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* <ul>
				{currentStatistics.map((result, index) => (
					<li key={index}>
						<p>{index + 1}</p>
						<p>Скорость печати: {result.speed} слов в минуту</p>
						<p>Точность: {result.accuracy}%</p>
						<p>Время: {result.time}</p>
					</li>
				))}
				<Pagination
					statisticPerPage={statisticPerPage}
					totalStatistics={testResults.length}
					paginate={paginate}
				/>
			</ul> */}
		</div>
	)
}

export default Statistic
