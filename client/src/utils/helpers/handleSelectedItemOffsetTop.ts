interface Params {
  e: KeyboardEvent
  node: HTMLDivElement
  parentNode: HTMLDivElement
  parentPadding: number
  marginTop: number
}

const handleSelectedItemOffsetTop = ({
  e,
  node,
  parentNode,
  parentPadding,
  marginTop,
}: Params) => {
  const parentNodeVisibleHeight = parentNode.clientHeight
  const nodeHeight = node.offsetHeight

  if (e.code === 'ArrowDown') {
    if (node.offsetTop + nodeHeight > parentNodeVisibleHeight) {
      node.scrollIntoView(false)
    }

    if (parentNode.scrollTop > node.offsetTop) {
      node.scrollIntoView(true)
    }
  }

  if (e.code === 'ArrowUp') {
    if (parentNode.scrollTop > node.offsetTop) {
      node.scrollIntoView(true)
    }

    if (
      parentNode.scrollHeight - nodeHeight ===
      node.offsetTop + marginTop + parentPadding / 2
    ) {
      node.scrollIntoView(false)
    }
  }
}

export default handleSelectedItemOffsetTop
