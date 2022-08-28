import React, { FC, memo } from 'react'

import useActions from 'hooks/useActions'
import PropTypes from './NotionContentItemDecorOption.types'
import { useUpdateItemMutation } from 'services/notions.api'
import * as Option from './NotionContentItemDecorOption.styles'

const NotionContentItemDecorOption: FC<PropTypes> = memo(
  ({ itemId, title, dest, decor }) => {
    const [updateContentItem] = useUpdateItemMutation()
    const { closeNotionContentItemDecorModal } = useActions()

    const handleChangeItemDecor = () => {
      const body = dest === 'color' ? { color: decor } : { bgColor: decor }
      updateContentItem({ _id: itemId, body })
      closeNotionContentItemDecorModal()
    }

    return (
      <Option.Container onClick={handleChangeItemDecor}>
        <Option.DecorPreviewBlock dest={dest} decor={decor}>
          <span>A</span>
        </Option.DecorPreviewBlock>
        <Option.DecorTitle>{title}</Option.DecorTitle>
      </Option.Container>
    )
  }
)

export default NotionContentItemDecorOption
