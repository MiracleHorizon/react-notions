import React, { FC, memo, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useEventListener } from 'usehooks-ts'

import FavoritesPagesList from './PagesList/components/Favorites'
import CommonPagesList from './PagesList/components/Common'
import PagesTrashPanel from '../Panels/PagesTrash'
import SidebarPagesListLoader from 'components/ui/loaders/SidebarPagesList'
import useActions from 'hooks/useActions'
import { useGetAllPagesQuery } from 'services/notions.api'
import { NotionsSelector } from 'store/slices/notions/notions.selectors'
import { selectUser } from 'store/slices/user/auth.selectors'
import handleScrollOffset from 'utils/helpers/handleScrollOffset'
import Content from './SidebarContent.styles'

const SidebarContent: FC<{ isHovering: boolean }> = memo(({ isHovering }) => {
  const { setPages } = useActions()
  const [isScrollOnTop, setScrollOnTop] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const favoritePages = useSelector(NotionsSelector.selectFavoritePages)
  const commonPages = useSelector(NotionsSelector.selectCommonPages)
  const user = useSelector(selectUser)

  const {
    data: pages,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllPagesQuery(user._id)

  useEffect(() => {
    if (isSuccess && pages) setPages(pages)
  }, [isSuccess, pages, setPages])

  useEventListener('scroll', () => handleScrollOffset(ref, setScrollOnTop), ref)

  return (
    <Content ref={ref} isScrollOnTop={isScrollOnTop}>
      {(isLoading || isError) && <SidebarPagesListLoader />}
      {isSuccess && (
        <>
          {favoritePages.length > 0 && (
            <FavoritesPagesList pages={favoritePages} />
          )}
          <CommonPagesList pages={commonPages} isHovering={isHovering} />
        </>
      )}
      <PagesTrashPanel />
    </Content>
  )
})

export default SidebarContent
