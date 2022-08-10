import React, { FC, memo } from 'react'

import DecorActionButton from 'components/ui/buttons/DecorAction'
import { CoverSvg, OutlineSmileySvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import {
  randomDecorHandler,
  removeDecorHandler,
} from 'utils/helpers/decorActionsHandlers'
import PropTypes from './DecorModalActions.types'
import Bar from './DecorModalActions.styles'

const DecorModalActionsBar: FC<PropTypes> = memo(
  ({ _id, dest, activeCategory }) => {
    const {
      closeChangeCoverModal,
      closeChangeIconModal,
      closeRenamePageModal,
    } = useActions()
    const [updatePage] = useUpdatePageMutation()

    const handleRandomDecor = () => {
      updatePage({ _id, body: randomDecorHandler(dest) })
    }

    const handleRemoveDecor = async () => {
      await updatePage({ _id, body: removeDecorHandler(dest) })

      dest === 'cover' ? closeChangeCoverModal() : closeChangeIconModal()
      closeRenamePageModal()
    }

    return (
      <Bar>
        {(activeCategory === 'Emoji' || activeCategory === 'Gallery') && (
          <DecorActionButton
            title='Random'
            StartSvg={dest === 'cover' ? CoverSvg : OutlineSmileySvg}
            onClickAction={handleRandomDecor}
          />
        )}
        <DecorActionButton title='Remove' onClickAction={handleRemoveDecor} />
      </Bar>
    )
  }
)

export default DecorModalActionsBar
