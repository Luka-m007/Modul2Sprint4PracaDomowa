import { useState, useEffect } from 'react'

export const useFetchData = () => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(1)

	// console.log(data)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			setError(false)

			try {
				const response = await fetch(`https://api.disneyapi.dev/character?page=${page}`)

				if (!response.ok) {
					throw Error('Network response was not ok!')
				}

				const json = await response.json()
				setTotalPages(json.info.totalPages)
				setData(json)
			} catch (err) {
				console.log('error', err)
				setError(true)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [page])

	return { data, error, isLoading, page, setPage, totalPages }
}
