import React from "react"

const EditButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <div>
      <button
        className="underline text-small-regular text-gray-700 mt-2"
        {...props}
      >
        Редагувати
      </button>
    </div>
  )
}

export default EditButton
