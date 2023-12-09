import React from "react"

export function Dialog({ open, children }) {
  return (
    <div
      style={{
        display: open ? "block" : "none",
      }}
    >
      {children}
    </div>
  )
}
