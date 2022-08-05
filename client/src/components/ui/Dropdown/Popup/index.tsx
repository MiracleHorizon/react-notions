import React, { FC, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import ModalWrapper from 'components/ui/modals'
import { CheckSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import PropTypes from './DropdownPopup.types'
import * as Popup from './DropdownPopup.styles'

const DropdownPopup: FC<PropTypes> = ({
  activeOption,
  setOption,
  options,
  coords,
  type,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { closeDropdown } = useActions()

  const handleClickOutside = () => closeDropdown(type)

  const handleSelectOption = (option: string) => {
    setOption(option)
    closeDropdown(type)
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <ModalWrapper>
      <Popup.Container ref={ref} {...coords}>
        {options.map(option => (
          <Popup.Option key={option} onClick={() => handleSelectOption(option)}>
            <Popup.OptionTitle>{option}</Popup.OptionTitle>
            {option.toLowerCase() === activeOption.toLowerCase() && (
              <CheckSvg />
            )}
          </Popup.Option>
        ))}
      </Popup.Container>
    </ModalWrapper>
  )
}

export default DropdownPopup
