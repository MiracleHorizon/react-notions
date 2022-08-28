import React, { FC, memo, useState } from 'react'
import { useEventListener } from 'usehooks-ts'

import OpenFullPageButton from 'components/ui/buttons/OpenFullPage'
import SwitchTaskButton from 'components/ui/buttons/SwitchTask'
import ToggleLockedButton from 'components/ui/buttons/ToggleLocked'
import useSwitchTask from 'hooks/useSwitchTask'
import IPage from 'models/page/IPage'
import Container from './SwitchTaskBar.styles'

const SwitchTaskBar: FC<IPage> = memo(({ _id, parentListId, locked }) => {
  const {
    isNextValid,
    isPrevValid,
    handleSwitchToNext,
    handleSwitchToPrevious,
  } = useSwitchTask({ _id, parentListId: parentListId! })
  const [reLock, setReLock] = useState<boolean>(false)

  useEventListener('keydown', handleSwitchToNext)
  useEventListener('keydown', handleSwitchToPrevious)

  return (
    <Container>
      <OpenFullPageButton _id={_id} />
      <SwitchTaskButton
        dest='prev'
        isActive={isPrevValid}
        onClickAction={handleSwitchToPrevious}
      />
      <SwitchTaskButton
        dest='next'
        isActive={isNextValid}
        onClickAction={handleSwitchToNext}
      />
      {(locked || reLock) && (
        <ToggleLockedButton
          _id={_id}
          locked={locked}
          reLock={reLock}
          setReLock={setReLock}
        />
      )}
    </Container>
  )
})

export default SwitchTaskBar
