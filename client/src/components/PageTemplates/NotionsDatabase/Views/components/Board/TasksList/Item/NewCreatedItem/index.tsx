import React, {
  FC,
  useRef,
  MouseEvent,
  useCallback,
  useEffect,
  memo,
} from 'react'
import { useSelector } from 'react-redux'
import { useEventListener, useHover, useOnClickOutside } from 'usehooks-ts'

import OptionsButton from 'components/ui/buttons/Options'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useCreatePageMutation } from 'services/notions.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import setCoordsByPointer from 'utils/helpers/setCoordsByPointer'
import Page from 'models/page/Page'
import { SetState } from 'types'
import { Wrapper, Container, appearDuration } from '../BoardItem.styles'
import Input from './NewCreatedBoardItem.styles'
import { CSSTransition } from 'react-transition-group'

const NewCreatedBoardItem: FC<{
  listId: string
  taskCreating: boolean
  setTaskCreating: SetState<boolean>
}> = memo(({ listId, taskCreating, setTaskCreating }) => {
  const { openPageOptionsModal } = useActions()
  const { page } = useTypedSelector(s => s.notions)
  const { value, handleChangeValue, handleClearValue } = useInput('')
  const [createPage, { isSuccess, data }] = useCreatePageMutation()
  const user = useSelector(selectUser)
  const inputRef = useRef<HTMLInputElement>(null)

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleCreateTask = useCallback(async () => {
    if (value === '') return

    const body = Page.createTask(page._id, listId, value)
    await createPage({ ...body, author: user._id })
    setTaskCreating(false)
  }, [user._id, page, listId, value, createPage, setTaskCreating])

  const handleOpenOptionsModal = useCallback(
    async (e: MouseEvent) => {
      await handleCreateTask()

      if (!isSuccess || !data) return
      openPageOptionsModal({ coords: setCoordsByPointer(e), page: data })
    },
    [isSuccess, data, handleCreateTask, openPageOptionsModal]
  )

  const handleCancelTaskCreating = (e: KeyboardEvent) => {
    if (e.code === 'Escape') setTaskCreating(false)

    if (e.code === 'Enter') {
      value !== '' ? handleCreateTask() : setTaskCreating(false)
    }
  }

  const handleClickOutside = () => {
    value !== '' ? handleCreateTask() : setTaskCreating(false)
  }

  useEffect(() => {
    taskCreating && inputRef.current?.focus()
  }, [taskCreating])

  useOnClickOutside(ref, handleClickOutside)

  useEventListener('keydown', handleCancelTaskCreating)

  return (
    <CSSTransition
      in={taskCreating}
      timeout={appearDuration}
      classNames='default'
      unmountOnExit
      onExit={handleClearValue}
    >
      <Wrapper ref={ref} data-el='created-board-item'>
        <Container>
          <Input
            ref={inputRef}
            type='text'
            placeholder='Type a name...'
            value={value}
            onChange={handleChangeValue}
          />
        </Container>
        <OptionsButton
          size='medium'
          type='outlined'
          isHovering={isHovering}
          onClickAction={handleOpenOptionsModal}
        />
      </Wrapper>
    </CSSTransition>
  )
})

export default NewCreatedBoardItem
