import React, { FC, memo } from 'react'

import RestorePageButton from 'components/ui/buttons/RestorePage'
import PermanentlyDeletePageButton from 'components/ui/buttons/PermanentlyDeletePage'
import { PageSvg } from 'components/ui/svg'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import IPage from 'models/page/IPage'
import { ISelectItemParams } from 'types'
import * as Item from './DeletedPage.styles'

const DeletedPageItem: FC<IPage & ISelectItemParams<string>> = memo(
  ({ _id, title, iconUrl, isSelected, handleSelectItem }) => (
    <Item.Wrapper
      isSelected={isSelected}
      onMouseEnter={() => handleSelectItem(_id)}
    >
      {iconUrl ? (
        <Item.Icon src={handleImageUrl(iconUrl)} alt='icon' />
      ) : (
        <PageSvg />
      )}
      <Item.Title>{title === '' ? 'Untitled' : title}</Item.Title>
      <Item.ButtonsContainer>
        <RestorePageButton _id={_id} />
        <PermanentlyDeletePageButton _id={_id} />
      </Item.ButtonsContainer>
    </Item.Wrapper>
  )
)

export default DeletedPageItem
