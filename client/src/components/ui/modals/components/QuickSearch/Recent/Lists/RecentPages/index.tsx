import React, { FC } from 'react'

import RecentPageItem from './Item'
import ClearButton from 'components/ui/buttons/Clear'
import PropTypes from '../RecentList.types'
import * as List from '../RecentList.styles'

const RecentPages: FC<PropTypes> = ({
  title,
  items,
  selectedItem,
  handleSelectItem,
}) => {
  const handleClearRecentPages = () => {
    window.localStorage.removeItem('recentPages')
  }

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
          />
        ))}
      </ul>
    </List.Wrapper>
  )
}

export default RecentPages
