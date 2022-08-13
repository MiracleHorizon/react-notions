import React, { FC, useEffect, useState } from 'react'

import QuickSearchPageItem from './Item'
import useSelectItem from 'hooks/useSelectItem'
import useTypedSelector from 'hooks/useTypedSelector'
import getFilteredPages from 'utils/helpers/getFilteredPages'
import IPage from 'models/page/IPage'
import Container from './QuickSearchPagesList.styles'

const QuickSearchPagesList: FC<{ value: string }> = ({ value }) => {
  const { selectedItem, handleSelectItem } = useSelectItem('')
  const { pages } = useTypedSelector(state => state.pages) // Сделать запросом с бэка
  const [filteredPages, setFilteredPages] = useState<IPage[]>(pages)

  useEffect(() => setFilteredPages(getFilteredPages(pages, value)), [value])

  return (
    <Container isEmpty={filteredPages.length === 0}>
      {filteredPages.map(page => (
        <QuickSearchPageItem
          key={page._id}
          isSelected={page._id === selectedItem}
          handleSelectItem={handleSelectItem}
          {...page}
        />
      ))}
    </Container>
  )
}

export default QuickSearchPagesList
