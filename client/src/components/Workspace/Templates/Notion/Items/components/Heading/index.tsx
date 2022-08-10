import React, { FC, useMemo } from 'react'
import ContentEditable from 'react-contenteditable'

import useContentEditable from 'hooks/useContentEditable'
import NotionHeadingItemStylesHandler from 'utils/stylesHandlers/NotionHeadingItemStylesHandler'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import Container from './NotionHeadingItem.styles'

const NotionHeadingItem: FC<INotionContentItem> = item => {
  const { _id, content, type, color, bgColor } = item
  // const [updateContentItem] = use...

  const placeholder = useMemo(() => {
    return NotionHeadingItemStylesHandler.getPlaceHolder(type)
  }, [type])

  const handleSubmitChanges = () => {
    // updateContentItem()
    console.log()
  }

  const { value, handleChange, handleBlur, handleEnterKey } =
    useContentEditable(content, handleSubmitChanges)

  return (
    <Container {...{ type, color, bgColor }}>
      <ContentEditable
        spellCheck
        placeholder={placeholder}
        html={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleEnterKey}
      />
    </Container>
  )
}

export default NotionHeadingItem
