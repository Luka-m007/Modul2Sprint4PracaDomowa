import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useThemeMode } from '../index'

export function PaginationCustom({ count, page, onChange }) {
	const { isDark } = useThemeMode()
	return (
		<Stack spacing={2} sx={{ alignItems: 'center', padding: '20px' }}>
			<Pagination
				count={count}
				page={page}
				onChange={(e, value) => {
					onChange(e, value)
				}}
				sx={{
					'& .MuiPaginationItem-root': {
						color: isDark ? '#FAFAFA' : '#363537',
					},
				}}
			/>
		</Stack>
	)
}
