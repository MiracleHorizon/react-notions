import React, { useRef } from 'react'

import useActions from 'hooks/useActions'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import PropTypes from './PageIcon.types'
import * as Icon from './PageIcon.styles'

const PageIcon = ({ _id, iconUrl, coverUrl, template, locked }: PropTypes) => {
  const { openChangeIconModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  const handleOpenChangeIconModal = () => {
    const invokerRect = ref.current?.getBoundingClientRect().toJSON()
    openChangeIconModal({ invokerRect, pageId: _id })
  }

  return (
    <Icon.Container
      ref={ref}
      template={template}
      coverUrl={coverUrl}
      locked={locked}
      onClick={handleOpenChangeIconModal}
    >
      <Icon.Image src={handleImageUrl(iconUrl)} alt='icon' />
    </Icon.Container>
  )
}

export default PageIcon
