import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import ActionsCreators from 'store/actions-creators'
import { useMemo } from 'react'

export default function useActions() {
  const dispatch = useDispatch()

  return useMemo(
    () => bindActionCreators(ActionsCreators, dispatch),
    [dispatch]
  )
}
