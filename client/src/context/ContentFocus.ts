import { createContext, RefObject } from 'react'

interface IContentFocusContext {
  lastItemId: string
  contentRef: RefObject<HTMLDivElement> | null
}

export const defaultValue: IContentFocusContext = {
  lastItemId: '',
  contentRef: null,
}

const ContentFocusContext = createContext(defaultValue)

export default ContentFocusContext
