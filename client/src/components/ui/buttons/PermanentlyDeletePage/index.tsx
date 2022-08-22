import React, { FC, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { DeleteTrashSvg } from 'components/ui/svg'
import { PermanentlyDeletePageTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import Button from './PermanentlyDeletePageButton.styles'

const PermanentlyDeletePageButton: FC<{ _id: string }> = ({ _id }) => {
  const { showDeletePageAlert } = useActions()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleOpenDeletePageAlert = () => showDeletePageAlert(_id)

  return (
    <Button
      ref={ref}
      role='button'
      data-btn='perm-delete-page'
      onClick={handleOpenDeletePageAlert}
    >
      <DeleteTrashSvg />
      {isHovering && <PermanentlyDeletePageTooltip reference={ref} />}
    </Button>
  )
}

export default PermanentlyDeletePageButton
