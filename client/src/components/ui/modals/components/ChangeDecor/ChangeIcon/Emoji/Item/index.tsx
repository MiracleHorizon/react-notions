import React, { FC, memo } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { useUpdatePageMutation } from 'services/notions.api'
import { ModalPosition } from 'hooks/useSetModalPosition'
import { IDecorItem } from 'models/decor/IDecorList'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import * as Emoji from './EmojiItem.styles'

const EmojiItem: FC<{ _id: string; item: IDecorItem }> = memo(
  ({ _id, item: { imgUrl, tooltipTitle } }) => {
    const [updatePage] = useUpdatePageMutation()
    const { ref, isHovering } = useDebounceHovering(500)

    const handleSelectIcon = () => {
      updatePage({ _id, body: { iconUrl: imgUrl } })
    }

    return (
      <Emoji.Container ref={ref} onClick={handleSelectIcon}>
        <Emoji.Image src={handleImageUrl(imgUrl)} alt='emoji' />
        {isHovering && (
          <FilledTooltip
            fixed
            pos={ModalPosition.CENTER_TOP}
            invokerRef={ref}
            title={tooltipTitle}
          />
        )}
      </Emoji.Container>
    )
  }
)

export default EmojiItem
