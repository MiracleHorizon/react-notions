import React from 'react'

import RecentPages from './Lists/RecentPages'
import useSelectItem from 'hooks/useSelectItem'
import useTypedSelector from 'hooks/useTypedSelector'
import Wrapper from './RecentLists.styles'

const RecentLists = () => {
  const { pages } = useTypedSelector(state => state.pages)

  return (
    <>
      <Wrapper>
        {pages.length > 0 && (
          <RecentPages title='pages' items={pages}/>
        )}
      </Wrapper>
      {/*{!(pages.length > 0) && (*/}
      {/*  <QuickSearchHotkeysBar />*/}
      {/*)}*/}
    </>
  )
}

export default RecentLists
