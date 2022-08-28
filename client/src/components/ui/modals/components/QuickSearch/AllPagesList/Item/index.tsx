import React, { FC, memo, useEffect, useRef } from 'react'

import SmallPageIcon from 'components/ui/SmallPageIcon'
import { EnterSvg } from 'components/ui/svg'
import PropTypes from './RecentPageItem.types'
import * as Item from './RecentPageItem.styles'

const RecentPageItem: FC<PropTypes> = memo(
  ({
    page: { _id, title, iconUrl, coverUrl, content },
    isSelected,
    handleSelectItem,
    handleSelectPage,
    parentRef,
  }) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (!parentRef.current || !ref.current || !isSelected) return

      const node = ref.current
      const parentNode = parentRef.current

      // console.log(parentNode.clientHeight - nodeRect.height)
      // console.log(parentNode.scrollTop)
      if (
        parentNode.scrollHeight - parentNode.clientHeight <
        parentNode.scrollTop
      ) {
        console.log(node.offsetTop)
      }

      // if (node.offsetTop > parentNode.clientHeight - nodeRect.height) {
      //   node.scrollIntoView(false)
      // }
    }, [isSelected, parentRef])

    return (
      <Item.Container
        ref={ref}
        isSelected={isSelected}
        onClick={handleSelectPage}
        onMouseEnter={() => handleSelectItem(_id)}
      >
        <SmallPageIcon
          iconUrl={iconUrl}
          coverUrl={coverUrl}
          content={content}
        />
        <Item.Title dest='page'>{title !== '' ? title : 'Untitled'}</Item.Title>
        {isSelected && (
          <Item.Enter>
            <EnterSvg />
          </Item.Enter>
        )}
      </Item.Container>
    )
  }
)

export default RecentPageItem
