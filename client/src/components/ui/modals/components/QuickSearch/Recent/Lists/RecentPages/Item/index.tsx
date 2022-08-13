import React, { FC } from 'react'
import { useNavigate } from 'react-router'

import SmallPageIcon from 'components/ui/SmallPageIcon'
import { EnterSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import { ISelectItemParams } from 'types'
import IPage from 'models/page/IPage'
import * as Item from './RecentPageItem.styles'

const RecentPageItem: FC<{ page: IPage } & ISelectItemParams<string>> = ({
  page: { _id, title, iconUrl, coverUrl, content },
  isSelected,
  handleSelectItem,
}) => {
  const { closeQuickSearchModal } = useActions()
  const navigate = useNavigate()

  const handleSelectPage = () => {
    navigate(`/workspace/${_id}`)
    closeQuickSearchModal()
    // const recent = window.localStorage.getItem('recentPages')
  }

  return (
    <Item.Container
      isSelected={isSelected}
      onClick={handleSelectPage}
      onMouseEnter={() => handleSelectItem(_id)}
    >
      <SmallPageIcon iconUrl={iconUrl} coverUrl={coverUrl} content={content} />
      <Item.Title dest='page'>{title !== '' ? title : 'Untitled'}</Item.Title>
      {isSelected && (
        <Item.Enter>
          <EnterSvg />
        </Item.Enter>
      )}
    </Item.Container>
  )
}

export default RecentPageItem
