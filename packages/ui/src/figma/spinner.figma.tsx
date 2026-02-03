import figma from "@figma/code-connect/react"

import { Spinner } from "@/components/ui/spinner"

// Note: Spinner is used to indicate loading state. It's commonly placed
// inside buttons (with leftIcon prop) or as a standalone loading indicator.
figma.connect(
  Spinner,
  // Note: connect to the Spinner component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=757-154511",
  {
    example: () => <Spinner />,
  }
)
