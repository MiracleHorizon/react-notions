import React, { FC } from 'react'

import OutlineInput from 'components/ui/inputs/Outline'
import FilledButton from 'components/ui/buttons/Filled'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import * as Link from './CoverLink.styles'

const CoverLink: FC<{ _id: string }> = ({ _id }) => {
  const { value, handleChangeValue, handleClearValue } = useInput('')
  const { closeChangeCoverModal } = useActions()
  const [updatePage] = useUpdatePageMutation()

  const handleSubmitLink = () => {
    if (value === '') return

    updatePage({ _id, body: { coverUrl: value } })
    closeChangeCoverModal()
  }

  // Добавить форму.

  return (
    <Link.Wrapper>
      <OutlineInput
        renderFocusable
        inputMode='text'
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
