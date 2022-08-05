import { useEffect, useRef } from 'react'

// @ts-ignore
export default function useWhyDidYouUpdate(name, props) {
  const previousProps = useRef()

  useEffect(() => {
    if (previousProps.current) {
      // @ts-ignore
      const allKeys = Object.keys({ ...previousProps.current, ...props })
      const changesObj = {}
      allKeys.forEach(key => {
        // @ts-ignore
        if (previousProps.current[key] !== props[key]) {
          // @ts-ignore
          changesObj[key] = {
            // @ts-ignore
            from: previousProps.current[key],
            to: props[key],
          }
        }
      })

      if (Object.keys(changesObj).length) {
        console.log('[why-did-you-update]', name, changesObj)
      }
    }

    previousProps.current = props
  })
}
