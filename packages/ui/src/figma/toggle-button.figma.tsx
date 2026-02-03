import figma from "@figma/code-connect/react"

import { Button } from "@/components/ui/button"

// Note: Toggle Button in Figma represents a button that can be pressed/toggled.
// The pressed state is expressed via aria-pressed. For full toggle functionality,
// consider using Radix Toggle primitive. This mapping shows the basic pattern.
figma.connect(
  Button,
  // Note: connect to the Toggle Button component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=816-112827",
  {
    example: () => (
      <Button variant="outline" aria-pressed="false">
        Toggle
      </Button>
    ),
  }
)
