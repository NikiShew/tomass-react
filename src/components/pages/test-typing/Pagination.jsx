import React from 'react'
import './pagination.scss'
export default function Pagination({
	statisticPerPage,
	totalStatistics,
	paginate,
}) {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalStatistics / statisticPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<div>
			<ul className='pagination'>
				{pageNumbers.map(number => (
					<li className='page-item' key={number}>
						<a href='#' onClick={() => paginate(number)} className='page-link'>
							{number}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
