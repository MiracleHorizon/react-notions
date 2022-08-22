import React from 'react'

import SwitchFontPanel from './SwitchFontPanel'
import ToggleOptionsList from './ToggleOptionsList'
import ModalWrapper from 'components/ui/modals/ModalWrapper'
import ChangesBar from 'components/ui/ChangesBar - Checked'
import PageSettingsOptionsList from './OptionsList'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import * as Modal from './PageSettingsModal.styles'

const PageSettingsModal = () => {
  const { closePageSettingsModal } = useActions()
  const { page, invokerRect } = useTypedSelector(s => s.modals.pageSettings)
  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'centerBottom',
    invokerRect,
  })

  useOnCloseModal(ref, closePageSettingsModal)

  return (
    <ModalWrapper>
      <Modal.Container ref={node => nodeRefHandler(node, rect, setRef)} {...coords}>
        {page.template === 'Notion' && (
          <>
            <SwitchFontPanel {...page} />
            <ToggleOptionsList {...page} />
          </>
        )}
        <PageSettingsOptionsList {...page} coords={coords} />
        <ChangesBar createdAt={page.createdAt} updatedAt={page.updatedAt} />
      </Modal.Container>
    </ModalWrapper>
  )
}

export default PageSettingsModal
