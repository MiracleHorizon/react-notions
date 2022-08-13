import React, { FC } from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import { CheckSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useSetModalPosition from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import PropTypes from './DropdownPopup.types'
import * as Popup from './DropdownPopup.styles'

const DropdownPopup: FC<PropTypes> = ({
  invokerRef,
  activeOption,
  setOption,
  options,
  type,
}) => {
  const { closeDropdown } = useActions()
  const { ref, setRef, rect, coords } = useSetModalPosition({
    invokerRect: invokerRef.current?.getBoundingClientRect().toJSON(),
    pos: 'rightCenter',
  })

  const handleClickOutside = () => closeDropdown(type)

  const handleSelectOption = (option: string) => {
    setOption(option)
    closeDropdown(type)
  }

  // useCloseModal(ref, handleClickOutside)
  // useOnCloseModal(ref, handleClickOutside)

  return (
    <ModalWrapper>
      <Popup.Container
        ref={node => nodeRefHandler(node, rect, setRef)}
        {...coords}
      >
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
