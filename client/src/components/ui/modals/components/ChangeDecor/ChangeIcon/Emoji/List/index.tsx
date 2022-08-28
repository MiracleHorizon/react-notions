import React, { FC, memo } from 'react'

import EmojiItem from '../Item'
import ModalTitle from 'components/ui/modals/ModalTitle'
import IDecorList from 'models/decor/IDecorList'
import * as List from './EmojiList.styles'

const EmojiList: FC<{
  _id: string
  list: IDecorList
}> = memo(({ _id, list: { title, content } }) => (
  <List.Wrapper>
    <ModalTitle title={title} upCase />
    <List.Content>
      {content.map((item, index) => (
        <EmojiItem key={index} _id={_id} item={item} />
      ))}
    </List.Content>
  </List.Wrapper>
))

export default EmojiList
