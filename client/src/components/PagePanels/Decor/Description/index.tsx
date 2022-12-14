import React, { FC, useEffect, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import useContentEditable from 'hooks/useContentEditable'
import { useUpdatePageMutation } from 'services/notions.api'
import * as Panel from './PageDescription.styles'

const PageDescription: FC<{
  _id: string
  description: string
}> = ({ _id, description }) => {
  const [updatePage] = useUpdatePageMutation()
  const ref = useRef<HTMLElement>(null)

  const handleUpdateDescription = (descValue: string) => {
    updatePage({ _id, body: { description: descValue } })
  }

  const { value, handleChange, handleEnterKey, handleBlur } =
    useContentEditable({
      initialValue: description,
      func: handleUpdateDescription,
    })

  useEffect(() => {
    description === '' && ref.current?.focus()
  }, [description])

  return (
    <Panel.Wrapper>
      <Panel.Container>
        <ContentEditable
          placeholder='Add a description...'
          html={value}
          onChange={handleChange}
          onKeyDown={handleEnterKey}
          onBlur={handleBlur}
          innerRef={ref}
        />
      </Panel.Container>
    </Panel.Wrapper>
  )
}

export default PageDescription
