import figma from "@figma/code-connect/react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

figma.connect(
  Alert,
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=58-5416",
  {
    props: {
      variant: figma.enum("Type", { Neutral: "default", Error: "destructive" }),
    },
    example: ({ variant }) => (
      <Alert variant={variant}>
        <div>
          <AlertTitle>Line 1</AlertTitle>
          <AlertDescription>Line 2</AlertDescription>
        </div>
      </Alert>
    ),
  }
)

