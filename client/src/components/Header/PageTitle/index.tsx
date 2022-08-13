import React, { FC, memo, useContext, useRef } from 'react'

import ParentPageTitle from './ParentPageTitle'
import { LockedFilledSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import WorkspaceScrollContext from 'context/WorkspaceScroll'
import IPage from 'models/page/IPage'
import * as Title from './PageTitle.styles'

const HeaderPageTitle: FC<IPage> = memo(page => {
  const { parentPageId, status, _id, iconUrl, title, locked } = page
  const { contentRef } = useContext(WorkspaceScrollContext)
  const [updatePage] = useUpdatePageMutation()
  const ref = useRef<HTMLDivElement>(null)
  const { openRenamePageModal } = useActions()

  const handleOpenRenameModal = () => {
    const invokerRect = ref.current?.getBoundingClientRect().toJSON()
    openRenamePageModal({ invokerRect, page })
  }

  const handleUnlockPage = () => updatePage({ _id, body: { locked: false } })

  const handleScrollToTop = () => contentRef?.current?.scrollTo(0, 0)

  const handleTitleClick = () => {
    contentRef?.current?.scrollTop === 0
      ? handleOpenRenameModal()
      : handleScrollToTop()
  }

  return (
    <>
      {parentPageId && status !== null && (
        <ParentPageTitle parentPageId={parentPageId} />
      )}
      <Title.Container ref={ref} onClick={handleTitleClick}>
        {iconUrl && <Title.Icon src={iconUrl} />}
        <Title.Text>{title !== '' ? title : 'Untitled'}</Title.Text>
      </Title.Container>
      {locked && (
        <Title.Container onClick={handleUnlockPage}>
          <LockedFilledSvg />
          <Title.Locked>Locked</Title.Locked>
        </Title.Container>
      )}
    </>
  )
})

export default HeaderPageTitle
