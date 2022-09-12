import React, { FC, memo, useContext, useEffect, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import useContentEditable from 'hooks/useContentEditable'
import { useUpdateItemMutation } from 'services/notions.api'
import WorkspaceScrollContext from 'context/WorkspaceScroll'
import NotionHeadingItemStylesHandler from 'utils/stylesHandlers/NotionHeadingItemStylesHandler'
import handleContentItemFocus from 'utils/helpers/handleContentItemFocus'
import PropTypes from '../../NotionContentItem.types'
import Container from './NotionHeadingItem.styles'

const NotionHeadingItem: FC<PropTypes> = memo(({ item, page }) => {
  const { _id, content, type, color, bgColor } = item
  const [updateContentItem] = useUpdateItemMutation()
  const { contentRef } = useContext(WorkspaceScrollContext)
  const ref = useRef<HTMLDivElement>(null)

  const handleSubmitChanges = (value: string) => {
    if (value !== content) {
      updateContentItem({ _id, body: { content: value } })
    }
  }

  const handleFocus = () => ref.current?.focus()

  const { value, handleChange, handleBlur, handleEnterKey } =
    useContentEditable({
      func: handleSubmitChanges,
      initialValue: content,
      item,
      page,
      ref,
    })

  useEffect(() => {
    if (page.content.length === 1) handleFocus()
  }, [page.content.length])

  useEffect(() => {
    handleContentItemFocus({ item, page, ref, contentRef })
  }, [item, page, contentRef])

  return (
    <Container
      {...{ type, color, bgColor }}
      data-selectable
      onClick={handleFocus}
    >
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
