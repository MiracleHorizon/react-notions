import React, { FC, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'

import FavoritePagesList from './PagesList/components/Favorite'
import CommonPagesList from './PagesList/components/Common'
import useAuth from 'hooks/useAuth'
import useActions from 'hooks/useActions'
import { useGetAllPagesQuery } from 'store/slices/pages/pages.api'
import {
  selectCommonPages,
  selectFavoritePages,
} from 'store/slices/pages/pages.selectors'
import Content from './LeftSidebarContent.styles'

const LeftSidebarContent: FC<{ isHovering: boolean }> = memo(
  ({ isHovering }) => {
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
        {isLoading && <span>Загрузка...</span>}
        {isSuccess && (
          <>
            {favoritePages.length > 0 && (
              <FavoritePagesList pages={favoritePages} />
            )}
            <CommonPagesList pages={commonPages} isHovering={isHovering} />
          </>
        )}
      </Content>
    )
  }
)

export default LeftSidebarContent
