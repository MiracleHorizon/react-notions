import React, { FC, memo, useEffect, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import useContentEditable from 'hooks/useContentEditable'
import { useUpdateItemMutation } from 'services/notions.api'
import PropTypes from '../../NotionContentItem.types'
import * as Item from './NotionTextItem.styles'

const NotionTextItem: FC<PropTypes> = memo(({ item, page }) => {
  const { _id, content, bgColor, color } = item
  const [updateContentItem] = useUpdateItemMutation()
  const ref = useRef<HTMLDivElement>(null)

  const handleFocus = () => ref.current?.focus()

  const handleSubmitChanges = (value: string) => {
    if (value !== content) updateContentItem({ _id, body: { content: value } })
  }

  const { value, handleChange, handleBlur, handleEnterKey } =
    useContentEditable(content, handleSubmitChanges, ref, item, page) //!

  useEffect(() => {
    if (page.content.length === 1) handleFocus()
  }, [page.content.length])

  return (
    <Item.Wrapper
      data-selectable
      color={color}
      bgColor={bgColor}
      onClick={handleFocus}
    >
      <Item.Container>
        <ContentEditable
          spellCheck={!page.locked}
          placeholder="Type '/' for commands"
          innerRef={ref}
          html={value}
          disabled={page.locked}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleEnterKey}
        />
      </Item.Container>
    </Item.Wrapper>
  )
})

export default NotionTextItem
