import figma from "@figma/code-connect/react"

import { Toggle } from "@/components/ui/toggle"
import { Bold } from "lucide-react"

// Note: Toggle is a two-state button that can be on or off.
// For grouping toggles, use ToggleGroup. For buttons that perform
// actions (not toggle state), use Button or ButtonGroup instead.
figma.connect(
  Toggle,
  // Note: connect to the Toggle Icon Button component in the Toggle & Toggle Group page.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=164-20378",
  {
    example: () => (
      <Toggle aria-label="Toggle bold">
        <Bold className="size-4" />
      </Toggle>
    ),
  }
)
