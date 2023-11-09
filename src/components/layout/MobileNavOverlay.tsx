import '@/styles/MobileNavOverlay.css'
import React from 'react'

type Props = {
  visible: boolean
  children: React.ReactNode
}

export default function MobileNavOverlay({ visible = false, children }: Props) {
  return (
    <div className={`mobile-menu ${visible ? 'visible' : ''}`}>{children}</div>
  )
}
