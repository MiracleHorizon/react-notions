import React, { FC, memo, useRef } from 'react'

import DropdownPopup from './Popup'
import { ChevronDownSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import PropTypes from './Dropdown.types'
import * as Bar from './Dropdown.styles'

const Dropdown: FC<PropTypes> = memo(
  ({ options, activeOption, setOption, type }) => {
    const { openDropdown } = useActions()
    const { isOpen } = useTypedSelector(s => s.modals.dropdown[type])
    const ref = useRef<HTMLDivElement>(null)

    const handleOpenDropdown = () => openDropdown(type)

    return (
      <Bar.Wrapper>
        <Bar.Container onClick={handleOpenDropdown} ref={ref}>
          <Bar.Title>{activeOption}</Bar.Title>
          <ChevronDownSvg />
        </Bar.Container>
        {isOpen && (
          <DropdownPopup
            invokerRef={ref}
            options={options}
            activeOption={activeOption}
            setOption={setOption}
            type={type}
          />
        )}
      </Bar.Wrapper>
    )
  }
)

export default Dropdown
