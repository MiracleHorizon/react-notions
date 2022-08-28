import React, { FC } from 'react'
import { useEventListener } from 'usehooks-ts'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import { CheckSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useSelectItem from 'hooks/useSelectItem'
import useOnCloseModal from 'hooks/useOnCloseModal'
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
  const {
    selectedItem,
    handleSelectItem,
    handleKeydownSelect
  } = useSelectItem('', options)

  const { ref, setRef, rect, coords } = useSetModalPosition({
    invokerRect: invokerRef.current?.getBoundingClientRect().toJSON(),
    pos: 'rightCenter',
  })

  const handleSelectOption = (option: any) => {
    setOption(option)
    closeDropdown(type)
  }

  const handleCloseDropdown = () => closeDropdown(type)

  useOnCloseModal(ref, handleCloseDropdown)

  useEventListener('keydown', e => {
    handleKeydownSelect(e, () => handleSelectOption(selectedItem))
  })

  return (
    <ModalWrapper>
      <Popup.Container ref={node => nodeRefHandler(node, rect, setRef)} {...coords}>
        <Popup.OptionsList>
          {options.map(option => (
            <Popup.Option
              key={option}
              isSelected={selectedItem === option}
              onClick={() => handleSelectOption(option)}
              onMouseEnter={() => handleSelectItem(option)}
            >
              <Popup.OptionTitle>{option}</Popup.OptionTitle>
              {option.toLowerCase() === activeOption.toLowerCase() && (
                <CheckSvg />
              )}
            </Popup.Option>
          ))}
        </Popup.OptionsList>
      </Popup.Container>
    </ModalWrapper>
  )
}

export default DropdownPopup
