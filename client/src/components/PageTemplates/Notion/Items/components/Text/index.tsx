import React, { FC, memo, useEffect, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import useContentEditable from 'hooks/useContentEditable'
import { useUpdateItemMutation } from 'services/pages.api'
import PropTypes from '../../NotionContentItem.types'
import Container from './NotionTextItem.styles'

const NotionTextItem: FC<PropTypes> = memo(({ item, page }) => {
  const { _id, content, bgColor, color } = item
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
  } = useContentEditable(content, handleSubmitChanges, ref, item, page) //!

  useEffect(() => {
    if (page.content.length === 1) ref.current?.focus()
  }, [page.content.length])

  return (
    <Container data-selectable color={color} bgColor={bgColor}>
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
    </Container>
  )
})

export default NotionTextItem
