import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
// import type { RootState, AppDispatch } from ''


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


