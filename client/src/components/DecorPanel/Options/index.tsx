import React, { FC } from 'react'
import Loadable from 'react-loadable'

import DecorOptionLoader from 'components/ui/loaders/DecorOptionLoader'
import PropTypes from './DecorOptions.types'
import * as Options from './DecorOptions.styles'

const AddIconButton = Loadable({
  loader: () => import('components/ui/buttons/decorButtons/components/AddIcon'),
  loading: () => <DecorOptionLoader />,
})

const AddCoverButton = Loadable({
  loader: () =>
    import('components/ui/buttons/decorButtons/components/AddCover'),
  loading: () => <DecorOptionLoader />,
})

const AddFirstCommentButton = Loadable({
  loader: () =>
    import('components/ui/buttons/decorButtons/components/AddFirstComment'),
  loading: () => <DecorOptionLoader />,
})

const ToggleDescriptionButton = Loadable({
  loader: () =>
    import('components/ui/buttons/decorButtons/components/ToggleDescription'),
  loading: () => <DecorOptionLoader />,
})

const DecorOptions: FC<PropTypes> = ({
  _id,
  isHovering,
  template,
  iconUrl,
  coverUrl,
  comments,
  ...description
}) => (
  <Options.Wrapper template={template} coverUrl={coverUrl}>
    <Options.Container isHovering={isHovering}>
      {!iconUrl && <AddIconButton _id={_id} />}
      {!coverUrl && <AddCoverButton _id={_id} />}
      {comments.length === 0 && template === 'Notion' && (
        <AddFirstCommentButton _id={_id} />
      )}
      {template === 'NotionsList' && (
        <ToggleDescriptionButton _id={_id} {...description} />
      )}
    </Options.Container>
  </Options.Wrapper>
)

export default DecorOptions
