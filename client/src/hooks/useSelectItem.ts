import { useCallback, useState } from 'react'

export default function useSelectItem<T>(initialValue: T, items?: T[]) {
  const [selectedItem, setSelectedItem] = useState<T>(initialValue)

  const handleSelectItem = useCallback((item: T) => setSelectedItem(item), [])

  const handleKeydownSelect = useCallback(
    (e: KeyboardEvent, func?: () => void) => {
      if (e.code === 'Enter' && func) func()

      if (!items) return

      const itemIndex = items.indexOf(selectedItem)

      if (e.code === 'ArrowDown' || e.code === 'ArrowUp') {
        e.preventDefault()
      }

      if (itemIndex === -1 && e.key === 'ArrowUp') {
        setSelectedItem(items[items.length - 1])
        return
      }

      switch (e.key) {
        case 'ArrowDown':
          itemIndex + 1 !== items.length
            ? setSelectedItem(items[itemIndex + 1])
            : setSelectedItem(items[0])
          break
        case 'ArrowUp':
          itemIndex !== 0
            ? setSelectedItem(items[itemIndex - 1])
            : setSelectedItem(items[items.length - 1])
          break
      }
    },
    [selectedItem, items]
  )

  return {
    setSelectedItem,
    selectedItem,
    handleSelectItem,
    handleKeydownSelect,
  }
}
