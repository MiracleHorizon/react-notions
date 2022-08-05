import React, { FC, useCallback } from 'react'

import PagesList from '../index'
import PagesListTitle from '../Title'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { IPage } from 'models/page/IPage'
import { Wrapper } from '../PagesList.styles'

const FavoritePagesList: FC<{ pages: IPage[] }> = ({ pages }) => {
  const { isOpen } = useTypedSelector(state => state.app.favoritePagesLists)
  const { toggleFavoritePagesList } = useActions()

  // eslint-disable-next-line
  const handleToggleList = useCallback(() => toggleFavoritePagesList(), [])

  return (
    <Wrapper isOpen={isOpen}>
      <PagesListTitle
        title='Favorite'
        isOpen={isOpen}
        handleToggleList={handleToggleList}
      />
      {isOpen && <PagesList pages={pages} pLeft={10} />}
    </Wrapper>
  )
}

export default FavoritePagesList
