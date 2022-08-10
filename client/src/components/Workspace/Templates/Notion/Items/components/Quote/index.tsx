import React, { FC } from 'react'
import ContentEditable from 'react-contenteditable'

import useContentEditable from 'hooks/useContentEditable'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import * as Item from './NotionQuoteItem.styles'

const NotionQuoteItem: FC<INotionContentItem> = item => {
  const { _id, content, color, bgColor } = item
  // const [updateContentItem] = use...

  const handleSubmitChanges = () => {
    console.log()
  }

  const { value, handleChange, handleBlur, handleEnterKey } =
    useContentEditable(content, handleSubmitChanges)

  return (
    <Item.Wrapper bgColor={bgColor}>
      <Item.Container color={color}>
        <ContentEditable
          spellCheck
          placeholder='Empty quote'
          html={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleEnterKey}
        />
      </Item.Container>
    </Item.Wrapper>
  )
}

export default NotionQuoteItem
