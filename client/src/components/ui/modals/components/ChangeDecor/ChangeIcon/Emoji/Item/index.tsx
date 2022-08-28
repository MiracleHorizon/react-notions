import React, { FC, memo } from 'react'

import { useUpdatePageMutation } from 'services/notions.api'
import { IDecorItem } from 'models/decor/IDecorList'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import * as Emoji from './EmojiItem.styles'

const EmojiItem: FC<{ _id: string; item: IDecorItem }> = memo(
  ({ _id, item: { imgUrl, tooltipTitle } }) => {
    const [updatePage] = useUpdatePageMutation()

    const handleSelectIcon = () => {
      updatePage({ _id, body: { iconUrl: imgUrl } })
    }

    return (
      <Emoji.Container onClick={handleSelectIcon}>
        <Emoji.Image src={handleImageUrl(imgUrl)} alt='emoji' />
      </Emoji.Container>
    )
  }
)

export default EmojiItem
