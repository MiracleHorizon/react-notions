import React, { FC, useCallback, useRef } from 'react'

import ChangeCoverModal from 'components/ui/modals/components/ChangeDecor/ChangeCover'
import { useAppDispatch } from 'store'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { modalsCoordsHandler } from 'utils/coordsHandlers/modals'
import PropTypes from '../CoverOption.types'
import * as Option from '../CoverOption.styles'

const ChangeCoverOption: FC<PropTypes> = ({
  _id,
  isRepositionEnabled,
  setReposition,
}) => {
  const { isOpen } = useTypedSelector(state => state.modals.cover)
  const { openChangeCoverModal } = useActions()
  const buttonRef = useRef<HTMLDivElement>(null)
  const appDispatch = useAppDispatch()

  const handleOpenCoverModal = useCallback(() => {
    openChangeCoverModal({
      coords: modalsCoordsHandler.cover(buttonRef),
      pageId: _id!,
    })
  }, [_id, openChangeCoverModal])

  const handleSavePosition = () => {
    // appDispatch(updatePage({_id, }))
    setReposition(false)
  }

  return (
    <>
      <Option.Container
        bRight
        pos='left'
        role='button'
        ref={!isRepositionEnabled ? buttonRef : null}
        onClick={
          isRepositionEnabled ? handleSavePosition : handleOpenCoverModal
        }
      >
        <Option.Title>
          {isRepositionEnabled ? 'Save position' : 'Change cover'}
        </Option.Title>
      </Option.Container>
      {isOpen && <ChangeCoverModal />}
    </>
  )
}

export default ChangeCoverOption
