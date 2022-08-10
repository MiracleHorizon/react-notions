import React, { FC } from 'react'
import ContentEditable from 'react-contenteditable'

import ToggleTodoButton from 'components/ui/buttons/ToggleTodo'
import useContentEditable from 'hooks/useContentEditable'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import * as Item from './NotionTodoItem.styles'

const NotionTodoItem: FC<INotionContentItem> = item => {
  const { _id, content, completed, color, bgColor } = item
  // const [updateContentItem] = use...

  const handleSubmitTextChanges = () => {
    // updateContentItem()
    console.log()
  }

  const handleToggleTodo = () => {
    // updateContentItem()
    console.log()
  }

  const { value, handleChange, handleBlur, handleEnterKey } =
    useContentEditable(content, handleSubmitTextChanges)

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
          html={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleEnterKey}
        />
      </Item.Container>
    </Item.Wrapper>
  )
}

export default NotionTodoItem
