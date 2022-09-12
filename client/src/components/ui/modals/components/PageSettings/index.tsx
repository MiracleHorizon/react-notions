import React, { lazy, Suspense } from 'react'

import SwitchFontPanel from './SwitchFontPanel'
import PageSettingsOptionsList from './OptionsList'
import ChangesBarLoader from 'components/ui/loaders/ChangesBar'
import ModalWrapper from 'components/ui/modals/ModalWrapper'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition, { ModalPosition } from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import * as Modal from './PageSettingsModal.styles'

const ChangesBar = lazy(() => import('components/ui/ChangesBar'))

const PageSettingsModal = () => {
  const { closePageSettingsModal } = useActions()
  const { page, invokerRect } = useTypedSelector(s => s.modals.pageSettings)

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: ModalPosition.CENTER_BOTTOM,
    invokerRect,
  })

  useOnCloseModal(ref, closePageSettingsModal)

  return (
    <ModalWrapper>
      <Modal.Container ref={node => nodeRefHandler(node, rect, setRef)} {...coords}>
        {page.template === 'Notion' && <SwitchFontPanel {...page} />}
        <PageSettingsOptionsList page={page} coords={coords} />
        <Suspense fallback={<ChangesBarLoader />}>
          <ChangesBar createdAt={page.createdAt} updatedAt={page.updatedAt} />
        </Suspense>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default PageSettingsModal
