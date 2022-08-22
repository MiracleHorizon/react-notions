import React, { FC, memo } from 'react'

import DecorActionButton from 'components/ui/buttons/DecorAction'
import { CoverSvg, OutlineSmileySvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'services/pages.api'
import PageDecorActionsHandler from 'utils/PageDecorActionsHandler'
import PropTypes from './DecorModalActions.types'
import Bar from './DecorModalActions.styles'

const DecorModalActionsBar: FC<PropTypes> = memo(
  ({ _id, dest, activeCategory }) => {
    const [updatePage] = useUpdatePageMutation()
    const {
      closeChangeCoverModal,
      closeChangeIconModal,
      closeRenamePageModal,
    } = useActions()

    const handleRandomDecor = () => {
      updatePage({ _id, body: PageDecorActionsHandler.random(dest) })
    }

    const handleRemoveDecor = async () => {
      await updatePage({ _id, body: PageDecorActionsHandler.remove(dest) })
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
