import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext()

export const ResultProvider = ({ children }) => {
	const [testResults, setTestResults] = useState([])

	const addTestResult = result => {
		setTestResults(prevResults => [...prevResults, result])
	}

	return (
		<ResultContext.Provider
			value={{ testResults, addTestResult, setTestResults }}
		>
			{children}
		</ResultContext.Provider>
	)
}

export const useResult = () => {
	return useContext(ResultContext)
}
