import React, { FC } from 'react'

import Divider from 'components/ui/Divider'
import ModalTitle from 'components/ui/modals/ModalTitle'
import NotionContentItemDecorOption from 'components/ui/options/Color/NotionContentItem'
import { NOTION_CONTENT_ITEM_DECOR_COLORS } from 'utils/constants/colors'
import * as Modal from './NotionContentItemDecorModal.styles'

const NotionContentItemDecorModalContent: FC<{ itemId: string }> = ({
  itemId,
}) => (
  <>
    <Modal.OptionsList>
      <ModalTitle title='Color' upCase />
      {Object.values(NOTION_CONTENT_ITEM_DECOR_COLORS).map(color => (
        <NotionContentItemDecorOption
          key={color.title}
          itemId={itemId}
          dest='color'
          {...color}
        />
      ))}
    </Modal.OptionsList>
    <Divider />
    <Modal.OptionsList>
      <ModalTitle title='Background' upCase />
      {Object.values(NOTION_CONTENT_ITEM_DECOR_COLORS).map(color => (
        <NotionContentItemDecorOption
          key={color.title}
          itemId={itemId}
          title={`${color.title} background`}
          decor={color.decor}
          dest='bg'
        />
      ))}
    </Modal.OptionsList>
  </>
)

export default NotionContentItemDecorModalContent
