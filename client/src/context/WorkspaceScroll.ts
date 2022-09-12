import { createContext, RefObject } from 'react'

interface IWorkspaceScrollCtx {
  contentRef: RefObject<HTMLDivElement> | null
}

export const defaultValue: IWorkspaceScrollCtx = {
  contentRef: null,
}

const WorkspaceScrollContext = createContext(defaultValue)

export default WorkspaceScrollContext
