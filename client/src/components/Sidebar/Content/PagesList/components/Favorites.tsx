import React, { FC, memo } from 'react'

import PagesList from '../index'
import PagesListTitle from '../Title'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import IPage from 'models/page/IPage'
import { Wrapper } from '../PagesList.styles'

const FavoritesPagesList: FC<{ pages: IPage[] }> = memo(({ pages }) => {
  const { isOpen } = useTypedSelector(s => s.app.favoritePagesLists)
  const { toggleFavoritePagesList } = useActions()

  const handleToggleList = () => toggleFavoritePagesList()

  return (
    <Wrapper isOpen={isOpen}>
      <PagesListTitle
        isOpen={isOpen}
        title='Favorites'
        onClickAction={handleToggleList}
      />
      {isOpen && <PagesList pages={pages} pLeft={10} />}
    </Wrapper>
  )
})

export default FavoritesPagesList
