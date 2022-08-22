import React, { FC, memo, useRef, useState } from 'react'
import { useEventListener } from 'usehooks-ts'

import DeletedPageItem from '../Item'
import useSelectItem from 'hooks/useSelectItem'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import IPage from 'models/page/IPage'
import * as List from './DeletedPagesList.styles'

const DeletedPagesList: FC<{ pages: IPage[] }> = memo(({ pages }) => {
  const { selectedItem, handleSelectItem, handleKeydownSelect } = useSelectItem(
    '',
    pages.map(page => page._id)
  )
  const [isOnBottom, setOnBottom] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEventListener(
    'scroll',
    () => handleScrollTop({ node: ref.current, setOnBottom }),
    ref
  )

  useEventListener('keydown', e => handleKeydownSelect(e))

  return (
    <List.Wrapper ref={ref} isOnBottom={isOnBottom}>
      <List.Container>
        {pages.map(page => (
          <DeletedPageItem
            key={page._id}
            {...page}
            isSelected={selectedItem === page._id}
            handleSelectItem={handleSelectItem}
          />
        ))}
      </List.Container>
    </List.Wrapper>
  )
})

export default DeletedPagesList
