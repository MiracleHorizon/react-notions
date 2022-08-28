import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDebounce } from 'usehooks-ts'

import OutlineInput from 'components/ui/inputs/Outline'
import useInput from 'hooks/useInput'
import { AppSettingsContext } from 'context/AppSettings'
import { selectUser } from 'store/slices/user/auth.selectors'
import * as Option from './ChangeNameOption.styles'

const ChangeNameOption = () => {
  const { handleChangeName } = useContext(AppSettingsContext)
  const { fullName, email } = useSelector(selectUser)
  const { value, handleChangeValue } = useInput(fullName ? fullName : email)
  const debouncedValue = useDebounce(value, 100)

  const handleBlur = () => {
    if (value !== fullName) {
      handleChangeName(value)
    }
  }

  useEffect(() => {
    handleChangeName(debouncedValue)
  }, [debouncedValue, handleChangeName])

  return (
    <Option.Wrapper>
      <Option.Container>
        <Option.Title>Preferred name</Option.Title>
        <OutlineInput
          inputMode='text'
          value={value}
          onChange={handleChangeValue}
          onBlur={handleBlur}
        />
      </Option.Container>
    </Option.Wrapper>
  )
}

export default ChangeNameOption
