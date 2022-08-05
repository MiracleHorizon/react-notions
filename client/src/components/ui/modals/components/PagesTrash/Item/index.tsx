import React, { FC, memo } from 'react'

import RestorePage from 'components/ui/buttons/RestorePage'
import PermanentlyDeletePageButton from 'components/ui/buttons/PermanentlyDeletePage'
import { PageSvg } from 'components/ui/svg'
import { IPage } from 'models/page/IPage'
import * as Item from './DeletedPage.styles'

const DeletedPage: FC<IPage> = memo(page => (
  <Item.Wrapper>
    {page.iconUrl ? <Item.Icon src={page.iconUrl} /> : <PageSvg />}
    <Item.Title>{page.title}</Item.Title>
    <Item.ButtonsContainer>
      <RestorePage _id={page._id} />
      <PermanentlyDeletePageButton _id={page._id} />
    </Item.ButtonsContainer>
  </Item.Wrapper>
))

export default DeletedPage
