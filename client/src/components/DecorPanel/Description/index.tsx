import React, { FC, useEffect, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import useContentEditable from 'hooks/useContentEditable'
import PropTypes from './PageDescription.types'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import * as Panel from './PageDescription.styles'

const PageDescription: FC<PropTypes> = ({ _id, description }) => {
  const ref = useRef<HTMLElement>(null)
  const [updatePage] = useUpdatePageMutation()

  const handleSubmitDescription = (description: string) => {
    updatePage({ _id, body: { description } })
  }

  const { value, handleChange, handleEnterKey, handleBlur } =
    useContentEditable(description, handleSubmitDescription)

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
