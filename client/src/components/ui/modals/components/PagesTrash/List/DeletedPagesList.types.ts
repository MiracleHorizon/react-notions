export default interface DeletedPagesListProps {
  paginationParams: {
    debouncedValue: string
    handleScrollOffset: () => void
    node: HTMLDivElement | null
    offsetValue: number
  }
}
