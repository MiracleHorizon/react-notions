import React, { FC, useRef, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { useHover } from 'usehooks-ts'

import PagesList from '../index'
import PageItemIcon from './Icon'
import ToggleButton from 'components/ui/buttons/Toggle'
import EmptyPageDependencies from './EmptyDeps'
import PageItemOptions from './Options'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import { selectedDependencies } from 'store/slices/pages/pages.selectors'
import { setCoordsByPointer } from 'helpers/setCoordsByPointer'
import PropTypes from './PageItem.types'
import * as Item from './PageItem.styles'

const PageItem: FC<PropTypes> = ({ page, pLeft }) => {
  const { _id, title, expanded } = page
  const dependencies = useTypedSelector(state =>
    selectedDependencies(state, _id)
  )
  const isSelected = useLocation().pathname.split('/').includes(_id)
  const { openPageOptionsModal } = useActions()
  const [updatePage] = useUpdatePageMutation()

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleToggleExpanded = (e: MouseEvent) => {
    e.preventDefault()
    updatePage({ _id: page._id, body: { expanded: !page.expanded } })
  }

  const handleOpenOptionsModal = (e: MouseEvent) => {
    e.preventDefault()
    openPageOptionsModal({ coords: setCoordsByPointer(e), page })
  }

  const handleDependencies = () => {
    if (expanded && dependencies.length > 0) {
      return <PagesList pages={dependencies} pLeft={pLeft + 14} />
    }

    if (expanded && dependencies.length === 0) {
      return <EmptyPageDependencies pLeft={pLeft + 17} />
    }

    return null
  }

  return (
    <Item.Wrapper>
      <Link to={`/workspace/${page._id}`}>
        <Item.Container
          ref={ref}
          pLeft={pLeft}
          isHovering={isHovering}
          isSelected={isSelected}
          onContextMenu={handleOpenOptionsModal}
        >
          <ToggleButton
            expanded={expanded}
            handleToggleExpanded={handleToggleExpanded}
          />
          <Item.Content>
            <PageItemIcon {...page} />
            <Item.Title isSelected={isSelected}>{title}</Item.Title>
          </Item.Content>
          {isHovering && <PageItemOptions {...page} />}
        </Item.Container>
      </Link>
      {handleDependencies()}
    </Item.Wrapper>
  )
}

export default PageItem
