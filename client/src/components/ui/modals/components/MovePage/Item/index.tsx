import React, { FC } from 'react'

import { PageSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import PropTypes from './MovePageItem.types'
import * as Option from './MovePageItem.styles'

const MovePageItem: FC<PropTypes> = ({ pageId, _id, title, iconUrl }) => {
  const [updatePage] = useUpdatePageMutation()
  const { closeMovePageModal } = useActions()

  const handleMovePage = () => {
    updatePage({ _id: pageId, body: { parentPageId: _id, favorite: false } })
    closeMovePageModal()
  }

  return (
    <Option.Container onClick={handleMovePage}>
      {iconUrl ? <Option.Icon src={iconUrl} /> : <PageSvg />}
      <Option.Title>{title}</Option.Title>
    </Option.Container>
  )
}

export default MovePageItem
