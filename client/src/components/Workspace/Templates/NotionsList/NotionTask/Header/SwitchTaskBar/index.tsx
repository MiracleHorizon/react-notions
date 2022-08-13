import React, { FC, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router'

import OpenFullPageButton from 'components/ui/buttons/OpenFullPage'
import SwitchTaskButton from 'components/ui/buttons/SwitchTask'
import useTypedSelector from 'hooks/useTypedSelector'
import { selectFilteredTasks } from 'store/slices/tasksLists/tasksLists.selectors'
import PropTypes from './SwitchTaskBar.types'
import Container from './SwitchTaskBar.styles'

// Лишние перерисовки.

const SwitchTaskBar: FC<PropTypes> = ({ _id, parentPageId, parentListId }) => {
  const navigate = useNavigate()
  const tasks = useTypedSelector(state =>
    selectFilteredTasks(state, parentListId)
  )
  const taskIndex = tasks.indexOf(tasks.find(page => page._id === _id)!)

  const handleNextPage = useCallback(() => {
    console.log(`workspace/${parentPageId}/task/${tasks[taskIndex + 1]._id}`)
  }, [parentPageId, taskIndex])

  const handlePrevPage = useCallback(() => {
    console.log(`workspace/${parentPageId}/task/${tasks[taskIndex - 1]._id}`)
  }, [parentPageId, taskIndex])

  return (
    <Container>
      <OpenFullPageButton _id={_id} />
      <SwitchTaskButton
        dest='prev'
        isActive={taskIndex > 0}
        onClickAction={handlePrevPage}
      />
      <SwitchTaskButton
        dest='next'
        isActive={taskIndex + 1 < tasks.length}
        onClickAction={handleNextPage}
      />
    </Container>
  )
}

export default SwitchTaskBar

// if (!e || pageIndex + 1 < listPages.length) return
//
// if (e && e.code === 'KeyK' && e.altKey) {
//   e.preventDefault()
//   // navigate(`workspace/PARENT_PAGE/task/${listPages[pageIndex + 1]._id}`)
//   console.log(
//     `workspace/${parentPageId}/task/${listPages[pageIndex + 1]._id}`
//   )
// }

// if (!e || pageIndex > 0) return
//
// if (e && e.code === 'KeyJ' && e.altKey) {
//   e.preventDefault()
//   console.log(
//     `workspace/${parentPageId}/task/${listPages[pageIndex - 1]._id}`
//   )
// }

// useEventListener('keydown', handleNextPage)
// useEventListener('keydown', handlePrevPage)
