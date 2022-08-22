import React, { FC, lazy, Suspense } from 'react'

import DecorOptionLoader from 'components/ui/loaders/DecorOptionLoader'
import PropTypes from './DecorOptions.types'
import * as Options from './DecorOptions.styles'

const AddIconButton = lazy(
  () => import('components/ui/buttons/decor/components/AddIcon')
)
const AddCoverButton = lazy(
  () => import('components/ui/buttons/decor/components/AddCover')
)
const ToggleDescriptionButton = lazy(
  () =>
    import('components/ui/buttons/decor/components/ToggleDescription')
)

const DecorOptions: FC<PropTypes> = ({
  _id,
  isHovering,
  template,
  locked,
  iconUrl,
  coverUrl,
  ...description
}) => (
  <Options.Wrapper template={template} coverUrl={coverUrl}>
    <Options.Container isHovering={isHovering} locked={locked}>
      <Suspense fallback={<DecorOptionLoader />}>
        {!iconUrl && <AddIconButton _id={_id} />}
        {!coverUrl && <AddCoverButton _id={_id} />}
        {template === 'NotionsList' && (
          <ToggleDescriptionButton _id={_id} {...description} />
        )}
      </Suspense>
    </Options.Container>
  </Options.Wrapper>
)

export default DecorOptions
