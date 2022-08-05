import React, { FC, memo, useCallback } from 'react'

import PagesList from '../index'
import PagesListTitle from '../Title'
import CreatePageButtonSidebar from '../CreatePageButton'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { IPage } from 'models/page/IPage'
import { Wrapper } from '../PagesList.styles'

const CommonPagesList: FC<{ pages: IPage[]; isHovering: boolean }> = memo(
  ({ pages, isHovering }) => {
    const { isOpen } = useTypedSelector(state => state.app.commonPagesLists)
    const { toggleCommonPagesList } = useActions()

    // eslint-disable-next-line
    const handleToggleList = useCallback(() => toggleCommonPagesList(), [])

    return (
      <Wrapper isOpen={isOpen}>
        <PagesListTitle
          title='Common'
          isOpen={isOpen}
          handleToggleList={handleToggleList}
        />
        {isHovering && <CreatePageButtonSidebar />}
        {isOpen && <PagesList pages={pages} pLeft={10} />}
      </Wrapper>
    )
  }
)

export default CommonPagesList
