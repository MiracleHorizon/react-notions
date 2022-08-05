import React, { FC, useRef } from 'react'

import { LockedFilledSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import { modalsCoordsHandler } from 'utils/coordsHandlers/modals'
import { IPage } from 'models/page/IPage'
import * as Title from './PageTitle.styles'

const HeaderPageTitle: FC<IPage> = page => {
  const { _id, iconUrl, title, locked } = page
  const { openRenamePageModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)
  const [updatePage] = useUpdatePageMutation()

  const handleOpenRenameModal = () => {
    if (document.documentElement.scrollTop > 0) {
      window.scrollTo(0, 0)
    } else {
      openRenamePageModal({
        coords: modalsCoordsHandler.renamePage(ref),
        page,
      })
    }
  }

  const handleUnlockPage = () => {
    updatePage({ _id, body: { locked: false } })
  }

  return (
    <>
      <Title.Container ref={ref} onClick={handleOpenRenameModal}>
        {iconUrl && <Title.Icon src={iconUrl} />}
        <Title.Text>{title}</Title.Text>
      </Title.Container>
      {locked && (
        <Title.Container onClick={handleUnlockPage}>
          <LockedFilledSvg />
          <Title.Locked>Locked</Title.Locked>
        </Title.Container>
      )}
    </>
  )
}

export default HeaderPageTitle