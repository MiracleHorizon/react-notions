import React, { FC, memo, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import useContentEditable from 'hooks/useContentEditable'
import { useUpdateItemMutation } from 'services/notions.api'
import NotionHeadingItemStylesHandler from 'utils/stylesHandlers/NotionHeadingItemStylesHandler'
import PropTypes from '../../NotionContentItem.types'
import Container from './NotionHeadingItem.styles'

const NotionHeadingItem: FC<PropTypes> = memo(({ item, page }) => {
  const { _id, content, type, color, bgColor } = item
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
    <Container {...{ type, color, bgColor }} data-selectable>
      <ContentEditable
        spellCheck={!page.locked}
        placeholder={NotionHeadingItemStylesHandler.getPlaceHolder(type)}
        innerRef={ref}
        html={value}
        disabled={page.locked}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleEnterKey}
      />
    </Container>
  )
})

export default NotionHeadingItem
