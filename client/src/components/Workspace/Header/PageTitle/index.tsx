import React, { FC, memo, useContext, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import ParentPageTitle from './ParentPageTitle'
import ToggleLockedButton from 'components/ui/buttons/ToggleLocked'
import SavePageLoading from 'components/ui/SavePageLoading - Checked'
import useActions from 'hooks/useActions'
import WorkspaceScrollContext from 'context/WorkspaceScroll'
import { selectPageSaveLoading } from 'store/slices/app/app.selectors'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import IPage from 'models/page/IPage'
import * as Title from './PageTitle.styles'

const HeaderPageTitle: FC<IPage> = memo(page => {
  const { openRenamePageModal } = useActions()
  const { _id, parentPageId, status, title, iconUrl, locked } = page
  const isSavePageLoading = useSelector(selectPageSaveLoading)
  const [reLock, setReLock] = useState<boolean>(false)
  const { contentRef } = useContext(WorkspaceScrollContext)
  const ref = useRef<HTMLDivElement>(null)

  const handleOpenRenamePageModal = () => {
    const invokerRect = ref.current?.getBoundingClientRect().toJSON()
    openRenamePageModal({ invokerRect, page })
  }

  const handleClickOnTitle = () => {
    const isScrollOnTop = contentRef?.current?.scrollTop === 0
    if (!isScrollOnTop) contentRef?.current?.scrollTo(0, 0)
    if (!locked && isScrollOnTop) handleOpenRenamePageModal()
  }

  return (
    <>
      {parentPageId && status !== null && (
        <ParentPageTitle parentPageId={parentPageId} />
      )}
      <Title.Container ref={ref} onClick={handleClickOnTitle}>
        {iconUrl && <Title.Icon src={handleImageUrl(iconUrl)} alt='icon' />}
        <Title.Value>{title === '' ? 'Untitled' : title}</Title.Value>
      </Title.Container>
      {(locked || reLock) && (
        <ToggleLockedButton
          _id={_id}
          locked={locked}
          reLock={reLock}
          setReLock={setReLock}
        />
      )}
      {isSavePageLoading && <SavePageLoading />}
    </>
  )
})

export default HeaderPageTitle
