import React, { useRef } from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import RecentLists from './Recent'
import QuickSearchForm from './Search/Form'
import QuickSearchPagesList from './Search/PagesList'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import Container from './QuickSearchModal.styles'

const QuickSearchModal = () => {
  const { value, handleChangeValue, handleClearValue } = useInput('')
  const ref = useRef<HTMLDivElement>(null)
  const { closeQuickSearchModal } = useActions()

  useCloseModal(ref, closeQuickSearchModal)

  return (
    <ModalWrapper inset>
      <Container ref={ref}>
        <QuickSearchForm
          value={value}
          onChange={handleChangeValue}
          onClear={handleClearValue}
        />
        {value === '' ? (
          <RecentLists />
        ) : (
          <QuickSearchPagesList value={value} />
        )}
      </Container>
    </ModalWrapper>
  )
}

export default QuickSearchModal
