import React, { FC, memo, useEffect, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import useTypedSelector from 'hooks/useTypedSelector'
import useContentEditable from 'hooks/useContentEditable'
import { useUpdateItemMutation } from 'store/slices/pages/pages.api'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import Container from './NotionTextItem.styles'

const NotionTextItem: FC<INotionContentItem> = memo(item => {
  const { _id, content, bgColor, color } = item
  const { page } = useTypedSelector(state => state.pages)
  const ref = useRef<HTMLDivElement>(null)
  const [updateContentItem] = useUpdateItemMutation()

  const handleSubmitChanges = (value: string) => {
    if (value === content) return
    updateContentItem({ _id, body: { content: value } })
  }

  const { value, handleChange, handleBlur, handleEnterKey } =
    useContentEditable(content, handleSubmitChanges, ref, item, page)

  useEffect(() => {
    if (page && page.content.length === 1) {
      ref.current?.focus()
    }
  }, [page, page?.content])

  return (
    <Container color={color} bgColor={bgColor}>
      <ContentEditable
        spellCheck
        placeholder="Type '/' for commands"
        innerRef={ref}
        html={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleEnterKey}
      />
    </Container>
  )
})

export default NotionTextItem
