import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import QuickSearchInput from 'components/ui/inputs/QuickSearh'
import ClearInputButton from 'components/ui/buttons/ClearInput'
import { QuickSearchLoupeSvg } from 'components/ui/svg'
import { selectUser } from 'store/slices/user/auth.selectors'
import InputPropTypes from 'components/ui/inputs/types'
import * as Form from './QuickSearchForm.styles'

const QuickSearchForm: FC<InputPropTypes> = ({ onClear, ...inputParams }) => (
  <Form.Form>
    <Form.IconContainer>
      <QuickSearchLoupeSvg />
    </Form.IconContainer>
    <QuickSearchInput
      placeholder={`Search ${useSelector(selectUser).fullName}'s Notion... `}
      {...inputParams}
    />
    {onClear && inputParams.value !== '' && (
      <ClearInputButton onClickAction={onClear} />
    )}
  </Form.Form>
)

export default QuickSearchForm
