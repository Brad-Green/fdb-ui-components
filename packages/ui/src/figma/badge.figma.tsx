import figma from "@figma/code-connect/react"

import { Badge } from "@/components/ui/badge"

figma.connect(
  Badge,
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=19-6979",
  {
    props: {
      variant: figma.enum("Variant", {
        Primary: "default",
        Secondary: "secondary",
        Outline: "outline",
        Ghost: "outline",
        Destructive: "destructive",
      }),
    },
    example: ({ variant }) => <Badge variant={variant}>Label</Badge>,
  }
)

