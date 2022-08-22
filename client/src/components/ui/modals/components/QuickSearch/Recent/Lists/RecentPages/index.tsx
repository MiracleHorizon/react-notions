import React, { FC, memo, useCallback } from 'react'

import RecentPageItem from './Item'
import ClearButton from 'components/ui/buttons/Clear'
import useSelectItem from 'hooks/useSelectItem'
import PropTypes from '../RecentList.types'
import * as List from '../RecentList.styles'

const RecentPages: FC<PropTypes> = memo(({ title, items }) => {
  const { selectedItem, handleSelectItem, handleKeydownSelect } = useSelectItem(
    '',
    items.map(page => page._id)
  )

  const handleClearRecentPages = useCallback(() => {
    window.localStorage.removeItem('recentPages')
  }, [])

  return (
    <List.Wrapper>
      <List.TitleContainer>
        <List.Title>Recent {title}</List.Title>
        <ClearButton onClickAction={handleClearRecentPages} />
      </List.TitleContainer>
      <ul>
        {items.map(page => (
          <RecentPageItem
            key={page._id}
            page={page}
            isSelected={selectedItem === page._id}
            handleSelectItem={handleSelectItem}
            handleKeydownSelect={handleKeydownSelect}
          />
        ))}
      </ul>
    </List.Wrapper>
  )
})

export default RecentPages
