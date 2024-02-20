import { useState } from 'react'

const Statistic_List = newObject => {
	let [obj, setObj] = useState([])

	const addObject = newObject => {
		setObj(prevObj => [...prevObj, newObject])
	}

	console.log(obj)
}
export default Statistic_List
