import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import Dropdown from 'components/ui/Dropdown'
import useActions from 'hooks/useActions'
import { selectActiveCommentsFilter } from 'store/slices/app'
import { TCommentsFilter } from 'store/slices/app/app.types'

const CommentsFilter = () => {
  const activeCommentsFilter = useSelector(selectActiveCommentsFilter)
  const [activeOption, setOption] = useState<string>(activeCommentsFilter)
  const commentsFilters = useMemo(() => ['Open', 'Resolved'], [])
  const { setCommentsFilter } = useActions()

  useEffect(() => {
    setCommentsFilter(activeOption as TCommentsFilter)
  }, [activeOption, setCommentsFilter])

  return (
    <>
      {/*<Dropdown*/}
      {/*  options={commentsFilters}*/}
      {/*  activeOption={activeOption}*/}
      {/*  setOption={setOption}*/}
      {/*  pos='bottom'*/}
      {/*/>*/}
    </>
  )
}

export default CommentsFilter
