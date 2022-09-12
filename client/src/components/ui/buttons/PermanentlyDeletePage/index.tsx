import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { DeleteTrashSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import Button from './PermanentlyDeletePageButton.styles'

const PermanentlyDeletePageButton: FC<{ _id: string }> = ({ _id }) => {
  const { showDeletePageAlert } = useActions()
  const { ref, isHovering } = useDebounceHovering()

  const handleOpenDeletePageAlert = () => showDeletePageAlert(_id)

  return (
    <Button
      ref={ref}
      role='button'
      data-btn='perm-delete-page'
      onClick={handleOpenDeletePageAlert}
    >
      <DeleteTrashSvg />
      {isHovering && (
        <FilledTooltip
          title='Delete permanently'
          pos={ModalPosition.CENTER_BOTTOM}
          invokerRef={ref}
        />
      )}
    </Button>
  )
}

export default PermanentlyDeletePageButton
