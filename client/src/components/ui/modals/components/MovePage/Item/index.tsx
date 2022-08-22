import React, { FC, memo, useCallback } from 'react'
import { useEventListener } from 'usehooks-ts'

import { PageSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'services/pages.api'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import PropTypes from './MovePageItem.types'
import { ISelectItemParams } from 'hooks/useSelectItem'
import * as Option from './MovePageItem.styles'

const MovePageItem: FC<PropTypes & ISelectItemParams<string>> = memo(
  ({
    pageId,
    pageForMoveId,
    title,
    iconUrl,
    isSelected,
    handleSelectItem,
    handleKeydownSelect,
  }) => {
    const { closeMovePageModal } = useActions()
    const [updatePage] = useUpdatePageMutation()

    const handleMovePage = useCallback(() => {
      const body = { parentPageId: pageForMoveId, favorite: false }
      updatePage({ _id: pageId, body })
      closeMovePageModal()
    }, [pageForMoveId, pageId, updatePage, closeMovePageModal])

    useEventListener('keydown', e => handleKeydownSelect(e, handleMovePage))

    return (
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
  }
)

export default MovePageItem
