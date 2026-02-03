import figma from "@figma/code-connect/react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

// Note: ToggleGroup is for grouping toggles that manage state (e.g., text formatting).
// Use ButtonGroup for grouping buttons that perform actions.
// ToggleGroup can be "single" (one item at a time) or "multiple" (any combination).
figma.connect(
  ToggleGroup,
  // Note: There's no explicit ToggleGroup component set in Figma, but we connect
  // to the Toggle Button component page for discoverability.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=816-112827",
  {
    example: () => (
      <ToggleGroup type="multiple" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    ),
  }
)
