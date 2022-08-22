import React, { FC, memo, useCallback, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import ToggleTodoButton from 'components/ui/buttons/ToggleTodo'
import useContentEditable from 'hooks/useContentEditable'
import { useUpdateItemMutation } from 'services/pages.api'
import PropTypes from '../../NotionContentItem.types'
import * as Item from './NotionTodoItem.styles'

const NotionTodoItem: FC<PropTypes> = memo(
  ({ item: { _id, content, completed, color, bgColor }, page }) => {
    const [updateContentItem] = useUpdateItemMutation()
    const ref = useRef<HTMLDivElement>(null)

    const handleSubmitTextChanges = (value: string) => {
      if (value !== content) updateContentItem({ _id, body: { content: value } })
    }

    const handleToggleTodo = useCallback(() => {
      if (!page || completed === null || page.locked) return
      updateContentItem({ _id, body: { completed: !completed } })
    }, [page, completed, _id, updateContentItem])

    const {
      value,
      handleChange,
      handleBlur,
      handleEnterKey
    } = useContentEditable(content, handleSubmitTextChanges, ref)

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
  }
)

export default NotionTodoItem
