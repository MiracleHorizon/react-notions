import React, { FC, useRef } from 'react'

import OptionsButton from 'components/ui/buttons/Options'
import PlusButton from 'components/ui/buttons/Plus'
import useAuth from 'hooks/useAuth'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useCreatePageMutation } from 'store/slices/pages/pages.api'
import Page from 'models/page/Page'
import PropTypes from './TasksListActionButtons.types'
import * as Bar from './TasksListActionButtons.styles'

const TasksListActionButtons: FC<PropTypes> = ({
  _id,
  color,
  hidden,
  isHovering,
}) => {
  const { page } = useTypedSelector(state => state.pages)
  const { openTasksListsOptionsModal } = useActions()
  const [createPage] = useCreatePageMutation()
  const optionsBtnRef = useRef<HTMLDivElement>(null)
  const { user } = useAuth()

  const handleOpenListOptionModal = () => {
    openTasksListsOptionsModal({
      invokerRect: optionsBtnRef.current?.getBoundingClientRect().toJSON(),
      template: 'default',
      listId: _id,
      hidden,
      color,
    })
  }

  const handleCreateNewTask = () => {
    if (!page || !user) return

    createPage({ ...Page.createTask(page._id, _id), author: user.uid })
  }

  return (
    <Bar.Wrapper isHovering={isHovering}>
      <Bar.ButtonContainer ref={optionsBtnRef}>
        <OptionsButton
          size='medium'
          type='primary'
          onClickAction={handleOpenListOptionModal}
        />
      </Bar.ButtonContainer>
      <Bar.ButtonContainer>
        <PlusButton onClickAction={handleCreateNewTask} />
        {/*{isNewPageButtonHovering && (*/}
        {/*  <CreatePageTooltipBoard reference={newPageBtnRef} />*/}
        {/*)}*/}
      </Bar.ButtonContainer>
    </Bar.Wrapper>
  )
}

export default TasksListActionButtons
