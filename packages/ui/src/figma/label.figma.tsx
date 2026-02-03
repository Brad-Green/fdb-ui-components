import figma from "@figma/code-connect/react"

import { Label } from "@/components/ui/label"

// Note: Label is a basic form label component. It uses peer-disabled:* styles
// to dim when associated control is disabled.
figma.connect(
  Label,
  // Note: connect to the top-level node that contains all variants.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=103-9453",
  {
    props: {},
    example: () => <Label htmlFor="input">Label text</Label>,
  }
)
