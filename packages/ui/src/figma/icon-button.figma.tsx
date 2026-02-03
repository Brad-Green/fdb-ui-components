import figma from "@figma/code-connect/react"

import { Button } from "@/components/ui/button"
import { SquareDashed } from "lucide-react"

// Note: Icon Button in Figma is a Button with only an icon and no label text.
// We use the same Button component with a fixed-size class for square aspect.
figma.connect(
  Button,
  // Note: connect to the Icon Button component set.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=9-775",
  {
    props: {
      variant: figma.enum("Variant", {
        Primary: "primary",
        Secondary: "secondary",
        Outline: "outline",
        Ghost: "ghost",
        GhostMuted: "ghostMuted",
        "Ghost Muted": "ghostMuted",
        Destructive: "destructive",
      }),
      size: figma.enum("Size", {
        Mini: "mini",
        Small: "small",
        Regular: "regular",
        Large: "large",
      }),
      roundness: figma.enum("Roundness", {
        Default: "default",
        Round: "round",
      }),
      disabled: figma.enum("State", { Disabled: true }),
    },
    example: ({ variant, size, roundness, disabled }) => (
      <Button
        variant={variant}
        size={size}
        roundness={roundness}
        disabled={disabled}
        className="aspect-square p-0"
      >
        <SquareDashed className="size-4" />
        <span className="sr-only">Icon button</span>
      </Button>
    ),
  }
)
