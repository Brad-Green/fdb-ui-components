import figma from "@figma/code-connect/react"

import { Button } from "@/components/ui/button"
import { SquareDashed } from "lucide-react"

figma.connect(
  Button,
  // Note: connect to the top-level node that contains all variants.
  "https://www.figma.com/design/YfHPTyArBQBSpLmaPlZyUk/FDB-Shadcn?node-id=9-1071",
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

      leftIcon: figma.enum("Show left icon", {
        True: <SquareDashed className="size-4" />,
        False: undefined,
        // Some Figma boolean props come through as "true"/"false".
        true: <SquareDashed className="size-4" />,
        false: undefined,
      }),
      rightIcon: figma.enum("Show right icon", {
        True: <SquareDashed className="size-4" />,
        False: undefined,
        true: <SquareDashed className="size-4" />,
        false: undefined,
      }),
    },
    example: ({ variant, size, roundness, disabled, leftIcon, rightIcon }) => (
      <Button
        variant={variant}
        size={size}
        roundness={roundness}
        disabled={disabled}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        Label
      </Button>
    ),
  }
)

