import React from 'react'

import RecentPages from './Lists/RecentPages'
import QuickSearchHotkeysBar from '../HotkeysBar'
import IPage from 'models/page/IPage'
import useSelectItem from 'hooks/useSelectItem'
import useTypedSelector from 'hooks/useTypedSelector'
import Wrapper from './RecentLists.styles'

const RecentLists = () => {
  const { pages } = useTypedSelector(state => state.pages)
  const selectedItemState = useSelectItem('')

  const recentPages: IPage[] = []
  const recentSearches: IPage[] = []

  return (
    <>
      <Wrapper>
        {pages.length > 0 && (
          <RecentPages title='pages' items={pages} {...selectedItemState} />
        )}
        {/*{pages.length > 0 && (*/}
        {/*  <RecentPages title='pages' items={pages} {...selectedItemState} />*/}
        {/*)}*/}
      </Wrapper>
      {!(recentPages.length > 0 || recentSearches.length > 0) && (
        // <QuickSearchHotkeysBar />
        <></>
      )}
    </>
  )
}

export default RecentLists
