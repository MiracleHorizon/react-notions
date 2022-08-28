import React, { FC, memo, useMemo, useRef } from 'react'
import { useEventListener } from 'usehooks-ts'

import PageOptionsHotkeysWrapper from 'components/HotkeysWrappers/PageOptions'
import Divider from 'components/ui/Divider'
import {
  ToggleFavoriteOption,
  CopyLinkOption,
  RenameOption,
  DeleteOption,
  OpenInNewTabOption,
  MovePageOption,
} from 'components/ui/options/OptionItem/components'
import usePageActions, {
  PageActionsTypes,
  TPageOptionsDest,
} from 'hooks/usePageActions'
import useSelectItem from 'hooks/useSelectItem'
import handlePageOptions from 'utils/helpers/handlePageOptions'
import PropTypes from './PageOptionsList.types'

const PageOptionsList: FC<PropTypes> = memo(({ page, coords }) => {
  const { favorite, locked, status } = page
  const renameRef = useRef<HTMLDivElement>(null)

  const options = useMemo(() => {
    return handlePageOptions({ dest: 'options', status, favorite, locked })
  }, [status, favorite, locked])
  const optionsParams = useMemo(
    () => ({
      page,
      coords,
      renameRef,
      dest: 'options' as TPageOptionsDest,
    }),
    [page, coords]
  )
  const { handleKeydownSelect, ...selectedItemState } = useSelectItem('', options)

  const {
    handleDelete,
    handleOpenMovePageModal,
    handleOpenRenameModal,
    handleOpenPageInNewTab,
    handleToggleFavorite,
    handleCopyLink,
    actionsReducer,
  } = usePageActions(optionsParams)

  useEventListener('keydown', e => {
    const { selectedItem } = selectedItemState
    const action = actionsReducer(selectedItem as PageActionsTypes)
    handleKeydownSelect(e, action)
  })

  return (
    <PageOptionsHotkeysWrapper
      handleOpenMovePageModal={handleOpenMovePageModal}
      handleOpenRenameModal={handleOpenRenameModal}
      handleOpenPageInNewTab={handleOpenPageInNewTab}
      handleDeletePage={status ? handleDelete : undefined}
    >
      <>
        <DeleteOption
          {...selectedItemState}
          status={status}
          onClickAction={handleDelete}
        />
        <ToggleFavoriteOption
          {...selectedItemState}
          favorite={favorite}
          onClickAction={handleToggleFavorite}
        />
        <CopyLinkOption {...selectedItemState} onClickAction={handleCopyLink} />
        {!status && !locked && (
          <RenameOption
            {...selectedItemState}
            reference={renameRef}
            onClickAction={handleOpenRenameModal}
          />
        )}
        {status && (
          <>
            <OpenInNewTabOption
              {...selectedItemState}
              onClickAction={handleOpenPageInNewTab}
            />
            <Divider />
            {!locked && (
              <RenameOption
                {...selectedItemState}
                reference={renameRef}
                onClickAction={handleOpenRenameModal}
              />
            )}
            <MovePageOption
              {...selectedItemState}
              locked={true}
              onClickAction={handleOpenMovePageModal}
            />
          </>
        )}
        {!status && (
          <MovePageOption
            {...selectedItemState}
            onClickAction={handleOpenMovePageModal}
          />
        )}
      </>
    </PageOptionsHotkeysWrapper>
  )
})

export default PageOptionsList
