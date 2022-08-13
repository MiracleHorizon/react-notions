import React, { FC } from 'react'

import useActions from 'hooks/useActions'
import PropTypes from './NotionContentItemDecorOption.types'
import { useUpdateItemMutation } from 'store/slices/pages/pages.api'
import * as Option from './NotionContentItemDecorOption.styles'

const NotionContentItemDecorOption: FC<PropTypes> = ({
  itemId,
  title,
  dest,
  decor,
}) => {
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

export default NotionContentItemDecorOption
