import React, { FC, memo } from 'react'

import OptionItem from 'components/ui/options/OptionItem'
import { StarSvg, UnstarSvg } from 'components/ui/svg'
import { ItemProps } from '../OptionItem.types'

const ToggleFavoriteOption: FC<ItemProps> = memo(
  ({ favorite, selectedItem, ...actions }) => {
    return (
      <OptionItem
        title={favorite ? 'Remove from Favorites' : 'Add to Favorites'}
        isSelected={
          selectedItem ===
          (favorite ? 'Remove from Favorites' : 'Add to Favorites')
        }
        StartSvg={favorite ? UnstarSvg : StarSvg}
        {...actions}
      />
    )
  }
)

export default ToggleFavoriteOption
