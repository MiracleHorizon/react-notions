import React, { FC, memo, useCallback, useContext, useEffect, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import ToggleTodoButton from 'components/ui/buttons/ToggleTodo'
import useContentEditable from 'hooks/useContentEditable'
import { useUpdateItemMutation } from 'services/notions.api'
import WorkspaceScrollContext from 'context/WorkspaceScroll'
import handleContentItemFocus from 'utils/helpers/handleContentItemFocus'
import PropTypes from '../../NotionContentItem.types'
import * as Item from './NotionTodoItem.styles'

const NotionTodoItem: FC<PropTypes> = memo(({ item, page }) => {
  const { _id, content, completed, color, bgColor } = item
  const [updateContentItem] = useUpdateItemMutation()
  const { contentRef } = useContext(WorkspaceScrollContext)
  const ref = useRef<HTMLDivElement>(null)

  const handleSubmitTextChanges = (value: string) => {
    if (value !== content) {
      updateContentItem({ _id, body: { content: value } })
    }
  }

  const handleToggleTodo = useCallback(() => {
    if (completed !== null || !page.locked) {
      updateContentItem({ _id, body: { completed: !completed } })
    }
  }, [page.locked, completed, _id, updateContentItem])

  const handleFocus = () => ref.current?.focus()

  const { value, handleChange, handleBlur, handleEnterKey } =
    useContentEditable({
      func: handleSubmitTextChanges,
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

  if (completed === null) return null

  return (
    <Item.Wrapper bgColor={bgColor}>
      <Item.Container completed={completed} color={color}>
        <Item.ButtonContainer>
          <ToggleTodoButton
            squareColor={color}
            isActive={completed}
            toggleActive={handleToggleTodo}
          />
        </Item.ButtonContainer>
        <ContentEditable
          spellCheck={!page.locked}
          placeholder='To-do'
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

export default NotionTodoItem
