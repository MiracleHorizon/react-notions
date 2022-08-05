import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import ActionsCreators from 'store/actions-creators'

export default function useActions() {
  const dispatch = useDispatch()

  return bindActionCreators(ActionsCreators, dispatch)
}
