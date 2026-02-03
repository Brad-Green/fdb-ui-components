import figma from "@figma/code-connect/react"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

// Note: Loading Button in Figma shows a button with a spinner indicating
// an in-progress action. We render the Spinner as a leftIcon with the
// data-icon attribute for proper spacing.
figma.connect(
  Button,
  // Note: connect to the Loading Button component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=11-1126",
  {
    example: () => (
      <Button disabled leftIcon={<Spinner data-icon="inline-start" />}>
        Loading...
      </Button>
    ),
  }
)
