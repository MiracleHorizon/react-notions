import React, { FC, memo, useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { useOnClickOutside } from 'usehooks-ts'
import Loadable from 'react-loadable'

import PageIconLoader from 'components/ui/loaders/IconLoader'
import useContentEditable from 'hooks/useContentEditable'
import PropTypes from './PageTitle.types'
import * as Title from './PageTitle.styles'

const PageIcon = Loadable({
  loader: () => import('../Icon'),
  loading: () => <PageIconLoader />,
})

const PageTitle: FC<PropTypes> = memo(
  ({ _id, template, title, iconUrl, coverUrl }) => {
    const ref = useRef<HTMLDivElement>(null)

    const handleSubmitChanges = (title: string) => {
      // updatePage(_id, { title })
    }

    const handleClickOutside = () => {
      if (ref.current) {
        // handleBlur()
        ref.current.blur()
      }
    }

    // const { value, handleChange, handleEnterKey, handleBlur } =
    //   useContentEditable(title, handleSubmitTitle)

    useOnClickOutside(ref, handleClickOutside)

    return (
      <Title.Wrapper>
        <Title.Container template={template} iconUrl={iconUrl}>
          {template === 'NotionsList' && iconUrl && (
            <PageIcon
              _id={_id}
              template={template}
              iconUrl={iconUrl}
              coverUrl={coverUrl}
            />
          )}
          <Title.Test template={template} iconUrl={iconUrl}>
            {title === '' ? 'Untitled' : title}
          </Title.Test>
          {/*<ContentEditable*/}
          {/* innerRef={ref}*/}
          {/* placeholder='Untitled'*/}
          {/* html={value}*/}
          {/* onChange={handleChange}*/}
          {/* onKeyDown={handleEnterKey}*/}
          {/* onBlur={handleBlur}*/}
          {/*/>*/}
        </Title.Container>
      </Title.Wrapper>
    )
  }
)

export default PageTitle
