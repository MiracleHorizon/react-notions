import React, { useRef } from 'react'
import { useDebounce } from 'usehooks-ts'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
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
  const debouncedValue = useDebounce(value, 250)
  const ref = useRef<HTMLDivElement>(null)

  useCloseModal(ref, !isAppSettingsModalOpen ? closeQuickSearchModal : null)

  return (
    <ModalWrapper inset>
      <Modal.Container ref={ref}>
        <QuickSearchForm
          type='text'
          value={value}
          onChange={handleChangeValue}
          onClear={handleClearValue}
        />
        <Modal.Content>
          <QuickSearchPagesList debouncedValue={debouncedValue} />
        </Modal.Content>
        <QuickSearchHotkeysBar />
      </Modal.Container>
    </ModalWrapper>
  )
}

export default QuickSearchModal
