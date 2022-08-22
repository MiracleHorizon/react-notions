import React, { FC, memo } from 'react'

import { EmptyPageSvg, PageSvg } from 'components/ui/svg'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import PropTypes from './SmallPageIcon.types'
import Icon from './SmallPageIcon.styles'

const SmallPageIcon: FC<PropTypes> = memo(({ iconUrl, coverUrl, content }) => (
  <>
    {iconUrl ? (
      <Icon src={handleImageUrl(iconUrl)} alt='icon' />
    ) : content.length === 0 && !iconUrl && !coverUrl ? (
      <EmptyPageSvg />
    ) : (
      <PageSvg />
    )}
  </>
))

export default SmallPageIcon
