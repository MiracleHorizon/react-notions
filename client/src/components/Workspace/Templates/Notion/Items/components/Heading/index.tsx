import React, { FC, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import useContentEditable from 'hooks/useContentEditable'
import { useUpdateItemMutation } from 'store/slices/pages/pages.api'
import NotionHeadingItemStylesHandler from 'utils/stylesHandlers/NotionHeadingItemStylesHandler'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import Container from './NotionHeadingItem.styles'

const NotionHeadingItem: FC<INotionContentItem> = item => {
  const { _id, content, type, color, bgColor } = item
  const [updateContentItem] = useUpdateItemMutation()
  const ref = useRef<HTMLDivElement>(null)

  const handleSubmitChanges = (value: string) => {
    if (value === content) return
    updateContentItem({ _id, body: { content: value } })
  }

  const { value, handleChange, handleBlur, handleEnterKey } =
    useContentEditable(content, handleSubmitChanges, ref)

  return (
    <Container {...{ type, color, bgColor }}>
      <ContentEditable
        spellCheck
        placeholder={NotionHeadingItemStylesHandler.getPlaceHolder(type)}
        innerRef={ref}
        html={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleEnterKey}
      />
    </Container>
  )
}

export default NotionHeadingItem
