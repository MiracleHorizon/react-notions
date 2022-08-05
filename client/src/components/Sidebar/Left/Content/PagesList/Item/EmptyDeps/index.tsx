import React, { FC } from 'react'
import * as Item from './EmptyPageDependencies.styles'

const EmptyPageDependencies: FC<{ pLeft: number }> = ({ pLeft }) => (
  <Item.Container pLeft={pLeft}>
    <Item.Title>No pages inside</Item.Title>
  </Item.Container>
)

export default EmptyPageDependencies
