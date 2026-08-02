import { useState, useEffect } from 'react'

export const useFetchData = () => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	// console.log(data)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			setError(false)

			try {
				const response = await fetch('https://api.disneyapi.dev/character')

				if (!response.ok) {
					throw Error('Network response was not ok!')
				}

				const json = await response.json()
				setData(json)
			} catch (err) {
				console.log('error', err)
				setError(true)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [])

	return { data, error, isLoading }
}
