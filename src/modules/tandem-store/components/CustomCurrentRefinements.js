import React from "react"
import { useCurrentRefinements } from "react-instantsearch"

export function CustomCurrentRefinements(props) {
  const { items, refine } = useCurrentRefinements(props)

  return (
    <div className="ais-ClearRefinements">
      {items.map((item, itemIndex) => (
        <React.Fragment key={itemIndex}>
          {/* {itemIndex > 0 && ", "}{" "} */}
          {/* Add a comma and space after the first item */}
          {/* <span>{item.label}:</span> */}
          {item.refinements.map((refinement, refinementIndex) => (
            <React.Fragment key={refinement.label}>
              {refinementIndex > 0 && " "}
              {/* Add a comma and space after the first refinement */}
              <span style={{ marginRight: "8px" }}>
                {refinement.label}{" "}
                <button
                  type="button"
                  onClick={(event) => {
                    if (isModifierClick(event)) {
                      return
                    }
                    refine(refinement)
                  }}
                >
                  X
                </button>{" "}
                {/* Add a space after the "X" button */}
              </span>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

function isModifierClick(event) {
  const isMiddleClick = event.button === 1

  return Boolean(
    isMiddleClick ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey
  )
}
