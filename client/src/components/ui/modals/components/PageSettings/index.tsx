import React, { useMemo, useRef, useState } from 'react'

import SwitchFontPanel from './SwitchFontPanel'
import ToggleOptionsList from './ToggleOptionsList'
import ModalWrapper from 'components/ui/modals'
import ChangesBar from 'components/ui/ChangesBar'
import PageSettingsOptionsList from './OptionsList'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import modalCoordsHandler from 'utils/coordsHandlers/modalCoordsHandler'
import * as Modal from './PageSettingsModal.styles'

const PageSettingsModal = () => {
  const { page, invokerRect } = useTypedSelector(
    state => state.modals.pageSettings
  )
  const { closePageSettingsModal } = useActions()

  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const rect = useRef<DOMRect | null>(null)
  const coords = useMemo(() => {
    return modalCoordsHandler(rect.current, invokerRect).centerBottom
  }, [rect.current, invokerRect])

  useOnCloseModal(ref, closePageSettingsModal)

  if (!page || !coords) return null

  return (
    <ModalWrapper>
      <Modal.Container
        ref={node => {
          if (node !== null) rect.current = node.getBoundingClientRect()
          setRef(node)
        }}
        {...coords}
      >
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
