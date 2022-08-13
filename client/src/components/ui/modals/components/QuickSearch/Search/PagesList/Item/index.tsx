import React, { FC } from 'react'
import { useNavigate } from 'react-router'

import SmallPageIcon from 'components/ui/SmallPageIcon'
import { EnterSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { ISelectItemParams } from 'types'
import IPage from 'models/page/IPage'
import * as Item from './QuickSearchPageItem.styles'

const QuickSearchPageItem: FC<IPage & ISelectItemParams<string>> = ({
  _id,
  parentPageId,
  title,
  iconUrl,
  coverUrl,
  content,
  isSelected,
  handleSelectItem,
}) => {
  const navigate = useNavigate()
  const parentPage = useTypedSelector(state => state.pages.pages).find(
    page => page._id === parentPageId
  )
  const { closeQuickSearchModal } = useActions()

  const handleSelectPage = () => {
    navigate(`/workspace/${_id}`)
    closeQuickSearchModal()
  }

  return (
    <Item.Wrapper
      isSelected={isSelected}
      onClick={handleSelectPage}
      onMouseEnter={() => handleSelectItem(_id)}
    >
      <Item.Container>
        <Item.IconContainer isHasParent={Boolean(parentPage)}>
          <SmallPageIcon
            iconUrl={iconUrl}
            coverUrl={coverUrl}
            content={content}
          />
        </Item.IconContainer>
        <Item.TitlesContainer>
          <Item.Title>{title}</Item.Title>
          {parentPage && (
            <Item.ParentTitle>{parentPage.title}</Item.ParentTitle>
          )}
        </Item.TitlesContainer>
      </Item.Container>
      {isSelected && (
        <Item.EnterContainer>
          <EnterSvg />
        </Item.EnterContainer>
      )}
    </Item.Wrapper>
  )
}

export default QuickSearchPageItem
