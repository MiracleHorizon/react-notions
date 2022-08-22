import React, { FC, useRef, useState } from 'react'
import { useEventListener } from 'usehooks-ts'

import MovePageItem from '../Item'
import MoveToCommonPagesOption from 'components/ui/options/MovePage/MoveToCommonPages'
import useSelectItem from 'hooks/useSelectItem'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import IPage from 'models/page/IPage'
import * as List from './PagesToMoveList.styles'

const PagesToMoveList: FC<{ _id: string; pages: IPage[] }> = ({
  _id,
  pages,
}) => {
  const { selectedItem, handleSelectItem, handleKeydownSelect } = useSelectItem(
    '',
    // ['common', ...pages.map(page => page._id)]
    pages.map(page => page._id)
  )
  const [isOnBottom, setOnBottom] = useState<boolean>(false)
  const ref = useRef<HTMLUListElement>(null)

  useEventListener(
    'scroll',
    () => handleScrollTop({ node: ref.current, setOnBottom }),
    ref
  )

  return (
    <List.Container ref={ref} isOnBottom={isOnBottom}>
      {pages.length > 0 ? (
        <>
          <MoveToCommonPagesOption
            _id={_id}
            isSelected={selectedItem === 'common'}
            handleSelectItem={handleSelectItem}
            handleKeydownSelect={handleKeydownSelect}
          />
          {pages.map(page => (
            <MovePageItem
              key={page._id}
              {...page}
              pageId={_id}
              pageForMoveId={page._id}
              isSelected={selectedItem === page._id}
              handleSelectItem={handleSelectItem}
              handleKeydownSelect={handleKeydownSelect}
            />
          ))}
        </>
      ) : (
        <List.NoResultsTitle>No results</List.NoResultsTitle>
      )}
    </List.Container>
  )
}

export default PagesToMoveList
