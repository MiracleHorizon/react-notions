import React, { FC, memo, useRef } from 'react'
import { useEventListener } from 'usehooks-ts'

import SmallPageIcon from 'components/ui/SmallPageIcon'
import { EnterSvg } from 'components/ui/svg'
import useTypedSelector from 'hooks/useTypedSelector'
import { NotionsSelector } from 'store/slices/notions/notions.selectors'
import handleSelectedItemOffsetTop from 'utils/helpers/handleSelectedItemOffsetTop'
import PropTypes from './QuickSearchPageItem.types'
import * as Item from './QuickSearchPageItem.styles'

const QuickSearchPageItem: FC<PropTypes> = memo(
  ({
    page: { _id, parentPageId, title, iconUrl, coverUrl, content },
    isSelected,
    handleSelectItem,
    handleSelectPage,
    parentNode,
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    const parentPage = useTypedSelector(s => {
      if (parentPageId) {
        return NotionsSelector.selectParentPage(s, parentPageId)
      }
    })

    useEventListener('keydown', e => {
      if (!isSelected || !parentNode || !ref.current) return

      const node = ref.current
      const PARENT_NODE_PADDING = 12
      const ITEM_MARGIN_TOP = 1

      const params = {
        e,
        node,
        parentNode,
        parentPadding: PARENT_NODE_PADDING,
        marginTop: ITEM_MARGIN_TOP,
      }

      handleSelectedItemOffsetTop(params)
    })

    return (
      <Item.Wrapper
        ref={ref}
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
            <Item.Title>{title === '' ? 'Untitled' : title}</Item.Title>
            {parentPage && (
              <Item.ParentTitle>
                {parentPage.title === '' ? 'Untitled' : parentPage.title}
              </Item.ParentTitle>
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
)

export default QuickSearchPageItem
