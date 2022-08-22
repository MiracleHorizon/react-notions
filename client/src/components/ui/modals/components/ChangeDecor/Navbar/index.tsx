import React, { FC, useCallback } from 'react'

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
  const handleSelectCategory = useCallback(
    (category: string) => setActiveCategory(category),
    [setActiveCategory]
  )

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
      <DecorModalActionsBar {...actionsProps} activeCategory={activeCategory} />
    </Wrapper>
  )
}

export default DecorModalNavbar
