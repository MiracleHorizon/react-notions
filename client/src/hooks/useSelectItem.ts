import { useCallback, useState } from 'react'

export default function useSelectItem<T>(initialValue: T) {
  const [selectedItem, setSelectedItem] = useState<T>(initialValue)

  const handleSelectItem = useCallback((item: T) => setSelectedItem(item), [])

  return {
    selectedItem,
    handleSelectItem,
  }
}
