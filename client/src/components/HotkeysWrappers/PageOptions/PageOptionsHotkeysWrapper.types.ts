export default interface PageOptionsHotkeysWrapperProps {
  children: JSX.Element
  handleOpenRenameModal: () => void
  handleOpenMovePageModal: () => void
  handleOpenPageInNewTab: () => void
  handleDeletePage?: () => void
}
