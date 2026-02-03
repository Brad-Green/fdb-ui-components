import figma from "@figma/code-connect/react"

import { Button } from "@/components/ui/button"

// Note: Link Button in Figma renders as an anchor styled like a button.
// We use Button with asChild to wrap an anchor element.
figma.connect(
  Button,
  // Note: connect to the Link Button component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=11-2014",
  {
    example: () => (
      <Button variant="primary" asChild>
        <a href="#">Link</a>
      </Button>
    ),
  }
)
