import React, { FC, useEffect, useRef } from 'react'

import ClearInputButton from 'components/ui/buttons/ClearInput'
import PropTypes from '../types'
import { Wrapper, Input } from './OutlineInput.styles'

const OutlineInput: FC<PropTypes> = ({
  register,
  value,
  type,
  isEmpty,
  disabled,
  placeholder,
  onChange,
  onClear,
  onBlur,
  renderFocusable,
  renderSelectable,
}) => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    renderFocusable && ref.current?.focus()
    renderSelectable && ref.current?.select()
  }, [renderFocusable, renderSelectable])

  return (
    <Wrapper data-el='outline-input-wrapper'>
      <Input
        data-input='outline'
        ref={ref}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...register}
      />
      {(isEmpty !== undefined ? !isEmpty : value !== '') && onClear && (
        <ClearInputButton onClickAction={onClear} />
      )}
    </Wrapper>
  )
}

export default OutlineInput
