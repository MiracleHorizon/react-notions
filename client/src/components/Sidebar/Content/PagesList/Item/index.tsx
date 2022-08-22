import React, { FC, useRef, MouseEvent, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { useHover } from 'usehooks-ts'

import PagesList from '../index'
import PageItemIcon from './Icon'
import ToggleButton from 'components/ui/buttons/Toggle'
import EmptyPageDependencies from './EmptyDependencies - Checked'
import PageItemOptions from './Options'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdatePageMutation } from 'services/pages.api'
import { selectPageDependencies } from 'store/slices/pages/pages.selectors'
import setCoordsByPointer from 'utils/helpers/setCoordsByPointer'
import PropTypes from './PageItem.types'
import * as Item from './PageItem.styles'

const PageItem: FC<PropTypes> = ({ page, pLeft }) => {
  const { openPageOptionsModal } = useActions()
  const { _id, title, expanded } = page
  const [updatePage] = useUpdatePageMutation()
  const dependencies = useTypedSelector(s => selectPageDependencies(s, _id))
  const isSelected = useLocation().pathname.split('/').includes(_id)

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleToggleExpanded = useCallback(
    (e: MouseEvent) => {
      e.preventDefault()
      updatePage({ _id, body: { expanded: !expanded } })
    },
    [_id, expanded, updatePage]
  )

  const handleOpenOptionsModal = (e: MouseEvent) => {
    e.preventDefault()
    openPageOptionsModal({ coords: setCoordsByPointer(e), page })
  }

  const handleDependencies = () => {
    if (!expanded) return null

    return dependencies.length === 0 ? (
      <EmptyPageDependencies pLeft={pLeft + 17} />
    ) : (
      <PagesList pages={dependencies} pLeft={pLeft + 14} />
    )
  }

  return (
    <Item.Wrapper>
      <Link to={`/workspace/${_id}`}>
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
            <Item.Title isSelected={isSelected}>
              {title === '' ? 'Untitled' : title}
            </Item.Title>
          </Item.Content>
          {isHovering && <PageItemOptions {...page} />}
        </Item.Container>
      </Link>
      {handleDependencies()}
    </Item.Wrapper>
  )
}

export default PageItem
