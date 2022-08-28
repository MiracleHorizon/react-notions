import React, { FC, memo } from 'react'

import PagesList from '../index'
import PagesListTitle from '../Title'
import CreatePageButtonSidebar from 'components/ui/buttons/CreatePageSidebar'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import IPage from 'models/page/IPage'
import { Wrapper } from '../PagesList.styles'

const CommonPagesList: FC<{ pages: IPage[]; isHovering: boolean }> = memo(
  ({ pages, isHovering }) => {
    const { isOpen } = useTypedSelector(s => s.app.commonPagesLists)
    const { toggleCommonPagesList } = useActions()

    const handleToggleList = () => toggleCommonPagesList()

    return (
      <Wrapper isOpen={isOpen}>
        <PagesListTitle
          title='Common'
          isOpen={isOpen}
          onClickAction={handleToggleList}
        />
        {isHovering && <CreatePageButtonSidebar />}
        {isOpen && <PagesList pages={pages} pLeft={8} />}
      </Wrapper>
    )
  }
)

export default CommonPagesList
