import React, { FC, memo } from 'react'
import { useNavigate } from 'react-router'
import { useEventListener } from 'usehooks-ts'

import SmallPageIcon from 'components/ui/SmallPageIcon - Checked'
import { EnterSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import PropTypes from './RecentPageItem.types'
import * as Item from './RecentPageItem.styles'

const RecentPageItem: FC<PropTypes> = memo(
  ({
    page: { _id, title, iconUrl, coverUrl, content },
    isSelected,
    handleSelectItem,
    handleKeydownSelect,
  }) => {
    const { closeQuickSearchModal } = useActions()
    const navigate = useNavigate()

    const handleSelectPage = () => {
      navigate(`/workspace/${_id}`)
      closeQuickSearchModal()
    }

    useEventListener('keydown', e => handleKeydownSelect(e, handleSelectPage))

    return (
      <Item.Container
        isSelected={isSelected}
        onClick={handleSelectPage}
        onMouseEnter={() => handleSelectItem(_id)}
      >
        <SmallPageIcon
          iconUrl={iconUrl}
          coverUrl={coverUrl}
          content={content}
        />
        <Item.Title dest='page'>{title !== '' ? title : 'Untitled'}</Item.Title>
        {isSelected && (
          <Item.Enter>
            <EnterSvg />
          </Item.Enter>
        )}
      </Item.Container>
    )
  }
)

export default RecentPageItem
