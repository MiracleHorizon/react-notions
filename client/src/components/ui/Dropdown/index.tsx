import React, { FC, memo, useRef } from 'react'

import DropdownPopup from './Popup'
import { ChevronDownSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import PropTypes from './Dropdown.types'
import { dropdownCoordsHandler } from 'utils/coordsHandlers/dropdown'
import * as Bar from './Dropdown.styles'

// Проверить необходимость мемоизации

const Dropdown: FC<PropTypes> = memo(
  ({ options, activeOption, setOption, pos, type }) => {
    const { isOpen } = useTypedSelector(state => state.modals.dropdown[type])
    const { openDropdown } = useActions()
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
            options={options}
            activeOption={activeOption}
            setOption={setOption}
            type={type}
            coords={dropdownCoordsHandler(ref, pos)}
          />
        )}
      </Bar.Wrapper>
    )
  }
)

export default Dropdown
