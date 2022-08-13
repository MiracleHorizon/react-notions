import React, { FC, memo, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import useContentEditable from 'hooks/useContentEditable'
import { useUpdateItemMutation } from 'store/slices/pages/pages.api'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import * as Item from './NotionQuoteItem.styles'

const NotionQuoteItem: FC<INotionContentItem> = memo(
  ({ _id, content, color, bgColor }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [updateContentItem] = useUpdateItemMutation()

    const handleSubmitChanges = (value: string) => {
      if (value === content) return
      updateContentItem({ _id, body: { content: value } })
    }

    const { value, handleChange, handleBlur, handleEnterKey } =
      useContentEditable(content, handleSubmitChanges, ref)

    return (
      <Item.Wrapper bgColor={bgColor}>
        <Item.Container color={color}>
          <ContentEditable
            spellCheck
            placeholder='Empty quote'
            html={value}
            innerRef={ref}
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
