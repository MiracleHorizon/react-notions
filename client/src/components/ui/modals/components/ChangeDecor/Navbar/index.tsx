import React, { FC } from 'react'

import BorderedButton from 'components/ui/buttons/Bordered'
import DecorModalActionsBar from './ActionsBar'
import PropTypes from './DecorModalNavbar.types'
import Wrapper from './DecorModalNavbar.styles'

const DecorModalNavbar: FC<PropTypes> = ({
  categories,
  activeCategory,
  setActiveCategory,
  ...actionsProps
}) => {
  const handleSelectCategory = (category: string) => setActiveCategory(category)

  return (
    <Wrapper>
      {categories.map(category => (
        <BorderedButton
          key={category}
          title={category}
          isActive={category === activeCategory}
          action={handleSelectCategory}
        />
      ))}
      <DecorModalActionsBar {...actionsProps} />
    </Wrapper>
  )
}

export default DecorModalNavbar
