import React, { FC, memo, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import useContentEditable from 'hooks/useContentEditable'
import { useUpdateItemMutation } from 'services/pages.api'
import PropTypes from '../../NotionContentItem.types'
import * as Item from './NotionQuoteItem.styles'

const NotionQuoteItem: FC<PropTypes> = memo(
  ({ item: { _id, content, color, bgColor }, page }) => {
    const [updateContentItem] = useUpdateItemMutation()
    const ref = useRef<HTMLDivElement>(null)

    const handleSubmitChanges = (value: string) => {
      if (value !== content) updateContentItem({ _id, body: { content: value } })
    }

    const {
      value,
      handleChange,
      handleBlur,
      handleEnterKey
    } = useContentEditable(content, handleSubmitChanges, ref)

    return (
      <Item.Wrapper data-selectable bgColor={bgColor}>
        <Item.Container color={color}>
          <ContentEditable
            spellCheck={!page.locked}
            placeholder='Empty quote'
            html={value}
            innerRef={ref}
            disabled={page.locked}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleEnterKey}
          />
        </Item.Container>
      </Item.Wrapper>
    )
  }
)

export default NotionQuoteItem
