import React, { FC, memo } from 'react'

import { PageSvg } from 'components/ui/svg'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import PropTypes from './MovePageItem.types'
import * as Option from './MovePageItem.styles'

const MovePageItem: FC<PropTypes> = memo(
  ({
    pageForMoveId,
    title,
    iconUrl,
    isSelected,
    handleSelectItem,
    handleMovePage,
  }) => (
    <Option.Container
      isSelected={isSelected}
      onClick={handleMovePage}
      onMouseEnter={() => handleSelectItem(pageForMoveId)}
    >
      {iconUrl ? (
        <Option.Icon src={handleImageUrl(iconUrl)} alt='icon' />
      ) : (
        <PageSvg />
      )}
      <Option.Title>{title}</Option.Title>
    </Option.Container>
  )
)

export default MovePageItem
