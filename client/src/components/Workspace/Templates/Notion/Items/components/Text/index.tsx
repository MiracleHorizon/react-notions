import React, { FC } from 'react'
import ContentEditable from 'react-contenteditable'

import INotionContentItem from 'models/pageContent/INotionContentItem'
import useContentEditable from 'hooks/useContentEditable'
import { useUpdateItemMutation } from 'store/slices/pages/pages.api'
import Container from './NotionTextItem.styles'

const NotionTextItem: FC<INotionContentItem> = item => {
  const { _id, content, bgColor, color, order } = item
  const [updateContentItem] = useUpdateItemMutation()

  const handleSubmitChanges = () => {
    console.log()
    // updateContentItem()
  }

  // const [or, setOrder] = useState<number>(order)
  //
  // useEffect(() => {
  //   setOrder(order)
  // }, [order])

  const { value, handleChange, handleBlur, handleEnterKey } =
    useContentEditable(content, handleSubmitChanges)

  return (
    <Container color={color} bgColor={bgColor}>
      <ContentEditable
        spellCheck
        placeholder="Type '/' for commands"
        html={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleEnterKey}
      />
    </Container>
  )
}

export default NotionTextItem
