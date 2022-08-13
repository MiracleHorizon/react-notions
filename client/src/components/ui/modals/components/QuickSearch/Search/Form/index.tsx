import React, { FC, FormEvent } from 'react'

import QuickSearchInput from 'components/ui/inputs/QuickSearh'
import ClearInputButton from 'components/ui/buttons/ClearInput'
import { QuickSearchLoupeSvg } from 'components/ui/svg'
import useAuth from 'hooks/useAuth'
import InputPropTypes from 'components/ui/inputs/input.types'
import * as Form from './QuickSearchForm.styles'

const QuickSearchForm: FC<InputPropTypes> = ({ onClear, ...inputParams }) => {
  const { user } = useAuth()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // add to recent searches...
  }

  return (
    <Form.Form>
      <Form.IconContainer>
        <QuickSearchLoupeSvg />
      </Form.IconContainer>
      <QuickSearchInput
        placeholder={`Search ${user?.displayName}\`s Notion... `}
        {...inputParams}
      />
      {onClear && inputParams.value !== '' && (
        <ClearInputButton onClickAction={onClear} />
      )}
    </Form.Form>
  )
}

export default QuickSearchForm
