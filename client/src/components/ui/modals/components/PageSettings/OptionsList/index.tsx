import React, { FC, memo, useMemo } from 'react'
import { useEventListener } from 'usehooks-ts'

import {
  ToggleLockOption,
  ToggleFavoriteOption,
  CopyLinkOption,
  DeleteOption,
  MovePageOption,
} from 'components/ui/options/OptionItem/components'
import ToggleOptionsList from '../ToggleOptionsList'
import usePageActions, {
  PageActionsTypes,
  TPageOptionsDest,
} from 'hooks/usePageActions'
import useSelectItem from 'hooks/useSelectItem'
import PropTypes from './PageSettingsOptionsList.types'
import handlePageOptions from 'utils/helpers/handlePageOptions'

const PageSettingsOptionsList: FC<PropTypes> = memo(({ page, coords }) => {
  const { favorite, locked, template } = page
  const options = useMemo(() => {
    return handlePageOptions({ dest: 'settings', favorite, locked, template })
  }, [favorite, locked, template])
  const {
    setSelectedItem,
    handleKeydownSelect,
    ...selectedItemState
  } = useSelectItem('', options)

  const optionsParams = useMemo(
    () => ({
      page,
      coords,
      dest: 'settings' as TPageOptionsDest,
      setSelectedItem,
    }),
    [page, coords, setSelectedItem]
  )

  const {
    handleDelete,
    handleToggleSmallText,
    handleToggleFullWidth,
    handleToggleFavorite,
    handleToggleLocked,
    handleCopyLink,
    handleOpenMovePageModal,
    actionsReducer,
  } = usePageActions(optionsParams)

  useEventListener('keydown', (e: KeyboardEvent) => {
    const { selectedItem } = selectedItemState
    const action = actionsReducer(selectedItem as PageActionsTypes)

    handleKeydownSelect(e, action)

    if (e.code === 'KeyP' && e.ctrlKey && e.shiftKey) {
      e.preventDefault()
      handleOpenMovePageModal()
    }
  })

  return (
    <>
      {page.template === 'Notion' && (
        <ToggleOptionsList
          {...selectedItemState}
          page={page}
          handleToggleSmallText={handleToggleSmallText}
          handleToggleFullWidth={handleToggleFullWidth}
        />
      )}
      <ToggleLockOption
        {...selectedItemState}
        locked={locked}
        onClickAction={handleToggleLocked}
      />
      <ToggleFavoriteOption
        {...selectedItemState}
        favorite={favorite}
        onClickAction={handleToggleFavorite}
      />
      <CopyLinkOption {...selectedItemState} onClickAction={handleCopyLink} />
      <DeleteOption {...selectedItemState} onClickAction={handleDelete} />
      <MovePageOption
        {...selectedItemState}
        onClickAction={handleOpenMovePageModal}
      />
    </>
  )
})

export default PageSettingsOptionsList
