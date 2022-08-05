import React, { FC } from 'react'

import EmojiItem from '../Item'
import PropTypes from './EmojiList.types'
import * as List from './EmojiList.styles'

const EmojiList: FC<PropTypes> = ({ _id, list: { title, content } }) => (
  <List.Wrapper>
    <List.Title>{title}</List.Title>
    <List.Content>
      {content.map((item, index) => (
        <EmojiItem key={index} _id={_id} emoji={item.emoji} />
      ))}
    </List.Content>
  </List.Wrapper>
)

export default EmojiList
