import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext()

export const ResultProvider = ({ children }) => {
	const [testResults, setTestResults] = useState([])
	let [toms, setToms] = useState(0)
	const addtoms = n => {
		setToms(prev => prev + n)
	}
	const addTestResult = result => {
		setTestResults(prevResults => [...prevResults, result])
	}

	return (
		<ResultContext.Provider
			value={{ testResults, addTestResult, setTestResults, addtoms, toms }}
		>
			{children}
		</ResultContext.Provider>
	)
}

export const useResult = () => {
	return useContext(ResultContext)
}
