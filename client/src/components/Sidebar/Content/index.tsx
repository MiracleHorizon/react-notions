import React, { FC, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ClipLoader } from 'react-spinners'

import FavoritesPagesList from './PagesList/components/Favorites'
import CommonPagesList from './PagesList/components/Common'
import useAuth from 'hooks/useAuth'
import useActions from 'hooks/useActions'
import { useGetAllPagesQuery } from 'store/slices/pages/pages.api'
import {
  selectCommonPages,
  selectFavoritePages,
} from 'store/slices/pages/pages.selectors'
import Content from './SidebarContent.styles'

const SidebarContent: FC<{ isHovering: boolean }> = memo(({ isHovering }) => {
  const { user } = useAuth()
  const {
    data: pages,
    isLoading,
    isSuccess,
  } = useGetAllPagesQuery(user ? user.uid : '')
  const favoritePages = useSelector(selectFavoritePages)
  const commonPages = useSelector(selectCommonPages)
  const { setPages } = useActions()

  // Селектор на фильтрацию.

  useEffect(() => {
    if (isSuccess) setPages(pages)
  }, [isSuccess, pages, setPages])

  return (
    <Content>
      {isLoading && <ClipLoader speedMultiplier={0.6} />}
      {isSuccess && (
        <>
          {favoritePages.length > 0 && (
            <FavoritesPagesList pages={favoritePages} />
          )}
          <CommonPagesList pages={commonPages} isHovering={isHovering} />
        </>
      )}
    </Content>
  )
})

export default SidebarContent
