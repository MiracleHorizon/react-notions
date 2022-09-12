import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useEventListener } from 'usehooks-ts'

import MovePageItem from '../Item'
import MoveToCommonPagesOption from 'components/ui/options/MoveToCommonPages'
import DefaultNoResultsExposition from 'components/ui/expositions/NoResults/Default'
import useActions from 'hooks/useActions'
import useSelectItem from 'hooks/useSelectItem'
import { useUpdatePageMutation } from 'services/notions.api'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import PropTypes from './PagesToMoveList.types'
import Container from './PagesToMoveList.styles'

const PagesToMoveList: FC<PropTypes> = ({ _id, pages }) => {
  const { closeMovePageModal } = useActions()
  const [updatePage] = useUpdatePageMutation()
  const [isScrollOnBottom, setScrollBottom] = useState<boolean>(false)
  const ref = useRef<HTMLUListElement>(null)

  const items = useMemo(() => {
    return ['common', ...pages.map(page => page._id)]
  }, [pages])

  const {
    selectedItem,
    handleSelectItem,
    handleKeydownSelect,
    setSelectedItem,
  } = useSelectItem('', items)

  const handleMovePage = useCallback(() => {
    const commonPageBody = {
      parentPageId: null,
      parentListId: null,
      status: null,
      favorite: false,
      taskOrder: null,
    }
    const defaultBody = {
      parentPageId: selectedItem,
      favorite: false,
    }
    const body = selectedItem === 'common' ? commonPageBody : defaultBody

    updatePage({ _id, body })
    closeMovePageModal()
  }, [_id, selectedItem, updatePage, closeMovePageModal])

  useEffect(() => {
    setSelectedItem('')
  }, [pages, setSelectedItem])

  useEventListener('keydown', e => handleKeydownSelect(e, handleMovePage))

  useEventListener(
    'scroll',
    () => handleScrollTop({ node: ref.current, setScrollBottom }),
    ref
  )

  return (
    <Container ref={ref} isScrollOnBottom={isScrollOnBottom}>
      <MoveToCommonPagesOption
        isSelected={selectedItem === 'common'}
        handleSelectItem={handleSelectItem}
        handleMovePage={handleMovePage}
      />
      {pages.length > 0 ? (
        pages.map(page => (
          <MovePageItem
            key={page._id}
            {...page}
            pageForMoveId={page._id}
            isSelected={selectedItem === page._id}
            handleSelectItem={handleSelectItem}
            handleMovePage={handleMovePage}
          />
        ))
      ) : (
        <DefaultNoResultsExposition />
      )}
    </Container>
  )
}

export default PagesToMoveList
