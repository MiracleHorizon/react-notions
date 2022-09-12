import React, { FC, memo, useContext, useEffect, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import useContentEditable from 'hooks/useContentEditable'
import { useUpdateItemMutation } from 'services/notions.api'
import WorkspaceScrollContext from 'context/WorkspaceScroll'
import handleContentItemFocus from 'utils/helpers/handleContentItemFocus'
import PropTypes from '../../NotionContentItem.types'
import * as Item from './NotionQuoteItem.styles'

const NotionQuoteItem: FC<PropTypes> = memo(({ item, page }) => {
  const { _id, content, color, bgColor } = item
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
    <Item.Wrapper data-selectable bgColor={bgColor} onClick={handleFocus}>
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
})

export default NotionQuoteItem
