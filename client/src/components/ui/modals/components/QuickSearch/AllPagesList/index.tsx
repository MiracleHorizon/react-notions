import React, { useRef } from 'react'
import { useNavigate } from 'react-router'
import { useEventListener } from 'usehooks-ts'

import RecentPageItem from './Item'
import useActions from 'hooks/useActions'
import useSelectItem from 'hooks/useSelectItem'
import useTypedSelector from 'hooks/useTypedSelector'
import * as List from './AllPagesList.styles'

const AllPagesList = () => {
  const { closeQuickSearchModal } = useActions()
  const { pages } = useTypedSelector(s => s.notions)
  const {
    selectedItem,
    handleSelectItem,
    handleKeydownSelect,
    setSelectedItem
  } = useSelectItem('', pages.map(page => page._id))
  const navigate = useNavigate()
  const ref = useRef<HTMLDivElement>(null)

  const handleSelectPage = () => {
    navigate(`/workspace/${selectedItem}`)
    closeQuickSearchModal()
  }

  useEventListener('keydown', e => handleKeydownSelect(e, handleSelectPage))
  useEventListener('scroll', () => setSelectedItem(''), ref)

  return (
    <List.Wrapper ref={ref}>
      <List.Container>
        <List.TitleContainer>
          <List.Title>All pages</List.Title>
        </List.TitleContainer>
        <ul>
          {pages.map(page => (
            <RecentPageItem
              key={page._id}
              page={page}
              parentRef={ref}
              isSelected={selectedItem === page._id}
              handleSelectItem={handleSelectItem}
              handleKeydownSelect={handleKeydownSelect}
              handleSelectPage={handleSelectPage}
            />
          ))}
        </ul>
      </List.Container>
    </List.Wrapper>
  )
}

export default AllPagesList
