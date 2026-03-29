// CustomCursor renders the cursor DOM elements.
// Cursor behavior (mouse tracking, hover scale) is handled by useCustomCursor hook.
import { useCustomCursor } from '../../hooks/useCustomCursor'

export default function CustomCursor() {
  useCustomCursor()

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />
    </>
  )
}
