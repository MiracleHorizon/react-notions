import React, { useRef, useState } from 'react'
import { useEventListener } from 'usehooks-ts'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import RecentLists from './Recent'
import QuickSearchForm from './Search/Form'
import QuickSearchPagesList from './Search/PagesList'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import * as Modal from './QuickSearchModal.styles'

const QuickSearchModal = () => {
  const { closeQuickSearchModal } = useActions()
  const {
    appSettings: { isOpen: isAppSettingsModalOpen },
  } = useTypedSelector(s => s.modals)
  const { value, handleChangeValue, handleClearValue } = useInput('')
  const [isOnBottom, setOnBottom] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)

  useCloseModal(ref, !isAppSettingsModalOpen ? closeQuickSearchModal : null)

  useEventListener(
    'scroll',
    () => handleScrollTop({ node: contentRef.current, setOnBottom }),
    contentRef
  )

  return (
    <ModalWrapper inset>
      <Modal.Container ref={ref}>
        <QuickSearchForm
          value={value}
          onChange={handleChangeValue}
          onClear={handleClearValue}
        />
        <Modal.Content ref={contentRef} isOnBottom={isOnBottom}>
          {value === '' ? (
            <RecentLists />
          ) : (
            <QuickSearchPagesList value={value} />
          )}
        </Modal.Content>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default QuickSearchModal
