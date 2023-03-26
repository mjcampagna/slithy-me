import React, { useEffect, useRef } from 'react'

import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

type Props = {
  children?: React.ReactNode
  delegate: any
  options: any
}

function Fancybox({ children, delegate, options }) {
  const container = useRef(null)

  useEffect(() => {
    NativeFancybox.bind(
      container.current,
      (delegate || "[data-fancybox]"),
      (options || {})
    )

    return () => {
      NativeFancybox.unbind(container.current)
      NativeFancybox.close()
    }
  })

  return <div ref={container}>
    {children}
  </div>
}

export default Fancybox
