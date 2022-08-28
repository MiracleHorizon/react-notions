import React, { useRef } from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import AllPagesList from './AllPagesList'
import QuickSearchForm from './Search/Form'
import QuickSearchPagesList from './Search/PagesList'
import QuickSearchHotkeysBar from './HotkeysBar'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Modal from './QuickSearchModal.styles'

const QuickSearchModal = () => {
  const { closeQuickSearchModal } = useActions()
  const { isOpen: isAppSettingsModalOpen } = useTypedSelector(s => s.modals.appSettings)
  const { value, handleChangeValue, handleClearValue } = useInput('')
  const contentRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)

  useCloseModal(ref, !isAppSettingsModalOpen ? closeQuickSearchModal : null)

  return (
    <ModalWrapper inset>
      <Modal.Container ref={ref}>
        <QuickSearchForm
          value={value}
          onChange={handleChangeValue}
          onClear={handleClearValue}
        />
        <Modal.Content ref={contentRef}>
          {value === '' ? (
            <AllPagesList />
          ) : (
            <QuickSearchPagesList value={value} />
          )}
        </Modal.Content>
        <QuickSearchHotkeysBar />
      </Modal.Container>
    </ModalWrapper>
  )
}

export default QuickSearchModal
