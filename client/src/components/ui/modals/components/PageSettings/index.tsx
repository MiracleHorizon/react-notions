import React, { useRef } from 'react'

import SwitchFontPanel from './SwitchFontPanel'
import ToggleOptionsList from './ToggleOptionsList'
import ModalWrapper from 'components/ui/modals'
import ChangesBar from 'components/ui/ChangesBar'
import PageSettingsOptionsList from './OptionsList'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Modal from './PageSettingsModal.styles'

const PageSettingsModal = () => {
  const { page, coords } = useTypedSelector(state => state.modals.pageSettings)
  const { closePageSettingsModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  useCloseModal(ref, closePageSettingsModal)

  if (!page) return null

  return (
    <ModalWrapper>
      <Modal.Container ref={ref} {...coords}>
        {page.template === 'Notion' && (
          <>
            <SwitchFontPanel {...page} />
            <ToggleOptionsList {...page} />
          </>
        )}
        <PageSettingsOptionsList {...page} coords={coords} />
        <ChangesBar author='Удали меня' updatedAt={page.updatedAt} />
      </Modal.Container>
    </ModalWrapper>
  )
}

export default PageSettingsModal
