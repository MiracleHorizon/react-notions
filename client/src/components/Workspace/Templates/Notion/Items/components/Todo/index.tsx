import React, { FC, memo, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import ToggleTodoButton from 'components/ui/buttons/ToggleTodo'
import useContentEditable from 'hooks/useContentEditable'
import { useUpdateItemMutation } from 'store/slices/pages/pages.api'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import * as Item from './NotionTodoItem.styles'

const NotionTodoItem: FC<INotionContentItem> = memo(
  ({ _id, content, completed, color, bgColor }) => {
    const [updateContentItem] = useUpdateItemMutation()
    const ref = useRef<HTMLDivElement>(null)

    const handleSubmitTextChanges = (value: string) => {
      if (value === content) return
      updateContentItem({ _id, body: { content: value } })
    }

    const handleToggleTodo = () => {
      if (completed === null) return
      updateContentItem({ _id, body: { completed: !completed } })
    }

    const { value, handleChange, handleBlur, handleEnterKey } =
      useContentEditable(content, handleSubmitTextChanges, ref)

    if (completed === null) return null

    return (
      <Item.Wrapper bgColor={bgColor}>
        <Item.Container completed={completed} color={color}>
          <Item.ButtonContainer>
            <ToggleTodoButton
              isActive={completed}
              toggleActive={handleToggleTodo}
              squareColor={color}
            />
          </Item.ButtonContainer>
          <ContentEditable
            spellCheck
            placeholder='To-do'
            innerRef={ref}
            html={value}
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
