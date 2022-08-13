import { createContext, RefObject } from 'react'

interface IWorkspaceScrollContext {
  contentRef: RefObject<HTMLDivElement> | null
}

export const defaultValue: IWorkspaceScrollContext = {
  contentRef: null,
}

const WorkspaceScrollContext = createContext(defaultValue)

export default WorkspaceScrollContext
