import React, { FC, useRef, useState } from 'react'
import ContentEditable from 'react-contenteditable'
import Container from './BoardItemTitle.styles'

const BoardItemTitle: FC<{ title: string }> = ({ title }) => {
  const [disabled, setDisabled] = useState<boolean>(true)
  const ref = useRef<HTMLDivElement>(null)
  const titleValue = useRef<string>(title)

  const handleChangeTitle = () => {}

  const handleBlurTitle = () => {}

  const handleClick = () => {
    // setDisabled(false)
    // ref.current?.focus()
  }

  return (
    <Container>
      <ContentEditable
        innerRef={ref}
        disabled={disabled}
        html={titleValue.current}
        onBlur={handleBlurTitle}
        onChange={handleChangeTitle}
        onClick={handleClick}
        placeholder='Untitled'
      />
    </Container>
  )
}

export default BoardItemTitle
