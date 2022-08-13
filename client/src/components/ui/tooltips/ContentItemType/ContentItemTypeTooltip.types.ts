import { RefObject } from 'react'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'

export default interface ContentTypeTooltipProps {
  type: NotionContentItemTypes
  invokerRef: RefObject<HTMLDivElement>
}
