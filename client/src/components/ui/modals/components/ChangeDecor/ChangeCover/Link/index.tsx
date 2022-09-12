import React, { FC } from 'react'

import OutlineInput from 'components/ui/inputs/Outline'
import FilledButton from 'components/ui/buttons/Filled'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'services/notions.api'
import * as Link from './CoverLink.styles'

const CoverLink: FC<{ _id: string }> = ({ _id }) => {
  const { closeChangeCoverModal } = useActions()
  const [updatePage] = useUpdatePageMutation()
  const { value, handleChangeValue, handleClearValue } = useInput('')

  const handleSubmitLink = () => {
    if (value !== '') {
      updatePage({ _id, body: { coverUrl: value } })
      closeChangeCoverModal()
    }
  }

  return (
    <Link.Wrapper>
      <OutlineInput
        renderFocusable
        type='text'
        placeholder='Paste an image link...'
        value={value}
        onChange={handleChangeValue}
        onClear={handleClearValue}
      />
      <FilledButton title='Submit' onClickAction={handleSubmitLink} />
      <Link.Description>Works with any image from the web.</Link.Description>
    </Link.Wrapper>
  )
}

export default CoverLink
