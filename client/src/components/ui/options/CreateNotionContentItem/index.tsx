import React, { FC, memo } from 'react'

import { ContentItemTypeTooltip } from 'components/ui/tooltips'
import useDebounceHovering from 'hooks/useDebounceHovering'
import useCreateNotionContent from 'hooks/useCreateNotionContent'
import handleValidContentType from 'utils/helpers/handleValidContentType'
import PropTypes from './CreateNotionContentItemOption.types'
import * as Option from './CreateNotionContentItemOption.styles'

const CreateNotionContentItemOption: FC<PropTypes> = memo(
  ({ item, parentItemId, title, desc, imageUrl, type }) => {
    const { ref, isHovering } = useDebounceHovering()
    const { handleCreate } = useCreateNotionContent({
      parentItemId,
      item,
      type,
    })

    return (
      <Option.Wrapper ref={ref} disabled={handleValidContentType(type)}>
        <Option.Container onClick={handleCreate}>
          <Option.ImageContainer>
            <Option.Image src={imageUrl} />
          </Option.ImageContainer>
          <Option.TextContainer>
            <Option.Title>{title}</Option.Title>
            <Option.Description>{desc}</Option.Description>
          </Option.TextContainer>
        </Option.Container>
        {isHovering && <ContentItemTypeTooltip type={type} invokerRef={ref} />}
      </Option.Wrapper>
    )
  }
)

export default CreateNotionContentItemOption
